export interface Metadata {
  name: string
  symbol: string
  decimals: number
  rpc: string
  explorer: string
}

export const Chains: { [chainID: number]: Metadata } = {
  1: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
    rpc: 'https://mainnet.infura.io/v3/',
    explorer: 'https://etherscan.io'
  },
  3: {
    name: 'Ropsten',
    symbol: 'ETH',
    decimals: 18,
    rpc: 'https://ropsten.infura.io/v3/',
    explorer: 'https://ropsten.etherscan.io'
  },
  42: {
    name: 'Kovan',
    symbol: 'ETH',
    decimals: 18,
    rpc: 'https://kovan.infura.io/v3/',
    explorer: 'https://kovan.etherscan.io'
  },
  4: {
    name: 'Rinkeby',
    symbol: 'ETH',
    decimals: 18,
    rpc: 'https://rinkeby.infura.io/v3/',
    explorer: 'https://rinkeby.etherscan.io'
  },
  5: {
    name: 'Goerli',
    symbol: 'ETH',
    decimals: 18,
    rpc: 'https://goerli.infura.io/v3/',
    explorer: 'https://goerli.etherscan.io'
  },
  137: {
    name: 'Matic Network',
    symbol: 'Matic',
    decimals: 18,
    rpc: 'https://rpc-mainnet.maticvigil.com',
    explorer: 'https://explorer-mainnet.maticvigil.com',
  },
  80001: {
    name: 'Mumbai',
    symbol: 'Matic',
    decimals: 18,
    rpc: 'https://rpc-mumbai.maticvigil.com',
    explorer: 'https://explorer-mumbai.maticvigil.com',
  },
  128: {
    name: 'HecoChain MainNetwork',
    symbol: 'HT',
    decimals: 18,
    rpc: 'https://http-mainnet.hecochain.com',
    explorer: 'https://hecoinfo.com',
  },
  256: {
    name: 'HecoChain TestNetwork',
    symbol: 'ETH',
    decimals: 18,
    rpc: 'https://http-testnet.hecochain.com',
    explorer: 'https://testnet.hecoinfo.com',
  },
  56: {
    name: 'Binance Smart Chain',
    symbol: 'BNB',
    decimals: 18,
    rpc: 'https://bsc-dataseed1.binance.org',
    explorer: 'https://bscscan.com',
  },
  97: {
    name: 'Binance Smart Chain Test Network',
    symbol: 'BNB',
    decimals: 18,
    rpc: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    explorer: 'https://testnet.bscscan.com',
  },
  65: {
    name: 'OKExChain Testnet',
    symbol: 'OKT',
    decimals: 18,
    rpc: 'https://exchaintest.okexcn.com',
    explorer: 'https://www.oklink.com/okexchain-test',
  },
  66: {
    name: 'OKExChain Mainnet',
    symbol: 'OKT',
    decimals: 18,
    rpc: 'https://exchainrpc.okex.org',
    explorer: 'https://www.okex.com/okexchain'
  },
  1666600000: {
    name: 'Harmony Mainnet Shard 0',
    symbol: 'ONE',
    decimals: 18,
    rpc: 'https://api.harmony.one',
    explorer: 'https://explorer.harmony.one',
  },
}
