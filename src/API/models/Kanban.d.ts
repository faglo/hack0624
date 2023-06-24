interface ICard {
  id: number
  createdAt: string
  active: boolean
  title: string
  subtitle: string
  type: string
  description: string
  column_id: number
  author: string
}
export default interface IKanban {
  id: number
  count: number
  title: string
  cards: ICard[]
}