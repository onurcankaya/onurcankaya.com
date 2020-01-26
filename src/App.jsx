import React from 'react'
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'
import {
  fetchNavigationLabels,
  fetchHomePage,
  fetchProjectsSection,
  fetchAboutPage,
  fetchExperienceSection,
  fetchSkillsSection,
  fetchNowPage,
  fetchImpossibleList,
  fetchFooter,
} from './services/api'
import NavigationHeader from './components/navigation-header'
import Footer from './components/footer'
import Loader from './components/loader'
import Home from './pages/home'
import About from './pages/about'
import Now from './pages/now'
import ImpossibleList from './pages/impossible-list'
import './index.css'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      navigationLabels: null,
      homePage: null,
      projects: null,
      aboutPage: null,
      experience: null,
      skills: null,
      nowPage: null,
      impossibleList: null,
      footer: null,
    }
  }

  async componentDidMount() {
    const navigationLabels = await fetchNavigationLabels()
    const homePage = await fetchHomePage()
    const projects = await fetchProjectsSection()
    const aboutPage = await fetchAboutPage()
    const experience = await fetchExperienceSection()
    const skills = await fetchSkillsSection()
    const nowPage = await fetchNowPage()
    const impossibleList = await fetchImpossibleList()
    const footer = await fetchFooter()
    this.setState({
      isLoading: false,
      navigationLabels,
      homePage,
      projects,
      aboutPage,
      experience,
      skills,
      nowPage,
      impossibleList,
      footer,
    })
  }

  render() {
    const {
      isLoading,
      navigationLabels,
      homePage,
      projects,
      aboutPage,
      experience,
      skills,
      nowPage,
      impossibleList,
      footer,
    } = this.state

    if (isLoading) {
      return <Loader />
    }

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
              <Route
                path="/"
                exact
                render={(props) => <Home {...props} content={homePage} projects={projects} />}
              />
              <Route path="/now" render={(props) => <Now {...props} content={nowPage} />} />
              <Route
                path="/impossible-list"
                render={(props) => <ImpossibleList {...props} content={impossibleList} />}
              />
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
