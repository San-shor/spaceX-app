<script>
  import { Card } from 'flowbite-svelte';
  import Map from 'ol/Map.js';
  import View from 'ol/View.js';
  import TileLayer from 'ol/layer/Tile.js';
  import VectorLayer from 'ol/layer/Vector';
  import OSM from 'ol/source/OSM.js';
  import { fromLonLat } from 'ol/proj';
  import XYZ from 'ol/source/XYZ';
  import { onMount } from 'svelte';
  import { createLandingPadFeatures } from '../../utils/mapUtils';
  import ActiveIcon from '$lib/assets/active.svg';

  let { data } = $props();

  let map;

  onMount(() => {
    const vectorSource = createLandingPadFeatures(data);

    map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: vectorSource,
        }),
      ],
      view: new View({
        center: fromLonLat([-80.6077, 28.5623]),
        zoom: 10,
      }),
    });
  });
</script>

<Card class="w-[521px] h-[355px]">
  <div id="map" style="height: 301px; width: 100%;"></div>
</Card>
