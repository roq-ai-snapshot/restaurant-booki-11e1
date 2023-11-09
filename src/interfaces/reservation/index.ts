import { UserInterface } from 'interfaces/user';
import { TableInterface } from 'interfaces/table';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  user_id: string;
  table_id: string;
  restaurant_id: string;
  reservation_time: any;
  number_of_people: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  table?: TableInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  table_id?: string;
  restaurant_id?: string;
}
