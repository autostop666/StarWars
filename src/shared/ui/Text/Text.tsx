/* eslint-disable react-refresh/only-export-components */
import { memo, ReactNode } from "react";
import styles from "./Text.module.less";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
  SECONDARY = "secondary",
}

export enum TextWeight {
  BOLD = "bold",
  SEMIBOLD = "semibold",
  REGULAR = "regular",
}
export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

export enum TextSize {
  XS = "size_xs",
  S = "size_s",
  M = "size_m",
  L = "size_l",
}

interface TextProps {
  className?: string;
  title?: ReactNode;
  text?: ReactNode;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  weight?: TextWeight;
  "data-testid"?: string;
}

type HeaderTagType = "h1" | "h2" | "h3" | "h4";

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.XS]: "h4",
  [TextSize.S]: "h3",
  [TextSize.M]: "h2",
  [TextSize.L]: "h1",
};

export const Text = memo((props: TextProps) => {
  const {
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    weight = TextWeight.REGULAR,
    "data-testid": dataTestId = "Text",
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div
      className={`${styles.Text} ${styles[theme]} ${styles[align]} ${styles[size]} ${styles[weight]}`}
    >
      {title && (
        <HeaderTag
          className={styles.title}
          data-testid={`${dataTestId}.Header`}
        >
          {title}
        </HeaderTag>
      )}
      {text && (
        <p className={styles.text} data-testid={`${dataTestId}.Paragraph`}>
          {text}
        </p>
      )}
    </div>
  );
});
