import Caver from "caver-js";
import {
  ACCESS_KEY_ID,
  CHAIN_ID,
  DONATION_CONTRACT_ADDRESS,
  SECRET_ACCRESS_KEY,
} from "../constants/constants.cypress";
import DONATIONABI from "../abi/DonationABI.json";

const option = {
  headers: [
    {
      name: "Authorization",
      value:
        "Basic " +
        Buffer.from(ACCESS_KEY_ID + ":" + SECRET_ACCRESS_KEY).toString(
          "base64"
        ),
    },
    {
      name: "x-chain-id",
      value: CHAIN_ID,
    },
  ],
};

const caver = new Caver(
  new Caver.providers.HttpProvider(
    "https://node-api.klaytnapi.com/v1/klaytn",
    // "https://api.baobab.klaytn.net:8651/",
    option
  )
);

const DonationContract = new caver.contract(
  DONATIONABI,
  DONATION_CONTRACT_ADDRESS
);

export const testOwnTokenId = async (address) => {
  const ids = await DonationContract.methods.tokenIds(address).call();
  return ids;
};

export const testTokenId2Description = async (id) => {
  const des = await DonationContract.methods.tokenDescription(id).call();
  return des;
};
export const testTokenId2Name = async (id) => {
  const des = await DonationContract.methods.tokenName(id).call();
  return des;
};

export const testCampaignList = async () => {
  const Number = await DonationContract.methods.CampaignNumber().call();

  const lists = [];
  for (let i = 0; i < Number; i++) {
    const list = await DonationContract.methods.campaignList([i]).call();
    lists.push(list);
  }
  return lists;
};

export const testCampaignNumber = async () => {
  const Number = await DonationContract.methods.CampaignNumber().call();
  console.log(`number:${Number}`);
  return Number;
};

// klip 잔고 조회시 메인넷 chain_id 필요
export const getBalance = (address) => {
  return caver.rpc.klay.getBalance(address).then((response) => {
    const balance = caver.utils.convertFromPeb(
      caver.utils.hexToNumberString(response)
    );
    return balance;
  });
};

import Caver from "caver-js";
import {
  ACCESS_KEY_ID,
  CHAIN_ID,
  DONATION_CONTRACT_ADDRESS,
  SECRET_ACCRESS_KEY,
} from "../constants/constants.cypress";
import DONATIONABI from "../abi/DonationABI.json";

const option = {
  headers: [
    {
      name: "Authorization",
      value:
        "Basic " +
        Buffer.from(ACCESS_KEY_ID + ":" + SECRET_ACCRESS_KEY).toString(
          "base64"
        ),
    },
    {
      name: "x-chain-id",
      value: CHAIN_ID,
    },
  ],
};

const caver = new Caver(
  new Caver.providers.HttpProvider(
    "https://node-api.klaytnapi.com/v1/klaytn",
    // "https://api.baobab.klaytn.net:8651/",
    option
  )
);

const DonationContract = new caver.contract(
  DONATIONABI,
  DONATION_CONTRACT_ADDRESS
);

export const testOwnTokenId = async (address) => {
  const ids = await DonationContract.methods.tokenIds(address).call();
  return ids;
};

export const testTokenId2Description = async (id) => {
  const des = await DonationContract.methods.tokenDescription(id).call();
  return des;
};
export const testTokenId2Name = async (id) => {
  const des = await DonationContract.methods.tokenName(id).call();
  return des;
};

export const testCampaignList = async () => {
  const Number = await DonationContract.methods.CampaignNumber().call();

  const lists = [];
  for (let i = 0; i < Number; i++) {
    const list = await DonationContract.methods.campaignList([i]).call();
    lists.push(list);
  }
  return lists;
};

export const testCampaignNumber = async () => {
  const Number = await DonationContract.methods.CampaignNumber().call();
  console.log(`number:${Number}`);
  return Number;
};

// klip 잔고 조회시 메인넷 chain_id 필요
export const getBalance = (address) => {
  return caver.rpc.klay.getBalance(address).then((response) => {
    const balance = caver.utils.convertFromPeb(
      caver.utils.hexToNumberString(response)
    );
    return balance;
  });
};
