import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from '../Redux/Users/UsersAction';

function UsersContainer() {
  
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(users)
  useEffect(() => {
      dispatch(fetchUsers());
  },[]);

  return (
    <div>
      <h1>Users</h1>
      <div>
        {
          users && users.map((user) => <p> {user.name} </p>)
        }
      </div>
    </div>
  )
}


export default UsersContainer;
