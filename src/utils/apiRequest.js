import axios from 'axios'
import { stringify } from 'qs'

const apiRequest = (
  method,
  url,
  data = null,
  qsOptions = {},
  additionalOptions = {}
) => {
  if (!qsOptions) qsOptions = {}
  if (!additionalOptions) additionalOptions = {}
  const token = localStorage.getItem('token')
  const options = {
    method,
    url,
    ...additionalOptions,
    headers: {
      Authorization: token,
      ...additionalOptions.headers,
    },
  }
  switch (method) {
    case 'get':
      if (data) options.params = data
      break
    case 'post':
      if (data)
        options.data = stringify(data, {
          indices: false,
          allowDots: true,
          ...qsOptions,
        })
      options.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...options.headers,
      }
      break
    default:
      break
  }
  return axios(options)
    .then(response => {
      switch (response.status) {
        case 200:
          // Continue following steps.
          break
        case 401:
        case 500:
        default:
          // Terminate execution.
          throw Error(response.status)
      }
      // Run only when status is 200.
      switch (response.data.code) {
        case 'OK':
          return response.data
        case 'Unauthorized':
        case 'ServiceError':
          const e = Error(response.data.message)
          e.name = 'ServiceError'
          throw e
        default:
          throw Error(`${response.data.code} ${response.data.message}`)
      }
    })
    .catch(error => {
      console.error(error)
      throw error
    })
}

export default apiRequest
