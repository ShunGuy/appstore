import axios from 'axios'

export async function updateItem(item) {
  let response
  const res = await axios.put(`/api/v1/items/${item.id}`, { ...item })
    .catch((error) => {
      if (error.response) {
        response = error.response.data
      }
    })
  return response || res
}

export async function createItem(item) {
  let response
  const res = await axios.post('/api/v1/items', { ...item })
    .catch((error) => {
      if (error.response) {
        response = error.response.data
      }
    })
  return response || res
}
