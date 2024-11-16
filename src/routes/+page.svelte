<script>
  import DoughnutChart from '$lib/components/DoughnutChart.svelte';
  import MapView from '$lib/components/MapView.svelte';
  import Table from '$lib/components/Table.svelte';
  import { Card } from 'flowbite-svelte';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import TileLayer from 'ol/layer/Tile.js';
  import OSM from 'ol/source/OSM.js';

  let { data } = $props();
</script>

<div class="px-24 grid grid-cols-12 gap-10">
  <div class="grid col-span-9">
    <Table data={data.landsPadData} />
  </div>
  <div class="grid col-span-3 gap-3">
    <MapView data={data.landsPadData} />
    <DoughnutChart chartData={data.landsPadData} />
  </div>
</div>
