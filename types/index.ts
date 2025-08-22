export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Transaction {
  id?: number;
  user_id?: number;
  restaurant_id?: number;
  points: number;
  type: 'earn' | 'redeem';
  created_at: string;
}

export interface PointsResponse {
  total_points: number;
}