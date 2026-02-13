import { ethers } from "hardhat";

async function main() {
    console.log("Deploying StudentRegistry contract...");

    const StudentRegistry = await ethers.getContractFactory("StudentRegistry");
    const studentRegistry = await StudentRegistry.deploy();

    await studentRegistry.waitForDeployment();

    const address = await studentRegistry.getAddress();
    console.log("StudentRegistry deployed to:", address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });