import type { NextPage } from 'next';
import useSWR from 'swr';

const fetcher = async () => {
    // try {
    //     const response = await fetch('http://localhost:3000/users')
    //     return await response.json();
    // } catch(error) {
    //     return error
    // }

    const res = await fetch('http://localhost:3000/users')

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      // Attach extra info to the error object.
      error.message = await res.json()
      throw error
    }

    const data = await res.json()
  
    return data;
}

const Users: NextPage = () => {
    const {data, error} = useSWR('users', fetcher);
    if (error) {
        return (<div> 
                <p>Error: - {error}</p>
            </div>)
    } 
    if (!data) {
        return (<div> 
            <p>Loading data ...</p>
        </div>)
    } 
    return (
        <div>
            <h1>Users</h1>
             { data.map((user : any) => (
                <ul key={user.username}><li>Username: - {user.username}</li><li>Email: - {user.email}</li><li>IsEmailConfirmed: - {user.isEmailConfirmed}</li></ul>
            )) }
            
        </div>
    );
}

export default Users