import { NextResponse } from 'next/server';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';

export async function GET() {
    console.log("Fetching all history records...");

    try {
        // Fetch all records in descending order of createdAt
        // const data = await db.select().from(AIOutput).orderBy(AIOutput.createdAt, 'desc');
        const data = await db.select().from(AIOutput);

        console.log("Fetched history data:", data);
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching history data:', error);
        return NextResponse.json({ error: 'Failed to fetch history data' }, { status: 500 });
    }
}
