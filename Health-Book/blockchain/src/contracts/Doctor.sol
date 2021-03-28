pragma solidity ^0.6.6;

contract Doctor {

    struct doctorData {
        address id;
        string name;
        string contact;
        string email;
        uint patientCount;
    }

    struct patientData {
        address patientAcc;
        string patientName;
    }


    mapping (address => doctorData) public doctors;
    mapping (address => mapping (uint => patientData)) public patients;


    constructor() public {}

    function addDoctor(address _id, string memory _name, string memory _contact, string memory _email) public {
        doctorData storage d = doctors[msg.sender];
        d.id = _id;
        d.name = _name;
        d.contact = _contact;
        d.email = _email;
        d.patientCount = 0;
    }

    function savePatient(string memory _patientName, address _patientAcc) public {
        doctorData storage d = doctors[msg.sender];
        patients[msg.sender][d.patientCount] = patientData(_patientAcc, _patientName);
        d.patientCount ++;
    }

}