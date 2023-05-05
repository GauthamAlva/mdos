const AccessControl = artifacts.require("AccessControl");
const FileStorage = artifacts.require("FileStorage");
const Profile = artifacts.require("Profile");
const Project = artifacts.require("Project");
const StudentGroup = artifacts.require("StudentGroup");

module.exports = function (deployer) {
  deployer.deploy(AccessControl);
  deployer.deploy(FileStorage);
  deployer.deploy(Profile);
  deployer.deploy(Project);
  deployer.deploy(StudentGroup);
};