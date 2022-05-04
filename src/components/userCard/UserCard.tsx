import { FC } from "react";
import { IUser } from "../../types/types";
import s from "./userCard.module.scss";
import { Link } from "react-router-dom";

interface UserCardProps {
  user: IUser;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div className={s.card}>
      <div className={s.card__info}>
        <p>
          <span>ФИО:</span> {user.name}
        </p>
        <p>
          <span>город:</span> {user.address.city}
        </p>
        <p>
          <span>компания:</span> {user.company.name}
        </p>
      </div>
      <div className={s.card__btn}>
        <Link to={`users/${user.id}`} className={s.card__button}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
