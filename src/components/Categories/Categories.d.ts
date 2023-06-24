export interface ICategory {
  id: number
  name: string
  count: number
  cards: ITask[],
}

export interface ITask {
  id: number
  name: string
  description: string
  created_at: string
}



export interface ICategoriesProps {
  categories: ICategory[],
}
