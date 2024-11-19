import VectorSource from 'ol/source/Vector.js';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import { fromLonLat } from 'ol/proj';

import { Style, Icon, Circle, Fill, Stroke } from 'ol/style.js';
import Polygon from 'ol/geom/Polygon.js';

export function createLandingPadFeatures(pads) {
  const vectorSource = new VectorSource();

  pads.forEach((pad) => {
    const coordinates = fromLonLat([
      pad.location.longitude,
      pad.location.latitude,
    ]);

    const feature = new Feature({
      geometry: new Point(coordinates),

      name: pad.full_name,
      // status: pad.status,
    });
    const activeStyle = new Style({
      image: new Circle({
        radius: 6,
        fill: new Fill({ color: 'green' }),
        stroke: new Stroke({ color: 'black', width: 1 }),
      }),
    });

    const inactiveStyle = new Style({
      image: new Circle({
        radius: 6,
        fill: new Fill({ color: 'gray' }),
        stroke: new Stroke({ color: 'black', width: 1 }),
      }),
    });

    feature.setStyle(pad.status === 'active' ? activeStyle : inactiveStyle);

    vectorSource.addFeatures(feature);
  });

  return vectorSource;
}
