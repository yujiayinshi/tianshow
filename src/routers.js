import HomePage from './containers/HomePage'
import ShowEditPage from './containers/ShowEditPage'

const routers = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/show',
    exact: true,
    component: ShowEditPage
  },
  {
    path: '/show/:id',
    exact: true,
    component: ShowEditPage
  }
]

export default routers
