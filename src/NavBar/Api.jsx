
import React, { useState } from 'react'

export default function App3() {
    let [users, setUsers] = useState([]);
    let [err, setError] = useState(null);
    let [loading, setLoading] = useState(false);
    const fetchUsers = async () => {
        setLoading(true);
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/albums');
            if (res.ok) {
                let users = await res.json();
                setUsers(users);
            } else {
                throw new Error('invalid response from server');
            }
        } catch (error) {
            setError('can not load');

        } finally {
            setLoading(false);

        }
    }
    if (loading)
        return <h1>loading...</h1>
    else if (err)
        return <h3>{err}</h3>
    else
        return (
            <div className='container'>
                <h1>list of users</h1>
                <button onClick={fetchUsers} disabled={loading}>
                    {!loading ? "fetch Users" : "loading..."}
                </button>
                {
                    users.map(user => <h5 key={user.id}>{user.id}-{user.title}-{user.url}-{user.url} </h5>)
                }
            </div>
        )
}
