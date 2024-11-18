import React from "react";
import { useGetUsersQuery } from "../apislice/userApiSlice";

function Listofuser() {
  const { data: users, isLoading, error } = useGetUsersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(users);

  return (
    <div>
      <h3> user lIst </h3>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            <p>{user.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listofuser;
