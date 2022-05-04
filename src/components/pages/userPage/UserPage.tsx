import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../../../types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import MyBtn from "../../UI/button/MyBtn";
import s from "./userPage.module.scss";

const UserPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [edit, setEdit] = useState<boolean>(false);

  const params = useParams<{ id: string }>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUser>({
    mode: "onBlur",
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await axios.get<IUser>(
      "https://jsonplaceholder.typicode.com/users/" + params.id
    );
    setUser(response.data);
  };

  const handlerSetEdit = () => {
    setEdit(true);
  };

  const onSubmit: SubmitHandler<IUser> = (data) => {
    console.log(JSON.stringify(data));
    reset();
  };

  return (
    <div className={s.profile}>
      <div className={s.profile__info}>
        <h2>Профиль пользователя</h2>
        <MyBtn onClick={handlerSetEdit}>Редактировать</MyBtn>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.profile__form}>
          <label htmlFor="name">Name</label>
          <input
            className={`${s.form__input} ${errors.name && s.invalid}`}
            type="text"
            readOnly={!edit}
            placeholder={user?.name}
            {...register("name", { required: "Поле обязательно к заполнению" })}
          />
          <label htmlFor="username">User name</label>
          <input
            className={`${s.form__input} ${errors.username && s.invalid}`}
            type="text"
            readOnly={!edit}
            placeholder={user?.username}
            {...register("username", {
              required: "Поле обязательно к заполнению",
            })}
          />

          <label htmlFor="email">Email</label>
          <input
            className={`${s.form__input} ${errors.email && s.invalid}`}
            readOnly={!edit}
            placeholder={user?.email}
            {...register("email", {
              required: "Поле обязательно к заполнению",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Некорректный email",
              },
            })}
          />

          <label htmlFor="street">Street</label>
          <input
            className={`${s.form__input} ${
              errors?.address?.street && s.invalid
            }`}
            type="text"
            readOnly={!edit}
            placeholder={user?.address.street}
            {...register("address.street", {
              required: "Поле обязательно к заполнению",
            })}
          />

          <label htmlFor="city">City</label>
          <input
            className={`${s.form__input} ${errors?.address?.city && s.invalid}`}
            type="text"
            readOnly={!edit}
            placeholder={user?.address.city}
            {...register("address.city", {
              required: "Поле обязательно к заполнению",
            })}
          />

          <label htmlFor="zipcode">Zip code</label>
          <input
            className={`${s.form__input} ${
              errors?.address?.zipcode && s.invalid
            }`}
            type="text"
            readOnly={!edit}
            placeholder={user?.address.zipcode}
            {...register("address.zipcode", {
              required: "Поле обязательно к заполнению",
            })}
          />

          <label htmlFor="phone">Phone</label>
          <input
            className={`${s.form__input} ${errors.phone && s.invalid}`}
            readOnly={!edit}
            placeholder={user?.phone}
            {...register("phone", {
              required: "Поле обязательно к заполнению",
              pattern: {
                value:
                  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
                message: "Некорректный номер",
              },
            })}
          />

          <label htmlFor="website">Website</label>
          <input
            className={`${s.form__input} ${errors.website && s.invalid}`}
            readOnly={!edit}
            placeholder={user?.website}
            {...register("website", {
              required: "Поле обязательно к заполнению",
              pattern: {
                value:
                  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
                message: "Некорректный url",
              },
            })}
          />

          <label htmlFor="comment">Comment</label>
          <textarea
            className={`${s.form__textarea} ${errors.comment && s.invalid}`}
            readOnly={!edit}
            {...register("comment")}
          />
        </div>
        <input
          className={s.profile__btn}
          type="submit"
          value={"Отправить"}
          disabled={!edit}
        />
      </form>
    </div>
  );
};

export default UserPage;
