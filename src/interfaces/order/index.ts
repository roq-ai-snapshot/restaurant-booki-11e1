import { UserInterface } from 'interfaces/user';
import { MenuInterface } from 'interfaces/menu';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  user_id: string;
  menu_id: string;
  restaurant_id: string;
  order_time: any;
  quantity: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  menu?: MenuInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  menu_id?: string;
  restaurant_id?: string;
}
