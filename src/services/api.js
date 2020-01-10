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
    // console.log(response.results)
    return mapResults(response.results)
  } else {
    return null
  }
}

export const fetchNavigationLabels = async () => fetchTypes('navigation')
export const fetchHomePage = async () => fetchTypes('home_page')
export const fetchProjectsSection = async () => fetchTypes('projects_section')
export const fetchAboutPage = async () => fetchTypes('about_page')
export const fetchExperienceSection = async () => fetchTypes('experience_section')
export const fetchSkillsSection = async () => fetchTypes('skills_section')
export const fetchFooter = async () => fetchTypes('footer')
