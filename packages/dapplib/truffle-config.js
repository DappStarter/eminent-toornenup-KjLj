require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth spider unknown include industry fortune turtle'; 
let testAccounts = [
"0x6edbb6c959610a6248abcc4ca2ebcd03b9ef886a35da99d2aeb387034d7ecbe3",
"0x47ebee7e26226b16981f28becd14e4931d879c432ce750d9fb83a828ffc2fbe8",
"0xa472cceca8b12fce5063c53f7690e7ed542a62f01ca09e3d7282462b010b11d6",
"0xcd49c5d2c3825817f8da2583ef61c496e002ab05a4fe52a12754ff46fa98c5ea",
"0x68f8456eb6a981db16f4cba514b92dc16b99e79391c1a27065ee8a5fd311ad1a",
"0x27cf09e6e9b4b5d1e240420f3cf4137d0101971fe609c81172759570ae962adc",
"0x9bec0e832b3d178f0e7754069914dc96652794313a6b00f9340e2c80f917d2b2",
"0x73dde21135f32fe94f27fcfe36b604eb9fc45108f53d9af7499a17a8b0d9b5f5",
"0xbfb98d75bfa1777470fa2272e446aa6dabd91aea84db748fc2397a9b458472f8",
"0xd408969e52b0c19a0b0d8f4d7852794e9476c7c365e7109befb0d7c1220e893c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

