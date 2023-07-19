console.log('GET /api/file');

import { NextResponse } from 'next/server'

export async function POST() {
    const data = {
        id: 2,
        name: "Test",
        type: ".json",
        content: '{some: "data"}',
        createdAt: "hehehe",
        updatedAt: "Admin"

    }

    return NextResponse.json({ data })
}