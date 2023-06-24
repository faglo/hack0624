import { FunctionComponent } from 'react'
import { IDashboardProps } from './Dashboard.d'
import styles from './Dashboard.module.scss'
import cardImage from '@/assets/images/image-12.png'
import cardImage2 from '@/assets/images/image-13.png'
import wine1 from '@/assets/images/wine1.png'
import wine2 from '@/assets/images/wine2.png'
import wine3 from '@/assets/images/wine3.png'

export const Dashboard: FunctionComponent<
  IDashboardProps
> = (): JSX.Element => {
  return <div className={styles.root}>
    <div className={styles.leftCol}>
      <div className={styles.smallCard} />
      <div className={styles.smallCard}/>
      <div className={styles.mediumCard}>
        <img src={cardImage} alt="card" className={styles.innerImage} />
      </div>
      <div className={styles.mediumCard} />
    </div>
    <div className={styles.rightCol}>
      <div className={styles.bigCard}>
        <div className={styles.header}>
          Вино
        </div>
        <div className={styles.wines}>
          <img src={wine1} alt="wine" className={styles.wine} />
          <img src={wine2} alt="wine" className={styles.wine} />
          <img src={wine3} alt="wine" className={styles.wine} />
        </div>
      </div>
      <div className={styles.mediumCard}>
        <img src={cardImage2} alt="card" className={styles.innerImage} />
      </div>
    </div>
  </div>
}
