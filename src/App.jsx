import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importar vistas
import Navbar from '@/components/Navbar/Navbar';
import PublicView from '@/pages/PublicView/PublicView';

const App = () =>{
    return (
        <>
          <Router>
              {/** Aqui vamos a pegar un navbar */}
                <Navbar/>
              <Switch>
                <Route path="/" component={PublicView}/>
              </Switch>
          </Router>
        </>

    )
}

export default App;