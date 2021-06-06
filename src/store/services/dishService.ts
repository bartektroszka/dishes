import { Api } from "../../api";
import { PostDishResponse } from "../types";
import { PostDishRequest } from "../types";

const convertPostDish = (request: PostDishRequest) => {
  switch (request.dishType) {
    case "pizza":
      return {
        diameter: request.diameter,
        name: request.dishName,
        no_of_slices: request.numOfSlices,
        preparation_time: request.preparationTime.format("hh:mm:ss"),
        type: request.dishType,
      };
    case "soup":
      return {
        name: request.dishName,
        preparation_time: request.preparationTime.format("hh:mm:ss"),
        type: request.dishType,
        spiciness_scale: request.spiciness,
      };
    case "sandwich":
      return {
        name: request.dishName,
        slices_of_bread: request.numOfSlices,
        preparation_time: request.preparationTime.format("hh:mm:ss"),
        type: request.dishType,
      };
  }
};

export const postDish = (request: PostDishRequest) => {
  return Api.post<PostDishResponse>("", convertPostDish(request));
};
