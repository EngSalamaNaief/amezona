import {Suspense} from 'react'
import Topbar from "../component/Topbar";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import Home from './Home';
import Categorybar from '../component/Categorybar';
export default function RootPage() {
  return (
     <Suspense fallback={null}>
        <div className='h-screen '>
        <Router>
            <Topbar/>
            <Categorybar/>
          <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
          </Switch>
        </Router>
      
      </div>
     </Suspense>
        
  )
}
