import { RichText } from 'prismic-reactjs'

export const mapResults = (results) => {
  switch (results[0].type) {
    case 'navigation':
      return mapNavigationHeader(results[0].data)
    case 'home_page':
      return mapHomePage(results[0].data)
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

const mapFooter = (content) => ({
  copyrightText: content ? RichText.asText(content.copyright_text) : '',
  social:
    content &&
    content.social.map((item) => ({
      logo: item ? item.logo.url : '',
      link: item ? RichText.asText(item.link) : '',
    })),
})
