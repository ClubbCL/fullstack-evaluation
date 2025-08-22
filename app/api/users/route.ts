import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function GET() {
  try {
    const db = await getDb();
    const users = await db.all('SELECT id, name, email FROM users ORDER BY name');
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Error fetching users' },
      { status: 500 }
    );
  }
}