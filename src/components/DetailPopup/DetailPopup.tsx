import { FunctionComponent } from 'react'
import { IDetailPopupProps } from './DetailPopup.d'
import styles from './DetailPopup.module.scss'

export const DetailPopup: FunctionComponent<
  IDetailPopupProps
> = ({data}): JSX.Element => {
  return <div className={styles.root}>
    <img src={data.urls[0]} className={styles.img}/>
    <div className={styles.title}>
      {data.name}
    </div>
    <div className={styles.desc}>
      {data.desc}
    </div>
  </div>
}
