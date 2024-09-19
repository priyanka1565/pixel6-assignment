import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState("");
    
    //fetching the data from api
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/users')
                
            } catch (error) {
                console.error('Error fetching users:', error);
            }
            
        };
        fetchUserData()
    },[])
  return (
    <div>UserList</div>
  )
}

export default UserList