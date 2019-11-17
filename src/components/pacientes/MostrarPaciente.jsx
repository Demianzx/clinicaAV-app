import React, { Fragment } from 'react';
import { IonTitle, IonMenuButton, IonButtons, IonToolbar, IonHeader } from '@ionic/react';

function MostrarPaciente(props) {
    return (
        <Fragment>
            <IonHeader>
                    <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />              
                    </IonButtons>
                    <IonTitle>Infor</IonTitle>
                    </IonToolbar>
                </IonHeader>   
            <h1>Mostrar Toda la informacion del paciente</h1>
        </Fragment>
    );
}

export default MostrarPaciente;