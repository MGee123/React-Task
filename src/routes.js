import Route from './components/app/route'

import Landing from './components/landing'
import Question1 from './components/question1'
import Question2 from './components/question2'
import HelloK from './components/question3'
import Person from './components/question4'
import Propson from './components/question5'
import Adder from './components/question6'
import Lister from './components/question7'
import Even from './components/question8'
import Bold from './components/question9'
import Company from './components/question11'
import Text from './components/question12'
import Buttoner from './components/question14'
import Random from './components/question123'
import Namer from './components/question16'
export const routes = [
  { path: 'question1', component: Question1 }, { path: 'question2', component: Question2 }, { path: 'question3', component: HelloK }, { path: 'question4', component: Person }, { path: 'question5', component: Propson }, { path: 'question6', component: Adder }, { path: 'question7', component: Lister }, { path: 'question8', component: Even }, { path: 'question9', component: Bold }, { path: 'question11', component: Company }, { path: 'question12', component: Text }, { path: 'question14', component: Buttoner }, { path: 'question123', component: Random }, { path: 'question16', component: Namer }

]

export default {
  path: '/',
  component: Route,
  indexRoute: { component: Landing },
  childRoutes: routes
}
