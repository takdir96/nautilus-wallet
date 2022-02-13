export enum LedgerDeviceModelId {
  blue = "blue",
  nanoS = "nanoS",
  nanoSP = "nanoSP",
  nanoX = "nanoX"
}

export enum LedgerState {
  unknown = "unknown",
  loading = "loading",
  error = "error",
  success = "success",
  userRejected = "userRejected",
  userAccepted = "userAccepted",
  deviceNotFound = "deviceNotFound"
}
