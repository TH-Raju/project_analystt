import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

const AllUser = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <div>
            <h2>All User's</h2>
            <div className='container'>
                <div className='row'>
                    {
                        users.map(user => <UserCard className="d-flex flex-wrap" key={user.id}
                            username={user.name}
                            userName={user.username}
                            address={user.address}
                            phone={user.phone}
                            email={user.email}
                            website={user.website}
                            company={user.company}
                        ></UserCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllUser;