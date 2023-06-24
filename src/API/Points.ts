import api from './instance'

export const getPoints = async () => {
  return await api.get('/points/all')
}