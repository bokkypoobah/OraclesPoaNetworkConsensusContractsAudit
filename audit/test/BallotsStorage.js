var bsOutput={
   "contracts" : {
      "BallotsStorage.sol:BallotsStorage" : {
         "abi" : "[{\"constant\":true,\"inputs\":[{\"name\":\"_ballotType\",\"type\":\"uint8\"}],\"name\":\"getBallotThreshold\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newValue\",\"type\":\"uint256\"},{\"name\":\"_thresholdType\",\"type\":\"uint8\"}],\"name\":\"setThreshold\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"proxyStorage\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getTotalNumberOfValidators\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getVotingToChangeThreshold\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getProxyThreshold\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_proxyStorage\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}]",
         "bin" : "6060604052341561000f57600080fd5b6040516020806104228339810160405280805160008054600160a060020a031916600160a060020a0392909216919091178155600160205260037fcc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f5560028082527fd9d16d34ffb15ba3a3d852f0d403e2ce1d691fb54de27ac87cd2f993f3ec330f5561037e92508291506100a490396000f30060606040526004361061005e5763ffffffff60e060020a6000350416632ffdfc8a8114610063578063742941441461008e578063ae4b1b5b146100ac578063bf7370d1146100db578063d1104cb2146100ee578063eecd107914610101575b600080fd5b341561006e57600080fd5b61007c60ff60043516610114565b60405190815260200160405180910390f35b341561009957600080fd5b6100aa60043560ff60243516610129565b005b34156100b757600080fd5b6100bf6101b2565b604051600160a060020a03909116815260200160405180910390f35b34156100e657600080fd5b61007c6101c1565b34156100f957600080fd5b6100bf61028d565b341561010c57600080fd5b61007c6102f4565b60ff1660009081526001602052604090205490565b61013161028d565b600160a060020a031633600160a060020a031614151561015057600080fd5b600060ff82161161016057600080fd5b600260ff8216111561017157600080fd5b600082118015610193575060ff81166000908152600160205260409020548214155b151561019e57600080fd5b60ff16600090815260016020526040902055565b600054600160a060020a031681565b600080548190600160a060020a0316638b8414c482604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b151561020b57600080fd5b6102c65a03f1151561021c57600080fd5b5050506040518051915050600160a060020a0381166340c9cdeb6000604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b151561026d57600080fd5b6102c65a03f1151561027e57600080fd5b50505060405180519250505090565b60008054600160a060020a031663a3b3fff182604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156102d557600080fd5b6102c65a03f115156102e657600080fd5b505050604051805191505090565b6000610320600161031460026103086101c1565b9063ffffffff61032516565b9063ffffffff61033c16565b905090565b600080828481151561033357fe5b04949350505050565b60008282018381101561034b57fe5b93925050505600a165627a7a72305820d7a6ffa15919b32525d29e9fab4e542b88ea5183c6290a0735388553d3694f120029"
      },
      "SafeMath.sol:SafeMath" : {
         "abi" : "[]",
         "bin" : "60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a72305820b29ec3e37eafd2066bde0ae9074eba614d1f2e0097d8986ddcf70a97570000d10029"
      },
      "interfaces/IBallotsStorage.sol:IBallotsStorage" : {
         "abi" : "[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"name\":\"getBallotThreshold\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint8\"}],\"name\":\"setThreshold\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getTotalNumberOfValidators\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getVotingToChangeThreshold\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getProxyThreshold\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]",
         "bin" : ""
      },
      "interfaces/IPoaNetworkConsensus.sol:IPoaNetworkConsensus" : {
         "abi" : "[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"pendingList\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"removeValidator\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"currentValidatorsLength\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getPendingList\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"addValidator\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"finalizeChange\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"currentValidators\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"finalized\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getValidators\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"systemAddress\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"isValidator\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]",
         "bin" : ""
      },
      "interfaces/IProxyStorage.sol:IProxyStorage" : {
         "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"address\"}],\"name\":\"initializeAddresses\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBallotsStorage\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getVotingToChangeKeys\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getPoaConsensus\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getKeysManager\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getVotingToChangeMinThreshold\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"address\"}],\"name\":\"setContractAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
         "bin" : ""
      }
   },
   "version" : "0.4.18+commit.9cf6e910.Darwin.appleclang"
};