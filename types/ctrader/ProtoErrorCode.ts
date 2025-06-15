/**
 * ProtoErrorCode
 * --- COMMON error codes 1 - 99
 * ref: https://help.ctrader.com/open-api/common-model-messages/#protoerrorcode
 */
export enum ProtoErrorCode {
  /** Generic error. */
  UNKNOWN_ERROR = 1,

  /** Message is not supported. Wrong message. */
  UNSUPPORTED_MESSAGE = 2,

  /** Generic error. Usually used when the input value is not correct. */
  INVALID_REQUEST = 3,

  /** Deal execution is reached timeout and rejected. */
  TIMEOUT_ERROR = 5,

  /** Generic error for requests by id. */
  ENTITY_NOT_FOUND = 6,

  /** Connection to Server is lost or not supported. */
  CANT_ROUTE_REQUEST = 7,

  /** Message is too large. */
  FRAME_TOO_LONG = 8,

  /** Market is closed. */
  MARKET_CLOSED = 9,

  /** Order is blocked (e.g., under execution), and change cannot be applied. */
  CONCURRENT_MODIFICATION = 10,

  /** Message is blocked by the server or rate limit is reached. */
  BLOCKED_PAYLOAD_TYPE = 11,
}
