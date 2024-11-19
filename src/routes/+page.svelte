<script>
  import GridIcon from '$lib/assets/grid.svg';
  import ListIcon from '$lib/assets/list.svg';
  import DoughnutChart from '$lib/components/DoughnutChart.svelte';
  import Filter from '$lib/components/Filter.svelte';
  import GridView from '$lib/components/GridView.svelte';
  import MapView from '$lib/components/MapView.svelte';
  import Table from '$lib/components/Table.svelte';
  import { Button } from 'flowbite-svelte';

  let { data } = $props();
  let filterValue = $state('');
  let viewMode = $state('list');
</script>

<div class="col-span-8">
  <div class="flex flex-col gap-4">
    <div class="flex justify-between">
      <div class="flex">
        <Button
          color="alternative"
          class="p-[10px] rounded-r-none focus:border-transparent focus:ring-0 focus:bg-gray-200"
          onclick={() => (viewMode = 'list')}
          autofocus
        >
          <img src={ListIcon} alt="" width="16px" height="16px" />
        </Button>
        <Button
          color="alternative"
          class="p-[10px] rounded-l-none focus:border-transparent focus:ring-0 focus:bg-gray-200"
          onclick={() => (viewMode = 'grid')}
        >
          <img src={GridIcon} alt="" width="16px" height="16px" />
        </Button>
      </div>
      <Filter bind:filterValue />
    </div>
    {#if viewMode === 'list'}
      <Table data={data.landsPadData} bind:filterValue />
    {:else}
      <GridView data={data.landsPadData} bind:filterValue />
    {/if}
  </div>
</div>
<div class="grid col-span-4 gap-8">
  <MapView data={data.landsPadData} bind:filterValue />
  <DoughnutChart chartData={data.landsPadData} bind:filterValue />
</div>
