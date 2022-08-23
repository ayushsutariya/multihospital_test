import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { Route, Switch } from "react-router";
import Home from './Container/Home/Home';
import Footer from './Component/Footer/Footer';
import Department from './Container/Department/Department';
import Doctor from './Container/Doctor/Doctor';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import Appointment from './Container/Appointment/Appointment';
import Auth from './Container/Auth/Auth';

function App() {
  return (
    <>
    <Header/>

    <Switch>
      <Route exact path={"/home"} component={Home} />
      <Route exact path={"/department"} component={Department} />
      <Route exact path={"/doctor"} component={Doctor} />
      <Route exact path={"/about"} component={About} />
      <Route exact path={"/contact"} component={Contact} />
      <Route exact path={"/appointment"} component={Appointment} />
      <Route exact path={"/Auth"} component={Auth} />
    </Switch>

    <Footer />
    </>
  );
}

export default App;
