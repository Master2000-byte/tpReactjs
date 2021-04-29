import React, { Component, useState } from "react"
import Login from './components/Login'
import SideBar from './components/SideBar'

// function WebToken(props) {
//   const [token, setToken] = useState()
//   if (!token) {
//     return <Login setToken={setToken}/>
//   }
// }

class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
          <SideBar/>
      </div>
    )
  }
}
export default App;
