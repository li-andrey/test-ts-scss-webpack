import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UsersPage from "./components/pages/usersPage/UsersPage";
import UserPage from "./components/pages/userPage/UserPage";
import UserFilter from "./components/userFilter/UserFilter";
import { useEffect, useState } from "react";
import { IUser } from "./types/types";
import axios from "axios";
import "./styles/styles.scss";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const users = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(users.data);
  };

  return (
    <div className="wrapper">
      <Routes>
        <Route
          path="/"
          element={<UserFilter users={users} setUsers={setUsers} />}
        >
          <Route index element={<UsersPage filteredUsers={users} />} />
          <Route path="users/:id" element={<UserPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
