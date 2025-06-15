/**
 * ProtoPayloadType
 * --- INTENSIVE COMMANDS 1-49
 * --- COMMON API 50-69
 * ref: https://help.ctrader.com/open-api/common-model-messages/#protopayloadtype
 */
export enum ProtoPayloadType {
  /** common intensive */
  PROTO_MESSAGE = 5,

  /** common commands */
  ERROR_RES = 50,

  /** common commands */
  HEARTBEAT_EVENT = 51
}
