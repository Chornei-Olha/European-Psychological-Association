import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: React.ReactNode;
};

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button className={`py-2 px-4 rounded ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
