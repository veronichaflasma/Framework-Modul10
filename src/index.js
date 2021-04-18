import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import routes from './routes'
import Header from './Header'
import "./style.css"
import firebase from "firebase"
import firebaseConfig from "./firebase.config"

firebase.initializeApp(firebaseConfig)

export const AuthContext = React.createContext(null)

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)

  return (
    <AuthContext.Provider value={{isLoggedIn, setLoggedIn}}>
      Is logged in? {JSON.stringify(isLoggedIn)}
      <div>
        <BrowserRouter>
          <Header/>
          <Switch>
            {routes.map(route => (
              <Route
                key = {route.path}
                path = {route.path}
                exact = {route.exact}
                component = {route.main}
              />
            ))}
          </Switch>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement)
