import React from 'react'
import { Admin, Resource, ListGuesser } from 'react-admin'
import buildGraphcoolProvider from 'ra-data-graphcool'
import users from './components/users'
import posts from './components/posts'
import { Route } from 'react-router-dom';

function About() {
  return <h2>About</h2>;
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
      return <div>Loading</div>
    }

    return (
      <Admin dataProvider={dataProvider}  customRoutes={[
        <Route
            exact
            path="/about"
            component={About}
            noLayout/>]}
        >
        {/* <Resource name="Post" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} /> */}
        <Resource name="User" list={ListGuesser} {...users} />
        {/* <Resource name="Post" list={ListGuesser} {...posts} /> */}
      </Admin>
    )
  }
}
