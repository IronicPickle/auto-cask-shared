export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const macAddressRegex =
  /(([0-9]|[a-f]|[A-F]){2}:){5}(([0-9]|[a-f]|[A-F]){2})/g;

export const mongoIdRegex = /^[0-f]{24}$/g;
