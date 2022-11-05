export const flipperContract = {
  address: "0x6252dC9516792DE316694D863271bd25c07E621B",
  abi: [
    {
      inputs: [
        {
          internalType: "bool",
          name: "initvalue",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "flip",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "get",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
};
