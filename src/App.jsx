import React from 'react';
//import { Redirect, Route } from 'react-router-dom';
import { IonApp,  IonSplitPane, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonRouterLink } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Pacientes from './components/pacientes/Pacientes';
import NuevoPaciente from './components/pacientes/NuevoPaciente';
import MostrarPaciente from './components/pacientes/MostrarPaciente';
import EditarPaciente from './components/pacientes/EditarPaciente';
import store from './store';
import {Provider} from 'react-redux';
import {Card, Container} from 'react-bootstrap';


// /* Core CSS required for Ionic components to work properly */
// import '@ionic/react/css/core.css';

// /* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

// /* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';



// /* Theme variables */
// import './theme/variables.css';
import { Route, Redirect, Switch } from 'react-router';
import SideMenu from './components/layout/SideMenu'



//paginas que se mostraran en el sidemenu
const appPages = [
  {
    title: 'Pacientes',
    url: '/pacientes',
    icon: "home"
  },
  {
    title: 'Agregar',
    url: '/pacientes/nuevo',
    icon: "add"
  },
  {
      title: 'Mas Información',
      url: '/learnmore',
      icon: "book"
    }
];


const App = () => (
  <Provider store={store}>
    <IonApp>
                {/* <IonHeader>
                    <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />              
                    </IonButtons>
                    <IonTitle>Inicio</IonTitle>
                    </IonToolbar>
                </IonHeader>      */}
    <IonReactRouter>
      
      
                 
      <SideMenu appPages={appPages}/>
      
        <IonRouterLink id="main">
         <Switch>
          <Route exact path="/pacientes" component={Pacientes}/>
          <Route exact path="/pacientes/nuevo" component={NuevoPaciente}/>
          <Route exact path="/pacientes/mostrar/:id" component={MostrarPaciente}/>          
          <Route exact path="/pacientes/editar/:id" component={EditarPaciente}/>
          <Route exact path="/" render={() => <Redirect to='/pacientes' />} />
          </Switch>

        </IonRouterLink>
      
    </IonReactRouter>
    
  </IonApp>
  </Provider>
);

export default App;
