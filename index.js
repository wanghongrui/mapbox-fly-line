import * as L7 from '@antv/l7'

export default class MapFly {
  constructor(map, data = []) {
    this.data = data

    this.scene = new L7.Scene({
      id: 'mapbox',
      logoVisible: false,
      map: new L7.Mapbox({
        mapInstance: map
      })
    })

    this.lineLayer = null

    const geojson = this.fixGeoJSON()

    this.render(geojson)
  }

  setData(data) {
    this.data = data

    const geojson = this.fixGeoJSON()

    this.render(geojson)
  }

  fixGeoJSON() {
    const features = []

    this.data.forEach(d => {
      const json = JSON.parse(d.geom)

      features.push({
        type: 'feature',
        geometry: json
      })
    })

    return {
      type: 'FeatureCollection',
      features
    }
  }

  render(geojson) {
    if (!this.lineLayer) {
      this.lineLayer = new L7.LineLayer({ name: 'effect-line' })
        .source(geojson)
        .shape('arc3d')
        .size(0.5)
        .active(false)
        .animate({
          interval: 0.5,
          trailLength: 1,
          duration: 2
        })
        .style({
          opacity: 0.7,
          sourceColor: '#01FE89',
          targetColor: '#FFE600'
        });

      this.scene.addLayer(this.lineLayer);
      return
    }

    this.lineLayer.setData(geojson)
  }

  destory() {
    if (this.lineLayer) {
      this.scene.removeLayer(this.lineLayer)
      this.scene.removeAllLayer();

      this.lineLayer = null
    }
  }
}