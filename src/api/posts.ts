import { Post } from "../utils/types/post";
import { api } from "./api";


const getPostsByUserId = async (id: string) => {
    try {
        const res = await api.get<Post[]>( `/users/${id}/posts` );
        return res.data;
    } catch (error) {
        console.error(error);
        if(error instanceof Error) {
            alert(`Errorr: ${error.message}`);
        }
        return null;
    }
}


export {
    getPostsByUserId,
}
