import axios from 'axios'

export default function deleteApp(id, objectID) {
  axios.delete(`/api/v1/apps/${id}?objectID=${objectID}`)
}
