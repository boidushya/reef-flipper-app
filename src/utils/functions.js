import { ethers } from "ethers";
import { Interact } from "./connect";
import { flipperContract } from "./constants";

const contract = (signerOrProvider) =>
  new ethers.Contract(
    flipperContract.address,
    flipperContract.abi,
    signerOrProvider
  );

export const toggleValue = async (positionId) => {
  try {
    // Getting signer value from Interact function
    const { signer } = await Interact();

    // Instantiating from signer
    const instance = contract(signer);

    // Getting the transaction hash and returning the receipt after completed.
    const tx = await instance.flip();
    const receipt = await tx.wait();
    return receipt;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getValue = async (positionId) => {
  try {
    // Getting signer value from Interact function
    const { signer } = await Interact();

    // Instantiating from signer
    const instance = contract(signer);

    // Getting the value and returning it.
    const value = await instance.get();
    return value;
  } catch (error) {
    console.error(error);
    return null;
  }
};
