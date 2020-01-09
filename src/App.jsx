import React from 'react'
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'
import {
  fetchNavigationLabels,
  fetchHomePage,
  fetchAboutPage,
  fetchExperienceSection,
  fetchSkillsSection,
  fetchFooter,
} from './services/api'
import NavigationHeader from './components/navigation-header'
import Footer from './components/footer'
import Loader from './components/loader'
import Home from './pages/home'
import About from './pages/about'
import './index.css'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      navigationLabels: null,
      homePage: null,
      aboutPage: null,
      experience: null,
      skills: null,
      footer: null,
    }
  }

  async componentDidMount() {
    const navigationLabels = await fetchNavigationLabels()
    const homePage = await fetchHomePage()
    const aboutPage = await fetchAboutPage()
    const experience = await fetchExperienceSection()
    const skills = await fetchSkillsSection()
    const footer = await fetchFooter()
    this.setState({
      isLoading: false,
      navigationLabels,
      homePage,
      aboutPage,
      experience,
      skills,
      footer,
    })
  }

  render() {
    const {
      isLoading,
      navigationLabels,
      homePage,
      aboutPage,
      experience,
      skills,
      footer,
    } = this.state

    if (isLoading) {
      return <Loader />
    }

    console.log(skills)
    console.log(experience)

    return (
      <div>
        <BrowserRouter>
          <div className="content-container">
            <NavigationHeader content={navigationLabels} />
            <Switch>
              <Route
                path="/about"
                render={(props) => (
                  <About {...props} content={aboutPage} experience={experience} skills={skills} />
                )}
              />
              <Route path="/" exact render={(props) => <Home {...props} content={homePage} />} />
              <Redirect to="/" />
            </Switch>
            <Footer content={footer} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
