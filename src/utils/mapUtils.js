import VectorSource from 'ol/source/Vector.js';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import { fromLonLat } from 'ol/proj';
import ActiveIcon from '../../static/active.png';
import { Style, Icon } from 'ol/style';
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
      status: pad.status,
    });

    vectorSource.addFeatures(feature);
  });

  return vectorSource;
}
