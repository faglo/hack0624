import api from './instance'

export const getKanbans = async () => {
  return await api.get('/kanban/')
}

export const updateCardPos = async (cardId: number, columnId: number) => {
  return await api.put(`/kanban/columns/${columnId}/cards/${cardId}/`)
}