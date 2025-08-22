import { User, Transaction, PointsResponse } from '@/types';

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch('/api/users');
  if (!res.ok) throw new Error('Error fetching users');
  return res.json();
};

export const getPoints = async (userId: number): Promise<PointsResponse> => {
  const res = await fetch(`/api/users/${userId}/points`);
  if (!res.ok) throw new Error('Error fetching points');
  return res.json();
};

export const getTransactions = async (userId: number): Promise<Transaction[]> => {
  const res = await fetch(`/api/users/${userId}/transactions`);
  if (!res.ok) throw new Error('Error fetching transactions');
  return res.json();
};