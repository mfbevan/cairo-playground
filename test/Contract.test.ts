import { starknet } from "hardhat";
import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import { Account, StarknetContract } from "hardhat/types";

use(chaiAsPromised);

describe("Contract Testing", () => {
  let contract: StarknetContract;
  let account: Account;

  beforeEach(async () => {
    const allAccounts = await starknet.devnet.getPredeployedAccounts();
    account = await starknet.getAccountFromAddress(
      allAccounts[1].address,
      allAccounts[1].private_key,
      "OpenZeppelin"
    );

    const contractFactory = await starknet.getContractFactory("Contract");
    contract = await contractFactory.deploy();
  });

  describe("account", async () => {
    it("should be deployed", async () => {
      expect(account.address).to.be.properHex(64);
    });
  });

  describe("balance", async () => {
    it("should be initialised to 0", async () => {
      const {res} = await contract.call("get_balance");
      expect(res).to.deep.equal(0);
    })
  })
  describe("increase_balance", async () => {
    it("should increase the balance by amount", async () => {
      const { res: initial } = await contract.call("get_balance");
      expect(initial).to.deep.equal(BigInt(0))

      await account.invoke(contract, "increase_balance", { amount: 10 }, {});

      const { res } = await contract.call("get_balance");
      expect(res).to.deep.equal(BigInt(10));
    });
  });

  describe("decrease_balance", async () => {
    it("should decrease the balance by amount", async () => {
      await account.invoke(contract, "increase_balance", { amount: 10 }, {});
      const { res: initial } = await contract.call("get_balance");
      expect(initial).to.deep.equal(BigInt(10))

      await account.invoke(contract, "decrease_balance", { amount: 5 }, {});
    
      const { res } = await contract.call("get_balance");
      expect(res).to.deep.equal(BigInt(5));
    });
  });
});
