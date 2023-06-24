import { FunctionComponent } from 'react'
import { IKanbanColumnProps } from './KanbanColumn.d'
import styles from './KanbanColumn.module.scss'

export const KanbanColumn: FunctionComponent<
  IKanbanColumnProps
> = (): JSX.Element => {
  return <div className={styles.root}>KanbanColumn Component</div>
}
