import React from 'react'
import NavigationHeader from '../../components/navigation-header'
import { fetchNavigationHeader } from '../../services/api'

class Home extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      navigationLabels: null,
    }
  }

  async componentDidMount() {
    const navigationLabels = await fetchNavigationHeader()
    this.setState({ navigationLabels })
  }

  render() {
    const { navigationLabels } = this.state

    return (
      <div>
        <NavigationHeader data={navigationLabels} />
      </div>
    )
  }
}

export default Home
