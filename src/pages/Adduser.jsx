import { useState } from "react";
import { useAddUserMutation } from "../apislice/userApiSlice";
export default function Adduser() {
  const [AddUser] = useAddUserMutation();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleClick = async (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email || !newUser.age) {
      alert("All fields are required!");
      return;
    }
    try {
      //Adduser wrap the new user
      const response = await AddUser(newUser).unwrap(); // unwrap for handling the success and error cases
      console.log("user add", response);
      if (response?.id) {
        alert("User added successfully");
      }
      setNewUser("");
    } catch (error) {
      console.log(error);
    }
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={newUser.name || ""}
            onChange={handlechange}
            className="border-2 border-gray-400 focus:border-gray-400"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={newUser.email || ""}
            onChange={handlechange}
            className="border-2 border-gray-400 focus:border-gray-400"
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            value={newUser.age || ""}
            onChange={handlechange}
            className="border-2 border-gray-400 focus:border-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 text-center">
        <div>
          <button
            onClick={handleClick}
            className="py-2 m-3 px-4 bg-green-700 text-white font-bold rounded-md "
          >
            Adduser
          </button>
        </div>
      </div>
    </>
  );
}
