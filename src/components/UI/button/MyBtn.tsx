import s from "./myBtn.module.scss";

interface Props {
  children: string;
  onClick: () => void;
}

const MyBtn = ({ children, onClick }: Props) => {
  return (
    <button className={s.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default MyBtn;
