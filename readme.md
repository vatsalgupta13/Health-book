BLOCKCHAIN-BASED ELECTRONIC MEDICAL RECORDS (EMR) MANAGEMENT WITH OCR ASSISTED SUMMARIZATION

A decentralized web application using ReactJS, Flask, Solidity, IPFS and the Ethereum Blockchain to store and view all medical documents securely.

The advantages of having a secure, immutable and decentralized Electronic Health Record (EHR) database:
1. Single version of the truth verified by the consensus of the participating hospitals
2. Easy to share selective or all EHRs as consented by the patient
3. Full medical history of a patient at one single point
4. Easy verification of medical prescription
5. Redacted EHRs for research purposes
6. Increased transparency
7. No insurance fraud


# About the D-App

<b>The Health-Book app has 2 main users:</b>
1. Patient 
2. Doctor

<b>Patients can:</b>
<ol>
<li> Upload a document to the blockchain. The document is added as a node in IPFS which returns a hash. The hash is then stored on the blockchain</li>
<li> View the uploaded documents</li>
<li> Analyse the uploaded documents. The text from the document is extracted and <b>NER</b>(Named Entity Recognition) is performed on the text using <b>BERN</b>(Biomedical Named Entity recognition and multi-type Normalization)</li>
<li> Analyse their reports to find keywords related to <b>Drugs</b> or <b>Diseases</b></li>
<li> Add a trusted doctor to view their medical documents</li>
</ol>

<b>Doctors can:</b>
<ol>
<li> Upload a medical document about a certain patient to the blockchain</li>
<li> View a certain patient's uploaded document</li>
</ol>

# About the Ethereum Blockchain

<img src="https://miro.medium.com/max/16000/1*AReX8uZOZKpGcvuUjogh0g.png" height="210px" width="360px"/>

<b>Ethereum</b> is an open source, public, blockchain-based distributed computing platform and operating system featuring smart contract functionality.

# About the InterPlanetary File System(IPFS)

<img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png" height="330px" width="360px"/>

The <b>InterPlanetary File System</b> is a protocol and peer-to-peer network for storing and sharing data in a distributed file system. IPFS uses content-addressing to uniquely identify each file in a global namespace connecting all computing devices


Tech Stack Used:
-> ReactJS, CSS and Javascript for Front-End
-> Python, Flask for OCR and hosting API
-> PyTesseract for OCR
-> Solidity for Smart Contracts
-> Metamask for simulation
-> Ganache (Truffle Suite) for Test Nodes and simulation
-> IPFS for Database (storing electronic records)
-> Infura API and Web3 for provider

How to run?
1) Install metamask extension on your default browser from https://metamask.io/
2) Download Ganache on your PC from https://www.trufflesuite.com/ganache
3) Install IPFS desktop client from https://github.com/ipfs/ipfs-desktop
4) Clone the repository
5) cd to Health-Book/blockchain
6) do yarn install (recommended) or npm install for downloading the required dependencies
7) Make a new workspace in ganache and add the truffle-config.js file to the workspace
8) in Health-Book/server directory, run python app.py
9) Run IPFS
10) Run Ganache
11) in Health-Book/blockchain do yarn start
12) Enjoy! Your project should be working now.

# References

<a href="https://www.devteam.space/blog/how-can-blockchain-keep-medical-records-secure/">How Can Blockchain Keep Medical Records Secure?</a>