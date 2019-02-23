import { DogState, DogActions, Dog } from "./types";


const defaultDogState: DogState = {
    history: [],
    count: 0
  };
  

  
export default function DogTinder(state = defaultDogState, action: any): DogState {
    switch (action.type) {
      case DogActions.ADD_DOG:
        return {
          ...state,
          history: [...state.history, action.payload.dog],
        };
      default:
        return {
          ...state,
        };
    }
  }
  