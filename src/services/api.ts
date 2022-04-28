import axios, { AxiosRequestConfig } from 'axios'
import { useState } from 'react'

interface HttpClientStates<RequestOutput> {
  loading: boolean
  error: unknown | null
  data: RequestOutput | null
}

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const useHttpClient = function <RequestOutput>(request: AxiosRequestConfig) {
  const [states, setStates] = useState<HttpClientStates<RequestOutput>>({
    data: null,
    error: null,
    loading: false,
  })

  const runRequest = async function () {
    setStates((prevStates) => {
      return { ...prevStates, loading: true }
    })

    try {
      const response = await instance(request)
      setStates((prevStates) => {
        return { ...prevStates, error: null, data: response.data }
      })
    } catch (err) {
      setStates((prevStates) => {
        return { ...prevStates, error: err, data: null }
      })
    }

    setStates((prevStates) => {
      return { ...prevStates, loading: false }
    })
  }

  return { runRequest, states }
}

export default useHttpClient
