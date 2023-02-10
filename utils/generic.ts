import Validator from "./Validator";
import { ValidationErrors } from "../ts/api/generic";

export const enumContains = <T>(enumType: any, value: T): value is T => {
  return Object.values(enumType).includes(value);
};

export const randomNum = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const round = (value: number, decimalPlaces: number = 0) =>
  Math.round((value + Number.EPSILON) * Math.pow(10, decimalPlaces)) /
  Math.pow(10, decimalPlaces);

export const minMax = (value: number, min?: number, max?: number) => {
  if (min != null && value < min) return min;
  if (max != null && value > max) return max;
  return value;
};

export const isNumber = (value: any): value is number =>
  typeof value === "number" && !isNaN(value);
export const isString = (value: any): value is string =>
  typeof value === "string";
export const isBoolean = (value: any): value is boolean =>
  typeof value === "boolean";
export const isArray = <I>(value: any): value is I[] => Array.isArray(value);

export const parseValidators = <K extends string | number | symbol>(
  validators: Record<K, Validator>
): ValidationErrors<K> => {
  let failed = false;
  const errors = {} as Record<K, string[]>;

  for (const i in validators) {
    const validator = validators[i];

    errors[i] = validator.getErrors();
    if (errors[i].length > 0) failed = true;
  }

  return { failed, ...errors };
};

export const isEmpty = (value: any) => {
  if (value == null) return true;
  if (value.length != null) return value.length === 0;
  if (typeof value === "object") return Object.values(value).length === 0;

  return true;
};
