<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    const x: string = "Hello World!";
    console.log("Svelte component loaded:", x);
  });
</script>

<div><slot /></div>

<style lang="scss">
  div {
    border: 1px solid chartreuse;
    padding: 20px;
    text-align: center;
    color: saddlebrown;
  }
</style>
