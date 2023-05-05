import  getWeb3 from "./getWeb3";
import AccessControl from "../src/abis/AccessControl.json";
import FileStorage from "../src/abis/FileStorage.json";
import StudentGroup from "../src/abis/StudentGroup.json";
import Project from "../src/abis/Project.json";
import Profile from "../src/abis/Profile.json";

export const getContractInstance = async (contractName) => {
  const web3 = await getWeb3();
  const networkId = await web3.eth.net.getId();

  let contractJson;

  switch (contractName) {
    case "AccessControl":
      contractJson = AccessControl;
      break;
    case "FileStorage":
      contractJson = FileStorage;
      break;
    case "StudentGroup":
      contractJson = StudentGroup;
      break;
    case "Project":
      contractJson = Project;
      break;
    case "Profile":
      contractJson = Profile;
      break;
    default:
      throw new Error("Contract not found");
  }

  const deployedNetwork = contractJson.networks[networkId];
  return new web3.eth.Contract(contractJson.abi, deployedNetwork && deployedNetwork.address);
};
