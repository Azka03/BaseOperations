const { expect } = require("chai");
const { ethers } = require("hardhat");
const chai = require("chai");
const hre = require("hardhat");
const {BigNumber} = hre.ethers;

describe("MathExtended", async function () {

    let contractFactory;
    let contract;
    let owner;

    beforeEach(async () => {
        contractFactory = await ethers.getContractFactory("MathExtended");
        contract = await contractFactory.deploy();
        [owner] = await ethers.getSigners();        
    });


    it("Should add two numbers", async function(){
        const res=await contract.add(2,6);
        // console.log(res, "res");
        expect(res).to.equal(8);
    });

    it("Should check Prime Number - (Not a prime number)", async function(){
        const res=await contract.isPrime(4);
        expect(res).to.equal(false);
    });

    it("Should check Prime Number - (Prime Number)", async function(){
        const res=await contract.isPrime(7);
        expect(res).to.equal(true);
    });

    it("Should add two numbers and divide by third", async function(){
        const res=await contract.mulDiv(2,6,3);  
        // console.log(res); //state variable, await  
        // const getNumber = await contract.res();
        // console.log("getNumber", getNumber)
        // expect(getNumber).to.equal(40000);
        expect(res).to.equal(40000);

    });

    it("Should not add two numbers and divide by third (0)", async function(){ 
        await expect(contract.mulDiv(2,6,0)).to.be.revertedWith("Value 3 cannot be 0")
        // const res=await contract.mulDiv(2,6,0);  
    });

    it("Should add numbers in an array", async function(){
        const res=await contract.addBulk([1,4,5]);
        expect(res).to.equal(10);
    });

    it("Should return GCD", async function(){
        const res=await contract.getGcd(60,40);
        expect(res).to.equal(20);
    });

    it("Should swap two numbers", async function(){
        const res=await contract.swapAwesome(80,40);
        expect(res[0].toNumber()).to.eql(40); //Multiple values return
        expect(res[1].toString()).to.eql("80");
    });
});