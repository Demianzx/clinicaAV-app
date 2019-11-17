import React, { Fragment } from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import PropTypes from 'prop-types';

import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonCard, IonCardHeader, IonCardContent, IonFab, IonFabButton, IonIcon, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/spinner';

function Pacientes({pacientes,firestore}) {

    //eliminar suscriptor

    const eliminarSuscriptor = id=>{
        //eliminar
        firestore.delete({
            collection: 'pacientes',
            doc: id
        })
    }






    
   if(!pacientes) return <Fragment>
       <IonHeader>
                    <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />              
                    </IonButtons>
                    <IonTitle>Pacientes</IonTitle>
                    </IonToolbar>
            </IonHeader> 
            <Spinner />
   </Fragment>
    return (
        <Fragment >
            <IonHeader>
                    <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />              
                    </IonButtons>
                    <IonTitle>Pacientes</IonTitle>
                    </IonToolbar>
            </IonHeader> 
          {pacientes.map(paciente=>(
              <div key={paciente.id}>
            <Link to={`/pacientes/mostrar/${paciente.id}`} style={{ textDecoration: 'none' }}>
              <IonCard>
                <IonCardHeader>
                <IonTitle>{paciente.nombres} {paciente.apellidop} {paciente.apellidom}</IonTitle>
                
                </IonCardHeader>
                <IonCardContent>
                    Tratamiento: {paciente.tratamiento} <br/>
                    Fecha: {paciente.fecha}
                    <IonButton slot="end" className="float-right" onClick={()=>eliminarSuscriptor(paciente.id)}>
                        <IonIcon name="trash"/>
                        </IonButton>                    
                </IonCardContent>
                
            </IonCard>
            </Link>
              </div>
          ))}
          <IonFab vertical="bottom" horizontal="end">      
            <IonFabButton routerLink="/pacientes/nuevo">      
                <IonIcon name="add" />        
            </IonFabButton>      
        </IonFab>
        </Fragment >
    );
}

Pacientes.propTypes={
    firestore: PropTypes.object.isRequired,
    pacientes : PropTypes.array
}


export default compose(
    firestoreConnect([{collection: 'pacientes'}]),
    connect((state,props)=>({
        pacientes: state.firestore.ordered.pacientes
    }))
)(Pacientes);