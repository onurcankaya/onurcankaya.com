import { RichText } from 'prismic-reactjs'

export const mapResults = (results) => {
  switch (results[0].type) {
    case 'navigation':
      return mapNavigationHeader(results[0].data)
    default:
      return results[0].data
  }
}

const mapNavigationHeader = (content) => ({
  navigationLabels:
    content &&
    content.navigation_items.map((item) => ({
      label: item ? RichText.asText(item.label) : '',
    })),
})
