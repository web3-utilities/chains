export interface Metadata {
  name: string
  displayName: string
  icon: string
  whiteIcon: string
  tokenIcon: string
  symbol: string
  decimals: number
  rpc?: string
  explorer: string
}

export const CHAIN_ETHER = 1
export const CHAIN_ETHER_ROPSTEN = 3
export const CHAIN_ETHER_RINKEBY = 4
export const CHAIN_ETHER_GOERLI = 5
export const CHAIN_ETHER_KOVAN = 42

export const CHAIN_POLYGON = 137
export const CHAIN_POLYGON_MUMBAI = 137

export const CHAIN_BSC = 56
export const CHAIN_BSC_TESTNET = 97

export const CHAIN_HECO = 128
export const CHAIN_HECO_TESTNET = 256

export const CHAIN_OK = 66
export const CHAIN_OK_TESTNET = 65

export const CHAIN_HARMONY_0 = 1666600000
export const CHAIN_HARMONY_0_TESTNET = 1666700000 

export const CHAIN_AVALANCHE = 43114
export const CHAIN_AVALANCHE_TESTNET = 43113

export const CHAIN_ETHER_LIST = [CHAIN_ETHER, CHAIN_ETHER_ROPSTEN, CHAIN_ETHER_RINKEBY, CHAIN_ETHER_GOERLI, CHAIN_ETHER_KOVAN]

export const Chains: { [chainID: number]: Metadata } = {
  [CHAIN_ETHER]: {
    name: 'Ethereum',
    displayName: 'Ethereum',
    icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    whiteIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/white/eth.svg',
    tokenIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    symbol: 'ETH',
    decimals: 18,
    explorer: 'https://etherscan.io'
  },
  [CHAIN_ETHER_ROPSTEN]: {
    name: 'Ropsten',
    displayName: 'Ropsten',
    icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    whiteIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/white/eth.svg',
    tokenIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    symbol: 'ETH',
    decimals: 18,
    explorer: 'https://ropsten.etherscan.io'
  },
  [CHAIN_ETHER_KOVAN]: {
    name: 'Kovan',
    displayName: 'Kovan',
    icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    whiteIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/white/eth.svg',
    tokenIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    symbol: 'ETH',
    decimals: 18,
    explorer: 'https://kovan.etherscan.io'
  },
  [CHAIN_ETHER_RINKEBY]: {
    name: 'Rinkeby',
    displayName: 'Rinkeby',
    icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    whiteIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/white/eth.svg',
    tokenIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    symbol: 'ETH',
    decimals: 18,
    explorer: 'https://rinkeby.etherscan.io'
  },
  [CHAIN_ETHER_GOERLI]: {
    name: 'Goerli',
    displayName: 'Goerli',
    icon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    whiteIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/white/eth.svg',
    tokenIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg',
    symbol: 'ETH',
    decimals: 18,
    explorer: 'https://goerli.etherscan.io'
  },
  [CHAIN_POLYGON]: {
    name: 'Matic Mainnet',
    displayName: 'Matic',
    icon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/polygon.png',
    whiteIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/polygon.png',
    tokenIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/polygon.png',
    symbol: 'Matic',
    decimals: 18,
    rpc: 'https://rpc-mainnet.maticvigil.com',
    explorer: 'https://explorer-mainnet.maticvigil.com',
  },
  [CHAIN_POLYGON_MUMBAI]: {
    name: 'Matic Testnet Mumbai',
    displayName: 'Matic Testnet',
    icon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/polygon.png',
    whiteIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/polygon.png',
    tokenIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/polygon.png',
    symbol: 'Matic',
    decimals: 18,
    rpc: 'https://rpc-mumbai.maticvigil.com',
    explorer: 'https://explorer-mumbai.maticvigil.com',
  },
  [CHAIN_HECO]: {
    name: 'Huobi ECO Chain Mainnet',
    displayName: 'Heco',
    icon: '',
    whiteIcon: '',
    tokenIcon: '',
    symbol: 'HT',
    decimals: 18,
    rpc: 'https://http-mainnet.hecochain.com',
    explorer: 'https://hecoinfo.com',
  },
  [CHAIN_HECO_TESTNET]: {
    name: 'Huobi ECO Chain Testnet',
    displayName: 'Heco Testnet',
    icon: '',
    whiteIcon: '',
    tokenIcon: '',
    symbol: 'HT',
    decimals: 18,
    rpc: 'https://http-testnet.hecochain.com',
    explorer: 'https://testnet.hecoinfo.com',
  },
  [CHAIN_BSC]: {
    name: 'Binance Smart Chain Mainnet',
    displayName: 'BSC',
    icon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/bsc.png',
    whiteIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/white/bnb.svg',
    tokenIcon: 'https://raw.githubusercontent.com/trustwallet/assets/0e16182d4d7c712e3ac79e2bc2ac18684eef1053/blockchains/binance/info/logo.png',
    symbol: 'BNB',
    decimals: 18,
    rpc: 'https://bsc-dataseed1.binance.org',
    explorer: 'https://bscscan.com',
  },
  [CHAIN_BSC_TESTNET]: {
    name: 'Binance Smart Chain Testnet',
    displayName: 'BSC Testnet',
    icon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/bsc.png',
    whiteIcon: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/white/bnb.svg',
    tokenIcon: 'https://raw.githubusercontent.com/trustwallet/assets/0e16182d4d7c712e3ac79e2bc2ac18684eef1053/blockchains/binance/info/logo.png',
    symbol: 'BNB',
    decimals: 18,
    rpc: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    explorer: 'https://testnet.bscscan.com',
  },
  [CHAIN_OK_TESTNET]: {
    name: 'OKExChain Testnet',
    displayName: 'OKC Testnet',
    icon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/okc.png',
    whiteIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/okc.png',
    tokenIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/okc.png',
    symbol: 'OKT',
    decimals: 18,
    rpc: 'https://exchaintest.okexcn.com',
    explorer: 'https://www.oklink.com/okexchain-test',
  },
  [CHAIN_OK]: {
    name: 'OKExChain Mainnet',
    displayName: 'OKC',
    icon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/okc.png',
    whiteIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/okc.png',
    tokenIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/okc.png',
    symbol: 'OKT',
    decimals: 18,
    rpc: 'https://exchainrpc.okex.org',
    explorer: 'https://www.okex.com/okexchain'
  },
  [CHAIN_HARMONY_0]: {
    name: 'Harmony Mainnet Shard 0',
    displayName: 'Harmony0',
    icon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/harmony.svg',
    whiteIcon: '',
    tokenIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/harmony.svg',
    symbol: 'ONE',
    decimals: 18,
    rpc: 'https://api.harmony.one',
    explorer: 'https://explorer.harmony.one',
  },
  [CHAIN_HARMONY_0_TESTNET]: {
    name: 'Harmony Testnet Shard 0',
    displayName: 'Harmony0 Testnet',
    icon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/harmony.svg',
    whiteIcon: '',
    tokenIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/harmony.svg',
    symbol: 'ONE',
    decimals: 18,
    rpc: 'https://api.s0.b.hmny.io',
    explorer: 'https://explorer.pops.one',
  },
  [CHAIN_AVALANCHE]: {
    name: 'Avalanche Mainnet',
    displayName: 'Avalanche',
    icon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/avalanche.svg',
    whiteIcon: '',
    tokenIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/avalanche.svg',
    symbol: 'AVAX',
    decimals: 18,
    rpc: 'https://api.avax.network/ext/bc/C/rpc',
    explorer: 'https://cchain.explorer.avax.network/',
  },
  [CHAIN_AVALANCHE_TESTNET]: {
    name: 'Avalanche Fuji Testnet',
    displayName: 'Avalanche Testnet',
    icon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/avalanche.svg',
    whiteIcon: '',
    tokenIcon: 'https://raw.githubusercontent.com/web3-utilities/assets/main/chains/avalanche.svg',
    symbol: 'AVAX',
    decimals: 18,
    rpc: 'https://api.avax-test.network/ext/bc/C/rpc',
    explorer: 'https://cchain.explorer.avax-test.network',
  },
}
