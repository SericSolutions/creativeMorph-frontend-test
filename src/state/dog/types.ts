
export interface Dog {
    photoLink: string;
    status: boolean; // true like false dislike
  }
  
  export interface DogState {
    history: Dog[],
    count: number
  }
  
  export enum DogActions {
  ADD_DOG = 'ADD_DOG',
}