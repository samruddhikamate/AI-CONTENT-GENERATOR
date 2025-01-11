// /pages/api/history/route.js
import { NextResponse } from 'next/server';

import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';

export async function GET() {
    console.log("get");
    
  try {

    const data = await db.select().from(AIOutput);

    console.log(data);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching history data:', error);
    return NextResponse.json({ error: 'Failed to fetch history data' }, { status: 500 });
  }
}
