import s from "./myLoader.module.scss";

const MyLoader = () => {
  return (
    <div className={s.loader}>
      <div className={s.loader__inner}></div>
    </div>
  );
};

export default MyLoader;
