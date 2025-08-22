'use client';

import { useState, useEffect } from 'react';
import { getPoints, getTransactions } from '@/lib/api';
import { Transaction } from '@/types';
import TransactionsList from './TransactionsList';

// EJERCICIO 2: Completar este componente
// El candidato debe implementar la lógica para cargar datos de la API
interface PointsDisplayProps {
  userId: number;
}

export default function PointsDisplay({ userId }: PointsDisplayProps) {
  const [totalPoints, setTotalPoints] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // TODO: Implementar useEffect para cargar datos cuando cambie el userId
  // Instrucciones:
  // 1. Crear un useEffect que se ejecute cuando cambie userId
  // 2. Manejar estados de loading y error apropiadamente  
  // 3. Cargar puntos totales usando getPoints(userId)
  // 4. Cargar transacciones usando getTransactions(userId)
  // 5. Actualizar los estados: setTotalPoints y setTransactions
  // 6. Manejar errores con setError
  // Hint: Puedes usar Promise.all para cargar ambos datos en paralelo
  
  // Código temporal para que no de error
  useEffect(() => {
    setLoading(false);
  }, [userId]);
  
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Cargando datos del usuario...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Total de Puntos:
        <span className="text-blue-600 ml-2">{totalPoints}</span>
      </h2>
      
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Últimas Transacciones:
        </h3>
        
        <TransactionsList transactions={transactions} />
      </div>
    </div>
  );
}