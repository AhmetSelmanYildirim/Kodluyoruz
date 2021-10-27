import axios from "axios";

export default async function getData (id) {

    const getUser = async () => {
        const getted = await (await axios("https://jsonplaceholder.typicode.com/users/"+id)).data
        return getted;
    }

    const postUser = async () => {
        const posted = await (await axios("https://jsonplaceholder.typicode.com/posts/"+id)).data
        return posted;
    }

    const get = await getUser();
    const post = await postUser();
    const arr = [get,post]

    return arr;
}
