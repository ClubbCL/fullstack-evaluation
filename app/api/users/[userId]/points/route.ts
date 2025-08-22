import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

// EJERCICIO 1: Implementar endpoint para obtener puntos totales
// El candidato debe completar la query SQL
export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;

  try {
    const db = await getDb();
    
    // TODO: Escribir query SQL para calcular puntos totales del usuario
    // 
    // Requerimientos:
    // - Usar la tabla 'points_transactions'
    // - Sumar todos los puntos del usuario (WHERE user_id = ?)
    // - Usar COALESCE para manejar usuarios sin transacciones
    // - El resultado debe tener el alias 'total_points'
    
    const query = `
      -- ESCRIBIR QUERY AQUÍ
    `;
    
    const result = await db.get(query, [userId]);
    
    return NextResponse.json(result || { total_points: 0 });
  } catch (error) {
    console.error('Error fetching points:', error);
    return NextResponse.json(
      { error: 'Error fetching points' },
      { status: 500 }
    );
  }
}