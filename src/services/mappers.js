import { RichText } from 'prismic-reactjs'

export const mapResults = (results) => {
  switch (results[0].type) {
    case 'navigation':
      return mapNavigationHeader(results[0].data)
    case 'home_page':
      return mapHomePage(results[0].data)
    case 'about_page':
      return mapAboutPage(results[0].data)
    case 'experience_section':
      return mapExperienceSection(results[0].data)
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
      description: item ? RichText.asText(item.description) : '',
    })),
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
