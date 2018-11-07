
let bankBytecode =
"0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610a61806100536000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063263e3d5d146100935780632e1a7d4d146100c057806341c0e1b5146100ed57806371fb551d146101045780637b83b50b1461013b578063a9059cbb14610166578063d0d5d9df146101b3578063d0e30db0146101ca575b600080fd5b34801561009f57600080fd5b506100be600480360381019080803590602001909291905050506101d4565b005b3480156100cc57600080fd5b506100eb6004803603810190808035906020019092919050505061028e565b005b3480156100f957600080fd5b50610102610442565b005b34801561011057600080fd5b506101396004803603810190808035906020019092919080359060200190929190505050610540565b005b34801561014757600080fd5b506101506106c4565b6040518082815260200191505060405180910390f35b34801561017257600080fd5b506101b1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061070b565b005b3480156101bf57600080fd5b506101c86108dd565b005b6101d2610990565b005b606481600154028115156101e457fe5b0460015401600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055503373ffffffffffffffffffffffffffffffffffffffff167faacc1ccd0bc82bd3724adcb89c393ab01b23f67d40704b508f8199eca5d4708f8242604051808381526020018281526020019250505060405180910390a250565b6000670de0b6b3a76400008202905080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610354576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f796f75722062616c616e63657320617265206e6f7420656e6f7567680000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561039a573d6000803e3d6000fd5b5080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff167f5bb95829671915ece371da722f91d5371159095dcabf2f75cd6c53facb7e1bab8342604051808381526020018281526020019250505060405180910390a25050565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610506576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f796f7520617265206e6f74206f776e657200000000000000000000000000000081525060200191505060405180910390fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b6000670de0b6b3a76400008302905080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610606576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f796f75722062616c616e63657320617265206e6f7420656e6f7567680000000081525060200191505060405180910390fd5b806001819055508160028190555080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff167fa8c8bf49e486ce0547990c0354d9b3d2960ff0a6e289906440ca94efcd5ad48f84844260405180848152602001838152602001828152602001935050505060405180910390a2505050565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b6000670de0b6b3a76400008202905080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156107d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f796f75722062616c616e63657320617265206e6f7420656e6f7567680000000081525060200191505060405180910390fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fbabc8cd3bd6701ee99131f374fd2ab4ea66f48dc4e4182ed78fecb0502e44dd68442604051808381526020018281526020019250505060405180910390a3505050565b6064600254600154028115156108ef57fe5b0460015401600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055503373ffffffffffffffffffffffffffffffffffffffff167fe1522f2bac289aa28c2f0ff006daceab59110fcf02a62dab93c9935a939081a2426040518082815260200191505060405180910390a2565b34600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055503373ffffffffffffffffffffffffffffffffffffffff167fad40ae5dc69974ba932d08b0a608e89109412d41d04850f5196f144875ae26603442604051808381526020018281526020019250505060405180910390a25600a165627a7a7230582093caf25c8408ba7936234ea3ae25a665d61eff573acebd2df9d9047c881712ea0029";

let bankAbi = [
               {
               "constant": false,
               "inputs": [
                          {
                          "name": "periods",
                          "type": "uint256"
                          }
                          ],
               "name": "terminateContract",
               "outputs": [],
               "payable": false,
               "stateMutability": "nonpayable",
               "type": "function"
               },
               {
               "constant": false,
               "inputs": [
                          {
                          "name": "etherValue",
                          "type": "uint256"
                          }
                          ],
               "name": "withdraw",
               "outputs": [],
               "payable": false,
               "stateMutability": "nonpayable",
               "type": "function"
               },
               {
               "constant": false,
               "inputs": [],
               "name": "kill",
               "outputs": [],
               "payable": false,
               "stateMutability": "nonpayable",
               "type": "function"
               },
               {
               "constant": false,
               "inputs": [
                          {
                          "name": "etherValue",
                          "type": "uint256"
                          },
                          {
                          "name": "periods",
                          "type": "uint256"
                          }
                          ],
               "name": "buyContractDeposit",
               "outputs": [],
               "payable": false,
               "stateMutability": "nonpayable",
               "type": "function"
               },
               {
               "constant": true,
               "inputs": [],
               "name": "getBankBalance",
               "outputs": [
                           {
                           "name": "",
                           "type": "uint256"
                           }
                           ],
               "payable": false,
               "stateMutability": "view",
               "type": "function"
               },
               {
               "constant": false,
               "inputs": [
                          {
                          "name": "to",
                          "type": "address"
                          },
                          {
                          "name": "etherValue",
                          "type": "uint256"
                          }
                          ],
               "name": "transfer",
               "outputs": [],
               "payable": false,
               "stateMutability": "nonpayable",
               "type": "function"
               },
               {
               "constant": false,
               "inputs": [],
               "name": "contractExpired",
               "outputs": [],
               "payable": false,
               "stateMutability": "nonpayable",
               "type": "function"
               },
               {
               "constant": false,
               "inputs": [],
               "name": "deposit",
               "outputs": [],
               "payable": true,
               "stateMutability": "payable",
               "type": "function"
               },
               {
               "inputs": [],
               "payable": true,
               "stateMutability": "payable",
               "type": "constructor"
               },
               {
               "anonymous": false,
               "inputs": [
                          {
                          "indexed": true,
                          "name": "from",
                          "type": "address"
                          },
                          {
                          "indexed": false,
                          "name": "value",
                          "type": "uint256"
                          },
                          {
                          "indexed": false,
                          "name": "timestamp",
                          "type": "uint256"
                          }
                          ],
               "name": "DepositEvent",
               "type": "event"
               },
               {
               "anonymous": false,
               "inputs": [
                          {
                          "indexed": true,
                          "name": "from",
                          "type": "address"
                          },
                          {
                          "indexed": false,
                          "name": "value",
                          "type": "uint256"
                          },
                          {
                          "indexed": false,
                          "name": "timestamp",
                          "type": "uint256"
                          }
                          ],
               "name": "WithdrawEvent",
               "type": "event"
               },
               {
               "anonymous": false,
               "inputs": [
                          {
                          "indexed": true,
                          "name": "from",
                          "type": "address"
                          },
                          {
                          "indexed": true,
                          "name": "to",
                          "type": "address"
                          },
                          {
                          "indexed": false,
                          "name": "value",
                          "type": "uint256"
                          },
                          {
                          "indexed": false,
                          "name": "timestamp",
                          "type": "uint256"
                          }
                          ],
               "name": "TransferEvent",
               "type": "event"
               },
               {
               "anonymous": false,
               "inputs": [
                          {
                          "indexed": true,
                          "name": "from",
                          "type": "address"
                          },
                          {
                          "indexed": false,
                          "name": "timestamp",
                          "type": "uint256"
                          }
                          ],
               "name": "contractExpiredEvent",
               "type": "event"
               },
               {
               "anonymous": false,
               "inputs": [
                          {
                          "indexed": true,
                          "name": "from",
                          "type": "address"
                          },
                          {
                          "indexed": false,
                          "name": "value",
                          "type": "uint256"
                          },
                          {
                          "indexed": false,
                          "name": "periods",
                          "type": "uint256"
                          },
                          {
                          "indexed": false,
                          "name": "timestamp",
                          "type": "uint256"
                          }
                          ],
               "name": "buyContractDepositEvent",
               "type": "event"
               },
               {
               "anonymous": false,
               "inputs": [
                          {
                          "indexed": true,
                          "name": "from",
                          "type": "address"
                          },
                          {
                          "indexed": false,
                          "name": "periods",
                          "type": "uint256"
                          },
                          {
                          "indexed": false,
                          "name": "timestamp",
                          "type": "uint256"
                          }
                          ],
               "name": "terminateContractEvent",
               "type": "event"
               }
               ];
