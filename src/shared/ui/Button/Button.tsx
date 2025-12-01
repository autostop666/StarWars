import { Button as ButtonAntd } from "antd";
import React, { memo } from "react";
import styles from "./Button.module.less";

interface CustomButtonProps {
  variant?: "primary" | "secondary";
  disabled?: boolean;
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  loading?: boolean;
  fullWidth?: boolean;
  style?: object;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  suffix?: React.ReactNode;
}

export const Button = memo<CustomButtonProps>(
  ({
    variant = "primary",
    disabled = false,
    children,
    size = "medium",
    loading = false,
    fullWidth = true,
    style = {},
    suffix,
    ...otherProps
  }) => {
    return (
      <ButtonAntd
        className={`${styles.Button} ${styles[variant]} ${styles[size]}`}
        disabled={disabled}
        loading={loading}
        style={{
          width: fullWidth ? "100%" : undefined,
          ...style,
        }}
        {...otherProps}
      >
        <span>{children}</span>
        {suffix && <span className={styles.suffix}>{suffix}</span>}
      </ButtonAntd>
    );
  }
);

Button.displayName = "Button";
