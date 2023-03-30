import { User } from "../utils/types/user";
import { api } from "./api";

interface IPostUserData {
    name: string;
    email: string;
}

const getAllUsers = async ():Promise<User[] | null> => {
    try {
        const res = await api.get<User[]>('/users');
        return res.data;
    } catch (error) {
        console.error(error);
        if(error instanceof Error) {
            alert(`Error: ${error.message}`);
        }
        return null;
    }
}

const getUserById = async (id:string):Promise<User | null> => {
    try {
        const res = await api.get<User>(`/users/${id}`);
        return res.data;
    } catch (error) {
        console.error(error);
        if(error instanceof Error) {
            alert(`Error: ${error.message}`);
        }
        return null;
    }
}

const createUser = async (data:IPostUserData) => {
    try {
        const res = await api.post<User>( '/users', data);

        return res.data;
    } catch (error) {
        console.error(error);
        if(error instanceof Error) {
            alert(`Error: ${error.message}`);
        }
        return null;
    }
}

export {
    getAllUsers,
    createUser,
    getUserById
}