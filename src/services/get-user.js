import { api } from "./api";



export async function getUser(id) {
  const response = await api.get(`/users?id=${id}`)

  return response.data[0]
}