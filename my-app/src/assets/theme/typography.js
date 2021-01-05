import palette from "./palette";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  h1: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "23px",
    letterSpacing: "-0.06px",
    lineHeight: "26px",
  },
  h2: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "20px",
    letterSpacing: "-0.06px",
    lineHeight: "24px",
  },
  h3: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "17px",
    letterSpacing: "-0.05px",
    lineHeight: "20px",
  },
  h4: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "15px",
    letterSpacing: "-0.05px",
    lineHeight: "20px",
  },
  subtitle1: {
    color: palette.text.primary,
    fontSize: "16px",
    letterSpacing: "-0.05px",
    lineHeight: "25px",
  },
  subtitle2: {
    color: palette.text.secondary,
    fontWeight: 400,
    fontSize: "14px",
    letterSpacing: "-0.05px",
    lineHeight: "21px",
  },
  body1: {
    color: palette.text.primary,
    fontSize: `var(--fontSize)`,
    letterSpacing: "-0.05px",
    lineHeight: "21px",
  },
  body2: {
    color: palette.text.secondary,
    fontSize: `calc(var(--fontSize) - 2px)`,
    letterSpacing: "-0.04px",
    lineHeight: "18px",
  },
  button: {
    color: palette.text.primary,
    fontSize: "14px",
  },
  caption: {
    color: palette.text.secondary,
    fontSize: "11px",
    letterSpacing: "0.33px",
    lineHeight: "13px",
  },
  overline: {
    color: palette.text.secondary,
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.33px",
    lineHeight: "13px",
    textTransform: "uppercase",
  },
};
