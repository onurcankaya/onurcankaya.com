import React from 'react'
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'
import { fetchNavigationLabels, fetchFooter } from './services/api'
import NavigationHeader from './components/navigation-header'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      navigationLabels: null,
      footer: null,
    }
  }

  async componentDidMount() {
    const navigationLabels = await fetchNavigationLabels()
    const footer = await fetchFooter()
    this.setState({ navigationLabels, footer })
  }

  render() {
    const { navigationLabels, footer } = this.state

    return (
      <div className="container">
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
