import { state, type State } from "poxi";
// Defines the variables you wait available in the store.
type Schema = { count: number };

// The state function returns a svelte store that allows you to edit the state
export const getState = () => state<Schema>();

//Initialize the counter variable with value 0
export function onCreate(state: State<Schema>) {
  state.set({ count: 0 });
}
