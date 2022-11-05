import React, { useState } from "react";
import Uik from "@reef-defi/ui-kit";
import { Init } from "../utils/connect";

const Main = () => {
  const accounts = [
    {
      name: "Test Account 1",
      address: "5CSJtNRJHEazGS4xs5PvmRddTb5xGSwLkhQcs7KAyHAdshpY",
      evmAddress: "0x8Cc9EB01a8B68696768dB0b8D5C6dDF8dE467523",
    },
    {
      name: "Test Account 2",
      address: "5HW5AhtsiFhqN6K2TfZHmanh9kboyuLrCddWpNtBuu2XzVPc",
      evmAddress: "0x9f704566B7A3725f05A434959bA69e97B73c5B66",
    },
    {
      name: "Test Account 3",
      address: "5HKbc94LpExjJQNxKikDM2tyGGt8C9QH1JU96exfHXGGAZ8D",
      evmAddress: "0xAd6f307aCedB1D56fB8B8660861CA1b25592b4A2",
    },
  ];

  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(accounts[0]);

  const handleConnect = async () => {
    await Init();
    setOpen(false);
  };

  const selectAccount = (account) => {
    setSelected(account);
    setOpen(true);
  };
  return (
    <Uik.Container>
      <div>
        <Uik.ReefLogo />{" "}
        <Uik.Text text="Flipper Contract Tutorial" type="headline" />
        <Uik.Divider />
        <Uik.Button
          size="large"
          text="Select Account"
          fill
          onClick={handleConnect}
        />
        <Uik.AccountSelector
          isOpen={isOpen}
          accounts={accounts}
          selectedAccount={selected}
          onClose={() => setOpen(false)}
          onSelect={(account) => selectAccount(account)}
        />
      </div>
    </Uik.Container>
  );
};

export default Main;
