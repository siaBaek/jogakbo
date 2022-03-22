import { css, DefaultTheme } from "styled-components";

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const lightTheme: DefaultTheme = {
  gradient: "linear-gradient(45deg, #feac5e 0%, #c779d0 50%, #4bc0c8 100%)",
  bgColor: "white",
  contentBgColor: "white",
  textColor: "#333",
  boxShadow1: "4px 12px 30px 6px rgb(0 0 0 / 9%)",
  boxShadow2: "4px 12px 30px 6px rgb(0 0 0 / 18%)",
  gray: "lightgray",
  glass: {
    bgColor: "rgba(255, 255, 255, 0.25)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    boxShadow: "rgba(142, 142, 142, 0.19) 0px 6px 15px 0px",
    color: "rgb(28,28,28)",
  },
  flexCenter,
};

export const darkTheme: DefaultTheme = {
  gradient: "linear-gradient(45deg, #4bc0c8 0%, #c779d0 50%, #feac5e 100%)",
  bgColor: "black",
  contentBgColor: "gray",
  textColor: "rgba(255,255,255,0.8)",
  boxShadow1: "4px 12px 30px 6px rgb(255 255 255 / 9%)",
  boxShadow2: "4px 12px 30px 6px rgb(255 255 255 / 18%)",
  gray: "gray",
  glass: {
    bgColor: "rgba(89, 89, 89, 0.25)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    boxShadow: "rgba(14, 14, 14, 0.19) 0px 6px 15px 0px",
    color: "rgb(255, 255, 255, 0.75)",
  },
  flexCenter,
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  1440: customMediaQuery(1440),
  768: customMediaQuery(768),
  tablet: customMediaQuery(1100),
  mobile: customMediaQuery(500),
};
