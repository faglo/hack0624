import { FunctionComponent } from 'react'
import { ISettingsProps } from './Settings.d'
import styles from './Settings.module.scss'

export const Settings: FunctionComponent<
  ISettingsProps
> = (): JSX.Element => {
  return <div className={styles.root}>Settings Component</div>
}
