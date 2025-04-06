

// import { NextResponse } from 'next/server';
// import Razorpay from 'razorpay';

// export async function POST(req) {
//     console.log("Razorpay Key ID:", process.env.RAZORPAY_KEY_ID);
//     console.log("Razorpay Secret Key:", process.env.RAZORPAY_SECRET_KEY);
//     console.log("Subscription Plan ID:", process.env.SUBSCRIPTION_PLAN_ID);

//     let instance = new Razorpay({
//         key_id: process.env.RAZORPAY_KEY_ID,
//         key_secret: process.env.RAZORPAY_SECRET_KEY,
//     });

//     try {
//         const result = instance.subscriptions.create({
//             plan_id: process.env.SUBSCRIPTION_PLAN_ID,
//             customer_notify: 1,
//             quantity: 1,
//             total_count: 1,
//             addons: [],
//             notes: {
//                 key1: 'Note'
//             }
//         });

//         return NextResponse.json(result);
//     } catch (error) {
//         console.error("Error creating subscription:", error);
//         return NextResponse.json({ error: error.message }, { status: 400 });
//     }
// }


import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req) {
    try {
        const body = await req.json();
        const planId = body.plan_id || process.env.SUBSCRIPTION_PLAN_ID;

        if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_SECRET_KEY) {
            console.error("Razorpay credentials are missing!");
            return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
        }

        if (!planId) {
            return NextResponse.json({ error: "Plan ID is required" }, { status: 400 });
        }

        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET_KEY,
        });

        const result = await instance.subscriptions.create({
            plan_id: planId,
            customer_notify: 1,
            quantity: 1,
            total_count: 12, // Set to more than 1 for recurring payments
            addons: [],
            notes: {
                key1: 'Subscription created'
            }
        });

        return NextResponse.json(result);
    } catch (error) {
        console.error("Razorpay Subscription Error:", error.response ? error.response.data : error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
