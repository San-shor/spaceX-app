<script>
  import DoughnutChart from '$lib/components/DoughnutChart.svelte';
  import MapView from '$lib/components/MapView.svelte';
  import Table from '$lib/components/Table.svelte';
  import { Button, Card } from 'flowbite-svelte';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import TileLayer from 'ol/layer/Tile.js';
  import OSM from 'ol/source/OSM.js';
  import GridIcon from '$lib/assets/grid.svg';
  import ListIcon from '$lib/assets/list.svg';
  import Filter from '$lib/components/Filter.svelte';
  import GridView from '$lib/components/GridView.svelte';

  let { data } = $props();
  let filterValue = $state('');
  let viewMode = $state('list');
</script>

<div class="px-24 grid grid-cols-12 gap-10">
  <div class="grid col-span-9">
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
  <div class="grid col-span-3 gap-3">
    <MapView data={data.landsPadData} />
    <DoughnutChart chartData={data.landsPadData} bind:filterValue />
  </div>
</div>
