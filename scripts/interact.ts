import { ethers } from "hardhat";

async function main() {
    // Replace with your deployed contract address
    const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

    const StudentRegistry = await ethers.getContractFactory("StudentRegistry");
    const studentRegistry = StudentRegistry.attach(contractAddress);

    console.log("Adding students...");

    // Add first student
    let tx = await studentRegistry.addStudent("Alice", 20);
    await tx.wait();
    console.log("Added Alice");

    // Add second student
    tx = await studentRegistry.addStudent("Bob", 22);
    await tx.wait();
    console.log("Added Bob");

    // Get student count
    const count = await studentRegistry.getStudentCount();
    console.log("Total students:", count.toString());

    // Update attendance for Alice (studentId = 0)
    tx = await studentRegistry.updateAttendance(0, true);
    await tx.wait();
    console.log("Updated Alice's attendance to present");

    // Get Alice's details
    const alice = await studentRegistry.getStudent(0);
    console.log("Alice's details:", {
        name: alice.name,
        age: alice.age.toString(),
        present: alice.present
    });
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });