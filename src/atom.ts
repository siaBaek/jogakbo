import { atom } from "recoil";

const isLightModeState = atom({
  key: "light_mode",
  default: true,
});

export { isLightModeState };
