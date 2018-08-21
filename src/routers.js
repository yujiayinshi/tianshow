import HomePage from './containers/HomePage'
import ShowEditPage from './containers/ShowEditPage'
import Preview from './containers/Preview'

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
  },
  {
    path: '/preview',
    exact: true,
    component: Preview
  }
]

export default routers
