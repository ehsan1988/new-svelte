<script>
  import settingsStore from "../stores/settings-store.js";
  /* import { onDestroy } from "svelte";

   let colorSchema = "";
   const unsubscribe = settingsStore.subscribe(items => {
     console.log(items);
     colorSchema = items.color;
   });
   $:{
     settingsStore.update(items => ({ ...items, color: colorSchema }));
   }
   onDestroy(unsubscribe);*/
</script>

<p>{$settingsStore.color}</p>
<h2>Settings</h2>

<label>
  dark
  <input type="radio" value="dark" bind:group={$settingsStore.color} name="color">
</label>
<label>
  light
  <input type="radio" value="light" bind:group={$settingsStore.color} name="color">
</label>