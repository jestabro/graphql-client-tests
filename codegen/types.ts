import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Generic: any;
};

export type AddImageContainer = {
  __typename?: 'AddImageContainer';
  result?: Maybe<Scalars['Generic']>;
};

export type AddImageContainerInput = {
  key?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type AddImageContainerResult = {
  __typename?: 'AddImageContainerResult';
  data?: Maybe<AddImageContainer>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type AddSystemImage = {
  __typename?: 'AddSystemImage';
  result?: Maybe<Scalars['Generic']>;
};

export type AddSystemImageInput = {
  key?: InputMaybe<Scalars['String']>;
  location: Scalars['String'];
};

export type AddSystemImageResult = {
  __typename?: 'AddSystemImageResult';
  data?: Maybe<AddSystemImage>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  success: Scalars['Boolean'];
};

export type AuthToken = {
  __typename?: 'AuthToken';
  result?: Maybe<Scalars['Generic']>;
};

export type AuthTokenInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type AuthTokenResult = {
  __typename?: 'AuthTokenResult';
  data?: Maybe<AuthToken>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  success: Scalars['Boolean'];
};

export type ClearCountersInterfaces = {
  __typename?: 'ClearCountersInterfaces';
  result?: Maybe<Scalars['Generic']>;
};

export type ClearCountersInterfacesInput = {
  intf_name?: InputMaybe<Scalars['String']>;
  intf_type?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  vif?: InputMaybe<Scalars['Boolean']>;
  vrrp?: InputMaybe<Scalars['Boolean']>;
};

export type ClearCountersInterfacesResult = {
  __typename?: 'ClearCountersInterfacesResult';
  data?: Maybe<ClearCountersInterfaces>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type CommitInProgress = OpModeError & {
  __typename?: 'CommitInProgress';
  message: Scalars['String'];
  name: Scalars['String'];
  vyos_code: Scalars['Int'];
};

export type DataUnavailable = OpModeError & {
  __typename?: 'DataUnavailable';
  message: Scalars['String'];
  name: Scalars['String'];
  vyos_code: Scalars['Int'];
};

export type DeleteImageContainer = {
  __typename?: 'DeleteImageContainer';
  result?: Maybe<Scalars['Generic']>;
};

export type DeleteImageContainerInput = {
  key?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type DeleteImageContainerResult = {
  __typename?: 'DeleteImageContainerResult';
  data?: Maybe<DeleteImageContainer>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type DeleteSystemImage = {
  __typename?: 'DeleteSystemImage';
  result?: Maybe<Scalars['Generic']>;
};

export type DeleteSystemImageInput = {
  key?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type DeleteSystemImageResult = {
  __typename?: 'DeleteSystemImageResult';
  data?: Maybe<DeleteSystemImage>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  success: Scalars['Boolean'];
};

export enum DirectionNat {
  Destination = 'destination',
  Source = 'source'
}

export enum FamilyBgp {
  Inet = 'inet',
  Inet6 = 'inet6',
  L2vpn = 'l2vpn'
}

export enum FamilyConntrack {
  Inet = 'inet',
  Inet6 = 'inet6'
}

export enum FamilyDhcp {
  Inet = 'inet',
  Inet6 = 'inet6'
}

export enum FamilyModifierBgp {
  Flowspec = 'flowspec',
  LabeledUnicast = 'labeled_unicast',
  Multicast = 'multicast',
  Unicast = 'unicast',
  Vpn = 'vpn'
}

export enum FamilyNat {
  Inet = 'inet',
  Inet6 = 'inet6'
}

export enum FamilyNeighbor {
  Inet = 'inet',
  Inet6 = 'inet6'
}

export enum FamilyRoute {
  Inet = 'inet',
  Inet6 = 'inet6'
}

export type IncorrectValue = OpModeError & {
  __typename?: 'IncorrectValue';
  message: Scalars['String'];
  name: Scalars['String'];
  vyos_code: Scalars['Int'];
};

export type InsufficientResources = OpModeError & {
  __typename?: 'InsufficientResources';
  message: Scalars['String'];
  name: Scalars['String'];
  vyos_code: Scalars['Int'];
};

export type InternalError = OpModeError & {
  __typename?: 'InternalError';
  message: Scalars['String'];
  name: Scalars['String'];
  vyos_code: Scalars['Int'];
};

export type LoadConfigFile = {
  __typename?: 'LoadConfigFile';
  result?: Maybe<Scalars['Generic']>;
};

export type LoadConfigFileInput = {
  fileName: Scalars['String'];
  key?: InputMaybe<Scalars['String']>;
};

export type LoadConfigFileResult = {
  __typename?: 'LoadConfigFileResult';
  data?: Maybe<LoadConfigFile>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  success: Scalars['Boolean'];
};

export enum ModeOpenvpn {
  Client = 'client',
  Server = 'server',
  SiteToSite = 'site_to_site'
}

export type Mutation = {
  __typename?: 'Mutation';
  AddImageContainer?: Maybe<AddImageContainerResult>;
  AddSystemImage?: Maybe<AddSystemImageResult>;
  AuthToken?: Maybe<AuthTokenResult>;
  ClearCountersInterfaces?: Maybe<ClearCountersInterfacesResult>;
  DeleteImageContainer?: Maybe<DeleteImageContainerResult>;
  DeleteSystemImage?: Maybe<DeleteSystemImageResult>;
  LoadConfigFile?: Maybe<LoadConfigFileResult>;
  ResetAllPeersIpsec?: Maybe<ResetAllPeersIpsecResult>;
  ResetConnResetVpn?: Maybe<ResetConnResetVpnResult>;
  ResetCountersInterfaces?: Maybe<ResetCountersInterfacesResult>;
  ResetNeighbor?: Maybe<ResetNeighborResult>;
  ResetOpenvpn?: Maybe<ResetOpenvpnResult>;
  ResetPeerIpsec?: Maybe<ResetPeerIpsecResult>;
  ResetProfileAllIpsec?: Maybe<ResetProfileAllIpsecResult>;
  ResetProfileDstIpsec?: Maybe<ResetProfileDstIpsecResult>;
  ResetRaIpsec?: Maybe<ResetRaIpsecResult>;
  RestartContainer?: Maybe<RestartContainerResult>;
  SaveConfigFile?: Maybe<SaveConfigFileResult>;
};


export type MutationAddImageContainerArgs = {
  data?: InputMaybe<AddImageContainerInput>;
};


export type MutationAddSystemImageArgs = {
  data?: InputMaybe<AddSystemImageInput>;
};


export type MutationAuthTokenArgs = {
  data?: InputMaybe<AuthTokenInput>;
};


export type MutationClearCountersInterfacesArgs = {
  data?: InputMaybe<ClearCountersInterfacesInput>;
};


export type MutationDeleteImageContainerArgs = {
  data?: InputMaybe<DeleteImageContainerInput>;
};


export type MutationDeleteSystemImageArgs = {
  data?: InputMaybe<DeleteSystemImageInput>;
};


export type MutationLoadConfigFileArgs = {
  data?: InputMaybe<LoadConfigFileInput>;
};


export type MutationResetAllPeersIpsecArgs = {
  data?: InputMaybe<ResetAllPeersIpsecInput>;
};


export type MutationResetConnResetVpnArgs = {
  data?: InputMaybe<ResetConnResetVpnInput>;
};


export type MutationResetCountersInterfacesArgs = {
  data?: InputMaybe<ResetCountersInterfacesInput>;
};


export type MutationResetNeighborArgs = {
  data?: InputMaybe<ResetNeighborInput>;
};


export type MutationResetOpenvpnArgs = {
  data?: InputMaybe<ResetOpenvpnInput>;
};


export type MutationResetPeerIpsecArgs = {
  data?: InputMaybe<ResetPeerIpsecInput>;
};


export type MutationResetProfileAllIpsecArgs = {
  data?: InputMaybe<ResetProfileAllIpsecInput>;
};


export type MutationResetProfileDstIpsecArgs = {
  data?: InputMaybe<ResetProfileDstIpsecInput>;
};


export type MutationResetRaIpsecArgs = {
  data?: InputMaybe<ResetRaIpsecInput>;
};


export type MutationRestartContainerArgs = {
  data?: InputMaybe<RestartContainerInput>;
};


export type MutationSaveConfigFileArgs = {
  data?: InputMaybe<SaveConfigFileInput>;
};

export type OpModeError = {
  message: Scalars['String'];
  name: Scalars['String'];
  vyos_code: Scalars['Int'];
};

export type PermissionDenied = OpModeError & {
  __typename?: 'PermissionDenied';
  message: Scalars['String'];
  name: Scalars['String'];
  vyos_code: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  Show?: Maybe<ShowResult>;
  ShowBgp?: Maybe<ShowBgpResult>;
  ShowBridge?: Maybe<ShowBridgeResult>;
  ShowCommitDiffConfigMgmt?: Maybe<ShowCommitDiffConfigMgmtResult>;
  ShowCommitFileConfigMgmt?: Maybe<ShowCommitFileConfigMgmtResult>;
  ShowCommitLogBriefConfigMgmt?: Maybe<ShowCommitLogBriefConfigMgmtResult>;
  ShowCommitLogConfigMgmt?: Maybe<ShowCommitLogConfigMgmtResult>;
  ShowConfig?: Maybe<ShowConfigResult>;
  ShowConnectionsIpsec?: Maybe<ShowConnectionsIpsecResult>;
  ShowConnectionsSummaryIpsec?: Maybe<ShowConnectionsSummaryIpsecResult>;
  ShowConntrack?: Maybe<ShowConntrackResult>;
  ShowContainerContainer?: Maybe<ShowContainerContainerResult>;
  ShowCountersInterfaces?: Maybe<ShowCountersInterfacesResult>;
  ShowCpu?: Maybe<ShowCpuResult>;
  ShowFdbBridge?: Maybe<ShowFdbBridgeResult>;
  ShowForwardingStatisticsDns?: Maybe<ShowForwardingStatisticsDnsResult>;
  ShowImageContainer?: Maybe<ShowImageContainerResult>;
  ShowInterfaceNhrp?: Maybe<ShowInterfaceNhrpResult>;
  ShowInterfaces?: Maybe<ShowInterfacesResult>;
  ShowLog?: Maybe<ShowLogResult>;
  ShowMdbBridge?: Maybe<ShowMdbBridgeResult>;
  ShowMemory?: Maybe<ShowMemoryResult>;
  ShowNeighbor?: Maybe<ShowNeighborResult>;
  ShowNeighborsBgp?: Maybe<ShowNeighborsBgpResult>;
  ShowNeighborsLldp?: Maybe<ShowNeighborsLldpResult>;
  ShowNetworkContainer?: Maybe<ShowNetworkContainerResult>;
  ShowOpenvpn?: Maybe<ShowOpenvpnResult>;
  ShowPoolStatisticsDhcp?: Maybe<ShowPoolStatisticsDhcpResult>;
  ShowRaDetailIpsec?: Maybe<ShowRaDetailIpsecResult>;
  ShowRaSummaryIpsec?: Maybe<ShowRaSummaryIpsecResult>;
  ShowRoute?: Maybe<ShowRouteResult>;
  ShowRulesNat?: Maybe<ShowRulesNatResult>;
  ShowSaDetailIpsec?: Maybe<ShowSaDetailIpsecResult>;
  ShowSaIpsec?: Maybe<ShowSaIpsecResult>;
  ShowServerLeasesDhcp?: Maybe<ShowServerLeasesDhcpResult>;
  ShowSessionsAccelppp?: Maybe<ShowSessionsAccelpppResult>;
  ShowSessionsOpenconnect?: Maybe<ShowSessionsOpenconnectResult>;
  ShowStatisticsAccelppp?: Maybe<ShowStatisticsAccelpppResult>;
  ShowStatisticsConntrack?: Maybe<ShowStatisticsConntrackResult>;
  ShowStatisticsNat?: Maybe<ShowStatisticsNatResult>;
  ShowStorage?: Maybe<ShowStorageResult>;
  ShowSummaryBgp?: Maybe<ShowSummaryBgpResult>;
  ShowSummaryCpu?: Maybe<ShowSummaryCpuResult>;
  ShowSummaryInterfaces?: Maybe<ShowSummaryInterfacesResult>;
  ShowSummaryRoute?: Maybe<ShowSummaryRouteResult>;
  ShowTranslationsNat?: Maybe<ShowTranslationsNatResult>;
  ShowTunnelNhrp?: Maybe<ShowTunnelNhrpResult>;
  ShowUpdateSystem?: Maybe<ShowUpdateSystemResult>;
  ShowUptime?: Maybe<ShowUptimeResult>;
  ShowUserInfo?: Maybe<ShowUserInfoResult>;
  ShowVersion?: Maybe<ShowVersionResult>;
  ShowVlanBridge?: Maybe<ShowVlanBridgeResult>;
  ShowVrf?: Maybe<ShowVrfResult>;
  ShowZone?: Maybe<ShowZoneResult>;
  SystemStatus?: Maybe<SystemStatusResult>;
};


export type QueryShowArgs = {
  data?: InputMaybe<ShowInput>;
};


export type QueryShowBgpArgs = {
  data?: InputMaybe<ShowBgpInput>;
};


export type QueryShowBridgeArgs = {
  data?: InputMaybe<ShowBridgeInput>;
};


export type QueryShowCommitDiffConfigMgmtArgs = {
  data?: InputMaybe<ShowCommitDiffConfigMgmtInput>;
};


export type QueryShowCommitFileConfigMgmtArgs = {
  data?: InputMaybe<ShowCommitFileConfigMgmtInput>;
};


export type QueryShowCommitLogBriefConfigMgmtArgs = {
  data?: InputMaybe<ShowCommitLogBriefConfigMgmtInput>;
};


export type QueryShowCommitLogConfigMgmtArgs = {
  data?: InputMaybe<ShowCommitLogConfigMgmtInput>;
};


export type QueryShowConfigArgs = {
  data?: InputMaybe<ShowConfigInput>;
};


export type QueryShowConnectionsIpsecArgs = {
  data?: InputMaybe<ShowConnectionsIpsecInput>;
};


export type QueryShowConnectionsSummaryIpsecArgs = {
  data?: InputMaybe<ShowConnectionsSummaryIpsecInput>;
};


export type QueryShowConntrackArgs = {
  data?: InputMaybe<ShowConntrackInput>;
};


export type QueryShowContainerContainerArgs = {
  data?: InputMaybe<ShowContainerContainerInput>;
};


export type QueryShowCountersInterfacesArgs = {
  data?: InputMaybe<ShowCountersInterfacesInput>;
};


export type QueryShowCpuArgs = {
  data?: InputMaybe<ShowCpuInput>;
};


export type QueryShowFdbBridgeArgs = {
  data?: InputMaybe<ShowFdbBridgeInput>;
};


export type QueryShowForwardingStatisticsDnsArgs = {
  data?: InputMaybe<ShowForwardingStatisticsDnsInput>;
};


export type QueryShowImageContainerArgs = {
  data?: InputMaybe<ShowImageContainerInput>;
};


export type QueryShowInterfaceNhrpArgs = {
  data?: InputMaybe<ShowInterfaceNhrpInput>;
};


export type QueryShowInterfacesArgs = {
  data?: InputMaybe<ShowInterfacesInput>;
};


export type QueryShowLogArgs = {
  data?: InputMaybe<ShowLogInput>;
};


export type QueryShowMdbBridgeArgs = {
  data?: InputMaybe<ShowMdbBridgeInput>;
};


export type QueryShowMemoryArgs = {
  data?: InputMaybe<ShowMemoryInput>;
};


export type QueryShowNeighborArgs = {
  data?: InputMaybe<ShowNeighborInput>;
};


export type QueryShowNeighborsBgpArgs = {
  data?: InputMaybe<ShowNeighborsBgpInput>;
};


export type QueryShowNeighborsLldpArgs = {
  data?: InputMaybe<ShowNeighborsLldpInput>;
};


export type QueryShowNetworkContainerArgs = {
  data?: InputMaybe<ShowNetworkContainerInput>;
};


export type QueryShowOpenvpnArgs = {
  data?: InputMaybe<ShowOpenvpnInput>;
};


export type QueryShowPoolStatisticsDhcpArgs = {
  data?: InputMaybe<ShowPoolStatisticsDhcpInput>;
};


export type QueryShowRaDetailIpsecArgs = {
  data?: InputMaybe<ShowRaDetailIpsecInput>;
};


export type QueryShowRaSummaryIpsecArgs = {
  data?: InputMaybe<ShowRaSummaryIpsecInput>;
};


export type QueryShowRouteArgs = {
  data?: InputMaybe<ShowRouteInput>;
};


export type QueryShowRulesNatArgs = {
  data?: InputMaybe<ShowRulesNatInput>;
};


export type QueryShowSaDetailIpsecArgs = {
  data?: InputMaybe<ShowSaDetailIpsecInput>;
};


export type QueryShowSaIpsecArgs = {
  data?: InputMaybe<ShowSaIpsecInput>;
};


export type QueryShowServerLeasesDhcpArgs = {
  data?: InputMaybe<ShowServerLeasesDhcpInput>;
};


export type QueryShowSessionsAccelpppArgs = {
  data?: InputMaybe<ShowSessionsAccelpppInput>;
};


export type QueryShowSessionsOpenconnectArgs = {
  data?: InputMaybe<ShowSessionsOpenconnectInput>;
};


export type QueryShowStatisticsAccelpppArgs = {
  data?: InputMaybe<ShowStatisticsAccelpppInput>;
};


export type QueryShowStatisticsConntrackArgs = {
  data?: InputMaybe<ShowStatisticsConntrackInput>;
};


export type QueryShowStatisticsNatArgs = {
  data?: InputMaybe<ShowStatisticsNatInput>;
};


export type QueryShowStorageArgs = {
  data?: InputMaybe<ShowStorageInput>;
};


export type QueryShowSummaryBgpArgs = {
  data?: InputMaybe<ShowSummaryBgpInput>;
};


export type QueryShowSummaryCpuArgs = {
  data?: InputMaybe<ShowSummaryCpuInput>;
};


export type QueryShowSummaryInterfacesArgs = {
  data?: InputMaybe<ShowSummaryInterfacesInput>;
};


export type QueryShowSummaryRouteArgs = {
  data?: InputMaybe<ShowSummaryRouteInput>;
};


export type QueryShowTranslationsNatArgs = {
  data?: InputMaybe<ShowTranslationsNatInput>;
};


export type QueryShowTunnelNhrpArgs = {
  data?: InputMaybe<ShowTunnelNhrpInput>;
};


export type QueryShowUpdateSystemArgs = {
  data?: InputMaybe<ShowUpdateSystemInput>;
};


export type QueryShowUptimeArgs = {
  data?: InputMaybe<ShowUptimeInput>;
};


export type QueryShowUserInfoArgs = {
  data?: InputMaybe<ShowUserInfoInput>;
};


export type QueryShowVersionArgs = {
  data?: InputMaybe<ShowVersionInput>;
};


export type QueryShowVlanBridgeArgs = {
  data?: InputMaybe<ShowVlanBridgeInput>;
};


export type QueryShowVrfArgs = {
  data?: InputMaybe<ShowVrfInput>;
};


export type QueryShowZoneArgs = {
  data?: InputMaybe<ShowZoneInput>;
};


export type QuerySystemStatusArgs = {
  data?: InputMaybe<SystemStatusInput>;
};

export type ResetAllPeersIpsec = {
  __typename?: 'ResetAllPeersIpsec';
  result?: Maybe<Scalars['Generic']>;
};

export type ResetAllPeersIpsecInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ResetAllPeersIpsecResult = {
  __typename?: 'ResetAllPeersIpsecResult';
  data?: Maybe<ResetAllPeersIpsec>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ResetConnResetVpn = {
  __typename?: 'ResetConnResetVpn';
  result?: Maybe<Scalars['Generic']>;
};

export type ResetConnResetVpnInput = {
  interface?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  protocol: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
};

export type ResetConnResetVpnResult = {
  __typename?: 'ResetConnResetVpnResult';
  data?: Maybe<ResetConnResetVpn>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ResetCountersInterfaces = {
  __typename?: 'ResetCountersInterfaces';
  result?: Maybe<Scalars['Generic']>;
};

export type ResetCountersInterfacesInput = {
  intf_name?: InputMaybe<Scalars['String']>;
  intf_type?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  vif?: InputMaybe<Scalars['Boolean']>;
  vrrp?: InputMaybe<Scalars['Boolean']>;
};

export type ResetCountersInterfacesResult = {
  __typename?: 'ResetCountersInterfacesResult';
  data?: Maybe<ResetCountersInterfaces>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ResetNeighbor = {
  __typename?: 'ResetNeighbor';
  result?: Maybe<Scalars['Generic']>;
};

export type ResetNeighborInput = {
  address?: InputMaybe<Scalars['String']>;
  family: FamilyNeighbor;
  interface?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type ResetNeighborResult = {
  __typename?: 'ResetNeighborResult';
  data?: Maybe<ResetNeighbor>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ResetOpenvpn = {
  __typename?: 'ResetOpenvpn';
  result?: Maybe<Scalars['Generic']>;
};

export type ResetOpenvpnInput = {
  interface: Scalars['String'];
  key?: InputMaybe<Scalars['String']>;
};

export type ResetOpenvpnResult = {
  __typename?: 'ResetOpenvpnResult';
  data?: Maybe<ResetOpenvpn>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ResetPeerIpsec = {
  __typename?: 'ResetPeerIpsec';
  result?: Maybe<Scalars['Generic']>;
};

export type ResetPeerIpsecInput = {
  key?: InputMaybe<Scalars['String']>;
  peer: Scalars['String'];
  tunnel?: InputMaybe<Scalars['String']>;
};

export type ResetPeerIpsecResult = {
  __typename?: 'ResetPeerIpsecResult';
  data?: Maybe<ResetPeerIpsec>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ResetProfileAllIpsec = {
  __typename?: 'ResetProfileAllIpsec';
  result?: Maybe<Scalars['Generic']>;
};

export type ResetProfileAllIpsecInput = {
  key?: InputMaybe<Scalars['String']>;
  profile: Scalars['String'];
  tunnel: Scalars['String'];
};

export type ResetProfileAllIpsecResult = {
  __typename?: 'ResetProfileAllIpsecResult';
  data?: Maybe<ResetProfileAllIpsec>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ResetProfileDstIpsec = {
  __typename?: 'ResetProfileDstIpsec';
  result?: Maybe<Scalars['Generic']>;
};

export type ResetProfileDstIpsecInput = {
  key?: InputMaybe<Scalars['String']>;
  nbma_dst: Scalars['String'];
  profile: Scalars['String'];
  tunnel: Scalars['String'];
};

export type ResetProfileDstIpsecResult = {
  __typename?: 'ResetProfileDstIpsecResult';
  data?: Maybe<ResetProfileDstIpsec>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ResetRaIpsec = {
  __typename?: 'ResetRaIpsec';
  result?: Maybe<Scalars['Generic']>;
};

export type ResetRaIpsecInput = {
  key?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type ResetRaIpsecResult = {
  __typename?: 'ResetRaIpsecResult';
  data?: Maybe<ResetRaIpsec>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type RestartContainer = {
  __typename?: 'RestartContainer';
  result?: Maybe<Scalars['Generic']>;
};

export type RestartContainerInput = {
  key?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type RestartContainerResult = {
  __typename?: 'RestartContainerResult';
  data?: Maybe<RestartContainer>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type SaveConfigFile = {
  __typename?: 'SaveConfigFile';
  result?: Maybe<Scalars['Generic']>;
};

export type SaveConfigFileInput = {
  fileName?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type SaveConfigFileResult = {
  __typename?: 'SaveConfigFileResult';
  data?: Maybe<SaveConfigFile>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  success: Scalars['Boolean'];
};

export type Show = {
  __typename?: 'Show';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowBgp = {
  __typename?: 'ShowBgp';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowBgpInput = {
  best_path?: InputMaybe<Scalars['Boolean']>;
  family: FamilyBgp;
  family_modifier: FamilyModifierBgp;
  key?: InputMaybe<Scalars['String']>;
  longer_prefixes?: InputMaybe<Scalars['Boolean']>;
  prefix?: InputMaybe<Scalars['String']>;
  regex?: InputMaybe<Scalars['String']>;
  vrf?: InputMaybe<Scalars['String']>;
};

export type ShowBgpResult = {
  __typename?: 'ShowBgpResult';
  data?: Maybe<ShowBgp>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowBridge = {
  __typename?: 'ShowBridge';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowBridgeInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowBridgeResult = {
  __typename?: 'ShowBridgeResult';
  data?: Maybe<ShowBridge>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowCommitDiffConfigMgmt = {
  __typename?: 'ShowCommitDiffConfigMgmt';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowCommitDiffConfigMgmtInput = {
  commands?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
  rev: Scalars['Int'];
  rev2?: InputMaybe<Scalars['Int']>;
};

export type ShowCommitDiffConfigMgmtResult = {
  __typename?: 'ShowCommitDiffConfigMgmtResult';
  data?: Maybe<ShowCommitDiffConfigMgmt>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowCommitFileConfigMgmt = {
  __typename?: 'ShowCommitFileConfigMgmt';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowCommitFileConfigMgmtInput = {
  key?: InputMaybe<Scalars['String']>;
  rev: Scalars['Int'];
};

export type ShowCommitFileConfigMgmtResult = {
  __typename?: 'ShowCommitFileConfigMgmtResult';
  data?: Maybe<ShowCommitFileConfigMgmt>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowCommitLogBriefConfigMgmt = {
  __typename?: 'ShowCommitLogBriefConfigMgmt';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowCommitLogBriefConfigMgmtInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowCommitLogBriefConfigMgmtResult = {
  __typename?: 'ShowCommitLogBriefConfigMgmtResult';
  data?: Maybe<ShowCommitLogBriefConfigMgmt>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowCommitLogConfigMgmt = {
  __typename?: 'ShowCommitLogConfigMgmt';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowCommitLogConfigMgmtInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowCommitLogConfigMgmtResult = {
  __typename?: 'ShowCommitLogConfigMgmtResult';
  data?: Maybe<ShowCommitLogConfigMgmt>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowConfig = {
  __typename?: 'ShowConfig';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowConfigInput = {
  configFormat?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  path: Array<Scalars['String']>;
};

export type ShowConfigResult = {
  __typename?: 'ShowConfigResult';
  data?: Maybe<ShowConfig>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  success: Scalars['Boolean'];
};

export type ShowConnectionsIpsec = {
  __typename?: 'ShowConnectionsIpsec';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowConnectionsIpsecInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowConnectionsIpsecResult = {
  __typename?: 'ShowConnectionsIpsecResult';
  data?: Maybe<ShowConnectionsIpsec>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowConnectionsSummaryIpsec = {
  __typename?: 'ShowConnectionsSummaryIpsec';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowConnectionsSummaryIpsecInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowConnectionsSummaryIpsecResult = {
  __typename?: 'ShowConnectionsSummaryIpsecResult';
  data?: Maybe<ShowConnectionsSummaryIpsec>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowConntrack = {
  __typename?: 'ShowConntrack';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowConntrackInput = {
  family: FamilyConntrack;
  key?: InputMaybe<Scalars['String']>;
};

export type ShowConntrackResult = {
  __typename?: 'ShowConntrackResult';
  data?: Maybe<ShowConntrack>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowContainerContainer = {
  __typename?: 'ShowContainerContainer';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowContainerContainerInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowContainerContainerResult = {
  __typename?: 'ShowContainerContainerResult';
  data?: Maybe<ShowContainerContainer>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowCountersInterfaces = {
  __typename?: 'ShowCountersInterfaces';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowCountersInterfacesInput = {
  intf_name?: InputMaybe<Scalars['String']>;
  intf_type?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  vif?: InputMaybe<Scalars['Boolean']>;
  vrrp?: InputMaybe<Scalars['Boolean']>;
};

export type ShowCountersInterfacesResult = {
  __typename?: 'ShowCountersInterfacesResult';
  data?: Maybe<ShowCountersInterfaces>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowCpu = {
  __typename?: 'ShowCpu';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowCpuInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowCpuResult = {
  __typename?: 'ShowCpuResult';
  data?: Maybe<ShowCpu>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowFdbBridge = {
  __typename?: 'ShowFdbBridge';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowFdbBridgeInput = {
  interface: Scalars['String'];
  key?: InputMaybe<Scalars['String']>;
};

export type ShowFdbBridgeResult = {
  __typename?: 'ShowFdbBridgeResult';
  data?: Maybe<ShowFdbBridge>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowForwardingStatisticsDns = {
  __typename?: 'ShowForwardingStatisticsDns';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowForwardingStatisticsDnsInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowForwardingStatisticsDnsResult = {
  __typename?: 'ShowForwardingStatisticsDnsResult';
  data?: Maybe<ShowForwardingStatisticsDns>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowImageContainer = {
  __typename?: 'ShowImageContainer';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowImageContainerInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowImageContainerResult = {
  __typename?: 'ShowImageContainerResult';
  data?: Maybe<ShowImageContainer>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowInput = {
  key?: InputMaybe<Scalars['String']>;
  path: Array<Scalars['String']>;
};

export type ShowInterfaceNhrp = {
  __typename?: 'ShowInterfaceNhrp';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowInterfaceNhrpInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowInterfaceNhrpResult = {
  __typename?: 'ShowInterfaceNhrpResult';
  data?: Maybe<ShowInterfaceNhrp>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowInterfaces = {
  __typename?: 'ShowInterfaces';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowInterfacesInput = {
  intf_name?: InputMaybe<Scalars['String']>;
  intf_type?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  vif?: InputMaybe<Scalars['Boolean']>;
  vrrp?: InputMaybe<Scalars['Boolean']>;
};

export type ShowInterfacesResult = {
  __typename?: 'ShowInterfacesResult';
  data?: Maybe<ShowInterfaces>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowLog = {
  __typename?: 'ShowLog';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowLogInput = {
  boot?: InputMaybe<Scalars['Boolean']>;
  count?: InputMaybe<Scalars['Int']>;
  facility?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  unit?: InputMaybe<Scalars['String']>;
  utc?: InputMaybe<Scalars['Boolean']>;
};

export type ShowLogResult = {
  __typename?: 'ShowLogResult';
  data?: Maybe<ShowLog>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowMdbBridge = {
  __typename?: 'ShowMdbBridge';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowMdbBridgeInput = {
  interface: Scalars['String'];
  key?: InputMaybe<Scalars['String']>;
};

export type ShowMdbBridgeResult = {
  __typename?: 'ShowMdbBridgeResult';
  data?: Maybe<ShowMdbBridge>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowMemory = {
  __typename?: 'ShowMemory';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowMemoryInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowMemoryResult = {
  __typename?: 'ShowMemoryResult';
  data?: Maybe<ShowMemory>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowNeighbor = {
  __typename?: 'ShowNeighbor';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowNeighborInput = {
  family: FamilyNeighbor;
  interface?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  state: StateNeighbor;
};

export type ShowNeighborResult = {
  __typename?: 'ShowNeighborResult';
  data?: Maybe<ShowNeighbor>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowNeighborsBgp = {
  __typename?: 'ShowNeighborsBgp';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowNeighborsBgpInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowNeighborsBgpResult = {
  __typename?: 'ShowNeighborsBgpResult';
  data?: Maybe<ShowNeighborsBgp>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowNeighborsLldp = {
  __typename?: 'ShowNeighborsLldp';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowNeighborsLldpInput = {
  detail?: InputMaybe<Scalars['Boolean']>;
  interface?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type ShowNeighborsLldpResult = {
  __typename?: 'ShowNeighborsLldpResult';
  data?: Maybe<ShowNeighborsLldp>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowNetworkContainer = {
  __typename?: 'ShowNetworkContainer';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowNetworkContainerInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowNetworkContainerResult = {
  __typename?: 'ShowNetworkContainerResult';
  data?: Maybe<ShowNetworkContainer>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowOpenvpn = {
  __typename?: 'ShowOpenvpn';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowOpenvpnInput = {
  key?: InputMaybe<Scalars['String']>;
  mode: ModeOpenvpn;
};

export type ShowOpenvpnResult = {
  __typename?: 'ShowOpenvpnResult';
  data?: Maybe<ShowOpenvpn>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowPoolStatisticsDhcp = {
  __typename?: 'ShowPoolStatisticsDhcp';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowPoolStatisticsDhcpInput = {
  family: FamilyDhcp;
  key?: InputMaybe<Scalars['String']>;
  pool?: InputMaybe<Scalars['String']>;
};

export type ShowPoolStatisticsDhcpResult = {
  __typename?: 'ShowPoolStatisticsDhcpResult';
  data?: Maybe<ShowPoolStatisticsDhcp>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowRaDetailIpsec = {
  __typename?: 'ShowRaDetailIpsec';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowRaDetailIpsecInput = {
  conn_id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type ShowRaDetailIpsecResult = {
  __typename?: 'ShowRaDetailIpsecResult';
  data?: Maybe<ShowRaDetailIpsec>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowRaSummaryIpsec = {
  __typename?: 'ShowRaSummaryIpsec';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowRaSummaryIpsecInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowRaSummaryIpsecResult = {
  __typename?: 'ShowRaSummaryIpsecResult';
  data?: Maybe<ShowRaSummaryIpsec>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowResult = {
  __typename?: 'ShowResult';
  data?: Maybe<Show>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  success: Scalars['Boolean'];
};

export type ShowRoute = {
  __typename?: 'ShowRoute';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowRouteInput = {
  family: FamilyRoute;
  key?: InputMaybe<Scalars['String']>;
  net?: InputMaybe<Scalars['String']>;
  protocol?: InputMaybe<Scalars['String']>;
  table?: InputMaybe<Scalars['Int']>;
  tag?: InputMaybe<Scalars['String']>;
  vrf?: InputMaybe<Scalars['String']>;
};

export type ShowRouteResult = {
  __typename?: 'ShowRouteResult';
  data?: Maybe<ShowRoute>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowRulesNat = {
  __typename?: 'ShowRulesNat';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowRulesNatInput = {
  direction: DirectionNat;
  family: FamilyNat;
  key?: InputMaybe<Scalars['String']>;
};

export type ShowRulesNatResult = {
  __typename?: 'ShowRulesNatResult';
  data?: Maybe<ShowRulesNat>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowSaDetailIpsec = {
  __typename?: 'ShowSaDetailIpsec';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowSaDetailIpsecInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowSaDetailIpsecResult = {
  __typename?: 'ShowSaDetailIpsecResult';
  data?: Maybe<ShowSaDetailIpsec>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowSaIpsec = {
  __typename?: 'ShowSaIpsec';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowSaIpsecInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowSaIpsecResult = {
  __typename?: 'ShowSaIpsecResult';
  data?: Maybe<ShowSaIpsec>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowServerLeasesDhcp = {
  __typename?: 'ShowServerLeasesDhcp';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowServerLeasesDhcpInput = {
  family: FamilyDhcp;
  key?: InputMaybe<Scalars['String']>;
  pool?: InputMaybe<Scalars['String']>;
  sorted?: InputMaybe<Scalars['String']>;
  state: StateDhcp;
};

export type ShowServerLeasesDhcpResult = {
  __typename?: 'ShowServerLeasesDhcpResult';
  data?: Maybe<ShowServerLeasesDhcp>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowSessionsAccelppp = {
  __typename?: 'ShowSessionsAccelppp';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowSessionsAccelpppInput = {
  key?: InputMaybe<Scalars['String']>;
  protocol: Scalars['String'];
};

export type ShowSessionsAccelpppResult = {
  __typename?: 'ShowSessionsAccelpppResult';
  data?: Maybe<ShowSessionsAccelppp>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowSessionsOpenconnect = {
  __typename?: 'ShowSessionsOpenconnect';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowSessionsOpenconnectInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowSessionsOpenconnectResult = {
  __typename?: 'ShowSessionsOpenconnectResult';
  data?: Maybe<ShowSessionsOpenconnect>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowStatisticsAccelppp = {
  __typename?: 'ShowStatisticsAccelppp';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowStatisticsAccelpppInput = {
  key?: InputMaybe<Scalars['String']>;
  protocol: Scalars['String'];
};

export type ShowStatisticsAccelpppResult = {
  __typename?: 'ShowStatisticsAccelpppResult';
  data?: Maybe<ShowStatisticsAccelppp>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowStatisticsConntrack = {
  __typename?: 'ShowStatisticsConntrack';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowStatisticsConntrackInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowStatisticsConntrackResult = {
  __typename?: 'ShowStatisticsConntrackResult';
  data?: Maybe<ShowStatisticsConntrack>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowStatisticsNat = {
  __typename?: 'ShowStatisticsNat';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowStatisticsNatInput = {
  direction: DirectionNat;
  family: FamilyNat;
  key?: InputMaybe<Scalars['String']>;
};

export type ShowStatisticsNatResult = {
  __typename?: 'ShowStatisticsNatResult';
  data?: Maybe<ShowStatisticsNat>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowStorage = {
  __typename?: 'ShowStorage';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowStorageInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowStorageResult = {
  __typename?: 'ShowStorageResult';
  data?: Maybe<ShowStorage>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowSummaryBgp = {
  __typename?: 'ShowSummaryBgp';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowSummaryBgpInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowSummaryBgpResult = {
  __typename?: 'ShowSummaryBgpResult';
  data?: Maybe<ShowSummaryBgp>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowSummaryCpu = {
  __typename?: 'ShowSummaryCpu';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowSummaryCpuInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowSummaryCpuResult = {
  __typename?: 'ShowSummaryCpuResult';
  data?: Maybe<ShowSummaryCpu>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowSummaryInterfaces = {
  __typename?: 'ShowSummaryInterfaces';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowSummaryInterfacesInput = {
  intf_name?: InputMaybe<Scalars['String']>;
  intf_type?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  vif?: InputMaybe<Scalars['Boolean']>;
  vrrp?: InputMaybe<Scalars['Boolean']>;
};

export type ShowSummaryInterfacesResult = {
  __typename?: 'ShowSummaryInterfacesResult';
  data?: Maybe<ShowSummaryInterfaces>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowSummaryRoute = {
  __typename?: 'ShowSummaryRoute';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowSummaryRouteInput = {
  family: FamilyRoute;
  key?: InputMaybe<Scalars['String']>;
  table?: InputMaybe<Scalars['Int']>;
  vrf?: InputMaybe<Scalars['String']>;
};

export type ShowSummaryRouteResult = {
  __typename?: 'ShowSummaryRouteResult';
  data?: Maybe<ShowSummaryRoute>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowTranslationsNat = {
  __typename?: 'ShowTranslationsNat';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowTranslationsNatInput = {
  address?: InputMaybe<Scalars['String']>;
  direction: DirectionNat;
  family: FamilyNat;
  key?: InputMaybe<Scalars['String']>;
  verbose?: InputMaybe<Scalars['Boolean']>;
};

export type ShowTranslationsNatResult = {
  __typename?: 'ShowTranslationsNatResult';
  data?: Maybe<ShowTranslationsNat>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowTunnelNhrp = {
  __typename?: 'ShowTunnelNhrp';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowTunnelNhrpInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowTunnelNhrpResult = {
  __typename?: 'ShowTunnelNhrpResult';
  data?: Maybe<ShowTunnelNhrp>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowUpdateSystem = {
  __typename?: 'ShowUpdateSystem';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowUpdateSystemInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowUpdateSystemResult = {
  __typename?: 'ShowUpdateSystemResult';
  data?: Maybe<ShowUpdateSystem>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowUptime = {
  __typename?: 'ShowUptime';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowUptimeInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowUptimeResult = {
  __typename?: 'ShowUptimeResult';
  data?: Maybe<ShowUptime>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowUserInfo = {
  __typename?: 'ShowUserInfo';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowUserInfoInput = {
  key?: InputMaybe<Scalars['String']>;
  user: Scalars['String'];
};

export type ShowUserInfoResult = {
  __typename?: 'ShowUserInfoResult';
  data?: Maybe<ShowUserInfo>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  success: Scalars['Boolean'];
};

export type ShowVersion = {
  __typename?: 'ShowVersion';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowVersionInput = {
  funny?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
};

export type ShowVersionResult = {
  __typename?: 'ShowVersionResult';
  data?: Maybe<ShowVersion>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowVlanBridge = {
  __typename?: 'ShowVlanBridge';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowVlanBridgeInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type ShowVlanBridgeResult = {
  __typename?: 'ShowVlanBridgeResult';
  data?: Maybe<ShowVlanBridge>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowVrf = {
  __typename?: 'ShowVrf';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowVrfInput = {
  key?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ShowVrfResult = {
  __typename?: 'ShowVrfResult';
  data?: Maybe<ShowVrf>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export type ShowZone = {
  __typename?: 'ShowZone';
  result?: Maybe<Scalars['Generic']>;
};

export type ShowZoneInput = {
  key?: InputMaybe<Scalars['String']>;
  zone?: InputMaybe<Scalars['String']>;
};

export type ShowZoneResult = {
  __typename?: 'ShowZoneResult';
  data?: Maybe<ShowZone>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  op_mode_error?: Maybe<OpModeError>;
  success: Scalars['Boolean'];
};

export enum StateDhcp {
  Abandoned = 'abandoned',
  Active = 'active',
  All = 'all',
  Backup = 'backup',
  Expired = 'expired',
  Free = 'free',
  Released = 'released',
  Reset = 'reset'
}

export enum StateNeighbor {
  Failed = 'failed',
  Permanent = 'permanent',
  Reachable = 'reachable',
  Stale = 'stale'
}

export type SystemStatus = {
  __typename?: 'SystemStatus';
  result?: Maybe<Scalars['Generic']>;
};

export type SystemStatusInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type SystemStatusResult = {
  __typename?: 'SystemStatusResult';
  data?: Maybe<SystemStatus>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  success: Scalars['Boolean'];
};

export type UnconfiguredSubsystem = OpModeError & {
  __typename?: 'UnconfiguredSubsystem';
  message: Scalars['String'];
  name: Scalars['String'];
  vyos_code: Scalars['Int'];
};

export type UnsupportedOperation = OpModeError & {
  __typename?: 'UnsupportedOperation';
  message: Scalars['String'];
  name: Scalars['String'];
  vyos_code: Scalars['Int'];
};

export type ShowSessionsAccelpppQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  protocol: Scalars['String'];
}>;


export type ShowSessionsAccelpppQuery = { __typename?: 'Query', ShowSessionsAccelppp?: { __typename?: 'ShowSessionsAccelpppResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowSessionsAccelppp', result?: any | null } | null } | null };

export type ShowStatisticsAccelpppQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  protocol: Scalars['String'];
}>;


export type ShowStatisticsAccelpppQuery = { __typename?: 'Query', ShowStatisticsAccelppp?: { __typename?: 'ShowStatisticsAccelpppResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowStatisticsAccelppp', result?: any | null } | null } | null };

export type AuthTokenMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthTokenMutation = { __typename?: 'Mutation', AuthToken?: { __typename?: 'AuthTokenResult', success: boolean, errors?: Array<string | null> | null, data?: { __typename?: 'AuthToken', result?: any | null } | null } | null };

export type ShowBgpQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  family: FamilyBgp;
  family_modifier: FamilyModifierBgp;
  prefix?: InputMaybe<Scalars['String']>;
  longer_prefixes?: InputMaybe<Scalars['Boolean']>;
  best_path?: InputMaybe<Scalars['Boolean']>;
  regex?: InputMaybe<Scalars['String']>;
  vrf?: InputMaybe<Scalars['String']>;
}>;


export type ShowBgpQuery = { __typename?: 'Query', ShowBgp?: { __typename?: 'ShowBgpResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowBgp', result?: any | null } | null } | null };

export type ShowNeighborsBgpQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowNeighborsBgpQuery = { __typename?: 'Query', ShowNeighborsBgp?: { __typename?: 'ShowNeighborsBgpResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowNeighborsBgp', result?: any | null } | null } | null };

export type ShowSummaryBgpQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowSummaryBgpQuery = { __typename?: 'Query', ShowSummaryBgp?: { __typename?: 'ShowSummaryBgpResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowSummaryBgp', result?: any | null } | null } | null };

export type ShowBridgeQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowBridgeQuery = { __typename?: 'Query', ShowBridge?: { __typename?: 'ShowBridgeResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowBridge', result?: any | null } | null } | null };

export type ShowFdbBridgeQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  interface: Scalars['String'];
}>;


export type ShowFdbBridgeQuery = { __typename?: 'Query', ShowFdbBridge?: { __typename?: 'ShowFdbBridgeResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowFdbBridge', result?: any | null } | null } | null };

export type ShowMdbBridgeQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  interface: Scalars['String'];
}>;


export type ShowMdbBridgeQuery = { __typename?: 'Query', ShowMdbBridge?: { __typename?: 'ShowMdbBridgeResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowMdbBridge', result?: any | null } | null } | null };

export type ShowVlanBridgeQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowVlanBridgeQuery = { __typename?: 'Query', ShowVlanBridge?: { __typename?: 'ShowVlanBridgeResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowVlanBridge', result?: any | null } | null } | null };

export type SystemStatusQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type SystemStatusQuery = { __typename?: 'Query', SystemStatus?: { __typename?: 'SystemStatusResult', success: boolean, errors?: Array<string | null> | null, data?: { __typename?: 'SystemStatus', result?: any | null } | null } | null };

export type ShowCommitDiffConfigMgmtQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  rev: Scalars['Int'];
  rev2?: InputMaybe<Scalars['Int']>;
  commands?: InputMaybe<Scalars['Boolean']>;
}>;


export type ShowCommitDiffConfigMgmtQuery = { __typename?: 'Query', ShowCommitDiffConfigMgmt?: { __typename?: 'ShowCommitDiffConfigMgmtResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowCommitDiffConfigMgmt', result?: any | null } | null } | null };

export type ShowCommitFileConfigMgmtQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  rev: Scalars['Int'];
}>;


export type ShowCommitFileConfigMgmtQuery = { __typename?: 'Query', ShowCommitFileConfigMgmt?: { __typename?: 'ShowCommitFileConfigMgmtResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowCommitFileConfigMgmt', result?: any | null } | null } | null };

export type ShowCommitLogConfigMgmtQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowCommitLogConfigMgmtQuery = { __typename?: 'Query', ShowCommitLogConfigMgmt?: { __typename?: 'ShowCommitLogConfigMgmtResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowCommitLogConfigMgmt', result?: any | null } | null } | null };

export type ShowCommitLogBriefConfigMgmtQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowCommitLogBriefConfigMgmtQuery = { __typename?: 'Query', ShowCommitLogBriefConfigMgmt?: { __typename?: 'ShowCommitLogBriefConfigMgmtResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowCommitLogBriefConfigMgmt', result?: any | null } | null } | null };

export type ShowConfigQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  path: Array<Scalars['String']> | Scalars['String'];
  configFormat?: InputMaybe<Scalars['String']>;
}>;


export type ShowConfigQuery = { __typename?: 'Query', ShowConfig?: { __typename?: 'ShowConfigResult', success: boolean, errors?: Array<string | null> | null, data?: { __typename?: 'ShowConfig', result?: any | null } | null } | null };

export type ShowQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  path: Array<Scalars['String']> | Scalars['String'];
}>;


export type ShowQuery = { __typename?: 'Query', Show?: { __typename?: 'ShowResult', success: boolean, errors?: Array<string | null> | null, data?: { __typename?: 'Show', result?: any | null } | null } | null };

export type ShowUserInfoQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  user: Scalars['String'];
}>;


export type ShowUserInfoQuery = { __typename?: 'Query', ShowUserInfo?: { __typename?: 'ShowUserInfoResult', success: boolean, errors?: Array<string | null> | null, data?: { __typename?: 'ShowUserInfo', result?: any | null } | null } | null };

export type SaveConfigFileMutationVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
}>;


export type SaveConfigFileMutation = { __typename?: 'Mutation', SaveConfigFile?: { __typename?: 'SaveConfigFileResult', success: boolean, errors?: Array<string | null> | null, data?: { __typename?: 'SaveConfigFile', result?: any | null } | null } | null };

export type LoadConfigFileMutationVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  fileName: Scalars['String'];
}>;


export type LoadConfigFileMutation = { __typename?: 'Mutation', LoadConfigFile?: { __typename?: 'LoadConfigFileResult', success: boolean, errors?: Array<string | null> | null, data?: { __typename?: 'LoadConfigFile', result?: any | null } | null } | null };

export type AddSystemImageMutationVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  location: Scalars['String'];
}>;


export type AddSystemImageMutation = { __typename?: 'Mutation', AddSystemImage?: { __typename?: 'AddSystemImageResult', success: boolean, errors?: Array<string | null> | null, data?: { __typename?: 'AddSystemImage', result?: any | null } | null } | null };

export type DeleteSystemImageMutationVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
}>;


export type DeleteSystemImageMutation = { __typename?: 'Mutation', DeleteSystemImage?: { __typename?: 'DeleteSystemImageResult', success: boolean, errors?: Array<string | null> | null, data?: { __typename?: 'DeleteSystemImage', result?: any | null } | null } | null };

export type ShowConntrackQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  family: FamilyConntrack;
}>;


export type ShowConntrackQuery = { __typename?: 'Query', ShowConntrack?: { __typename?: 'ShowConntrackResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowConntrack', result?: any | null } | null } | null };

export type ShowStatisticsConntrackQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowStatisticsConntrackQuery = { __typename?: 'Query', ShowStatisticsConntrack?: { __typename?: 'ShowStatisticsConntrackResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowStatisticsConntrack', result?: any | null } | null } | null };

export type AddImageContainerMutationVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
}>;


export type AddImageContainerMutation = { __typename?: 'Mutation', AddImageContainer?: { __typename?: 'AddImageContainerResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'AddImageContainer', result?: any | null } | null } | null };

export type DeleteImageContainerMutationVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
}>;


export type DeleteImageContainerMutation = { __typename?: 'Mutation', DeleteImageContainer?: { __typename?: 'DeleteImageContainerResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'DeleteImageContainer', result?: any | null } | null } | null };

export type RestartContainerMutationVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
}>;


export type RestartContainerMutation = { __typename?: 'Mutation', RestartContainer?: { __typename?: 'RestartContainerResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'RestartContainer', result?: any | null } | null } | null };

export type ShowContainerContainerQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowContainerContainerQuery = { __typename?: 'Query', ShowContainerContainer?: { __typename?: 'ShowContainerContainerResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowContainerContainer', result?: any | null } | null } | null };

export type ShowImageContainerQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowImageContainerQuery = { __typename?: 'Query', ShowImageContainer?: { __typename?: 'ShowImageContainerResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowImageContainer', result?: any | null } | null } | null };

export type ShowNetworkContainerQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowNetworkContainerQuery = { __typename?: 'Query', ShowNetworkContainer?: { __typename?: 'ShowNetworkContainerResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowNetworkContainer', result?: any | null } | null } | null };

export type ShowCpuQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowCpuQuery = { __typename?: 'Query', ShowCpu?: { __typename?: 'ShowCpuResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowCpu', result?: any | null } | null } | null };

export type ShowSummaryCpuQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowSummaryCpuQuery = { __typename?: 'Query', ShowSummaryCpu?: { __typename?: 'ShowSummaryCpuResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowSummaryCpu', result?: any | null } | null } | null };

export type ShowPoolStatisticsDhcpQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  family: FamilyDhcp;
  pool?: InputMaybe<Scalars['String']>;
}>;


export type ShowPoolStatisticsDhcpQuery = { __typename?: 'Query', ShowPoolStatisticsDhcp?: { __typename?: 'ShowPoolStatisticsDhcpResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowPoolStatisticsDhcp', result?: any | null } | null } | null };

export type ShowServerLeasesDhcpQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  family: FamilyDhcp;
  pool?: InputMaybe<Scalars['String']>;
  sorted?: InputMaybe<Scalars['String']>;
  state: StateDhcp;
}>;


export type ShowServerLeasesDhcpQuery = { __typename?: 'Query', ShowServerLeasesDhcp?: { __typename?: 'ShowServerLeasesDhcpResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowServerLeasesDhcp', result?: any | null } | null } | null };

export type ShowForwardingStatisticsDnsQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowForwardingStatisticsDnsQuery = { __typename?: 'Query', ShowForwardingStatisticsDns?: { __typename?: 'ShowForwardingStatisticsDnsResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowForwardingStatisticsDns', result?: any | null } | null } | null };

export type ClearCountersInterfacesMutationVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  intf_name?: InputMaybe<Scalars['String']>;
  intf_type?: InputMaybe<Scalars['String']>;
  vif?: InputMaybe<Scalars['Boolean']>;
  vrrp?: InputMaybe<Scalars['Boolean']>;
}>;


export type ClearCountersInterfacesMutation = { __typename?: 'Mutation', ClearCountersInterfaces?: { __typename?: 'ClearCountersInterfacesResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ClearCountersInterfaces', result?: any | null } | null } | null };

export type ResetCountersInterfacesMutationVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  intf_name?: InputMaybe<Scalars['String']>;
  intf_type?: InputMaybe<Scalars['String']>;
  vif?: InputMaybe<Scalars['Boolean']>;
  vrrp?: InputMaybe<Scalars['Boolean']>;
}>;


export type ResetCountersInterfacesMutation = { __typename?: 'Mutation', ResetCountersInterfaces?: { __typename?: 'ResetCountersInterfacesResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ResetCountersInterfaces', result?: any | null } | null } | null };

export type ShowInterfacesQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  intf_name?: InputMaybe<Scalars['String']>;
  intf_type?: InputMaybe<Scalars['String']>;
  vif?: InputMaybe<Scalars['Boolean']>;
  vrrp?: InputMaybe<Scalars['Boolean']>;
}>;


export type ShowInterfacesQuery = { __typename?: 'Query', ShowInterfaces?: { __typename?: 'ShowInterfacesResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowInterfaces', result?: any | null } | null } | null };

export type ShowCountersInterfacesQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  intf_name?: InputMaybe<Scalars['String']>;
  intf_type?: InputMaybe<Scalars['String']>;
  vif?: InputMaybe<Scalars['Boolean']>;
  vrrp?: InputMaybe<Scalars['Boolean']>;
}>;


export type ShowCountersInterfacesQuery = { __typename?: 'Query', ShowCountersInterfaces?: { __typename?: 'ShowCountersInterfacesResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowCountersInterfaces', result?: any | null } | null } | null };

export type ShowSummaryInterfacesQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  intf_name?: InputMaybe<Scalars['String']>;
  intf_type?: InputMaybe<Scalars['String']>;
  vif?: InputMaybe<Scalars['Boolean']>;
  vrrp?: InputMaybe<Scalars['Boolean']>;
}>;


export type ShowSummaryInterfacesQuery = { __typename?: 'Query', ShowSummaryInterfaces?: { __typename?: 'ShowSummaryInterfacesResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowSummaryInterfaces', result?: any | null } | null } | null };

export type ResetAllPeersIpsecMutationVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ResetAllPeersIpsecMutation = { __typename?: 'Mutation', ResetAllPeersIpsec?: { __typename?: 'ResetAllPeersIpsecResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ResetAllPeersIpsec', result?: any | null } | null } | null };

export type ResetPeerIpsecMutationVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  peer: Scalars['String'];
  tunnel?: InputMaybe<Scalars['String']>;
}>;


export type ResetPeerIpsecMutation = { __typename?: 'Mutation', ResetPeerIpsec?: { __typename?: 'ResetPeerIpsecResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ResetPeerIpsec', result?: any | null } | null } | null };

export type ResetProfileAllIpsecMutationVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  profile: Scalars['String'];
  tunnel: Scalars['String'];
}>;


export type ResetProfileAllIpsecMutation = { __typename?: 'Mutation', ResetProfileAllIpsec?: { __typename?: 'ResetProfileAllIpsecResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ResetProfileAllIpsec', result?: any | null } | null } | null };

export type ResetProfileDstIpsecMutationVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  profile: Scalars['String'];
  tunnel: Scalars['String'];
  nbma_dst: Scalars['String'];
}>;


export type ResetProfileDstIpsecMutation = { __typename?: 'Mutation', ResetProfileDstIpsec?: { __typename?: 'ResetProfileDstIpsecResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ResetProfileDstIpsec', result?: any | null } | null } | null };

export type ResetRaIpsecMutationVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
}>;


export type ResetRaIpsecMutation = { __typename?: 'Mutation', ResetRaIpsec?: { __typename?: 'ResetRaIpsecResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ResetRaIpsec', result?: any | null } | null } | null };

export type ShowConnectionsIpsecQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowConnectionsIpsecQuery = { __typename?: 'Query', ShowConnectionsIpsec?: { __typename?: 'ShowConnectionsIpsecResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowConnectionsIpsec', result?: any | null } | null } | null };

export type ShowConnectionsSummaryIpsecQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowConnectionsSummaryIpsecQuery = { __typename?: 'Query', ShowConnectionsSummaryIpsec?: { __typename?: 'ShowConnectionsSummaryIpsecResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowConnectionsSummaryIpsec', result?: any | null } | null } | null };

export type ShowRaDetailIpsecQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  conn_id?: InputMaybe<Scalars['String']>;
}>;


export type ShowRaDetailIpsecQuery = { __typename?: 'Query', ShowRaDetailIpsec?: { __typename?: 'ShowRaDetailIpsecResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowRaDetailIpsec', result?: any | null } | null } | null };

export type ShowRaSummaryIpsecQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowRaSummaryIpsecQuery = { __typename?: 'Query', ShowRaSummaryIpsec?: { __typename?: 'ShowRaSummaryIpsecResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowRaSummaryIpsec', result?: any | null } | null } | null };

export type ShowSaIpsecQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowSaIpsecQuery = { __typename?: 'Query', ShowSaIpsec?: { __typename?: 'ShowSaIpsecResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowSaIpsec', result?: any | null } | null } | null };

export type ShowSaDetailIpsecQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowSaDetailIpsecQuery = { __typename?: 'Query', ShowSaDetailIpsec?: { __typename?: 'ShowSaDetailIpsecResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowSaDetailIpsec', result?: any | null } | null } | null };

export type ShowNeighborsLldpQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  interface?: InputMaybe<Scalars['String']>;
  detail?: InputMaybe<Scalars['Boolean']>;
}>;


export type ShowNeighborsLldpQuery = { __typename?: 'Query', ShowNeighborsLldp?: { __typename?: 'ShowNeighborsLldpResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowNeighborsLldp', result?: any | null } | null } | null };

export type ShowLogQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  boot?: InputMaybe<Scalars['Boolean']>;
  count?: InputMaybe<Scalars['Int']>;
  facility?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  utc?: InputMaybe<Scalars['Boolean']>;
  unit?: InputMaybe<Scalars['String']>;
}>;


export type ShowLogQuery = { __typename?: 'Query', ShowLog?: { __typename?: 'ShowLogResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowLog', result?: any | null } | null } | null };

export type ShowMemoryQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowMemoryQuery = { __typename?: 'Query', ShowMemory?: { __typename?: 'ShowMemoryResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowMemory', result?: any | null } | null } | null };

export type ShowRulesNatQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  direction: DirectionNat;
  family: FamilyNat;
}>;


export type ShowRulesNatQuery = { __typename?: 'Query', ShowRulesNat?: { __typename?: 'ShowRulesNatResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowRulesNat', result?: any | null } | null } | null };

export type ShowStatisticsNatQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  direction: DirectionNat;
  family: FamilyNat;
}>;


export type ShowStatisticsNatQuery = { __typename?: 'Query', ShowStatisticsNat?: { __typename?: 'ShowStatisticsNatResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowStatisticsNat', result?: any | null } | null } | null };

export type ShowTranslationsNatQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  direction: DirectionNat;
  family: FamilyNat;
  address?: InputMaybe<Scalars['String']>;
  verbose?: InputMaybe<Scalars['Boolean']>;
}>;


export type ShowTranslationsNatQuery = { __typename?: 'Query', ShowTranslationsNat?: { __typename?: 'ShowTranslationsNatResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowTranslationsNat', result?: any | null } | null } | null };

export type ResetNeighborMutationVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  family: FamilyNeighbor;
  interface?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
}>;


export type ResetNeighborMutation = { __typename?: 'Mutation', ResetNeighbor?: { __typename?: 'ResetNeighborResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ResetNeighbor', result?: any | null } | null } | null };

export type ShowNeighborQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  family: FamilyNeighbor;
  interface?: InputMaybe<Scalars['String']>;
  state: StateNeighbor;
}>;


export type ShowNeighborQuery = { __typename?: 'Query', ShowNeighbor?: { __typename?: 'ShowNeighborResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowNeighbor', result?: any | null } | null } | null };

export type ShowInterfaceNhrpQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowInterfaceNhrpQuery = { __typename?: 'Query', ShowInterfaceNhrp?: { __typename?: 'ShowInterfaceNhrpResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowInterfaceNhrp', result?: any | null } | null } | null };

export type ShowTunnelNhrpQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowTunnelNhrpQuery = { __typename?: 'Query', ShowTunnelNhrp?: { __typename?: 'ShowTunnelNhrpResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowTunnelNhrp', result?: any | null } | null } | null };

export type ShowSessionsOpenconnectQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowSessionsOpenconnectQuery = { __typename?: 'Query', ShowSessionsOpenconnect?: { __typename?: 'ShowSessionsOpenconnectResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowSessionsOpenconnect', result?: any | null } | null } | null };

export type ResetOpenvpnMutationVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  interface: Scalars['String'];
}>;


export type ResetOpenvpnMutation = { __typename?: 'Mutation', ResetOpenvpn?: { __typename?: 'ResetOpenvpnResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ResetOpenvpn', result?: any | null } | null } | null };

export type ShowOpenvpnQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  mode: ModeOpenvpn;
}>;


export type ShowOpenvpnQuery = { __typename?: 'Query', ShowOpenvpn?: { __typename?: 'ShowOpenvpnResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowOpenvpn', result?: any | null } | null } | null };

export type ResetConnResetVpnMutationVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  protocol: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
  interface?: InputMaybe<Scalars['String']>;
}>;


export type ResetConnResetVpnMutation = { __typename?: 'Mutation', ResetConnResetVpn?: { __typename?: 'ResetConnResetVpnResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ResetConnResetVpn', result?: any | null } | null } | null };

export type ShowRouteQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  family: FamilyRoute;
  net?: InputMaybe<Scalars['String']>;
  table?: InputMaybe<Scalars['Int']>;
  protocol?: InputMaybe<Scalars['String']>;
  vrf?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<Scalars['String']>;
}>;


export type ShowRouteQuery = { __typename?: 'Query', ShowRoute?: { __typename?: 'ShowRouteResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowRoute', result?: any | null } | null } | null };

export type ShowSummaryRouteQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  family: FamilyRoute;
  table?: InputMaybe<Scalars['Int']>;
  vrf?: InputMaybe<Scalars['String']>;
}>;


export type ShowSummaryRouteQuery = { __typename?: 'Query', ShowSummaryRoute?: { __typename?: 'ShowSummaryRouteResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowSummaryRoute', result?: any | null } | null } | null };

export type ShowStorageQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowStorageQuery = { __typename?: 'Query', ShowStorage?: { __typename?: 'ShowStorageResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowStorage', result?: any | null } | null } | null };

export type ShowUpdateSystemQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowUpdateSystemQuery = { __typename?: 'Query', ShowUpdateSystem?: { __typename?: 'ShowUpdateSystemResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowUpdateSystem', result?: any | null } | null } | null };

export type ShowUptimeQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type ShowUptimeQuery = { __typename?: 'Query', ShowUptime?: { __typename?: 'ShowUptimeResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowUptime', result?: any | null } | null } | null };

export type ShowVersionQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  funny?: InputMaybe<Scalars['Boolean']>;
}>;


export type ShowVersionQuery = { __typename?: 'Query', ShowVersion?: { __typename?: 'ShowVersionResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowVersion', result?: any | null } | null } | null };

export type ShowVrfQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
}>;


export type ShowVrfQuery = { __typename?: 'Query', ShowVrf?: { __typename?: 'ShowVrfResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowVrf', result?: any | null } | null } | null };

export type ShowZoneQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
  zone?: InputMaybe<Scalars['String']>;
}>;


export type ShowZoneQuery = { __typename?: 'Query', ShowZone?: { __typename?: 'ShowZoneResult', success: boolean, errors?: Array<string | null> | null, op_mode_error?: { __typename?: 'CommitInProgress', name: string, message: string, vyos_code: number } | { __typename?: 'DataUnavailable', name: string, message: string, vyos_code: number } | { __typename?: 'IncorrectValue', name: string, message: string, vyos_code: number } | { __typename?: 'InsufficientResources', name: string, message: string, vyos_code: number } | { __typename?: 'InternalError', name: string, message: string, vyos_code: number } | { __typename?: 'PermissionDenied', name: string, message: string, vyos_code: number } | { __typename?: 'UnconfiguredSubsystem', name: string, message: string, vyos_code: number } | { __typename?: 'UnsupportedOperation', name: string, message: string, vyos_code: number } | null, data?: { __typename?: 'ShowZone', result?: any | null } | null } | null };


export const ShowSessionsAccelpppDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowSessionsAccelppp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"protocol"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowSessionsAccelppp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"protocol"},"value":{"kind":"Variable","name":{"kind":"Name","value":"protocol"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowSessionsAccelpppQuery, ShowSessionsAccelpppQueryVariables>;
export const ShowStatisticsAccelpppDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowStatisticsAccelppp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"protocol"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowStatisticsAccelppp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"protocol"},"value":{"kind":"Variable","name":{"kind":"Name","value":"protocol"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowStatisticsAccelpppQuery, ShowStatisticsAccelpppQueryVariables>;
export const AuthTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AuthToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AuthToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<AuthTokenMutation, AuthTokenMutationVariables>;
export const ShowBgpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowBgp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"family"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FamilyBgp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"family_modifier"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FamilyModifierBgp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"prefix"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"longer_prefixes"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"best_path"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"regex"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vrf"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowBgp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"family"},"value":{"kind":"Variable","name":{"kind":"Name","value":"family"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"family_modifier"},"value":{"kind":"Variable","name":{"kind":"Name","value":"family_modifier"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"prefix"},"value":{"kind":"Variable","name":{"kind":"Name","value":"prefix"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"longer_prefixes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"longer_prefixes"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"best_path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"best_path"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"regex"},"value":{"kind":"Variable","name":{"kind":"Name","value":"regex"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"vrf"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vrf"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowBgpQuery, ShowBgpQueryVariables>;
export const ShowNeighborsBgpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowNeighborsBgp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowNeighborsBgp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowNeighborsBgpQuery, ShowNeighborsBgpQueryVariables>;
export const ShowSummaryBgpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowSummaryBgp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowSummaryBgp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowSummaryBgpQuery, ShowSummaryBgpQueryVariables>;
export const ShowBridgeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowBridge"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowBridge"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowBridgeQuery, ShowBridgeQueryVariables>;
export const ShowFdbBridgeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowFdbBridge"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"interface"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowFdbBridge"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"interface"},"value":{"kind":"Variable","name":{"kind":"Name","value":"interface"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowFdbBridgeQuery, ShowFdbBridgeQueryVariables>;
export const ShowMdbBridgeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowMdbBridge"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"interface"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowMdbBridge"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"interface"},"value":{"kind":"Variable","name":{"kind":"Name","value":"interface"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowMdbBridgeQuery, ShowMdbBridgeQueryVariables>;
export const ShowVlanBridgeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowVlanBridge"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowVlanBridge"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowVlanBridgeQuery, ShowVlanBridgeQueryVariables>;
export const SystemStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SystemStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SystemStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<SystemStatusQuery, SystemStatusQueryVariables>;
export const ShowCommitDiffConfigMgmtDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowCommitDiffConfigMgmt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rev"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rev2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commands"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowCommitDiffConfigMgmt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"rev"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rev"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"rev2"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rev2"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"commands"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commands"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowCommitDiffConfigMgmtQuery, ShowCommitDiffConfigMgmtQueryVariables>;
export const ShowCommitFileConfigMgmtDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowCommitFileConfigMgmt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rev"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowCommitFileConfigMgmt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"rev"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rev"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowCommitFileConfigMgmtQuery, ShowCommitFileConfigMgmtQueryVariables>;
export const ShowCommitLogConfigMgmtDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowCommitLogConfigMgmt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowCommitLogConfigMgmt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowCommitLogConfigMgmtQuery, ShowCommitLogConfigMgmtQueryVariables>;
export const ShowCommitLogBriefConfigMgmtDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowCommitLogBriefConfigMgmt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowCommitLogBriefConfigMgmt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowCommitLogBriefConfigMgmtQuery, ShowCommitLogBriefConfigMgmtQueryVariables>;
export const ShowConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"configFormat"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"configFormat"},"value":{"kind":"Variable","name":{"kind":"Name","value":"configFormat"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowConfigQuery, ShowConfigQueryVariables>;
export const ShowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Show"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Show"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowQuery, ShowQueryVariables>;
export const ShowUserInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowUserInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowUserInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowUserInfoQuery, ShowUserInfoQueryVariables>;
export const SaveConfigFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SaveConfigFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SaveConfigFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<SaveConfigFileMutation, SaveConfigFileMutationVariables>;
export const LoadConfigFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoadConfigFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LoadConfigFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<LoadConfigFileMutation, LoadConfigFileMutationVariables>;
export const AddSystemImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddSystemImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"location"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddSystemImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"Variable","name":{"kind":"Name","value":"location"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<AddSystemImageMutation, AddSystemImageMutationVariables>;
export const DeleteSystemImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSystemImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteSystemImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteSystemImageMutation, DeleteSystemImageMutationVariables>;
export const ShowConntrackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowConntrack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"family"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FamilyConntrack"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowConntrack"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"family"},"value":{"kind":"Variable","name":{"kind":"Name","value":"family"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowConntrackQuery, ShowConntrackQueryVariables>;
export const ShowStatisticsConntrackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowStatisticsConntrack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowStatisticsConntrack"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowStatisticsConntrackQuery, ShowStatisticsConntrackQueryVariables>;
export const AddImageContainerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddImageContainer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AddImageContainer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<AddImageContainerMutation, AddImageContainerMutationVariables>;
export const DeleteImageContainerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteImageContainer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteImageContainer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteImageContainerMutation, DeleteImageContainerMutationVariables>;
export const RestartContainerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RestartContainer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"RestartContainer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<RestartContainerMutation, RestartContainerMutationVariables>;
export const ShowContainerContainerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowContainerContainer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowContainerContainer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowContainerContainerQuery, ShowContainerContainerQueryVariables>;
export const ShowImageContainerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowImageContainer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowImageContainer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowImageContainerQuery, ShowImageContainerQueryVariables>;
export const ShowNetworkContainerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowNetworkContainer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowNetworkContainer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowNetworkContainerQuery, ShowNetworkContainerQueryVariables>;
export const ShowCpuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowCpu"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowCpu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowCpuQuery, ShowCpuQueryVariables>;
export const ShowSummaryCpuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowSummaryCpu"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowSummaryCpu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowSummaryCpuQuery, ShowSummaryCpuQueryVariables>;
export const ShowPoolStatisticsDhcpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowPoolStatisticsDhcp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"family"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FamilyDhcp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pool"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowPoolStatisticsDhcp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"family"},"value":{"kind":"Variable","name":{"kind":"Name","value":"family"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pool"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pool"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowPoolStatisticsDhcpQuery, ShowPoolStatisticsDhcpQueryVariables>;
export const ShowServerLeasesDhcpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowServerLeasesDhcp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"family"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FamilyDhcp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pool"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"state"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"StateDhcp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowServerLeasesDhcp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"family"},"value":{"kind":"Variable","name":{"kind":"Name","value":"family"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pool"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pool"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"sorted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorted"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"state"},"value":{"kind":"Variable","name":{"kind":"Name","value":"state"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowServerLeasesDhcpQuery, ShowServerLeasesDhcpQueryVariables>;
export const ShowForwardingStatisticsDnsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowForwardingStatisticsDns"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowForwardingStatisticsDns"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowForwardingStatisticsDnsQuery, ShowForwardingStatisticsDnsQueryVariables>;
export const ClearCountersInterfacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ClearCountersInterfaces"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"intf_name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"intf_type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vif"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vrrp"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ClearCountersInterfaces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"intf_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"intf_name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"intf_type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"intf_type"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"vif"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vif"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"vrrp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vrrp"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ClearCountersInterfacesMutation, ClearCountersInterfacesMutationVariables>;
export const ResetCountersInterfacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetCountersInterfaces"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"intf_name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"intf_type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vif"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vrrp"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ResetCountersInterfaces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"intf_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"intf_name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"intf_type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"intf_type"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"vif"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vif"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"vrrp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vrrp"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ResetCountersInterfacesMutation, ResetCountersInterfacesMutationVariables>;
export const ShowInterfacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowInterfaces"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"intf_name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"intf_type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vif"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vrrp"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowInterfaces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"intf_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"intf_name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"intf_type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"intf_type"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"vif"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vif"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"vrrp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vrrp"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowInterfacesQuery, ShowInterfacesQueryVariables>;
export const ShowCountersInterfacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowCountersInterfaces"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"intf_name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"intf_type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vif"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vrrp"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowCountersInterfaces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"intf_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"intf_name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"intf_type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"intf_type"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"vif"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vif"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"vrrp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vrrp"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowCountersInterfacesQuery, ShowCountersInterfacesQueryVariables>;
export const ShowSummaryInterfacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowSummaryInterfaces"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"intf_name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"intf_type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vif"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vrrp"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowSummaryInterfaces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"intf_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"intf_name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"intf_type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"intf_type"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"vif"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vif"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"vrrp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vrrp"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowSummaryInterfacesQuery, ShowSummaryInterfacesQueryVariables>;
export const ResetAllPeersIpsecDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetAllPeersIpsec"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ResetAllPeersIpsec"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ResetAllPeersIpsecMutation, ResetAllPeersIpsecMutationVariables>;
export const ResetPeerIpsecDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPeerIpsec"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"peer"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tunnel"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ResetPeerIpsec"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"peer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"peer"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tunnel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tunnel"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ResetPeerIpsecMutation, ResetPeerIpsecMutationVariables>;
export const ResetProfileAllIpsecDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetProfileAllIpsec"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profile"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tunnel"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ResetProfileAllIpsec"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"profile"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profile"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tunnel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tunnel"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ResetProfileAllIpsecMutation, ResetProfileAllIpsecMutationVariables>;
export const ResetProfileDstIpsecDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetProfileDstIpsec"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profile"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tunnel"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nbma_dst"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ResetProfileDstIpsec"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"profile"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profile"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tunnel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tunnel"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"nbma_dst"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nbma_dst"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ResetProfileDstIpsecMutation, ResetProfileDstIpsecMutationVariables>;
export const ResetRaIpsecDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetRaIpsec"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ResetRaIpsec"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ResetRaIpsecMutation, ResetRaIpsecMutationVariables>;
export const ShowConnectionsIpsecDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowConnectionsIpsec"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowConnectionsIpsec"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowConnectionsIpsecQuery, ShowConnectionsIpsecQueryVariables>;
export const ShowConnectionsSummaryIpsecDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowConnectionsSummaryIpsec"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowConnectionsSummaryIpsec"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowConnectionsSummaryIpsecQuery, ShowConnectionsSummaryIpsecQueryVariables>;
export const ShowRaDetailIpsecDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowRaDetailIpsec"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"conn_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowRaDetailIpsec"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"conn_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"conn_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowRaDetailIpsecQuery, ShowRaDetailIpsecQueryVariables>;
export const ShowRaSummaryIpsecDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowRaSummaryIpsec"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowRaSummaryIpsec"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowRaSummaryIpsecQuery, ShowRaSummaryIpsecQueryVariables>;
export const ShowSaIpsecDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowSaIpsec"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowSaIpsec"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowSaIpsecQuery, ShowSaIpsecQueryVariables>;
export const ShowSaDetailIpsecDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowSaDetailIpsec"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowSaDetailIpsec"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowSaDetailIpsecQuery, ShowSaDetailIpsecQueryVariables>;
export const ShowNeighborsLldpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowNeighborsLldp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"interface"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"detail"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowNeighborsLldp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"interface"},"value":{"kind":"Variable","name":{"kind":"Name","value":"interface"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"detail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"detail"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowNeighborsLldpQuery, ShowNeighborsLldpQueryVariables>;
export const ShowLogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowLog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"boot"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"count"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"facility"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reverse"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"utc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"unit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowLog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"boot"},"value":{"kind":"Variable","name":{"kind":"Name","value":"boot"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"Variable","name":{"kind":"Name","value":"count"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"facility"},"value":{"kind":"Variable","name":{"kind":"Name","value":"facility"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"reverse"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reverse"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"utc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"utc"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"unit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"unit"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowLogQuery, ShowLogQueryVariables>;
export const ShowMemoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowMemory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowMemory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowMemoryQuery, ShowMemoryQueryVariables>;
export const ShowRulesNatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowRulesNat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"direction"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DirectionNat"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"family"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FamilyNat"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowRulesNat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"Variable","name":{"kind":"Name","value":"direction"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"family"},"value":{"kind":"Variable","name":{"kind":"Name","value":"family"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowRulesNatQuery, ShowRulesNatQueryVariables>;
export const ShowStatisticsNatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowStatisticsNat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"direction"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DirectionNat"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"family"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FamilyNat"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowStatisticsNat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"Variable","name":{"kind":"Name","value":"direction"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"family"},"value":{"kind":"Variable","name":{"kind":"Name","value":"family"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowStatisticsNatQuery, ShowStatisticsNatQueryVariables>;
export const ShowTranslationsNatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowTranslationsNat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"direction"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DirectionNat"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"family"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FamilyNat"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"verbose"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowTranslationsNat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"Variable","name":{"kind":"Name","value":"direction"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"family"},"value":{"kind":"Variable","name":{"kind":"Name","value":"family"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"verbose"},"value":{"kind":"Variable","name":{"kind":"Name","value":"verbose"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowTranslationsNatQuery, ShowTranslationsNatQueryVariables>;
export const ResetNeighborDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetNeighbor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"family"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FamilyNeighbor"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"interface"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ResetNeighbor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"family"},"value":{"kind":"Variable","name":{"kind":"Name","value":"family"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"interface"},"value":{"kind":"Variable","name":{"kind":"Name","value":"interface"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ResetNeighborMutation, ResetNeighborMutationVariables>;
export const ShowNeighborDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowNeighbor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"family"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FamilyNeighbor"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"interface"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"state"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"StateNeighbor"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowNeighbor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"family"},"value":{"kind":"Variable","name":{"kind":"Name","value":"family"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"interface"},"value":{"kind":"Variable","name":{"kind":"Name","value":"interface"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"state"},"value":{"kind":"Variable","name":{"kind":"Name","value":"state"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowNeighborQuery, ShowNeighborQueryVariables>;
export const ShowInterfaceNhrpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowInterfaceNhrp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowInterfaceNhrp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowInterfaceNhrpQuery, ShowInterfaceNhrpQueryVariables>;
export const ShowTunnelNhrpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowTunnelNhrp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowTunnelNhrp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowTunnelNhrpQuery, ShowTunnelNhrpQueryVariables>;
export const ShowSessionsOpenconnectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowSessionsOpenconnect"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowSessionsOpenconnect"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowSessionsOpenconnectQuery, ShowSessionsOpenconnectQueryVariables>;
export const ResetOpenvpnDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetOpenvpn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"interface"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ResetOpenvpn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"interface"},"value":{"kind":"Variable","name":{"kind":"Name","value":"interface"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ResetOpenvpnMutation, ResetOpenvpnMutationVariables>;
export const ShowOpenvpnDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowOpenvpn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ModeOpenvpn"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowOpenvpn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mode"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowOpenvpnQuery, ShowOpenvpnQueryVariables>;
export const ResetConnResetVpnDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetConnResetVpn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"protocol"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"interface"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ResetConnResetVpn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"protocol"},"value":{"kind":"Variable","name":{"kind":"Name","value":"protocol"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"interface"},"value":{"kind":"Variable","name":{"kind":"Name","value":"interface"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ResetConnResetVpnMutation, ResetConnResetVpnMutationVariables>;
export const ShowRouteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowRoute"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"family"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FamilyRoute"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"net"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"table"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"protocol"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vrf"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tag"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowRoute"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"family"},"value":{"kind":"Variable","name":{"kind":"Name","value":"family"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"net"},"value":{"kind":"Variable","name":{"kind":"Name","value":"net"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"table"},"value":{"kind":"Variable","name":{"kind":"Name","value":"table"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"protocol"},"value":{"kind":"Variable","name":{"kind":"Name","value":"protocol"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"vrf"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vrf"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tag"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tag"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowRouteQuery, ShowRouteQueryVariables>;
export const ShowSummaryRouteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowSummaryRoute"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"family"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FamilyRoute"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"table"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vrf"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowSummaryRoute"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"family"},"value":{"kind":"Variable","name":{"kind":"Name","value":"family"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"table"},"value":{"kind":"Variable","name":{"kind":"Name","value":"table"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"vrf"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vrf"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowSummaryRouteQuery, ShowSummaryRouteQueryVariables>;
export const ShowStorageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowStorage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowStorage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowStorageQuery, ShowStorageQueryVariables>;
export const ShowUpdateSystemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowUpdateSystem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowUpdateSystem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowUpdateSystemQuery, ShowUpdateSystemQueryVariables>;
export const ShowUptimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowUptime"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowUptime"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowUptimeQuery, ShowUptimeQueryVariables>;
export const ShowVersionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowVersion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"funny"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowVersion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"funny"},"value":{"kind":"Variable","name":{"kind":"Name","value":"funny"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowVersionQuery, ShowVersionQueryVariables>;
export const ShowVrfDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowVrf"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowVrf"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowVrfQuery, ShowVrfQueryVariables>;
export const ShowZoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowZone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"zone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowZone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"zone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"zone"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"op_mode_error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"vyos_code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]}}]} as unknown as DocumentNode<ShowZoneQuery, ShowZoneQueryVariables>;