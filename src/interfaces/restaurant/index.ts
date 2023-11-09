import { MenuInterface } from 'interfaces/menu';
import { OrderInterface } from 'interfaces/order';
import { ReservationInterface } from 'interfaces/reservation';
import { TableInterface } from 'interfaces/table';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  address?: string;
  opening_hours?: string;
  closing_hours?: string;
  average_price?: number;
  name: string;
  created_at?: any;
  updated_at?: any;
  menu?: MenuInterface[];
  order?: OrderInterface[];
  reservation?: ReservationInterface[];
  table?: TableInterface[];
  user?: UserInterface[];

  _count?: {
    menu?: number;
    order?: number;
    reservation?: number;
    table?: number;
    user?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  opening_hours?: string;
  closing_hours?: string;
  name?: string;
}
