import type { NextPage } from 'next';
import useSWR from 'swr';
import Layout from '../components/layout';

const fetcher = async () => {
    const res = await fetch('https://nest-backend-api.herokuapp.com/users') // TODO: the error handling below is not enough, fix it

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
    /**
     * NOTE: THIS IS EXPERIMENTAL USE OF SWR (THIS IS UPDATING THE DATA LIVE ON THE FRONT END) it will be very useful for the task page
     * 
    */
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
        <Layout>
            <div>
                <h1>Users</h1>
                { data.map((user : any) => (
                    <ul key={user.username}>
                    <h3>{user.username}</h3>
                    { Object.entries(user).map(([key, value]) => (<li key={key}> {key}: {value} </li>)) }
                    </ul>
                    // <ul key={user.username}><li>Username: - {user.username}</li><li>Email: - {user.email}</li><li>IsEmailConfirmed: - {user.isEmailConfirmed}</li></ul>
                )) }
                
            </div>
        </Layout>
    );
}

export default Users