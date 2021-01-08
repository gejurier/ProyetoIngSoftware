import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire'

export default (props) => {
    //onChange={(ev) => setEmail(ev.target.value)} PARA EVENTOS
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();
    

    const submit = async () => { // funcion para hacer crear sesion
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }
     const logout = async () => { //funcion para desloguearse
        await firebase.auth().signOut();
     }
    const login = async ()=>{ ///metodo para login
        await firebase.auth().signInWithEmailAndPassword(email,password)
    }

    return (
        <div>
            
           {!user.data &&
            <div>
                <label htmlFor="email">Correo Electronico</label>
                <input type="email" id="email" onChange={(ev) => setEmail(ev.target.value)} />
                <label htmlFor="password">Contrasena</label>
                <input type="password" id="password" onChange={(ev) => setPassword(ev.target.value)} />
                <button onClick={submit}> Crear Cuenta </button>
                <button onClick={login}> Iniciar Sesion </button>
            </div>
            }
            {
                user.data &&
                <button onClick={logout} >Cerrar Sesion </button>
            }
        </div>
    )
}



