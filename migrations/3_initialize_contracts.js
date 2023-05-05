const AccessControl = artifacts.require("AccessControl");
const FileStorage = artifacts.require("FileStorage");
const Profile = artifacts.require("Profile");
const Project = artifacts.require("Project");
const StudentGroup = artifacts.require("StudentGroup");

module.exports = async function (deployer, network, accounts) {
  const accessControlInstance = await AccessControl.deployed();
  const fileStorageInstance = await FileStorage.deployed();
  const profileInstance = await Profile.deployed();
  const projectInstance = await Project.deployed();
  const studentGroupInstance = await StudentGroup.deployed();

  // Set the admin role for the deployer
await accessControlInstance.setupRole(accessControlInstance.ADMIN_ROLE, accounts[0], { from: accounts[0] });

// Grant the FileStorage contract the FILE_ROLE
await accessControlInstance.grantRole(accessControlInstance.FILE_ROLE, fileStorageInstance.address, { from: accounts[0] });

// Grant the Profile contract the PROFILE_ROLE
await accessControlInstance.grantRole(accessControlInstance.PROFILE_ROLE, profileInstance.address, { from: accounts[0] });

// Grant the Project contract the PROJECT_ROLE
await accessControlInstance.grantRole(accessControlInstance.PROJECT_ROLE, projectInstance.address, { from: accounts[0] });

// Grant the StudentGroup contract the GROUP_ROLE
await accessControlInstance.grantRole(accessControlInstance.GROUP_ROLE, studentGroupInstance.address, { from: accounts[0] });

  // Initialize contracts

  // Initialize Profile contract
  await profileInstance.initialize(accessControlInstance.address, { from: accounts[0] });

  // Initialize Project contract
  await projectInstance.initialize(accessControlInstance.address, { from: accounts[0] });

  // Initialize StudentGroup contract
  await studentGroupInstance.initialize(accessControlInstance.address, { from: accounts[0] });

  // Initialize FileStorage contract
  await fileStorageInstance.initialize(accessControlInstance.address, { from: accounts[0] });
};
