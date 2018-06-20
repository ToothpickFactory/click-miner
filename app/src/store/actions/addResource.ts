import { Action } from "../reducers/PlayerReducer";
import { Resource } from "../../models/Resource";

const ADD_RESOURCE = "ADD_RESOURCE";

function addResource(resource: Resource, amount: number): Action {
  return {
    type: ADD_RESOURCE,
    resource,
    amount
  };
}

export { addResource };
