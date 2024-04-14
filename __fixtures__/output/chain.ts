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
  tx_page?: string;
  account_page?: string;
}
export interface FeeToken {
  denom: string;
  fixed_min_gas_price?: number;
  low_gas_price?: number;
  average_gas_price?: number;
  high_gas_price?: number;
  gas_costs?: {
    cosmos_send?: number;
    ibc_transfer?: number;
  };
}
export interface StakingToken {
  denom: string;
}
export interface Pointer {
  chain_name: string;
  base_denom?: string;
}
export interface CosmosChain {
  $schema?: string;
  chain_name: string;
  chain_id: string;
  pre_fork_chain_name?: string;
  pretty_name?: string;
  website?: string;
  update_link?: string;
  status?: any;
  network_type?: any;
  bech32_prefix: string;
  bech32_config?: {
    bech32PrefixAccAddr?: string;
    bech32PrefixAccPub?: string;
    bech32PrefixValAddr?: string;
    bech32PrefixValPub?: string;
    bech32PrefixConsAddr?: string;
    bech32PrefixConsPub?: string;
  };
  daemon_name?: string;
  node_home?: string;
  key_algos?: string[];
  slip44?: number;
  alternative_slip44s?: number[];
  fees?: {
    fee_tokens: FeeToken[];
  };
  staking?: {
    staking_tokens: StakingToken[];
    lock_duration?: {
      blocks?: number;
      time?: string;
    };
  };
  codebase?: {
    git_repo?: string;
    recommended_version?: string;
    go_version?: string;
    compatible_versions?: string[];
    binaries?: {
      "linux/amd64"?: string;
      "linux/arm64"?: string;
      "darwin/amd64"?: string;
      "darwin/arm64"?: string;
      "windows/amd64"?: string;
      "windows/arm64"?: string;
    };
    cosmos_sdk_version?: string;
    consensus?: {
      type: string;
      version?: string;
    };
    cosmwasm_version?: string;
    cosmwasm_enabled?: boolean;
    cosmwasm_path?: string;
    ibc_go_version?: string;
    ics_enabled?: string[];
    genesis?: {
      name?: string;
      genesis_url: string;
      ics_ccv_url?: string;
    };
    versions?: {
      name: string;
      tag?: string;
      height?: number;
      proposal?: number;
      previous_version_name?: string;
      next_version_name?: string;
      recommended_version?: string;
      go_version?: string;
      compatible_versions?: string[];
      cosmos_sdk_version?: string;
      consensus?: {
        type: string;
        version?: string;
      };
      cosmwasm_version?: string;
      cosmwasm_enabled?: boolean;
      cosmwasm_path?: string;
      ibc_go_version?: string;
      ics_enabled?: string[];
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
    image_sync?: Pointer;
    png?: string;
    svg?: string;
    theme?: {
      primary_color_hex?: string;
      circle?: boolean;
      dark_mode?: boolean;
    };
    layout?: string;
    text_position?: string;
  }[];
  logo_URIs?: {
    png?: string;
    svg?: string;
  };
  description?: string;
  peers?: {
    seeds?: Peer[];
    persistent_peers?: Peer[];
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
  extra_codecs?: string[];
}