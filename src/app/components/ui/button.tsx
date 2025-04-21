import React, { forwardRef } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: React.ReactNode;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <button ref={ref} className={`py-2 px-4 rounded ${className}`} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button"; // Это нужно для корректного отображения имени компонента в devtools

export default Button;
