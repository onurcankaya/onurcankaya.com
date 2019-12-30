import * as Prismic from 'prismic-javascript'
import { mapResults } from './mappers'

const BASE_URL = 'https://onurcankaya.cdn.prismic.io/api/v2'

const connectCMS = async () => {
  const api = await Prismic.api(BASE_URL, {})
  return api
}

const fetchTypes = async (type) => {
  const api = await connectCMS()
  const response = await api.query(Prismic.Predicates.at('document.type', type), {})
  if (response) {
    return mapResults(response.results)
  } else {
    return null
  }
}

export const fetchNavigationLabels = async () => fetchTypes('navigation')
export const fetchHomePage = async () => fetchTypes('home_page')
