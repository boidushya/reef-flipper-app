import { Provider, Signer } from "@reef-defi/evm-provider";
import { WsProvider } from "@polkadot/api";
import { web3Enable } from "@reef-defi/extension-dapp";

let provider;

const REEF_TESTNET_RPC = "wss://rpc-testnet.reefscan.com/ws";

export const Interact = async (address = null) => {
  if (!address)
    address = JSON.parse(localStorage.getItem("auth"))?.auth.address;
  const allInjected = await web3Enable("Sqwid");
  const injected = allInjected[0].signer;
  if (!provider)
    provider = new Provider({
      provider: new WsProvider(REEF_TESTNET_RPC),
      types: {
        AccountInfo: "AccountInfoWithTripleRefCount",
      },
    });
  await provider.api.isReady;

  const signer = new Signer(provider, address, injected);

  return {
    signer,
    provider,
  };
};
