import React, { useEffect, useState } from 'react'
import { User } from '../utils/types/user'
import { Post } from '../utils/types/post'
import { getUserById } from '../api/users';

import { useParams, useNavigate, NavLink } from 'react-router-dom'
import { getPostsByUserId } from '../api/posts';

export const UserPosts = () => {

    const [user, setUser] = useState<User | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);

    const navigate = useNavigate();

    const { id } = useParams();

 
    const loadUser = async () => {
        if(id){
            const userResponse = await getUserById( id );
            setUser( userResponse );
        }else{
            navigate('/');
        }
    }

    const loadPosts = async () => {
        if(id){
            const postsResponse = await getPostsByUserId(id);
            
            postsResponse && setPosts( postsResponse );
        }
    }

    useEffect( () => {
        loadUser();
        loadPosts();
    }, [] )


    return (
        <div className='container'>
            <h1 className="text-center mt-4">Posts de { user?.name }</h1>
            

            <br />
            
            <NavLink to='/' className="btn btn-primary">
                Volver al inicio
            </NavLink>

            <br />
            <hr />
            <br />

            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Contenido</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {

                        posts.map( (post, index) => (
                            <tr key={index} >
                                <th>
                                    { post.id }
                                </th>
                                <th>
                                    { post.title }
                                </th>
                                <th>
                                    { post.body }
                                </th>
                            </tr>
                        ) )
                    }


                </tbody>
            </table>


        </div>
    )
}
