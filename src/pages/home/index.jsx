import React from 'react'
import NavigationHeader from '../../components/navigation-header'
import PageIntro from './page-intro'
import { fetchNavigationHeader, fetchHomePage } from '../../services/api'

class Home extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      navigationLabels: null,
      homePage: null,
    }
  }

  async componentDidMount() {
    const navigationLabels = await fetchNavigationHeader()
    const homePage = await fetchHomePage()
    this.setState({ navigationLabels, homePage })
  }

  render() {
    const { navigationLabels, homePage } = this.state

    if (!homePage) return null

    return (
      <div>
        <NavigationHeader content={navigationLabels} />
        <PageIntro pageIntro={homePage.pageIntro} />
      </div>
    )
  }
}

export default Home
