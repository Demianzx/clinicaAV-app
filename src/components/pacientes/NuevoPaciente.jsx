import React, { Component, Fragment } from 'react';
import {Card, Container} from 'react-bootstrap';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonLabel, IonInput, IonCard, IonCardContent, IonSelect, IonSelectOption, IonButton, IonIcon } from '@ionic/react';
import {firestoreConnect}from 'react-redux-firebase';

class NuevoPaciente extends Component {
    state={
        nombres: '',
        apellidop:'',
        apellidom:'',
        sexo:'',
        email:'',
        numero:'',
        fecha:'',
        tratamiento:''
    }
//agrega nuevo paciente
agregarPaciente = e =>{
    e.preventDefault();
    //extraer valores del state
    const nuevoPaciente={...this.state};

    //extraer firestore en props
    const {firestore,history}=this.props;

    //guardarlo en base de datos
    firestore.add({
        collection: 'pacientes'
    },nuevoPaciente).then(()=> history.push('/pacientes'))
}



//extraer valores del input al state
leerDato = e =>{
     this.setState({
         [e.target.name]:e.target.value
     })
}

    render() {
        return (
            <Container>
                <IonHeader style={{display:"flex"}}>
                    <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />              
                    </IonButtons>
                    <IonTitle>Nuevo</IonTitle>
                    </IonToolbar>
            </IonHeader> 
                <Card >
                   <Card.Body >
                   <form onSubmit={this.agregarPaciente}>
                        <div>
                            <IonLabel style={{display:"flex"}}color="dark">Nombres</IonLabel>
                            <IonInput type="text"
                            name="nombres"
                            placeholder="nombres del paciente"
                            color="dark"
                            required
                            onIonChange={this.leerDato}
                            value={this.state.nombres}
                            />
                        </div>
                        <div>
                            <IonLabel style={{display:"flex"}}color="dark">Apellido Paterno</IonLabel>
                            <IonInput type="text"
                            name="apellidop"
                            placeholder="Apellido paterno de el paciente"
                            color="dark"
                            required
                            onIonChange={this.leerDato}
                            value={this.state.apellidop}
                            />
                        </div>
                        <div>
                            <IonLabel style={{display:"flex"}}color="dark">Apellido Materno</IonLabel>
                            <IonInput type="text"
                            name="apellidom"
                            placeholder="Apellido materno de el paciente"
                            color="dark"
                            required
                            onIonChange={this.leerDato}
                            value={this.state.apellidom}
                            />
                        </div>
                        <div>
                            <IonLabel style={{display:"flex"}}color="dark">Sexo</IonLabel>
                            <IonSelect name="sexo" placeholder="Selecciona Sexo" value={this.state.sexo} onIonChange={this.leerDato}>
                            <IonSelectOption value="Femenino">Femenino</IonSelectOption>
                            <IonSelectOption value="Masculino">Masculino</IonSelectOption>
                            </IonSelect>
                        </div>
                        <div>
                            <IonLabel style={{display:"flex"}}color="dark">Email</IonLabel>
                            <IonInput type="email"
                            name="email"
                            placeholder="Escriba su correo electronico"
                            color="dark"
                            required
                            onIonChange={this.leerDato}
                            value={this.state.email}
                            />
                        </div>
                        <div>
                            <IonLabel style={{display:"flex"}}color="dark">Numero Celular</IonLabel>
                            <IonInput type="number"
                            name="numero"
                            placeholder="Numero de 10 digitos celular"
                            color="dark"
                            required
                            onIonChange={this.leerDato}
                            value={this.state.numero}
                            />
                        </div>
                        <div>
                            <IonLabel style={{display:"flex"}}color="dark">Tratamiento</IonLabel>
                            <IonSelect name="tratamiento" placeholder="Selecciona un tratamiento" value={this.state.tratamiento} onIonChange={this.leerDato}>
                            <IonSelectOption value="Limpieza">Limpieza</IonSelectOption>
                            <IonSelectOption value="Diagnostico">Diagnostico</IonSelectOption>
                            </IonSelect>
                        </div>
                        <div>
                            <IonLabel style={{display:"flex"}}color="dark">Fecha de cita</IonLabel>
                            <IonInput type="date"
                            name="fecha"
                            placeholder="fecha de la cita del paciente"
                            color="dark"
                            required
                            onIonChange={this.leerDato}
                            value={this.state.fecha}
                            />
                        </div>
                        <IonButton type="submit" expand="full">Agregar Cita <IonIcon name="add"/></IonButton>
                    </form>
                   </Card.Body>
                </Card>
                
            </Container>
        );
    }
}

export default firestoreConnect()(NuevoPaciente);