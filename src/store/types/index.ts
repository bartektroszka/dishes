import * as moment from "moment";

export interface PostDishResponse {
  diameter?: number;
  name: string;
  no_of_slices?: number;
  spiciness?: number;
  preparation_time: string;
  type: string;
  id: number;
}

export interface PostDishRequest {
  dishName: string;
  dishType: string;
  preparationTime: moment.Moment;
  numOfSlices?: number;
  spiciness?: number;
  diameter?: number;
}

export interface DishState {
  postDishError: boolean;
  postDishSuccess: boolean;
}
