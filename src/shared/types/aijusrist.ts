/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum BlankEnum {
  Value = "",
}

export interface Consultation {
  id: number;
  client: number;
  lawyer: number;
  description: string;
  /** @format date-time */
  date_requested: string;
  /**
   * * `На рассмотрении` - На рассмотрении
   * * `Принято` - Принято
   * * `Отклонено` - Отклонено
   */
  status?: StatusEnum;
}

/** Login user serializer */
export interface LoginUser {
  /**
   * @format email
   * @maxLength 254
   */
  email: string;
  /** @maxLength 128 */
  password: string;
}

export type NullEnum = null;

export interface PatchedConsultation {
  id?: number;
  client?: number;
  lawyer?: number;
  description?: string;
  /** @format date-time */
  date_requested?: string;
  /**
   * * `На рассмотрении` - На рассмотрении
   * * `Принято` - Принято
   * * `Отклонено` - Отклонено
   */
  status?: StatusEnum;
}

/** User registration serializer */
export interface PatchedUser {
  id?: number;
  /** @maxLength 255 */
  first_name?: string;
  /** @maxLength 255 */
  last_name?: string;
  /** @maxLength 128 */
  password?: string;
  /**
   * @format email
   * @maxLength 254
   */
  email?: string;
  /**
   * * `client` - Клиент
   * * `expert` - Эксперт
   * * `admin` - Администратор
   */
  user_type?: UserTypeEnum;
  specialization?: SpecializationEnum | BlankEnum | NullEnum | null;
  /** @maxLength 255 */
  description?: string | null;
  /** @maxLength 255 */
  contact?: string | null;
  /** @format uri */
  photo?: string | null;
}

/**
 * * `ugolovnyi` - Уголовный кодекс
 * * `semeinyi` - Семейный кодекс
 * * `nalogovyi` - Налоговый кодекс
 * * `grajdanskyi` - Гражданский кодекс
 * * `trudovoyi` - Трудовой кодекс
 * * `budjetnyi` - Бюджетный кодекс
 */
export enum SpecializationEnum {
  Ugolovnyi = "ugolovnyi",
  Semeinyi = "semeinyi",
  Nalogovyi = "nalogovyi",
  Grajdanskyi = "grajdanskyi",
  Trudovoyi = "trudovoyi",
  Budjetnyi = "budjetnyi",
}

/**
 * * `На рассмотрении` - На рассмотрении
 * * `Принято` - Принято
 * * `Отклонено` - Отклонено
 */
export enum StatusEnum {
  ValueНаРассмотрении = "На рассмотрении",
  ValueПринято = "Принято",
  ValueОтклонено = "Отклонено",
}

export interface TokenRefresh {
  access: string;
  refresh: string;
}

/** User registration serializer */
export interface User {
  id: number;
  /** @maxLength 255 */
  first_name: string;
  /** @maxLength 255 */
  last_name: string;
  /** @maxLength 128 */
  password: string;
  /**
   * @format email
   * @maxLength 254
   */
  email: string;
  /**
   * * `client` - Клиент
   * * `expert` - Эксперт
   * * `admin` - Администратор
   */
  user_type?: UserTypeEnum;
  specialization?: SpecializationEnum | BlankEnum | NullEnum | null;
  /** @maxLength 255 */
  description?: string | null;
  /** @maxLength 255 */
  contact?: string | null;
  /** @format uri */
  photo?: string | null;
}

/**
 * * `client` - Клиент
 * * `expert` - Эксперт
 * * `admin` - Администратор
 */
export enum UserTypeEnum {
  Client = "client",
  Expert = "expert",
  Admin = "admin",
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title AI-Jurist API
 * @version 1.0.0
 *
 * API for AI-Jurist platform
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  consultations = {
    /**
     * No description
     *
     * @tags consultations
     * @name ConsultationsConsultationsList
     * @request GET:/consultations/consultations/
     * @secure
     */
    consultationsConsultationsList: (params: RequestParams = {}) =>
      this.request<Consultation[], any>({
        path: `/consultations/consultations/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags consultations
     * @name ConsultationsConsultationsCreate
     * @request POST:/consultations/consultations/
     * @secure
     */
    consultationsConsultationsCreate: (data: Consultation, params: RequestParams = {}) =>
      this.request<Consultation, any>({
        path: `/consultations/consultations/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags consultations
     * @name ConsultationsConsultationsRetrieve
     * @request GET:/consultations/consultations/{id}/
     * @secure
     */
    consultationsConsultationsRetrieve: (id: number, params: RequestParams = {}) =>
      this.request<Consultation, any>({
        path: `/consultations/consultations/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags consultations
     * @name ConsultationsConsultationsUpdate
     * @request PUT:/consultations/consultations/{id}/
     * @secure
     */
    consultationsConsultationsUpdate: (id: number, data: Consultation, params: RequestParams = {}) =>
      this.request<Consultation, any>({
        path: `/consultations/consultations/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags consultations
     * @name ConsultationsConsultationsPartialUpdate
     * @request PATCH:/consultations/consultations/{id}/
     * @secure
     */
    consultationsConsultationsPartialUpdate: (id: number, data: PatchedConsultation, params: RequestParams = {}) =>
      this.request<Consultation, any>({
        path: `/consultations/consultations/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags consultations
     * @name ConsultationsConsultationsDestroy
     * @request DELETE:/consultations/consultations/{id}/
     * @secure
     */
    consultationsConsultationsDestroy: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/consultations/consultations/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  users = {
    /**
     * @description User login view
     *
     * @tags users
     * @name UsersLoginUserCreate
     * @request POST:/users/login-user/
     * @secure
     */
    usersLoginUserCreate: (data: LoginUser, params: RequestParams = {}) =>
      this.request<LoginUser, any>({
        path: `/users/login-user/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.
     *
     * @tags users
     * @name UsersTokenRefreshCreate
     * @request POST:/users/token/refresh/
     */
    usersTokenRefreshCreate: (data: TokenRefresh, params: RequestParams = {}) =>
      this.request<TokenRefresh, any>({
        path: `/users/token/refresh/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Register user view
     *
     * @tags users
     * @name UsersUsersList
     * @request GET:/users/users/
     * @secure
     */
    usersUsersList: (
      query?: {
        /**
         * * `ugolovnyi` - Уголовный кодекс
         * * `semeinyi` - Семейный кодекс
         * * `nalogovyi` - Налоговый кодекс
         * * `grajdanskyi` - Гражданский кодекс
         * * `trudovoyi` - Трудовой кодекс
         * * `budjetnyi` - Бюджетный кодекс
         */
        specialization?: "budjetnyi" | "grajdanskyi" | "nalogovyi" | "semeinyi" | "trudovoyi" | "ugolovnyi" | null;
        /**
         * * `client` - Клиент
         * * `expert` - Эксперт
         * * `admin` - Администратор
         */
        user_type?: "admin" | "client" | "expert";
      },
      params: RequestParams = {},
    ) =>
      this.request<User[], any>({
        path: `/users/users/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Register user view
     *
     * @tags users
     * @name UsersUsersCreate
     * @request POST:/users/users/
     * @secure
     */
    usersUsersCreate: (data: User, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users/users/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Register user view
     *
     * @tags users
     * @name UsersUsersRetrieve
     * @request GET:/users/users/{id}/
     * @secure
     */
    usersUsersRetrieve: (id: number, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users/users/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Register user view
     *
     * @tags users
     * @name UsersUsersUpdate
     * @request PUT:/users/users/{id}/
     * @secure
     */
    usersUsersUpdate: (id: number, data: User, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users/users/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Register user view
     *
     * @tags users
     * @name UsersUsersPartialUpdate
     * @request PATCH:/users/users/{id}/
     * @secure
     */
    usersUsersPartialUpdate: (id: number, data: PatchedUser, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users/users/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Register user view
     *
     * @tags users
     * @name UsersUsersDestroy
     * @request DELETE:/users/users/{id}/
     * @secure
     */
    usersUsersDestroy: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/users/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
}
