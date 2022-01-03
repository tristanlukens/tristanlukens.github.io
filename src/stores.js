import { writable } from "svelte/store";

// state to check if menu is open
export let menuOpen = writable(false);
