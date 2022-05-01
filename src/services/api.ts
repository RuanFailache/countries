import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

interface HttpClientStates<RequestOutput> {
  loading: boolean
  error: unknown | null
  data: RequestOutput | null
}

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const useHttpClient = async function <RequestOutput>(
  request: AxiosRequestConfig,
) {
  try {
    const response: AxiosResponse<RequestOutput> = await instance(request)
    return response.data
  } catch (err) {
    throw (err as AxiosError).response
  }
}

export default useHttpClient
