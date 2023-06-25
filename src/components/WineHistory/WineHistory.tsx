import { FunctionComponent, useEffect, useState } from 'react'
import { IWineHistoryProps } from './WineHistory.d'
import styles from './WineHistory.module.scss'
import backIcon from '@/assets/icons/back.svg'
import bigWinePic from '@/assets/images/bigwine.png'
import { MdCalendarToday } from 'react-icons/md'
import checkedIcon from '@/assets/icons/check.svg'
import uncheckedIcon from '@/assets/icons/uncheck.svg'
import { getWineByID, getWines } from '@/API/Wines'
import { WineStage } from '@/API/models/Wine'
import { useLocation } from 'wouter'
import cs from 'classnames'
import { convertDate } from '@/helpers'

export const WineHistory: FunctionComponent<
  IWineHistoryProps
> = ({
  wineID
}): JSX.Element => {
  const [stages, setStages] = useState<WineStage[]>([])
  const [location, setLocation] = useLocation()
  useEffect(() => {
    const timer = setInterval(() => {
      getWineByID(wineID).then((res) => {
        setStages(res.data.stages)
      })
    }, 1500);
    return () => clearInterval(timer);
  }, [wineID])

  const onBack = () => {
    setLocation('/')
  }
  if (!stages.length) return (<div>Загрузка...</div>)
  return <div className={styles.root}>
    <div className={styles.col}>
      <div className={styles.top}>
        <img src={backIcon as string} className={styles.back} onClick={onBack}/>
        <span className={styles.header}>История</span>
        <span className={styles.stageTotal}>Стадия: сбор</span>
      </div>
      <div className={styles.overallTitle}>
        <span>«Палитра Шато де Талю» белое</span>
        <div className={styles.dateContainer}>
          <MdCalendarToday size={18}/>
          {convertDate(stages[0].started_at)}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.line}>
          {
            stages.map((stage) => {
              if (stage.started_at) {
                return(
                  <img src={checkedIcon as string} className={styles.checked} key={stage.id}/>
                )
              } else {
                return(
                  <img src={uncheckedIcon as string} className={styles.checked} key={stage.id}/>
                )
              }
            })
          }
        </div>
        <div className={styles.lineStage}>
          {
            stages.map((stage) => {
              if (stage.started_at) {
                return(
                  <div className={styles.stage} key={stage.id}>
                    <span className={cs(styles.main, {
                      [styles.latest]: stage.last
                    })}>{stage.status}</span>
                    <span>{convertDate(stage.started_at, true)}</span>
                  </div>
                )
              } else {
                return(
                  <div className={styles.stage} key={stage.id}>
                    <span className={styles.main}>{stage.status}</span>
                  </div>
                )
              }
            })
          }
        </div>
      </div>
    </div>
    <div className={styles.col}>
      <h1 className={styles.heading}>
        <img className={styles.decoration} src={bigWinePic}/>
        Château de Talu. Rouge 2019
        <span className={styles.percent}>14%</span>
      </h1>
      <p className={styles.desc}>
        Цель создания этого вина - показать элегантность сортов Сира и Каберне Фран, растущих на наших землях.
        <br/><br/>
        Обладает структурным, объемным вкусом с ощутимыми, но <br/>бархатными танинами и продолжительным минеральным послевкусием 
        с оттенками пряностей
      </p>
      <span className={styles.price}>Цена — <b>999</b> рублей</span>
      <div className={styles.consist}>
        <span className={styles.title}>Сортовой состав</span>
        <p>
        (Каберне Совиньон- 40%, Мерло 20%, Каерне Фран- 20%, Сира-20%) выдержка в дубовой бочке до 9 месяцев
        </p>
      </div>
      <div className={styles.liters}>
          0,75 л
      </div>
    </div>
  </div>
}
