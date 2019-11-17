import React, { Component, Fragment } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';

class EditarPaciente extends Component {
    render() {
        return (
            <Fragment>
                <IonHeader>
                    <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />              
                    </IonButtons>
                    <IonTitle>Inicio</IonTitle>
                    </IonToolbar>
                </IonHeader>   
                <h1>editar paciente</h1>
            </Fragment>

        );
    }
}

export default EditarPaciente;