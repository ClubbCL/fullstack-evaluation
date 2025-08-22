'use client';

import { useState, useEffect } from 'react';
import PointsDisplay from '@/components/PointsDisplay';
import { getUsers } from '@/lib/api';
import { User } from '@/types';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const userData = await getUsers();
        setUsers(userData);
        if (userData.length > 0) {
          setSelectedUserId(userData[0].id);
        }
      } catch (error) {
        console.error('Error loading users:', error);
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Sistema de Puntos</h1>
          <p className="text-gray-600">Cargando usuarios...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Sistema de Puntos - Evaluación Técnica
        </h1>
        <p className="text-gray-600 mb-8">
          Completa los ejercicios en los archivos marcados con TODO
        </p>
        
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Seleccionar Usuario:
          </label>
          <select 
            value={selectedUserId || ''} 
            onChange={(e) => setSelectedUserId(Number(e.target.value))}
            className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.name} ({user.email})
              </option>
            ))}
          </select>
        </div>

        {selectedUserId && (
          <PointsDisplay userId={selectedUserId} />
        )}
      </div>
    </div>
  );
}