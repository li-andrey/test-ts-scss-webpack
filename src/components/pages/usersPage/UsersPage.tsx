import { FC } from "react";
import { IUser } from "../../../types/types";
import MyLoader from "../../UI/loader/MyLoader";
import UserList from "../../userList/UserList";
import s from "./usersPage.module.scss";

interface UsersPageProps {
  filteredUsers: IUser[];
}
const UsersPage: FC<UsersPageProps> = ({ filteredUsers }) => {
  return (
    <div className={s.container}>
      {filteredUsers.length !== 0 ? (
        <UserList users={filteredUsers} />
      ) : (
        <MyLoader />
      )}
    </div>
  );
};

export default UsersPage;
