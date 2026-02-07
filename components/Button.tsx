import { MouseEventHandler } from "react";

interface IButton {
  text: string;
  classes?: string;
  isDisabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ text, classes, isDisabled, onClick }: IButton) => {
  return (
    <button
      className={`flex items-center justify-center px-2 py-1 rounded-md border border-black hover:cursor-pointer hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed ${classes}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
