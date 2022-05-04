import { FC } from "react";
import { Outlet } from "react-router-dom";
import { IUser } from "../../types/types";
import MyBtn from "../UI/button/MyBtn";
import s from "./userFilter.module.scss";

interface UserFilterProps {
  users: IUser[];
  setUsers: (sortedUsers: IUser[]) => void;
}

const UserFilter: FC<UserFilterProps> = ({ users, setUsers }) => {
  const sortUsersByCity = () => {
    const sortedUsers = [...users].sort((a, b) =>
      a.address.city.localeCompare(b.address.city)
    );
    setUsers(sortedUsers);
  };
  const sortUsersByName = () => {
    const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
    setUsers(sortedUsers);
  };

  return (
    <>
      <div className={s.aside}>
        <h3 className={s.aside__title}>Сортировка</h3>
        <MyBtn onClick={sortUsersByCity}>по городу</MyBtn>
        <MyBtn onClick={sortUsersByName}>по имени</MyBtn>
      </div>
      <Outlet />
    </>
  );
};

export default UserFilter;
