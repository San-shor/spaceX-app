<script>
import "../app.css"
import Header from '$lib/components/Header.svelte';
import Table from '$lib/components/Table.svelte';
import { getLandingPadData } from './api/+server';
import { onMount } from 'svelte';

let landingPads = [];
let error = null;

  onMount(async () => {
    try {
      landingPads = await getLandingPadData();
    } catch (err) {
      error = err.message;
      console.error('Error fetching landing pads:', error);
    }
  });
</script>
<Header/>
<main class="p-4">
 
 
    <Table data={landingPads} />

</main>
<slot></slot>
