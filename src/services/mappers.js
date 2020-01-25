import { RichText } from 'prismic-reactjs'

export const mapResults = (results) => {
  switch (results[0].type) {
    case 'navigation':
      return mapNavigationHeader(results[0].data)
    case 'home_page':
      return mapHomePage(results[0].data)
    case 'projects_section':
      return mapProjectsSection(results[0].data)
    case 'about_page':
      return mapAboutPage(results[0].data)
    case 'experience_section':
      return mapExperienceSection(results[0].data)
    case 'skills_section':
      return mapSkillsSection(results[0].data)
    case 'now_page':
      return mapNowPage(results[0].data)
    case 'impossible_list_page':
      return mapImpossibleList(results[0].data)
    case 'footer':
      return mapFooter(results[0].data)
    default:
      return results[0].data
  }
}

const mapNavigationHeader = (content) => ({
  navigationLabels:
    content &&
    content.navigation_items.map((item) => ({
      route: item ? RichText.asText(item.route) : '',
      label: item ? RichText.asText(item.label) : '',
    })),
})

const mapHomePage = (content) => ({
  pageIntro: content ? RichText.asText(content.page_intro) : '',
})

const mapProjectsSection = (content) => ({
  title: content ? RichText.asText(content.title) : '',
  projects:
    content &&
    content.projects.map((project) => ({
      thumbnailUrl: project ? project.thumbnail.url : '',
      alt: project ? project.thumbnail.alt : '',
      name: project ? RichText.asText(project.name) : '',
      description: project ? RichText.asText(project.description) : '',
      technologies: project ? RichText.asText(project.technologies) : '',
      siteUrl: project ? RichText.asText(project.site_url) : '',
      githubUrl: project ? RichText.asText(project.github_url) : '',
    })),
})

const mapAboutPage = (content) => ({
  profilePicture: content ? content.profile_picture.url : '',
  alt: content ? content.profile_picture.alt : '',
  aboutText: content ? RichText.asText(content.about_text) : '',
})

const mapExperienceSection = (content) => ({
  title: content ? RichText.asText(content.title) : '',
  experience:
    content &&
    content.experience.map((item) => ({
      companyName: item ? RichText.asText(item.company_name) : '',
      role: item ? RichText.asText(item.role) : '',
      time: item ? RichText.asText(item.time) : '',
      location: item ? RichText.asText(item.location) : '',
      description: item ? RichText.render(item.description) : '',
    })),
})

const mapSkillsSection = (content) => ({
  title: content ? RichText.asText(content.title) : '',
  skills:
    content &&
    content.skills.map((skill) => ({
      description: skill ? RichText.render(skill.description) : '',
    })),
})

const mapNowPage = (content) => ({
  title: content ? RichText.asText(content.title) : '',
  description: content ? RichText.render(content.description) : '',
})

const mapImpossibleList = (content) => ({
  title: content ? RichText.asText(content.title) : '',
  description: content ? RichText.render(content.description) : '',
})

const mapFooter = (content) => ({
  copyrightText: content ? RichText.asText(content.copyright_text) : '',
  social:
    content &&
    content.social.map((item) => ({
      logo: item ? item.logo.url : '',
      link: item ? RichText.asText(item.link) : '',
    })),
})
