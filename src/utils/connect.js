import { Provider, Signer } from "@reef-defi/evm-provider";
import { web3Accounts, web3Enable } from "@reef-defi/extension-dapp";
import { WsProvider } from "@polkadot/rpc-provider";

let provider;

const REEF_TESTNET_RPC = "wss://rpc-testnet.reefscan.com/ws";

export const Init = async () => {
  const extensions = await web3Enable("flipper");
  const accs = await web3Accounts();
  return {
    errorCode: extensions.length === 0 ? 1 : accs.length === 0 ? 2 : 0,
    accounts: accs,
  };
};

export const Interact = async (address = null) => {
  // Get address if already in local storage/ logged in
  if (!address)
    address = JSON.parse(localStorage.getItem("auth"))?.auth.address;

  // Get injected signer
  const allInjected = await web3Enable("flipper");
  const injected = allInjected[0].signer;

  // If provider does not exist, initialize it
  if (!provider)
    provider = new Provider({
      provider: new WsProvider(REEF_TESTNET_RPC),
      types: {
        AccountInfo: "AccountInfoWithTripleRefCount",
      },
    });
  await provider.api.isReady;

  // Get signer from provider
  const signer = new Signer(provider, address, injected);

  return {
    signer,
    provider,
  };
};
