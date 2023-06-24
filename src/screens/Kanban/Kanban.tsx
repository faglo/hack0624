import { FunctionComponent, useState } from 'react'
import { IKanbanProps } from './Kanban.d'
import styles from './Kanban.module.scss'
import { Categories } from '@/components/Categories'

export const Kanban: FunctionComponent<
  IKanbanProps
> = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState(1)
  return <div className={styles.root}>
    <Categories/>
  </div>
}
