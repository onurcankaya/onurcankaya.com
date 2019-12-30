import React from 'react'
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'
import { fetchNavigationLabels } from './services/api'
import NavigationHeader from './components/navigation-header'
import Home from './pages/home'
import About from './pages/about'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      navigationLabels: null,
    }
  }

  async componentDidMount() {
    const navigationLabels = await fetchNavigationLabels()
    this.setState({ navigationLabels })
  }

  render() {
    const { navigationLabels } = this.state

    return (
      <div className="container">
        <BrowserRouter>
          <NavigationHeader content={navigationLabels} />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
