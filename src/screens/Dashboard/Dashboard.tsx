import { FunctionComponent } from 'react'
import { IDashboardProps } from './Dashboard.d'
import styles from './Dashboard.module.scss'
import cardImage from '@/assets/images/image-12.png'
import cardImage2 from '@/assets/images/image-13.png'
import wine1 from '@/assets/images/wine1.png'
import wine2 from '@/assets/images/wine2.png'
import wine3 from '@/assets/images/wine3.png'
import decwine from '@/assets/images/decwines.png'
import decbarrels from '@/assets/images/decbarrels.png'
import deckrasivo from '@/assets/images/deckrasivo.png'
import { useLocation } from 'wouter'

export const Dashboard: FunctionComponent<
  IDashboardProps
> = (): JSX.Element => {
  const [location, setLocation] = useLocation()
  const onWineClick = (wid: number) => {
    setLocation(`/wine/${wid}`)
  }
  return <div className={styles.root}>
    <div className={styles.leftCol}>
      <div className={styles.smallCard}>
        <span className={styles.header}>Лаборатория <span className={styles.botif}>3</span></span>
        <img
          className={styles.decoration}
          src={decwine}
        />
      </div>
      <div className={styles.smallCard}>
        <span className={styles.header}>Склад</span>
        <img
          className={styles.decoration}
          src={decbarrels}
        />
      </div>
      <div className={styles.mediumCard}>
        <img src={cardImage} alt="card" className={styles.innerImage} />
      </div>
      <div className={styles.mediumCard}>

        <img src={deckrasivo} alt="card" className={styles.innerImage} />
      </div>
    </div>
    <div className={styles.rightCol}>
      <div className={styles.bigCard}>
        <div className={styles.header}>
          Вино
        </div>
        <div className={styles.wines}>
          <img src={wine2} alt="wine" className={styles.wine} onClick={() => onWineClick(2)} />  
          <img src={wine2} alt="wine" className={styles.wine} onClick={() => onWineClick(3)} />
          <img src={wine2} alt="wine" className={styles.wine} onClick={() => onWineClick(4)} />
        </div>
      </div>
      <div className={styles.mediumCard}>
        <img src={cardImage2} alt="card" className={styles.innerImage} />
      </div>
    </div>
  </div>
}
