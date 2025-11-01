import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: { certificateId: string } }
) {
    const certificateId = await  params.certificateId;

    try {
        const response = await fetch(
            `https://uw-certify.vercel.app/verify/${certificateId}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        const data = await response.json();
        
        return NextResponse.json(data, { status: response.ok ? 200 : 400 });
    } catch (error) {
        console.error('Error fetching certificate:', error);
        return NextResponse.json(
            { status: 'Invalid', message: 'Failed to verify certificate. Please try again later.' },
            { status: 500 }
        );
    }
}