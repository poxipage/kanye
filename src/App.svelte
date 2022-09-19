<script lang="ts">
  import { onMount } from "svelte";

  let quote = ""
  onMount( async () =>  {
    await fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => quote = data.quote)
    console.log(quote)
  })
  
</script>

<div class="h-full w-full text-base-content justify-center items-center">
  <p>"{quote}"</p>
  <p style="font-weight: bold;">- Kanye West</p>
</div>

