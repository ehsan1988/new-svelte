import { writable } from "svelte/store";

const settingsStore = writable({
  color: "dark",
  language: "en",
  fontSize: 12,
});

export default settingsStore;
