
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model eightyear
 * 
 */
export type eightyear = $Result.DefaultSelection<Prisma.$eightyearPayload>
/**
 * Model foo
 * 
 */
export type foo = $Result.DefaultSelection<Prisma.$fooPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Eightyears
 * const eightyears = await prisma.eightyear.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Eightyears
   * const eightyears = await prisma.eightyear.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.eightyear`: Exposes CRUD operations for the **eightyear** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eightyears
    * const eightyears = await prisma.eightyear.findMany()
    * ```
    */
  get eightyear(): Prisma.eightyearDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foo`: Exposes CRUD operations for the **foo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foos
    * const foos = await prisma.foo.findMany()
    * ```
    */
  get foo(): Prisma.fooDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0-integration-push-sunrovnkrkpv.1
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    eightyear: 'eightyear',
    foo: 'foo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "eightyear" | "foo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      eightyear: {
        payload: Prisma.$eightyearPayload<ExtArgs>
        fields: Prisma.eightyearFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eightyearFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eightyearPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eightyearFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eightyearPayload>
          }
          findFirst: {
            args: Prisma.eightyearFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eightyearPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eightyearFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eightyearPayload>
          }
          findMany: {
            args: Prisma.eightyearFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eightyearPayload>[]
          }
          create: {
            args: Prisma.eightyearCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eightyearPayload>
          }
          createMany: {
            args: Prisma.eightyearCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eightyearCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eightyearPayload>[]
          }
          delete: {
            args: Prisma.eightyearDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eightyearPayload>
          }
          update: {
            args: Prisma.eightyearUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eightyearPayload>
          }
          deleteMany: {
            args: Prisma.eightyearDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eightyearUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eightyearUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eightyearPayload>[]
          }
          upsert: {
            args: Prisma.eightyearUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eightyearPayload>
          }
          aggregate: {
            args: Prisma.EightyearAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEightyear>
          }
          groupBy: {
            args: Prisma.eightyearGroupByArgs<ExtArgs>
            result: $Utils.Optional<EightyearGroupByOutputType>[]
          }
          count: {
            args: Prisma.eightyearCountArgs<ExtArgs>
            result: $Utils.Optional<EightyearCountAggregateOutputType> | number
          }
        }
      }
      foo: {
        payload: Prisma.$fooPayload<ExtArgs>
        fields: Prisma.fooFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fooFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fooPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fooFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fooPayload>
          }
          findFirst: {
            args: Prisma.fooFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fooPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fooFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fooPayload>
          }
          findMany: {
            args: Prisma.fooFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fooPayload>[]
          }
          create: {
            args: Prisma.fooCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fooPayload>
          }
          createMany: {
            args: Prisma.fooCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.fooCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fooPayload>[]
          }
          delete: {
            args: Prisma.fooDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fooPayload>
          }
          update: {
            args: Prisma.fooUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fooPayload>
          }
          deleteMany: {
            args: Prisma.fooDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fooUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.fooUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fooPayload>[]
          }
          upsert: {
            args: Prisma.fooUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fooPayload>
          }
          aggregate: {
            args: Prisma.FooAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoo>
          }
          groupBy: {
            args: Prisma.fooGroupByArgs<ExtArgs>
            result: $Utils.Optional<FooGroupByOutputType>[]
          }
          count: {
            args: Prisma.fooCountArgs<ExtArgs>
            result: $Utils.Optional<FooCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    eightyear?: eightyearOmit
    foo?: fooOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model eightyear
   */

  export type AggregateEightyear = {
    _count: EightyearCountAggregateOutputType | null
    _avg: EightyearAvgAggregateOutputType | null
    _sum: EightyearSumAggregateOutputType | null
    _min: EightyearMinAggregateOutputType | null
    _max: EightyearMaxAggregateOutputType | null
  }

  export type EightyearAvgAggregateOutputType = {
    id: number | null
  }

  export type EightyearSumAggregateOutputType = {
    id: number | null
  }

  export type EightyearMinAggregateOutputType = {
    id: number | null
    date: Date | null
    day: string | null
    checkedoff: boolean | null
  }

  export type EightyearMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    day: string | null
    checkedoff: boolean | null
  }

  export type EightyearCountAggregateOutputType = {
    id: number
    date: number
    day: number
    checkedoff: number
    data: number
    _all: number
  }


  export type EightyearAvgAggregateInputType = {
    id?: true
  }

  export type EightyearSumAggregateInputType = {
    id?: true
  }

  export type EightyearMinAggregateInputType = {
    id?: true
    date?: true
    day?: true
    checkedoff?: true
  }

  export type EightyearMaxAggregateInputType = {
    id?: true
    date?: true
    day?: true
    checkedoff?: true
  }

  export type EightyearCountAggregateInputType = {
    id?: true
    date?: true
    day?: true
    checkedoff?: true
    data?: true
    _all?: true
  }

  export type EightyearAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eightyear to aggregate.
     */
    where?: eightyearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eightyears to fetch.
     */
    orderBy?: eightyearOrderByWithRelationInput | eightyearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eightyearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eightyears from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eightyears.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eightyears
    **/
    _count?: true | EightyearCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EightyearAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EightyearSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EightyearMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EightyearMaxAggregateInputType
  }

  export type GetEightyearAggregateType<T extends EightyearAggregateArgs> = {
        [P in keyof T & keyof AggregateEightyear]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEightyear[P]>
      : GetScalarType<T[P], AggregateEightyear[P]>
  }




  export type eightyearGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eightyearWhereInput
    orderBy?: eightyearOrderByWithAggregationInput | eightyearOrderByWithAggregationInput[]
    by: EightyearScalarFieldEnum[] | EightyearScalarFieldEnum
    having?: eightyearScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EightyearCountAggregateInputType | true
    _avg?: EightyearAvgAggregateInputType
    _sum?: EightyearSumAggregateInputType
    _min?: EightyearMinAggregateInputType
    _max?: EightyearMaxAggregateInputType
  }

  export type EightyearGroupByOutputType = {
    id: number
    date: Date
    day: string
    checkedoff: boolean | null
    data: JsonValue | null
    _count: EightyearCountAggregateOutputType | null
    _avg: EightyearAvgAggregateOutputType | null
    _sum: EightyearSumAggregateOutputType | null
    _min: EightyearMinAggregateOutputType | null
    _max: EightyearMaxAggregateOutputType | null
  }

  type GetEightyearGroupByPayload<T extends eightyearGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EightyearGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EightyearGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EightyearGroupByOutputType[P]>
            : GetScalarType<T[P], EightyearGroupByOutputType[P]>
        }
      >
    >


  export type eightyearSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    day?: boolean
    checkedoff?: boolean
    data?: boolean
  }, ExtArgs["result"]["eightyear"]>

  export type eightyearSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    day?: boolean
    checkedoff?: boolean
    data?: boolean
  }, ExtArgs["result"]["eightyear"]>

  export type eightyearSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    day?: boolean
    checkedoff?: boolean
    data?: boolean
  }, ExtArgs["result"]["eightyear"]>

  export type eightyearSelectScalar = {
    id?: boolean
    date?: boolean
    day?: boolean
    checkedoff?: boolean
    data?: boolean
  }

  export type eightyearOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "day" | "checkedoff" | "data", ExtArgs["result"]["eightyear"]>

  export type $eightyearPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "eightyear"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      day: string
      checkedoff: boolean | null
      data: Prisma.JsonValue | null
    }, ExtArgs["result"]["eightyear"]>
    composites: {}
  }

  type eightyearGetPayload<S extends boolean | null | undefined | eightyearDefaultArgs> = $Result.GetResult<Prisma.$eightyearPayload, S>

  type eightyearCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eightyearFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EightyearCountAggregateInputType | true
    }

  export interface eightyearDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['eightyear'], meta: { name: 'eightyear' } }
    /**
     * Find zero or one Eightyear that matches the filter.
     * @param {eightyearFindUniqueArgs} args - Arguments to find a Eightyear
     * @example
     * // Get one Eightyear
     * const eightyear = await prisma.eightyear.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eightyearFindUniqueArgs>(args: SelectSubset<T, eightyearFindUniqueArgs<ExtArgs>>): Prisma__eightyearClient<$Result.GetResult<Prisma.$eightyearPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Eightyear that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eightyearFindUniqueOrThrowArgs} args - Arguments to find a Eightyear
     * @example
     * // Get one Eightyear
     * const eightyear = await prisma.eightyear.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eightyearFindUniqueOrThrowArgs>(args: SelectSubset<T, eightyearFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eightyearClient<$Result.GetResult<Prisma.$eightyearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eightyear that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eightyearFindFirstArgs} args - Arguments to find a Eightyear
     * @example
     * // Get one Eightyear
     * const eightyear = await prisma.eightyear.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eightyearFindFirstArgs>(args?: SelectSubset<T, eightyearFindFirstArgs<ExtArgs>>): Prisma__eightyearClient<$Result.GetResult<Prisma.$eightyearPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eightyear that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eightyearFindFirstOrThrowArgs} args - Arguments to find a Eightyear
     * @example
     * // Get one Eightyear
     * const eightyear = await prisma.eightyear.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eightyearFindFirstOrThrowArgs>(args?: SelectSubset<T, eightyearFindFirstOrThrowArgs<ExtArgs>>): Prisma__eightyearClient<$Result.GetResult<Prisma.$eightyearPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eightyears that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eightyearFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eightyears
     * const eightyears = await prisma.eightyear.findMany()
     * 
     * // Get first 10 Eightyears
     * const eightyears = await prisma.eightyear.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eightyearWithIdOnly = await prisma.eightyear.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eightyearFindManyArgs>(args?: SelectSubset<T, eightyearFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eightyearPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Eightyear.
     * @param {eightyearCreateArgs} args - Arguments to create a Eightyear.
     * @example
     * // Create one Eightyear
     * const Eightyear = await prisma.eightyear.create({
     *   data: {
     *     // ... data to create a Eightyear
     *   }
     * })
     * 
     */
    create<T extends eightyearCreateArgs>(args: SelectSubset<T, eightyearCreateArgs<ExtArgs>>): Prisma__eightyearClient<$Result.GetResult<Prisma.$eightyearPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eightyears.
     * @param {eightyearCreateManyArgs} args - Arguments to create many Eightyears.
     * @example
     * // Create many Eightyears
     * const eightyear = await prisma.eightyear.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eightyearCreateManyArgs>(args?: SelectSubset<T, eightyearCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eightyears and returns the data saved in the database.
     * @param {eightyearCreateManyAndReturnArgs} args - Arguments to create many Eightyears.
     * @example
     * // Create many Eightyears
     * const eightyear = await prisma.eightyear.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eightyears and only return the `id`
     * const eightyearWithIdOnly = await prisma.eightyear.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eightyearCreateManyAndReturnArgs>(args?: SelectSubset<T, eightyearCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eightyearPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Eightyear.
     * @param {eightyearDeleteArgs} args - Arguments to delete one Eightyear.
     * @example
     * // Delete one Eightyear
     * const Eightyear = await prisma.eightyear.delete({
     *   where: {
     *     // ... filter to delete one Eightyear
     *   }
     * })
     * 
     */
    delete<T extends eightyearDeleteArgs>(args: SelectSubset<T, eightyearDeleteArgs<ExtArgs>>): Prisma__eightyearClient<$Result.GetResult<Prisma.$eightyearPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Eightyear.
     * @param {eightyearUpdateArgs} args - Arguments to update one Eightyear.
     * @example
     * // Update one Eightyear
     * const eightyear = await prisma.eightyear.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eightyearUpdateArgs>(args: SelectSubset<T, eightyearUpdateArgs<ExtArgs>>): Prisma__eightyearClient<$Result.GetResult<Prisma.$eightyearPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eightyears.
     * @param {eightyearDeleteManyArgs} args - Arguments to filter Eightyears to delete.
     * @example
     * // Delete a few Eightyears
     * const { count } = await prisma.eightyear.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eightyearDeleteManyArgs>(args?: SelectSubset<T, eightyearDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eightyears.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eightyearUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eightyears
     * const eightyear = await prisma.eightyear.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eightyearUpdateManyArgs>(args: SelectSubset<T, eightyearUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eightyears and returns the data updated in the database.
     * @param {eightyearUpdateManyAndReturnArgs} args - Arguments to update many Eightyears.
     * @example
     * // Update many Eightyears
     * const eightyear = await prisma.eightyear.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eightyears and only return the `id`
     * const eightyearWithIdOnly = await prisma.eightyear.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends eightyearUpdateManyAndReturnArgs>(args: SelectSubset<T, eightyearUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eightyearPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Eightyear.
     * @param {eightyearUpsertArgs} args - Arguments to update or create a Eightyear.
     * @example
     * // Update or create a Eightyear
     * const eightyear = await prisma.eightyear.upsert({
     *   create: {
     *     // ... data to create a Eightyear
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eightyear we want to update
     *   }
     * })
     */
    upsert<T extends eightyearUpsertArgs>(args: SelectSubset<T, eightyearUpsertArgs<ExtArgs>>): Prisma__eightyearClient<$Result.GetResult<Prisma.$eightyearPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eightyears.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eightyearCountArgs} args - Arguments to filter Eightyears to count.
     * @example
     * // Count the number of Eightyears
     * const count = await prisma.eightyear.count({
     *   where: {
     *     // ... the filter for the Eightyears we want to count
     *   }
     * })
    **/
    count<T extends eightyearCountArgs>(
      args?: Subset<T, eightyearCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EightyearCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eightyear.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EightyearAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EightyearAggregateArgs>(args: Subset<T, EightyearAggregateArgs>): Prisma.PrismaPromise<GetEightyearAggregateType<T>>

    /**
     * Group by Eightyear.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eightyearGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends eightyearGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eightyearGroupByArgs['orderBy'] }
        : { orderBy?: eightyearGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, eightyearGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEightyearGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the eightyear model
   */
  readonly fields: eightyearFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for eightyear.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eightyearClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the eightyear model
   */
  interface eightyearFieldRefs {
    readonly id: FieldRef<"eightyear", 'Int'>
    readonly date: FieldRef<"eightyear", 'DateTime'>
    readonly day: FieldRef<"eightyear", 'String'>
    readonly checkedoff: FieldRef<"eightyear", 'Boolean'>
    readonly data: FieldRef<"eightyear", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * eightyear findUnique
   */
  export type eightyearFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eightyear
     */
    select?: eightyearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eightyear
     */
    omit?: eightyearOmit<ExtArgs> | null
    /**
     * Filter, which eightyear to fetch.
     */
    where: eightyearWhereUniqueInput
  }

  /**
   * eightyear findUniqueOrThrow
   */
  export type eightyearFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eightyear
     */
    select?: eightyearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eightyear
     */
    omit?: eightyearOmit<ExtArgs> | null
    /**
     * Filter, which eightyear to fetch.
     */
    where: eightyearWhereUniqueInput
  }

  /**
   * eightyear findFirst
   */
  export type eightyearFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eightyear
     */
    select?: eightyearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eightyear
     */
    omit?: eightyearOmit<ExtArgs> | null
    /**
     * Filter, which eightyear to fetch.
     */
    where?: eightyearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eightyears to fetch.
     */
    orderBy?: eightyearOrderByWithRelationInput | eightyearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eightyears.
     */
    cursor?: eightyearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eightyears from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eightyears.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eightyears.
     */
    distinct?: EightyearScalarFieldEnum | EightyearScalarFieldEnum[]
  }

  /**
   * eightyear findFirstOrThrow
   */
  export type eightyearFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eightyear
     */
    select?: eightyearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eightyear
     */
    omit?: eightyearOmit<ExtArgs> | null
    /**
     * Filter, which eightyear to fetch.
     */
    where?: eightyearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eightyears to fetch.
     */
    orderBy?: eightyearOrderByWithRelationInput | eightyearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eightyears.
     */
    cursor?: eightyearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eightyears from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eightyears.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eightyears.
     */
    distinct?: EightyearScalarFieldEnum | EightyearScalarFieldEnum[]
  }

  /**
   * eightyear findMany
   */
  export type eightyearFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eightyear
     */
    select?: eightyearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eightyear
     */
    omit?: eightyearOmit<ExtArgs> | null
    /**
     * Filter, which eightyears to fetch.
     */
    where?: eightyearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eightyears to fetch.
     */
    orderBy?: eightyearOrderByWithRelationInput | eightyearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eightyears.
     */
    cursor?: eightyearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eightyears from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eightyears.
     */
    skip?: number
    distinct?: EightyearScalarFieldEnum | EightyearScalarFieldEnum[]
  }

  /**
   * eightyear create
   */
  export type eightyearCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eightyear
     */
    select?: eightyearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eightyear
     */
    omit?: eightyearOmit<ExtArgs> | null
    /**
     * The data needed to create a eightyear.
     */
    data: XOR<eightyearCreateInput, eightyearUncheckedCreateInput>
  }

  /**
   * eightyear createMany
   */
  export type eightyearCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eightyears.
     */
    data: eightyearCreateManyInput | eightyearCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eightyear createManyAndReturn
   */
  export type eightyearCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eightyear
     */
    select?: eightyearSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eightyear
     */
    omit?: eightyearOmit<ExtArgs> | null
    /**
     * The data used to create many eightyears.
     */
    data: eightyearCreateManyInput | eightyearCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eightyear update
   */
  export type eightyearUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eightyear
     */
    select?: eightyearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eightyear
     */
    omit?: eightyearOmit<ExtArgs> | null
    /**
     * The data needed to update a eightyear.
     */
    data: XOR<eightyearUpdateInput, eightyearUncheckedUpdateInput>
    /**
     * Choose, which eightyear to update.
     */
    where: eightyearWhereUniqueInput
  }

  /**
   * eightyear updateMany
   */
  export type eightyearUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eightyears.
     */
    data: XOR<eightyearUpdateManyMutationInput, eightyearUncheckedUpdateManyInput>
    /**
     * Filter which eightyears to update
     */
    where?: eightyearWhereInput
    /**
     * Limit how many eightyears to update.
     */
    limit?: number
  }

  /**
   * eightyear updateManyAndReturn
   */
  export type eightyearUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eightyear
     */
    select?: eightyearSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eightyear
     */
    omit?: eightyearOmit<ExtArgs> | null
    /**
     * The data used to update eightyears.
     */
    data: XOR<eightyearUpdateManyMutationInput, eightyearUncheckedUpdateManyInput>
    /**
     * Filter which eightyears to update
     */
    where?: eightyearWhereInput
    /**
     * Limit how many eightyears to update.
     */
    limit?: number
  }

  /**
   * eightyear upsert
   */
  export type eightyearUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eightyear
     */
    select?: eightyearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eightyear
     */
    omit?: eightyearOmit<ExtArgs> | null
    /**
     * The filter to search for the eightyear to update in case it exists.
     */
    where: eightyearWhereUniqueInput
    /**
     * In case the eightyear found by the `where` argument doesn't exist, create a new eightyear with this data.
     */
    create: XOR<eightyearCreateInput, eightyearUncheckedCreateInput>
    /**
     * In case the eightyear was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eightyearUpdateInput, eightyearUncheckedUpdateInput>
  }

  /**
   * eightyear delete
   */
  export type eightyearDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eightyear
     */
    select?: eightyearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eightyear
     */
    omit?: eightyearOmit<ExtArgs> | null
    /**
     * Filter which eightyear to delete.
     */
    where: eightyearWhereUniqueInput
  }

  /**
   * eightyear deleteMany
   */
  export type eightyearDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eightyears to delete
     */
    where?: eightyearWhereInput
    /**
     * Limit how many eightyears to delete.
     */
    limit?: number
  }

  /**
   * eightyear without action
   */
  export type eightyearDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eightyear
     */
    select?: eightyearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eightyear
     */
    omit?: eightyearOmit<ExtArgs> | null
  }


  /**
   * Model foo
   */

  export type AggregateFoo = {
    _count: FooCountAggregateOutputType | null
    _avg: FooAvgAggregateOutputType | null
    _sum: FooSumAggregateOutputType | null
    _min: FooMinAggregateOutputType | null
    _max: FooMaxAggregateOutputType | null
  }

  export type FooAvgAggregateOutputType = {
    id: number | null
    baz: number | null
  }

  export type FooSumAggregateOutputType = {
    id: number | null
    baz: number | null
  }

  export type FooMinAggregateOutputType = {
    id: number | null
    bar: string | null
    baz: number | null
  }

  export type FooMaxAggregateOutputType = {
    id: number | null
    bar: string | null
    baz: number | null
  }

  export type FooCountAggregateOutputType = {
    id: number
    bar: number
    baz: number
    _all: number
  }


  export type FooAvgAggregateInputType = {
    id?: true
    baz?: true
  }

  export type FooSumAggregateInputType = {
    id?: true
    baz?: true
  }

  export type FooMinAggregateInputType = {
    id?: true
    bar?: true
    baz?: true
  }

  export type FooMaxAggregateInputType = {
    id?: true
    bar?: true
    baz?: true
  }

  export type FooCountAggregateInputType = {
    id?: true
    bar?: true
    baz?: true
    _all?: true
  }

  export type FooAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which foo to aggregate.
     */
    where?: fooWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foos to fetch.
     */
    orderBy?: fooOrderByWithRelationInput | fooOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fooWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned foos
    **/
    _count?: true | FooCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FooAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FooSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FooMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FooMaxAggregateInputType
  }

  export type GetFooAggregateType<T extends FooAggregateArgs> = {
        [P in keyof T & keyof AggregateFoo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoo[P]>
      : GetScalarType<T[P], AggregateFoo[P]>
  }




  export type fooGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fooWhereInput
    orderBy?: fooOrderByWithAggregationInput | fooOrderByWithAggregationInput[]
    by: FooScalarFieldEnum[] | FooScalarFieldEnum
    having?: fooScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FooCountAggregateInputType | true
    _avg?: FooAvgAggregateInputType
    _sum?: FooSumAggregateInputType
    _min?: FooMinAggregateInputType
    _max?: FooMaxAggregateInputType
  }

  export type FooGroupByOutputType = {
    id: number
    bar: string
    baz: number | null
    _count: FooCountAggregateOutputType | null
    _avg: FooAvgAggregateOutputType | null
    _sum: FooSumAggregateOutputType | null
    _min: FooMinAggregateOutputType | null
    _max: FooMaxAggregateOutputType | null
  }

  type GetFooGroupByPayload<T extends fooGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FooGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FooGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FooGroupByOutputType[P]>
            : GetScalarType<T[P], FooGroupByOutputType[P]>
        }
      >
    >


  export type fooSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bar?: boolean
    baz?: boolean
  }, ExtArgs["result"]["foo"]>

  export type fooSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bar?: boolean
    baz?: boolean
  }, ExtArgs["result"]["foo"]>

  export type fooSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bar?: boolean
    baz?: boolean
  }, ExtArgs["result"]["foo"]>

  export type fooSelectScalar = {
    id?: boolean
    bar?: boolean
    baz?: boolean
  }

  export type fooOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bar" | "baz", ExtArgs["result"]["foo"]>

  export type $fooPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "foo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bar: string
      baz: number | null
    }, ExtArgs["result"]["foo"]>
    composites: {}
  }

  type fooGetPayload<S extends boolean | null | undefined | fooDefaultArgs> = $Result.GetResult<Prisma.$fooPayload, S>

  type fooCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fooFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FooCountAggregateInputType | true
    }

  export interface fooDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['foo'], meta: { name: 'foo' } }
    /**
     * Find zero or one Foo that matches the filter.
     * @param {fooFindUniqueArgs} args - Arguments to find a Foo
     * @example
     * // Get one Foo
     * const foo = await prisma.foo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fooFindUniqueArgs>(args: SelectSubset<T, fooFindUniqueArgs<ExtArgs>>): Prisma__fooClient<$Result.GetResult<Prisma.$fooPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Foo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fooFindUniqueOrThrowArgs} args - Arguments to find a Foo
     * @example
     * // Get one Foo
     * const foo = await prisma.foo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fooFindUniqueOrThrowArgs>(args: SelectSubset<T, fooFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fooClient<$Result.GetResult<Prisma.$fooPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fooFindFirstArgs} args - Arguments to find a Foo
     * @example
     * // Get one Foo
     * const foo = await prisma.foo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fooFindFirstArgs>(args?: SelectSubset<T, fooFindFirstArgs<ExtArgs>>): Prisma__fooClient<$Result.GetResult<Prisma.$fooPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fooFindFirstOrThrowArgs} args - Arguments to find a Foo
     * @example
     * // Get one Foo
     * const foo = await prisma.foo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fooFindFirstOrThrowArgs>(args?: SelectSubset<T, fooFindFirstOrThrowArgs<ExtArgs>>): Prisma__fooClient<$Result.GetResult<Prisma.$fooPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Foos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fooFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foos
     * const foos = await prisma.foo.findMany()
     * 
     * // Get first 10 Foos
     * const foos = await prisma.foo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fooWithIdOnly = await prisma.foo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends fooFindManyArgs>(args?: SelectSubset<T, fooFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fooPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Foo.
     * @param {fooCreateArgs} args - Arguments to create a Foo.
     * @example
     * // Create one Foo
     * const Foo = await prisma.foo.create({
     *   data: {
     *     // ... data to create a Foo
     *   }
     * })
     * 
     */
    create<T extends fooCreateArgs>(args: SelectSubset<T, fooCreateArgs<ExtArgs>>): Prisma__fooClient<$Result.GetResult<Prisma.$fooPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Foos.
     * @param {fooCreateManyArgs} args - Arguments to create many Foos.
     * @example
     * // Create many Foos
     * const foo = await prisma.foo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fooCreateManyArgs>(args?: SelectSubset<T, fooCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Foos and returns the data saved in the database.
     * @param {fooCreateManyAndReturnArgs} args - Arguments to create many Foos.
     * @example
     * // Create many Foos
     * const foo = await prisma.foo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Foos and only return the `id`
     * const fooWithIdOnly = await prisma.foo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends fooCreateManyAndReturnArgs>(args?: SelectSubset<T, fooCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fooPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Foo.
     * @param {fooDeleteArgs} args - Arguments to delete one Foo.
     * @example
     * // Delete one Foo
     * const Foo = await prisma.foo.delete({
     *   where: {
     *     // ... filter to delete one Foo
     *   }
     * })
     * 
     */
    delete<T extends fooDeleteArgs>(args: SelectSubset<T, fooDeleteArgs<ExtArgs>>): Prisma__fooClient<$Result.GetResult<Prisma.$fooPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Foo.
     * @param {fooUpdateArgs} args - Arguments to update one Foo.
     * @example
     * // Update one Foo
     * const foo = await prisma.foo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fooUpdateArgs>(args: SelectSubset<T, fooUpdateArgs<ExtArgs>>): Prisma__fooClient<$Result.GetResult<Prisma.$fooPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Foos.
     * @param {fooDeleteManyArgs} args - Arguments to filter Foos to delete.
     * @example
     * // Delete a few Foos
     * const { count } = await prisma.foo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fooDeleteManyArgs>(args?: SelectSubset<T, fooDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fooUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foos
     * const foo = await prisma.foo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fooUpdateManyArgs>(args: SelectSubset<T, fooUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foos and returns the data updated in the database.
     * @param {fooUpdateManyAndReturnArgs} args - Arguments to update many Foos.
     * @example
     * // Update many Foos
     * const foo = await prisma.foo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Foos and only return the `id`
     * const fooWithIdOnly = await prisma.foo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends fooUpdateManyAndReturnArgs>(args: SelectSubset<T, fooUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fooPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Foo.
     * @param {fooUpsertArgs} args - Arguments to update or create a Foo.
     * @example
     * // Update or create a Foo
     * const foo = await prisma.foo.upsert({
     *   create: {
     *     // ... data to create a Foo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Foo we want to update
     *   }
     * })
     */
    upsert<T extends fooUpsertArgs>(args: SelectSubset<T, fooUpsertArgs<ExtArgs>>): Prisma__fooClient<$Result.GetResult<Prisma.$fooPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Foos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fooCountArgs} args - Arguments to filter Foos to count.
     * @example
     * // Count the number of Foos
     * const count = await prisma.foo.count({
     *   where: {
     *     // ... the filter for the Foos we want to count
     *   }
     * })
    **/
    count<T extends fooCountArgs>(
      args?: Subset<T, fooCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FooCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Foo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FooAggregateArgs>(args: Subset<T, FooAggregateArgs>): Prisma.PrismaPromise<GetFooAggregateType<T>>

    /**
     * Group by Foo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fooGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fooGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fooGroupByArgs['orderBy'] }
        : { orderBy?: fooGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fooGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFooGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the foo model
   */
  readonly fields: fooFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for foo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fooClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the foo model
   */
  interface fooFieldRefs {
    readonly id: FieldRef<"foo", 'Int'>
    readonly bar: FieldRef<"foo", 'String'>
    readonly baz: FieldRef<"foo", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * foo findUnique
   */
  export type fooFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foo
     */
    select?: fooSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foo
     */
    omit?: fooOmit<ExtArgs> | null
    /**
     * Filter, which foo to fetch.
     */
    where: fooWhereUniqueInput
  }

  /**
   * foo findUniqueOrThrow
   */
  export type fooFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foo
     */
    select?: fooSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foo
     */
    omit?: fooOmit<ExtArgs> | null
    /**
     * Filter, which foo to fetch.
     */
    where: fooWhereUniqueInput
  }

  /**
   * foo findFirst
   */
  export type fooFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foo
     */
    select?: fooSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foo
     */
    omit?: fooOmit<ExtArgs> | null
    /**
     * Filter, which foo to fetch.
     */
    where?: fooWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foos to fetch.
     */
    orderBy?: fooOrderByWithRelationInput | fooOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for foos.
     */
    cursor?: fooWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of foos.
     */
    distinct?: FooScalarFieldEnum | FooScalarFieldEnum[]
  }

  /**
   * foo findFirstOrThrow
   */
  export type fooFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foo
     */
    select?: fooSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foo
     */
    omit?: fooOmit<ExtArgs> | null
    /**
     * Filter, which foo to fetch.
     */
    where?: fooWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foos to fetch.
     */
    orderBy?: fooOrderByWithRelationInput | fooOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for foos.
     */
    cursor?: fooWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of foos.
     */
    distinct?: FooScalarFieldEnum | FooScalarFieldEnum[]
  }

  /**
   * foo findMany
   */
  export type fooFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foo
     */
    select?: fooSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foo
     */
    omit?: fooOmit<ExtArgs> | null
    /**
     * Filter, which foos to fetch.
     */
    where?: fooWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foos to fetch.
     */
    orderBy?: fooOrderByWithRelationInput | fooOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing foos.
     */
    cursor?: fooWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foos.
     */
    skip?: number
    distinct?: FooScalarFieldEnum | FooScalarFieldEnum[]
  }

  /**
   * foo create
   */
  export type fooCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foo
     */
    select?: fooSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foo
     */
    omit?: fooOmit<ExtArgs> | null
    /**
     * The data needed to create a foo.
     */
    data: XOR<fooCreateInput, fooUncheckedCreateInput>
  }

  /**
   * foo createMany
   */
  export type fooCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many foos.
     */
    data: fooCreateManyInput | fooCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * foo createManyAndReturn
   */
  export type fooCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foo
     */
    select?: fooSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the foo
     */
    omit?: fooOmit<ExtArgs> | null
    /**
     * The data used to create many foos.
     */
    data: fooCreateManyInput | fooCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * foo update
   */
  export type fooUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foo
     */
    select?: fooSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foo
     */
    omit?: fooOmit<ExtArgs> | null
    /**
     * The data needed to update a foo.
     */
    data: XOR<fooUpdateInput, fooUncheckedUpdateInput>
    /**
     * Choose, which foo to update.
     */
    where: fooWhereUniqueInput
  }

  /**
   * foo updateMany
   */
  export type fooUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update foos.
     */
    data: XOR<fooUpdateManyMutationInput, fooUncheckedUpdateManyInput>
    /**
     * Filter which foos to update
     */
    where?: fooWhereInput
    /**
     * Limit how many foos to update.
     */
    limit?: number
  }

  /**
   * foo updateManyAndReturn
   */
  export type fooUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foo
     */
    select?: fooSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the foo
     */
    omit?: fooOmit<ExtArgs> | null
    /**
     * The data used to update foos.
     */
    data: XOR<fooUpdateManyMutationInput, fooUncheckedUpdateManyInput>
    /**
     * Filter which foos to update
     */
    where?: fooWhereInput
    /**
     * Limit how many foos to update.
     */
    limit?: number
  }

  /**
   * foo upsert
   */
  export type fooUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foo
     */
    select?: fooSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foo
     */
    omit?: fooOmit<ExtArgs> | null
    /**
     * The filter to search for the foo to update in case it exists.
     */
    where: fooWhereUniqueInput
    /**
     * In case the foo found by the `where` argument doesn't exist, create a new foo with this data.
     */
    create: XOR<fooCreateInput, fooUncheckedCreateInput>
    /**
     * In case the foo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fooUpdateInput, fooUncheckedUpdateInput>
  }

  /**
   * foo delete
   */
  export type fooDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foo
     */
    select?: fooSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foo
     */
    omit?: fooOmit<ExtArgs> | null
    /**
     * Filter which foo to delete.
     */
    where: fooWhereUniqueInput
  }

  /**
   * foo deleteMany
   */
  export type fooDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which foos to delete
     */
    where?: fooWhereInput
    /**
     * Limit how many foos to delete.
     */
    limit?: number
  }

  /**
   * foo without action
   */
  export type fooDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the foo
     */
    select?: fooSelect<ExtArgs> | null
    /**
     * Omit specific fields from the foo
     */
    omit?: fooOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EightyearScalarFieldEnum: {
    id: 'id',
    date: 'date',
    day: 'day',
    checkedoff: 'checkedoff',
    data: 'data'
  };

  export type EightyearScalarFieldEnum = (typeof EightyearScalarFieldEnum)[keyof typeof EightyearScalarFieldEnum]


  export const FooScalarFieldEnum: {
    id: 'id',
    bar: 'bar',
    baz: 'baz'
  };

  export type FooScalarFieldEnum = (typeof FooScalarFieldEnum)[keyof typeof FooScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type eightyearWhereInput = {
    AND?: eightyearWhereInput | eightyearWhereInput[]
    OR?: eightyearWhereInput[]
    NOT?: eightyearWhereInput | eightyearWhereInput[]
    id?: IntFilter<"eightyear"> | number
    date?: DateTimeFilter<"eightyear"> | Date | string
    day?: StringFilter<"eightyear"> | string
    checkedoff?: BoolNullableFilter<"eightyear"> | boolean | null
    data?: JsonNullableFilter<"eightyear">
  }

  export type eightyearOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    day?: SortOrder
    checkedoff?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
  }

  export type eightyearWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: eightyearWhereInput | eightyearWhereInput[]
    OR?: eightyearWhereInput[]
    NOT?: eightyearWhereInput | eightyearWhereInput[]
    date?: DateTimeFilter<"eightyear"> | Date | string
    day?: StringFilter<"eightyear"> | string
    checkedoff?: BoolNullableFilter<"eightyear"> | boolean | null
    data?: JsonNullableFilter<"eightyear">
  }, "id">

  export type eightyearOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    day?: SortOrder
    checkedoff?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    _count?: eightyearCountOrderByAggregateInput
    _avg?: eightyearAvgOrderByAggregateInput
    _max?: eightyearMaxOrderByAggregateInput
    _min?: eightyearMinOrderByAggregateInput
    _sum?: eightyearSumOrderByAggregateInput
  }

  export type eightyearScalarWhereWithAggregatesInput = {
    AND?: eightyearScalarWhereWithAggregatesInput | eightyearScalarWhereWithAggregatesInput[]
    OR?: eightyearScalarWhereWithAggregatesInput[]
    NOT?: eightyearScalarWhereWithAggregatesInput | eightyearScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"eightyear"> | number
    date?: DateTimeWithAggregatesFilter<"eightyear"> | Date | string
    day?: StringWithAggregatesFilter<"eightyear"> | string
    checkedoff?: BoolNullableWithAggregatesFilter<"eightyear"> | boolean | null
    data?: JsonNullableWithAggregatesFilter<"eightyear">
  }

  export type fooWhereInput = {
    AND?: fooWhereInput | fooWhereInput[]
    OR?: fooWhereInput[]
    NOT?: fooWhereInput | fooWhereInput[]
    id?: IntFilter<"foo"> | number
    bar?: StringFilter<"foo"> | string
    baz?: FloatNullableFilter<"foo"> | number | null
  }

  export type fooOrderByWithRelationInput = {
    id?: SortOrder
    bar?: SortOrder
    baz?: SortOrderInput | SortOrder
  }

  export type fooWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: fooWhereInput | fooWhereInput[]
    OR?: fooWhereInput[]
    NOT?: fooWhereInput | fooWhereInput[]
    bar?: StringFilter<"foo"> | string
    baz?: FloatNullableFilter<"foo"> | number | null
  }, "id">

  export type fooOrderByWithAggregationInput = {
    id?: SortOrder
    bar?: SortOrder
    baz?: SortOrderInput | SortOrder
    _count?: fooCountOrderByAggregateInput
    _avg?: fooAvgOrderByAggregateInput
    _max?: fooMaxOrderByAggregateInput
    _min?: fooMinOrderByAggregateInput
    _sum?: fooSumOrderByAggregateInput
  }

  export type fooScalarWhereWithAggregatesInput = {
    AND?: fooScalarWhereWithAggregatesInput | fooScalarWhereWithAggregatesInput[]
    OR?: fooScalarWhereWithAggregatesInput[]
    NOT?: fooScalarWhereWithAggregatesInput | fooScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"foo"> | number
    bar?: StringWithAggregatesFilter<"foo"> | string
    baz?: FloatNullableWithAggregatesFilter<"foo"> | number | null
  }

  export type eightyearCreateInput = {
    date: Date | string
    day: string
    checkedoff?: boolean | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type eightyearUncheckedCreateInput = {
    id?: number
    date: Date | string
    day: string
    checkedoff?: boolean | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type eightyearUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: StringFieldUpdateOperationsInput | string
    checkedoff?: NullableBoolFieldUpdateOperationsInput | boolean | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type eightyearUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: StringFieldUpdateOperationsInput | string
    checkedoff?: NullableBoolFieldUpdateOperationsInput | boolean | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type eightyearCreateManyInput = {
    id?: number
    date: Date | string
    day: string
    checkedoff?: boolean | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type eightyearUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: StringFieldUpdateOperationsInput | string
    checkedoff?: NullableBoolFieldUpdateOperationsInput | boolean | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type eightyearUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: StringFieldUpdateOperationsInput | string
    checkedoff?: NullableBoolFieldUpdateOperationsInput | boolean | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type fooCreateInput = {
    bar: string
    baz?: number | null
  }

  export type fooUncheckedCreateInput = {
    id?: number
    bar: string
    baz?: number | null
  }

  export type fooUpdateInput = {
    bar?: StringFieldUpdateOperationsInput | string
    baz?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type fooUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bar?: StringFieldUpdateOperationsInput | string
    baz?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type fooCreateManyInput = {
    id?: number
    bar: string
    baz?: number | null
  }

  export type fooUpdateManyMutationInput = {
    bar?: StringFieldUpdateOperationsInput | string
    baz?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type fooUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bar?: StringFieldUpdateOperationsInput | string
    baz?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type eightyearCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    day?: SortOrder
    checkedoff?: SortOrder
    data?: SortOrder
  }

  export type eightyearAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type eightyearMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    day?: SortOrder
    checkedoff?: SortOrder
  }

  export type eightyearMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    day?: SortOrder
    checkedoff?: SortOrder
  }

  export type eightyearSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type fooCountOrderByAggregateInput = {
    id?: SortOrder
    bar?: SortOrder
    baz?: SortOrder
  }

  export type fooAvgOrderByAggregateInput = {
    id?: SortOrder
    baz?: SortOrder
  }

  export type fooMaxOrderByAggregateInput = {
    id?: SortOrder
    bar?: SortOrder
    baz?: SortOrder
  }

  export type fooMinOrderByAggregateInput = {
    id?: SortOrder
    bar?: SortOrder
    baz?: SortOrder
  }

  export type fooSumOrderByAggregateInput = {
    id?: SortOrder
    baz?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}