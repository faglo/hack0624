import api from './instance'

export const getCells = async () => {
  return await api.get(`/cells/all`)
}