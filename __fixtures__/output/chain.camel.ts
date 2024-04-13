export interface Peer {
  id: string;
  address: string;
  provider?: string;
}
export interface Endpoint {
  address: string;
  provider?: string;
  archive?: boolean;
}
export interface Explorer {
  kind?: string;
  url?: string;
  txPage?: string;
  accountPage?: string;
}
export interface FeeToken {
  denom: string;
  fixedMinGasPrice?: number;
  lowGasPrice?: number;
  averageGasPrice?: number;
  highGasPrice?: number;
  gasCosts?: {
    cosmosSend?: number;
    ibcTransfer?: number;
  };
}
export interface StakingToken {
  denom: string;
}
export interface Pointer {
  chainName: string;
  baseDenom?: string;
}
export interface CosmosChain {
  schema?: string;
  chainName: string;
  chainId: string;
  preForkChainName?: string;
  prettyName?: string;
  website?: string;
  updateLink?: string;
  status?: any;
  networkType?: any;
  bech32Prefix: string;
  bech32Config?: {
    bech32PrefixAccAddr?: string;
    bech32PrefixAccPub?: string;
    bech32PrefixValAddr?: string;
    bech32PrefixValPub?: string;
    bech32PrefixConsAddr?: string;
    bech32PrefixConsPub?: string;
  };
  daemonName?: string;
  nodeHome?: string;
  keyAlgos?: string[];
  slip44?: number;
  alternativeSlip44s?: number[];
  fees?: {
    feeTokens: FeeToken[];
  };
  staking?: {
    stakingTokens: StakingToken[];
    lockDuration?: {
      blocks?: number;
      time?: string;
    };
  };
  codebase?: {
    gitRepo?: string;
    recommendedVersion?: string;
    goVersion?: string;
    compatibleVersions?: string[];
    binaries?: {
      "linux/amd64"?: string;
      "linux/arm64"?: string;
      "darwin/amd64"?: string;
      "darwin/arm64"?: string;
      "windows/amd64"?: string;
      "windows/arm64"?: string;
    };
    cosmosSdkVersion?: string;
    consensus?: {
      type: string;
      version?: string;
    };
    cosmwasmVersion?: string;
    cosmwasmEnabled?: boolean;
    cosmwasmPath?: string;
    ibcGoVersion?: string;
    icsEnabled?: string[];
    genesis?: {
      name?: string;
      genesisUrl: string;
      icsCcvUrl?: string;
    };
    versions?: {
      name: string;
      tag?: string;
      height?: number;
      proposal?: number;
      previousVersionName?: string;
      nextVersionName?: string;
      recommendedVersion?: string;
      goVersion?: string;
      compatibleVersions?: string[];
      cosmosSdkVersion?: string;
      consensus?: {
        type: string;
        version?: string;
      };
      cosmwasmVersion?: string;
      cosmwasmEnabled?: boolean;
      cosmwasmPath?: string;
      ibcGoVersion?: string;
      icsEnabled?: string[];
      binaries?: {
        "linux/amd64"?: string;
        "linux/arm64"?: string;
        "darwin/amd64"?: string;
        "darwin/arm64"?: string;
        "windows/amd64"?: string;
        "windows/arm64"?: string;
      };
    }[];
  };
  images?: {
    imageSync?: Pointer;
    png?: string;
    svg?: string;
    theme?: {
      primaryColorHex?: string;
      circle?: boolean;
      darkMode?: boolean;
    };
    layout?: string;
    textPosition?: string;
  }[];
  logoURIs?: {
    png?: string;
    svg?: string;
  };
  description?: string;
  peers?: {
    seeds?: Peer[];
    persistentPeers?: Peer[];
  };
  apis?: {
    rpc?: Endpoint[];
    rest?: Endpoint[];
    grpc?: Endpoint[];
    wss?: Endpoint[];
    "grpc-web"?: Endpoint[];
    "evm-http-jsonrpc"?: Endpoint[];
  };
  explorers?: Explorer[];
  keywords?: string[];
  extraCodecs?: string[];
}