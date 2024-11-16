<script>
  import { Card } from 'flowbite-svelte';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import TileLayer from 'ol/layer/Tile.js';
  import OSM from 'ol/source/OSM.js';
  import { onMount } from 'svelte';

  let map;

  onMount(() => {
    map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
    });
  });
</script>

<Card>
  <div id="map" style="height: 400px; width: 100%;"></div>
</Card>
