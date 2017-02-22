import Route from './components/app/route'

import Landing from './components/landing'
import Question1 from './components/question1'
import Question2 from './components/question2'
import HelloK from './components/question3' 
import Person from './components/question4'
import Propson from './components/question5'
export const routes = [
  { path: 'question1', component: Question1 }, { path: 'question2', component: Question2 }, { path: 'question3', component: HelloK }, { path: 'question4', component: Person }, { path: 'question5', component: Propson }
]

export default {
  path: '/',
  component: Route,
  indexRoute: { component: Landing },
  childRoutes: routes
}
