
let bankBytecode =
"0x608060405260008054600160a060020a0319163317905561085d806100256000396000f30060806040526004361061008d5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663263e3d5d81146100925780632e1a7d4d146100ac57806341c0e1b5146100c457806371fb551d146100d95780637b83b50b146100f4578063a9059cbb1461011b578063d0d5d9df1461014c578063d0e30db014610161575b600080fd5b34801561009e57600080fd5b506100aa600435610169565b005b3480156100b857600080fd5b506100aa6004356102df565b3480156100d057600080fd5b506100aa6103d8565b3480156100e557600080fd5b506100aa600435602435610462565b34801561010057600080fd5b506101096105b8565b60408051918252519081900360200190f35b34801561012757600080fd5b506100aa73ffffffffffffffffffffffffffffffffffffffff600435166024356105cb565b34801561015857600080fd5b506100aa6106bc565b6100aa6107d9565b6001546000106101c3576040805160e560020a62461bcd02815260206004820152601960248201527f4e6f206d6f6e657920636f6e7472616374206465706f73697400000000000000604482015290519081900360640190fd5b6000811161021b576040805160e560020a62461bcd02815260206004820152600b60248201527f706572696f64203c3d2030000000000000000000000000000000000000000000604482015290519081900360640190fd5b6002548110610274576040805160e560020a62461bcd02815260206004820152601960248201527f706572696f64203e3d20636f6e7472616374506572696f647300000000000000604482015290519081900360640190fd5b6001805433600081815260036020908152604080832080546064898802049096019095019094559381905560025581518481524293810193909352815190927faacc1ccd0bc82bd3724adcb89c393ab01b23f67d40704b508f8199eca5d4708f92908290030190a250565b33600090815260036020526040902054670de0b6b3a7640000820290811115610352576040805160e560020a62461bcd02815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b604051339082156108fc029083906000818181858888f1935050505015801561037f573d6000803e3d6000fd5b5033600081815260036020908152604091829020805485900390558151858152429181019190915281517f5bb95829671915ece371da722f91d5371159095dcabf2f75cd6c53facb7e1bab929181900390910190a25050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610447576040805160e560020a62461bcd02815260206004820152601160248201527f796f7520617265206e6f74206f776e6572000000000000000000000000000000604482015290519081900360640190fd5b60005473ffffffffffffffffffffffffffffffffffffffff16ff5b33600090815260036020526040902054670de0b6b3a76400008302908111156104d5576040805160e560020a62461bcd02815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b60025415610553576040805160e560020a62461bcd02815260206004820152602360248201527f596f7520616c72656164792068617665206120436f6e7472616374204465706f60448201527f7369740000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b6001819055600282905533600081815260036020908152604091829020805485900390558151868152908101859052428183015290517fa8c8bf49e486ce0547990c0354d9b3d2960ff0a6e289906440ca94efcd5ad48f9181900360600190a2505050565b3360009081526003602052604090205490565b33600090815260036020526040902054670de0b6b3a764000082029081111561063e576040805160e560020a62461bcd02815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b3360008181526003602090815260408083208054869003905573ffffffffffffffffffffffffffffffffffffffff8716808452928190208054860190558051868152429281019290925280519293927fbabc8cd3bd6701ee99131f374fd2ab4ea66f48dc4e4182ed78fecb0502e44dd69281900390910190a3505050565b600154600010610716576040805160e560020a62461bcd02815260206004820152601960248201527f4e6f206d6f6e657920636f6e7472616374206465706f73697400000000000000604482015290519081900360640190fd5b600254600010610770576040805160e560020a62461bcd02815260206004820152600b60248201527f706572696f64203c3d2030000000000000000000000000000000000000000000604482015290519081900360640190fd5b6002805460018054336000818152600360209081526040808320805460649887029890980490950190960190935592839055919093558151428152915190927fe1522f2bac289aa28c2f0ff006daceab59110fcf02a62dab93c9935a939081a2928290030190a2565b336000818152600360209081526040918290208054349081019091558251908152429181019190915281517fad40ae5dc69974ba932d08b0a608e89109412d41d04850f5196f144875ae2660929181900390910190a25600a165627a7a72305820485cfd96381e28c52b6055962bb0b217a1d74faf7f8ba6bab29ed89de40ede510029";

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
