"use client"
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { ArrowLeft} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { chatSession } from '@/utils/AiModel'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { AIOutput } from '@/utils/schema'
import { db } from '@/utils/db'
import { totalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'

interface PROPS{
    params:{
        'template-slug':string
    }

}
function CreateNewContent(props:PROPS) {
    console.log(props.params['template-slug'])
    const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);
    const [loading,setLoading]=useState(false);
    const [aiOutput,setAiOutput]=useState<string>('');
    const {user}=useUser();
    const router=useRouter();
    const{totalUsage,setTotalUsage}=useContext(totalUsageContext)
    // const{userSubscription,setUserSubscription}=useContext(userSubscriptionContext)
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext) 
    const {updateCreditUsage,setUpdateCreditUsage} = useContext(UpdateCreditUsageContext)
  
    /**
     * Used to generate AI content from AI
     * @param FormData 
     * @returns 
     */

    const GenerateAIContent=async(FormData:any)=>{
      if(totalUsage>=10000&&!userSubscription)
      {
        console.log("Please Upgrade");
        router.push('/dashboard/billing')
        return;
      }
      setLoading(true);
      const SelectedPrompt=selectedTemplate?.aiPrompt;
      const FinalAIPrompt=JSON.stringify(FormData)+", "+SelectedPrompt;
      const result=await chatSession.sendMessage(FinalAIPrompt);

      setAiOutput(result?.response.text());
      await SaveInDb(FormData,selectedTemplate?.slug,result?.response.text())
      setLoading(false);

      setUpdateCreditUsage(Date.now())
    }

    const SaveInDb=async(formData:any,slug:any,aiResp:string)=>{
    if (!formData || !slug || !aiResp || !user?.primaryEmailAddress?.emailAddress) {
      console.error("One or more values are undefined");
      return;
    }

    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format('DD/MM/yyyy'),
    });
      console.log(result);
    }



  return (
    <div className="p-10">
      <Link href={"/dashboard"}>
        <Button> <ArrowLeft /> Back</Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* FormSection */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
        loading={loading}/>

        {/* OutputSection */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  ); 
}

export default CreateNewContent