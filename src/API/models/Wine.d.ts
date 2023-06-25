export interface WineStage {
  id: number
  wine_id: number
  name: string
  status: string
  location: string
  started_at: string
  changed_at: string
  last: boolean
}
export default interface Wine {
  id: number;  
  title: string;
  stages: WineStage[];
}