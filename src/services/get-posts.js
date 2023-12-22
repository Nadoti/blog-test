import { api } from "./api";



export async function getPosts(id = null, currentPage = null) {
  let endpoint = "/posts";
  if (id) {
    endpoint += `?id=${id}`;
  }
  if (currentPage) {
    endpoint += `?_page=${currentPage}&_limit=10`;
  }

  const response = await api.get(endpoint);
    
  const totalCountHeader = response.headers.get('x-total-count')
  const totalCount = totalCountHeader ? parseInt(totalCountHeader, 10) : 0
  
  return {
    response,
    totalCount
  }
}

export async function getAllPostsBySearch() {
  const response = await api.get("/posts");
  return response
}