import { atom } from "recoil";

const isLightModeState = atom<boolean>({
  key: "light_mode",
  default: true,
});

const showSignUpState = atom<boolean>({
  key: "sign_up",
  default: false,
});

const showSubMenuState = atom<boolean>({
  key: "sub_menu",
  default: false,
});

const showModalState = atom<boolean>({
  key: "modal",
  default: false,
});

export interface IModalPropsState {
  title: string;
  onConfirm: Function;
}

const modalPropsState = atom<IModalPropsState>({
  key: "modal_props",
  default: { title: "MODAL", onConfirm: () => {} },
});

const myAddressState = atom<string>({
  key: "my_address",
  // default: "0xD216a6beBdDECa9b862c1423b31CFA5188E5cB3C",
  default: "0x00",
});

const myBalanceState = atom<string>({
  key: "my_balance",
  default: "0",
});

const qrValueState = atom<string>({
  key: "qrcode",
  default: "DEFAULT",
});

const profileImageState = atom<string>({
  key: "profile_image",
  default:
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
});

export {
  isLightModeState,
  showSignUpState,
  showSubMenuState,
  showModalState,
  modalPropsState,
  myAddressState,
  myBalanceState,
  qrValueState,
  profileImageState,
};
