import { FunctionComponent, useEffect, useState } from 'react'
import { ICategoriesProps } from './Categories.d'
import styles from './Categories.module.scss'
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import IKanban, { ICard } from '@/API/models/Kanban'
import { getKanbans, updateCardPos } from '@/API/Kanban'
import labIcon from '@/assets/icons/lab.svg'
import personIcon from '@/assets/icons/person.svg'
import arrowIcon from '@/assets/icons/arrow.svg'
import decorPic from '@/assets/images/bg.png'
import moment from 'moment'
import 'moment/locale/ru' 
import { MdCalendarToday } from 'react-icons/md'
import cs from 'classnames'


const Column = (props: {
  name: string,
  count: number,
  id: number,
  children: JSX.Element[]
}) => {
  const { isOver, setNodeRef } = useDroppable({id: props.id})

  return (
    <div key={props.id} className={styles.rootContainer}>
      <div className={styles.category}>
        <span className={styles.name}>{props.name}</span>
        <span className={styles.count}>{props.count}</span>
      </div>
        <div className={cs(
          {
            [styles.activeCategory]: isOver
          },
          styles.cards
        )} ref={setNodeRef}>
          {props.children}
        </div>
    </div>
  )
}

const Card = (props: {
  title: string
  user: string
  description: string
  createdAt: string
  id: number
}) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: props.id })
  const style = {
    transform: CSS.Translate.toString(transform),
  }

  return(
    <div className={styles.card} style={style} ref={setNodeRef} {...listeners} {...attributes}>
      <div className={styles.top}>
        <img src={labIcon as string} alt='lab' className={styles.icon}/>
        <div className={styles.cardTitle}>{props.title}</div>
        <div className={styles.dateContainer}>
          <MdCalendarToday size={18}/>
          {moment(props.createdAt).format("DD MMM YYYY")}
        </div>
      </div>
      <div className={styles.description}>
        {props.description}
      </div>
      <div className={styles.top}>
        <img src={personIcon as string} alt='lab' className={styles.icon}/>
        {props.user}
        <img src={arrowIcon as string} alt='lab' className={styles.arrow}/>
      </div>
    </div>
  )
}

export const Categories: FunctionComponent
 = (): JSX.Element => {
  const [columns, setColumns] = useState<IKanban[]>([])
  useEffect(() => {
    getKanbans().then(res => {
      setColumns(res.data)
    })
  }, [])
  const onDragEnd = (result) => {
    // over - column
    // active - card
    const { active, over } = result
    if (!over) {
      console.log('no over')
      return
    }
    const newColumns = [...columns]
    const card = newColumns.find((column) => column.cards.find((card) => card.id === active.id)).cards.find((card) => card.id === active.id)

    newColumns.forEach((column, idx) => {
      column.cards.includes(card) && (column.count = column.count -= 1)
      newColumns[idx].cards = column.cards.filter((card) => card.id !== active.id)
      if (column.id === over.id) {
        column.count = column.count += 1
        column.cards.push(card)
      }
    })
    setColumns(newColumns)
    updateCardPos(active.id, over.id)
  }

  if (!columns) return (<div>loading...</div>)

  return <div className={styles.root}>
    <DndContext onDragEnd={onDragEnd}>
    {
      columns.map((column) => (
        <Column
          name={column.title}
          count={column.count}
          id={column.id}
          key={column.id}
        >
          {
            column.cards.map((card: ICard) => (
              <Card
                title={card.title}
                user={card.author}
                createdAt={card.createdAt}
                description={card.subtitle}
                id={card.id}
                key={card.id}
              />
            ))
          }
        </Column>
      ))
    }
    </DndContext>
    <img className={styles.decoration} src={decorPic} />
  </div>
}
