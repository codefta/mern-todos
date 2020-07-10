import axios from 'axios'
const baseUrl = 'http://localhost:3001'

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/api/v1/todos`)
  return response.data
}

const create = async (obj) => {
  const req = await axios.post(`${baseUrl}/api/v1/todos`, obj)

  return req.data
}

const update = async (obj, id) => {
  const req = await axios.put(`${baseUrl}/api/v1/todos/${id}`, obj)

  return req.data
}

const remove = async (id) => {
  const req = await axios.delete(`${baseUrl}/api/v1/todos/${id}`)

  return req.data
}

export default { getAll, create, update, remove }
