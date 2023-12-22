import { api } from "./api";


export async function getComments(id) {
  const response = await api(`posts/${id}/comments`)

  return response.data
}