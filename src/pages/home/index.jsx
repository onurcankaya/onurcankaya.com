import React from 'react'
import PageIntro from './page-intro'
import { fetchHomePage } from '../../services/api'

class Home extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      homePage: null,
    }
  }

  async componentDidMount() {
    const homePage = await fetchHomePage()
    this.setState({ homePage })
  }

  render() {
    const { homePage } = this.state

    if (!homePage) return null

    return (
      <div>
        <PageIntro pageIntro={homePage.pageIntro} />
      </div>
    )
  }
}

export default Home
