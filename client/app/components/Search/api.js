import axios from 'axios'

export default function deleteItem(id, objectID) {
  axios.delete(`/api/v1/items/${id}?objectID=${objectID}`)
}
