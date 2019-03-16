import React from 'react'
import { Admin, Resource, ListGuesser } from 'react-admin'
import buildGraphcoolProvider from 'ra-data-graphcool'
import users from './components/users'
import posts from './components/posts'
import { Route } from 'react-router-dom';
// import Form from './components/form';
import PersonCreate from './components/persons/create'
import MapResult from './components/MapResult'
import Spinner from './components/Spinner'
import Dashboard from './components/Dashboard'
import authProvider from './components/authProvider'
import UserList from './components/users/UserList'

function Form () {
  return (
    <h1>hello</h1>
  )
}

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { dataProvider: null }
  }

  async componentDidMount() {
    const dataProvider = await buildGraphcoolProvider({
      clientOptions: {
        uri: 'https://api.graph.cool/simple/v1/cjt49cvhf3nb001897ecqnyqs'
      }
    })

    this.setState({ dataProvider })
  }

  render() {
    const { dataProvider } = this.state

    if (!dataProvider) {
      return <Spinner />
    }

    return (
      <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider} customRoutes={[
        <Route
            exact
            path="/map"
            component={MapResult}
            noLayout
            />]}
        >
        {/* <Resource name="Post" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} /> */}
        
        <Resource name="User" list={UserList} {...users} options={{ label: 'Data', title: 'Data' }} />
  
        {/* <Resource name="Post" list={ListGuesser} {...posts} /> */}
        {/* <Resource name="Person" list={ListGuesser} create={PersonCreate} noLayout/> */}
      </Admin>
    )
  }
}
