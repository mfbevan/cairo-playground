import { starknet } from "hardhat";
import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import { Account, StarknetContract } from "hardhat/types";

use(chaiAsPromised);

describe("Contract Testing", () => {
  let contract: StarknetContract;
  let account: Account;
  let otherAccount: Account;

  beforeEach(async () => {
    const allAccounts = await starknet.devnet.getPredeployedAccounts();
    account = await starknet.getAccountFromAddress(
      allAccounts[1].address,
      allAccounts[1].private_key,
      "OpenZeppelin"
    );
    otherAccount = await starknet.getAccountFromAddress(
      allAccounts[2].address,
      allAccounts[2].private_key,
      "OpenZeppelin"
    );

    const contractFactory = await starknet.getContractFactory("Contract");
    contract = await contractFactory.deploy({
      owner_address: account.address,
    });
  });

  describe("account", () => {
    it("should be deployed", async () => {
      expect(account.address).to.be.properHex(63);
    });
  });

  describe("on deploy", () => {
    it("should set the contract owner", async () => {
      const { address } = await contract.call("get_owner");
      expect(address).to.deep.equal(account.address);
    });
  });

  describe("balance", () => {
    it("should be initialised to 0", async () => {
      const { res } = await contract.call("get_balance");
      expect(res).to.deep.equal(0);
    });
  });

  describe("increase_balance", () => {
    it("should increase the balance by amount", async () => {
      const { res: initial } = await contract.call("get_balance");
      expect(initial).to.deep.equal(BigInt(0));

      await account.invoke(contract, "increase_balance", { amount: 10 });

      const { res } = await contract.call("get_balance");
      expect(res).to.deep.equal(BigInt(10));
    });
    it("should fail if not the contract owner", async () => {
      try {
        await otherAccount.invoke(contract, "increase_balance", { amount: 10 });
        expect.fail("Should have failed on invalid account");
      } catch (err: any) {
        expect(err.message).to.deep.contain(
          "caller account is not contract owner"
        );
      }
    });
  });

  describe("decrease_balance", async () => {
    it("should decrease the balance by amount", async () => {
      await account.invoke(contract, "increase_balance", { amount: 10 });
      const { res: initial } = await contract.call("get_balance");
      expect(initial).to.deep.equal(BigInt(10));

      await account.invoke(contract, "decrease_balance", { amount: 5 });

      const { res } = await contract.call("get_balance");
      expect(res).to.deep.equal(BigInt(5));
    });
    it("should fail if not the contract owner", async () => {
      try {
        await otherAccount.invoke(contract, "decrease_balance", { amount: 10 });
        expect.fail("Should have failed on invalid account");
      } catch (err: any) {
        expect(err.message).to.deep.contain(
          "caller account is not contract owner"
        );
      }
    });
  });
});
