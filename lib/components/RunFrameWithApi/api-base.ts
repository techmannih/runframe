export const getApiBase = () =>
  (typeof window !== "undefined" &&
    (window as any).TSCIRCUIT_FILESERVER_API_BASE_URL) ??
  "/api"

export const API_BASE = getApiBase()
