require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note machine upset grace hat army gas'; 
let testAccounts = [
"0xac5fe97275dde2bca5cfde1881edf34122f54607e661b995d455b375064809ac",
"0x9d034032f42ba4c403ea47445d84d7f0075b064f824326014cad7283f0b354ab",
"0xa446651e26ba0b65e4208259caf8c4f7782b82fd2106aef71e8db58df0f2c5d1",
"0x65badd30561b406fed120d4753ddd000f253247b82c295194f28f4b51c6da2a1",
"0x647ca9ac9ff82de753d530ea917ae73a027195a506c8f6b16adf35f1e0681ecb",
"0xe28ebe5dd72aa3ef1f1b38d84cb6249aa78cdbaf9eab59701af8ed4f8b421701",
"0xfdf069ce7bc87afed77a5f7273c6e6d59ebddec7fdaa4a6a039a0e80872eb32b",
"0x6dd5c78a6e7845c497fed0b8c7592ba0f1ec591e7d5d076b452d8e005349ed18",
"0x30574565daa688ece599f6cdc8eddb825d44172bc4d6bb4ac613556209afd67a",
"0xe845d00813133cd578f5dac896394a9c7797d13ed589601bf2466e5f9bc10402"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


