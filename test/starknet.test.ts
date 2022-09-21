import { starknet } from "hardhat";
import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import { BigNumber } from "ethers";
import { Contract } from "typechain";

use(chaiAsPromised);

describe("Contract Testing", () => {
  let Contract: Contract;

  beforeEach(async () => {
  });

  describe("Initialize Contract", async () => {
    it("should initialize foo as zero", async () => {
      expect(await Contract.foo()).to.eq(BigNumber.from(0))
    });
  });
});
