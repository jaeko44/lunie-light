export default {
  id: 'virtengine', // DEPRECATE, only used for Lunie extension, NOT CHAIN ID
  name: 'VirtEngine Network',
  description: 'VirtEngine is a decentralized Cloud Marketplace.',
  logo: `logo.svg`,
  website: 'https://virtengine.com',
  apiURL: 'http://localhost:8010/proxy', // use `npx lcp --proxyUrl http://34.123.30.100:1317`
  rpcURL: 'ws://3.24.151.42:26657',
  stakingDenom: 'VE',
  coinLookup: [
    {
      viewDenom: 'VE',
      chainDenom: 'uve',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/muon.png`,
    },
  ],
  addressPrefix: 'virtengine',
  validatorAddressPrefix: 'virtenginevaloper',
  validatorConsensusaddressPrefix: 'virtenginevalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `3 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'VE',
          amount: 0.001,
        },
      ],
    },
  },
  icon: `https://lunie.fra1.digitaloceanspaces.com/network-icons/cosmos.png`,

  // This is only to be used as a developer tool and for testing purposes
  // NEVER ENABLE LOCALSIGNING IN PRODUCTION OR FOR MAINNETS
  localSigning: false,
}
