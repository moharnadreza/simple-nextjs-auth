"use client";

import React, { type ButtonHTMLAttributes, type ReactNode } from "react";
import styles from "./Button.module.scss";
import { Loading } from "../Loading";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  children: ReactNode;
};

const Button = ({
  isLoading = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <Loading /> : children}
    </button>
  );
};

export default Button;
