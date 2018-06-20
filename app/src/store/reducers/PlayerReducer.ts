import { Resource } from "../../models/Resource";

export interface Action {
  type: string;
  resource?: Resource;
  amount?: number;
}

interface ResourceItem {
  name: string;
  amount: number;
}

export interface PlayerReducerState {
  resources: ResourceItem[];
}

const initialState: PlayerReducerState = {
  resources: []
};

export function PlayerReducer(
  state: PlayerReducerState = initialState,
  action: Action
) {
  switch (action.type) {
    case "ADD_RESOURCE":
      const stateResource = state.resources.find(
        resource => resource.name === action.resource.name
      );
      if (!stateResource) {
        state.resources.push({
          name: action.resource.name,
          amount: action.amount
        });
      } else {
        stateResource.amount += action.amount;
      }
      return state;
    default:
      return state;
  }
}
