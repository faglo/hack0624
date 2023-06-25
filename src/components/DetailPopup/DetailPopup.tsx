import { FunctionComponent, useEffect, useState } from 'react'
import { IDetailPopupProps } from './DetailPopup.d'
import styles from './DetailPopup.module.scss'
import { getPredict } from '@/API/Cells'
import { IPredict } from '@/API/models/Cell'

export const DetailPopup: FunctionComponent<
  IDetailPopupProps
> = ({data, onClose}): JSX.Element => {
  const [predicts, setPredeicts] = useState<IPredict | null>(null)
  useEffect(() => {
    getPredict(data.id).then(res => {
      setPredeicts(res.data[0])
    })
  }, [data.id])
  return <div className={styles.root}>
    <img src={data.urls[0]} className={styles.img}/>
    <div className={styles.title}>
      {data.name}
    </div>
    <div className={styles.desc}>
      {data.desc}
    </div>
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.title}>
          Предполагаемый урожай
        </div>
        <div className={styles.value}>
          {Math.floor(predicts?.output)} тонн
        </div>
      </div>
    </div>
    <div onClick={onClose} style={{
      cursor: "pointer"
    }}>Закрыть</div>
  </div>
}
