import React from 'react'
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'
import { fetchNavigationLabels, fetchFooter } from './services/api'
import NavigationHeader from './components/navigation-header'
import Footer from './components/footer'
import Loader from './components/loader'
import Home from './pages/home'
import About from './pages/about'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      navigationLabels: null,
      footer: null,
    }
  }

  async componentDidMount() {
    const navigationLabels = await fetchNavigationLabels()
    const footer = await fetchFooter()
    this.setState({ isLoading: false, navigationLabels, footer })
  }

  render() {
    const { isLoading, navigationLabels, footer } = this.state

    if (isLoading) {
      return <Loader />
    }

    return (
      <div>
        <BrowserRouter>
          <NavigationHeader content={navigationLabels} />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
          <Footer content={footer} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
