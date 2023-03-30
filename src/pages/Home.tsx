import { FormEvent, useEffect, useState } from "react"
import { createUser, getAllUsers } from "../api/users";

import { User } from "../utils/types/user";
import { useForm } from "../hooks/useForm";

import { NavLink } from 'react-router-dom';

export const Home = () => {

    const [users, setUsers] = useState<User[]>([]);

    const { onInputChange, name, email, onResetForm, formState } = useForm();

    const loadUsers = async () => {
        const res = await getAllUsers();
        if( res !== null ){
            setUsers( res )
        }
    }

    const onSubmitForm = async (event:FormEvent)  => {
        event.preventDefault();

        const userResponse = await createUser( formState );

        if( userResponse ) {
            setUsers(users => [ ...users, userResponse ]);
        }

        alert('Usuario creado exitosamente');

        onResetForm();
    }

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <div className='container'>
            <h1 className="text-center mt-4">Crud de usuarios</h1>

            <hr />

            <h2>Ingresar un nuevo usuario:</h2>

            <br />

            <form onSubmit={ onSubmitForm }>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        className="form-control mt-2" 
                        placeholder="Nombre" 
                        name="name"
                        value={name}
                        onChange={onInputChange}
                        required
                        />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="form-control mt-2" 
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={onInputChange} 
                        required
                    />
                </div>
                <input type="submit" value="Enviar usuario" className="btn btn-success mt-4" />
            </form>


            <hr />
            <br />

            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        users.map( (user, index) => 
                            <tr key={index}>
                                <th>{ user.id }</th>
                                <th>{ user.name }</th>
                                <th>{ user.email }</th>
                                <th> 
                                    <NavLink to={`/posts/${user.id}`} className="btn btn-primary">
                                        Ver posts
                                    </NavLink>    
                                    &nbsp;
                                    <button className="btn btn-danger">
                                        borrar
                                    </button>    
                                </th>
                            </tr>
                        )

                    }
                </tbody>
            </table>


        </div>
    )
}
