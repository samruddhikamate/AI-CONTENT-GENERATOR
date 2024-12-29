// /api/create-subscription

import Razorpay from 'razorpay';
export async function POST(req, res) {
    let instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET_KEY,
    })

  const result = await instance.orders.create({
    plan_id:process.env.SUBSCRIPTION_PLAN_ID,
    customer_notify:1,
    quantity:1,
    total_count:1,
    addons:[],
    notes:{
        key1:'Note1'
    }
  });

  return NextReaponse.json(result);

}