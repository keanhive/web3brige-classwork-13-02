// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract StudentRegistry {
    // Define the Student struct
    struct Student {
        string name;
        uint256 age;
        bool present;
    }

    // State variable: array to store all students
    Student[] public students;

    // Events
    event StudentAdded(uint256 indexed studentId, string name, uint256 age);
    event AttendanceUpdated(uint256 indexed studentId, bool present);

    // Function to add a new student
    function addStudent(string memory _name, uint256 _age) public {
        Student memory newStudent = Student({
            name: _name,
            age: _age,
            present: false
        });

        students.push(newStudent);
        emit StudentAdded(students.length - 1, _name, _age);
    }

    // Function to update attendance
    function updateAttendance(uint256 _studentId, bool _present) public {
        require(_studentId < students.length, "Student does not exist");
        students[_studentId].present = _present;
        emit AttendanceUpdated(_studentId, _present);
    }

    // Helper functions
    function getStudentCount() public view returns (uint256) {
        return students.length;
    }

    function getStudent(uint256 _studentId) public view returns (string memory name, uint256 age, bool present) {
        require(_studentId < students.length, "Student does not exist");
        Student memory student = students[_studentId];
        return (student.name, student.age, student.present);
    }
}