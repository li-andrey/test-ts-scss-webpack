import { FC } from "react";
import { IUser } from "../../types/types";
import UserCard from "../userCard/UserCard";
import s from "./userList.module.scss";

interface UserListProps {
  users: IUser[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div className={s.userlist}>
      <h2 className={s.userlist__title}>Список пользователей</h2>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      <p className={s.users__quantity}>Найдено {users.length} пользователей</p>
    </div>
  );
};

export default UserList;
