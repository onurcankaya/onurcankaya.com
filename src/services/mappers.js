import RichText from 'prismic-react.js'

export const mapResults = results => {
  switch (results[0].type) {
    case 'navigation_header':
      return mapNavigationHeader(results[0].data)
    default:
      return results[0].data
  }
}

const mapNavigationHeader = content => ({
  navigationLabels: content && content.navigation_items.map(() => ({
    label: item ? RichText(item.label) : ''
  }))
})