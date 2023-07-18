console.log('GET /api/public');

import { NextResponse } from 'next/server'

export async function GET() {
    const data = {
        id: 2,
        name: "Test",
        type: ".json",
        content: '{some: "data"}',
        createdAt: "hehehe",
        updatedAt: "gahahaha"

    }

    return NextResponse.json({ data })
}