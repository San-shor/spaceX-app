<script>
  import 'ol/ol.css';
  import Map from 'ol/Map';
  import View from 'ol/View';
  import TileLayer from 'ol/layer/Tile';
  import OSM from 'ol/source/OSM';
  import VectorLayer from 'ol/layer/Vector';
  import VectorSource from 'ol/source/Vector';
  import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
  import { fromLonLat } from 'ol/proj';
  import Feature from 'ol/Feature';
  import Point from 'ol/geom/Point';
  import { Card } from 'flowbite-svelte';
  import { boundingExtent } from 'ol/extent';

  let { data } = $props();

  let vectorSource;

  $effect(() => {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      controls: [],
      view: new View({
        center: fromLonLat([-80.544444, 28.485833]),
        zoom: 15,
      }),
    });
    vectorSource = new VectorSource();

    data.forEach((pad) => {
      const color =
        pad.status === 'active'
          ? '#91F652'
          : pad.status === 'retired'
            ? '#9B1C1C'
            : '#1E429F';

      const marker = new Feature({
        geometry: new Point(
          fromLonLat([pad.location.longitude, pad.location.latitude])
        ),
        name: pad.full_name,
      });
      console.log('location', pad.location);
      const markerStyle = new Style({
        image: new CircleStyle({
          radius: 7,
          fill: new Fill({ color: color }),
        }),
      });
      marker.setStyle(markerStyle);

      vectorSource.addFeature(marker);
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    map.addLayer(vectorLayer);
    const extent = boundingExtent(
      vectorSource
        .getFeatures()
        .map((feature) => feature.getGeometry().getCoordinates())
    );
    map.getView().fit(extent, { padding: [20, 20, 20, 20], maxZoom: 15 });
  });
</script>

<Card class="sm:p-0 overflow-hidden">
  <h3 class="px-4 py-[15px] text-base font-semibold text-gray-900">Map View</h3>
  <div id="map" style="height:301px; width: 100%;"></div>
</Card>
