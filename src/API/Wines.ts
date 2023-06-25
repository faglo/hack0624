import api from './instance'

export const getWines = async () => {
  return await api.get('/wines/all')
}

export const newWineStage = async (wineID: number) => {
  return await api.put(`/wines/change_stage/${wineID}`)
}

export const getWineByID = async (wineID: number) => {
  return await api.get(`/wines/${wineID}`)
}