import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{JSON.stringify(user.address)}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
      <p>{JSON.stringify(user.company)}</p>
    </div>
  );
};
export default User;
