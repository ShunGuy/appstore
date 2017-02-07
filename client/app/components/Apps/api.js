import axios from 'axios'

export async function updateApp(app) {
  let response
  const res = await axios.put(`/api/v1/apps/${app.id}`, { ...app })
    .catch((error) => {
      if (error.response) {
        response = error.response.data
      }
    })
  return response || res
}

export async function createApp(app) {
  let response
  const res = await axios.post('/api/v1/apps', { ...app })
    .catch((error) => {
      if (error.response) {
        response = error.response.data
      }
    })
  return response || res
}
