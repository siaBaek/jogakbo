import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    gradient: string;
    bgColor: string;
    contentBgColor: string;
    textColor: string;
    boxShadow1: string;
    boxShadow2: string;
    gray: string;
    glass: {
      bgColor: string;
      border: string;
      boxShadow: string;
      color: string;
    };
    flexCenter: css;
  }
}
