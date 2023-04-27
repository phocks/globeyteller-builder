<script lang="ts">
  import { onMount } from "svelte";
  import { color } from "@src/stores/color";

  let backgroundColor = "lightblue";

  onMount(() => {
    const x: string = "Hello World!";
    console.log("Svelte component loaded:", x);
    setTimeout(() => {
      backgroundColor = "lightcoral";
    }, 1000);
  });
</script>

<div style="--border-color: {$color}; --background-color: {backgroundColor}">
  <slot />
</div>

<style lang="scss">
  div {
    border: 1px solid var(--border-color);
    padding: 20px;
    text-align: center;
    color: rgb(10, 5, 163);
    background-color: var(--background-color);
  }
</style>
