import { FunctionComponent, useEffect, useState } from 'react'
import { IWineHistoryConfirmProps } from './WineHistoryConfirm.d'
import styles from './WineHistoryConfirm.module.scss'
import { WineStage } from '@/API/models/Wine'
import { getWineByID, newWineStage } from '@/API/Wines'
import cs from 'classnames'

export const WineHistoryConfirm: FunctionComponent<
  IWineHistoryConfirmProps
> = ({
  wineID
}): JSX.Element => {
  const [stages, setStages] = useState<WineStage[]>([])
  const [clicked, setClicked] = useState<boolean>(false)
  const [screen, setScreen] = useState<number>(0)

  useEffect(() => {
    getWineByID(wineID).then(res => {
      setStages(res.data.stages)
    })
  }, [wineID])

  const confirm = () => {
    setClicked(true)
    newWineStage(wineID).then(() => {
      setScreen(1)
    })
  }

  const getStage = () => {
    const idx = stages.findIndex(stage => stage.last)
    if (idx === -1) return "Неизвестный этап"
    if (idx === stages.length - 1) return "Вино уже прошло все этапы"
    return stages[idx + 1].status
  }
  if (stages.findIndex(stage => stage.last) === stages.length - 1) return <div className={styles.root}>
    {getStage()}
  </div>

  if (screen === 0) return <div className={styles.root}>
    <div className={styles.title}>
      Подтверждение
    </div>
    <div className={styles.desc}>
      Подтвердите, что вино прошло этап <br />
      <span>
      {
        getStage()
      }
      </span>
    </div>
    <button className={styles.button} onClick={confirm}>
      {
        clicked ? "Подождите..." : "Подтвердить"
      }
    </button>
  </div>

  if (screen === 1) return <div className={styles.root}>
    <h1>
      Успешно!
    </h1>
    <div className={styles.successCheckmark}>
      <div className={styles.checkIcon}>
        <span className={cs(styles.iconLine, styles.lineTip)}></span>
        <span className={cs(styles.iconLine, styles.lineLong)}></span>
        <div className={styles.iconCircle}></div>
        <div className={styles.iconFix}></div>
      </div>
    </div>
    <div className={styles.desc}>
      Вино прошло этап <br />
      <span>
      {
        getStage()
      }
      </span>
    </div>
  </div>
}
