import { MapContainer, Marker, Polygon, Polyline, Popup, TileLayer, Tooltip } from 'react-leaflet'
import styles from './Map.module.scss'
import dangerMearker from '@/assets/locations/error.svg'
import warningMearker from '@/assets/locations/warning.svg'
import L from 'leaflet'
import { useEffect, useState } from 'react'
import { getPoints } from '@/API'
import IPoint from '@/API/models/Point'
import { DetailPopup } from '@/components/DetailPopup'
import { Rectangle } from 'react-leaflet/Rectangle'
import ICell from '@/API/models/Cell'
import { getCells } from '@/API/Cells'

const dangerIcon = L.icon({
  iconUrl: dangerMearker as string,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
})

const warningIcon = L.icon({
  iconUrl: warningMearker as string,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
})

export const Map = () => {
  const [points, setPoints] = useState<IPoint[]>([])
  const [cells, setCells] = useState<ICell[]>([])
  const [currentData, setCurrentData] = useState<ICell | null>(null)
  useEffect(() => {
    getPoints().then(res => {
      setPoints(res.data)
    })
    getCells().then(res => {
      setCells(res.data)
    })
  }, [])

  if (!points) {
    return null
  }

  return (
    <div className={styles.root}>
      <MapContainer 
        center={[44.539378, 38.085020]} 
        zoom={14} 
        className={styles.map}
      >
        {
          (currentData) &&
          <DetailPopup data={currentData} />
        }
          
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          />
          {
            cells.map((cell, index) => (
              <Polygon
                key={index}
                positions={[cell.point1, cell.point2, cell.point3, cell.point4, cell.point1]}
                pathOptions={{ color: '#DA9077', fillColor: '#DA9077', className: styles.polygon }}
                eventHandlers={{
                  click: () => setCurrentData(cell),
                }}
              />
            ))
          }
          {
            points.map((point, index) => (
              <Marker
                key={index}
                position={[point.lat, point.lon]}
                icon={point.severity === 'danger' ? dangerIcon : warningIcon}
                onClick={() => console.log('click')}
              >
                <Popup>
                  <div>
                    <b>{point.name}</b>
                    <br />
                    <span>{point.desc}</span>
                  </div>
                </Popup>
              </Marker>
            ))
          }
      </MapContainer>
    </div>
  )
}