import api from './instance'

export const getCells = async () => {
  return await api.get(`/cells/all`)
}

export const getPredict = async (cellID: number) => {
  return await api.get(`/cells/predict/${cellID}`)
}