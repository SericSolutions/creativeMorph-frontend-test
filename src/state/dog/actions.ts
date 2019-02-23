import { Dog, DogActions } from "./types";
import { Dispatch } from 'redux';


export const AddDog = (dog: Dog) => {
    return (dispatch: Dispatch) => {
      const payload = {
        type: DogActions.ADD_DOG,
        dog
      };
      dispatch(payload);
    };
}
