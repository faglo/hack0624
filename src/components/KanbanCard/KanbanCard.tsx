import { FunctionComponent } from 'react'
import { IKanbanCardProps } from './KanbanCard.d'
import styles from './KanbanCard.module.scss'

export const KanbanCard: FunctionComponent<
  IKanbanCardProps
> = (): JSX.Element => {
  return <div className={styles.root}>KanbanCard Component</div>
}
