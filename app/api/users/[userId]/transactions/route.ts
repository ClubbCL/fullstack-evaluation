import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

// EJERCICIO 2: Implementar endpoint para obtener transacciones
// El candidato debe completar la query SQL
export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;

  try {
    const db = await getDb();
    
    // TODO: Escribir query SQL para obtener las últimas transacciones del usuario
    //
    // Requerimientos:
    // - Usar la tabla 'points_transactions'
    // - Filtrar por user_id
    // - Seleccionar: points, type, created_at
    // - Ordenar por fecha descendente (más recientes primero)
    // - Limitar a 5 registros
    
    const query = `
      -- ESCRIBIR QUERY AQUÍ
    `;
    
    const results = await db.all(query, [userId]);
    
    return NextResponse.json(results || []);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return NextResponse.json(
      { error: 'Error fetching transactions' },
      { status: 500 }
    );
  }
}