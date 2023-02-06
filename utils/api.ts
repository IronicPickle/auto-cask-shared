import { GenericErrorCode } from "../enums/api/generic";
import { ValidationErrors } from "../ts/api/generic";

export const ok =
  (body: unknown = { message: "success" }, statusCode = 200) =>
  (res: any) =>
    res
      .set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
      })
      .status(statusCode)
      .send(JSON.stringify(body));

export const error =
  (
    error: string,
    errorCode: string = GenericErrorCode.InternalServerError,
    statusCode = 500
  ) =>
  (res: any) =>
    ok({ error, errorCode }, statusCode)(res);

export const badRequestError =
  (
    error: string,
    errorCode: string = GenericErrorCode.BadRequest,
    statusCode = 400
  ) =>
  (res: any) =>
    ok({ error, errorCode }, statusCode)(res);

export const notFoundError =
  (error: string, errorCode: string = GenericErrorCode.NotFound) =>
  (res: any) =>
    ok(
      {
        error,
        errorCode,
        validation: { failed: false },
      },
      404
    )(res);

export const validationError =
  (validation: ValidationErrors<any>) => (res: any) =>
    ok(
      {
        error: "Validation failed",
        errorCode: GenericErrorCode.ValidationError,
        validation,
      },
      400
    )(res);

export const conflictError =
  (
    error: string = "Resource already exists",
    errorCode: string = GenericErrorCode.AlreadyExists
  ) =>
  (res: any) =>
    ok(
      {
        error,
        errorCode,
      },
      409
    )(res);

export const unauthorizedError =
  (
    error: string = "Unauthorized",
    errorCode: string = GenericErrorCode.Unauthorized
  ) =>
  (res: any) =>
    ok(
      {
        error,
        errorCode,
      },
      401
    )(res);

export const forbiddenError =
  (
    error: string = "Forbidden",
    errorCode: string = GenericErrorCode.Forbidden
  ) =>
  (res: any) =>
    ok(
      {
        error,
        errorCode,
      },
      403
    )(res);
