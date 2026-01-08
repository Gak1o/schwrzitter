# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `Angular README`, you can find it at [`dataconnect-generated/angular/README.md`](./angular/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListMyDeferredItems*](#listmydeferreditems)
  - [*GetContext*](#getcontext)
  - [*GetMyProfile*](#getmyprofile)
- [**Mutations**](#mutations)
  - [*CreateDeferredItem*](#createdeferreditem)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListMyDeferredItems
You can execute the `ListMyDeferredItems` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyDeferredItems(): QueryPromise<ListMyDeferredItemsData, undefined>;

interface ListMyDeferredItemsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyDeferredItemsData, undefined>;
}
export const listMyDeferredItemsRef: ListMyDeferredItemsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyDeferredItems(dc: DataConnect): QueryPromise<ListMyDeferredItemsData, undefined>;

interface ListMyDeferredItemsRef {
  ...
  (dc: DataConnect): QueryRef<ListMyDeferredItemsData, undefined>;
}
export const listMyDeferredItemsRef: ListMyDeferredItemsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyDeferredItemsRef:
```typescript
const name = listMyDeferredItemsRef.operationName;
console.log(name);
```

### Variables
The `ListMyDeferredItems` query has no variables.
### Return Type
Recall that executing the `ListMyDeferredItems` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyDeferredItemsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyDeferredItemsData {
  deferredItems: ({
    id: UUIDString;
    description: string;
    isCompleted: boolean;
    notes?: string | null;
    reminderDateTime?: TimestampString | null;
  } & DeferredItem_Key)[];
}
```
### Using `ListMyDeferredItems`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyDeferredItems } from '@dataconnect/generated';


// Call the `listMyDeferredItems()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyDeferredItems();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyDeferredItems(dataConnect);

console.log(data.deferredItems);

// Or, you can use the `Promise` API.
listMyDeferredItems().then((response) => {
  const data = response.data;
  console.log(data.deferredItems);
});
```

### Using `ListMyDeferredItems`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyDeferredItemsRef } from '@dataconnect/generated';


// Call the `listMyDeferredItemsRef()` function to get a reference to the query.
const ref = listMyDeferredItemsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyDeferredItemsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.deferredItems);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.deferredItems);
});
```

## GetContext
You can execute the `GetContext` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getContext(): QueryPromise<GetContextData, undefined>;

interface GetContextRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetContextData, undefined>;
}
export const getContextRef: GetContextRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getContext(dc: DataConnect): QueryPromise<GetContextData, undefined>;

interface GetContextRef {
  ...
  (dc: DataConnect): QueryRef<GetContextData, undefined>;
}
export const getContextRef: GetContextRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getContextRef:
```typescript
const name = getContextRef.operationName;
console.log(name);
```

### Variables
The `GetContext` query has no variables.
### Return Type
Recall that executing the `GetContext` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetContextData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetContextData {
  contexts: ({
    id: UUIDString;
    name: string;
    description?: string | null;
  } & Context_Key)[];
}
```
### Using `GetContext`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getContext } from '@dataconnect/generated';


// Call the `getContext()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getContext();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getContext(dataConnect);

console.log(data.contexts);

// Or, you can use the `Promise` API.
getContext().then((response) => {
  const data = response.data;
  console.log(data.contexts);
});
```

### Using `GetContext`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getContextRef } from '@dataconnect/generated';


// Call the `getContextRef()` function to get a reference to the query.
const ref = getContextRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getContextRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.contexts);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.contexts);
});
```

## GetMyProfile
You can execute the `GetMyProfile` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyProfile(): QueryPromise<GetMyProfileData, undefined>;

interface GetMyProfileRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyProfileData, undefined>;
}
export const getMyProfileRef: GetMyProfileRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyProfile(dc: DataConnect): QueryPromise<GetMyProfileData, undefined>;

interface GetMyProfileRef {
  ...
  (dc: DataConnect): QueryRef<GetMyProfileData, undefined>;
}
export const getMyProfileRef: GetMyProfileRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyProfileRef:
```typescript
const name = getMyProfileRef.operationName;
console.log(name);
```

### Variables
The `GetMyProfile` query has no variables.
### Return Type
Recall that executing the `GetMyProfile` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyProfileData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMyProfileData {
  users: ({
    id: UUIDString;
    displayName: string;
    email?: string | null;
    photoUrl?: string | null;
  } & User_Key)[];
}
```
### Using `GetMyProfile`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyProfile } from '@dataconnect/generated';


// Call the `getMyProfile()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyProfile();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyProfile(dataConnect);

console.log(data.users);

// Or, you can use the `Promise` API.
getMyProfile().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `GetMyProfile`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyProfileRef } from '@dataconnect/generated';


// Call the `getMyProfileRef()` function to get a reference to the query.
const ref = getMyProfileRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyProfileRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateDeferredItem
You can execute the `CreateDeferredItem` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createDeferredItem(vars: CreateDeferredItemVariables): MutationPromise<CreateDeferredItemData, CreateDeferredItemVariables>;

interface CreateDeferredItemRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateDeferredItemVariables): MutationRef<CreateDeferredItemData, CreateDeferredItemVariables>;
}
export const createDeferredItemRef: CreateDeferredItemRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createDeferredItem(dc: DataConnect, vars: CreateDeferredItemVariables): MutationPromise<CreateDeferredItemData, CreateDeferredItemVariables>;

interface CreateDeferredItemRef {
  ...
  (dc: DataConnect, vars: CreateDeferredItemVariables): MutationRef<CreateDeferredItemData, CreateDeferredItemVariables>;
}
export const createDeferredItemRef: CreateDeferredItemRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createDeferredItemRef:
```typescript
const name = createDeferredItemRef.operationName;
console.log(name);
```

### Variables
The `CreateDeferredItem` mutation requires an argument of type `CreateDeferredItemVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateDeferredItemVariables {
  description: string;
  notes?: string | null;
  reminderDateTime?: TimestampString | null;
}
```
### Return Type
Recall that executing the `CreateDeferredItem` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateDeferredItemData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateDeferredItemData {
  deferredItem_insert: DeferredItem_Key;
}
```
### Using `CreateDeferredItem`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createDeferredItem, CreateDeferredItemVariables } from '@dataconnect/generated';

// The `CreateDeferredItem` mutation requires an argument of type `CreateDeferredItemVariables`:
const createDeferredItemVars: CreateDeferredItemVariables = {
  description: ..., 
  notes: ..., // optional
  reminderDateTime: ..., // optional
};

// Call the `createDeferredItem()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createDeferredItem(createDeferredItemVars);
// Variables can be defined inline as well.
const { data } = await createDeferredItem({ description: ..., notes: ..., reminderDateTime: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createDeferredItem(dataConnect, createDeferredItemVars);

console.log(data.deferredItem_insert);

// Or, you can use the `Promise` API.
createDeferredItem(createDeferredItemVars).then((response) => {
  const data = response.data;
  console.log(data.deferredItem_insert);
});
```

### Using `CreateDeferredItem`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createDeferredItemRef, CreateDeferredItemVariables } from '@dataconnect/generated';

// The `CreateDeferredItem` mutation requires an argument of type `CreateDeferredItemVariables`:
const createDeferredItemVars: CreateDeferredItemVariables = {
  description: ..., 
  notes: ..., // optional
  reminderDateTime: ..., // optional
};

// Call the `createDeferredItemRef()` function to get a reference to the mutation.
const ref = createDeferredItemRef(createDeferredItemVars);
// Variables can be defined inline as well.
const ref = createDeferredItemRef({ description: ..., notes: ..., reminderDateTime: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createDeferredItemRef(dataConnect, createDeferredItemVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.deferredItem_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.deferredItem_insert);
});
```

