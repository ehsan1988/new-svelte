<script>
  import settingStore from "./stores/settings-store.js";
  import Home from "./components/Home.svelte";
  import Settings from "./components/Settings.svelte";

  let route = "/";

  function routeChange() {
    route = location.hash.slice(1);
  }
</script>
<svelte:window on:hashchange={routeChange} />

<main>
  <nav>
    <a href="#/">Home</a>
    <a href="#/settings">Settings</a>
  </nav>

  {#if route === '/'}
    <Home />
  {:else if route === '/settings'}
    <Settings />
  {/if}
</main>

{#if $settingStore.color === 'dark'}

  <style lang="scss">
    main {
      background: #171b29;
      height: 100vh;
    }
  </style>
{:else if settingStore.color === 'light'}
  <style lang="scss">
    main {
      background: #fff3cc;
      height: 100vh;
    }
  </style>
{/if}