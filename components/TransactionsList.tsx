'use client';

import { Transaction } from '@/types';

// NOTA: Este componente YA ESTÁ IMPLEMENTADO
// El candidato NO debe modificar este archivo
// La lógica está completa y funcionando correctamente
interface TransactionsListProps {
  transactions: Transaction[];
}

export default function TransactionsList({ transactions }: TransactionsListProps) {
  // Este componente recibe las transacciones como props y las renderiza
  // con el formato y estilos apropiados
  
  return (
    <div>
      {transactions.length === 0 ? (
        <p className="text-gray-500 italic">No hay transacciones</p>
      ) : (
        <div className="space-y-3">
          {transactions.map((transaction, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className={`text-lg font-bold ${
                  transaction.type === 'earn' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'earn' ? '+' : '-'}{Math.abs(transaction.points)}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  transaction.type === 'earn' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {transaction.type === 'earn' ? 'Ganados' : 'Canjeados'}
                </span>
              </div>
              {/* TODO: Mostrar fecha de la transacción */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}