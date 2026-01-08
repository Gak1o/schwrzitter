import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Context_Key {
  id: UUIDString;
  __typename?: 'Context_Key';
}

export interface CreateDeferredItemData {
  deferredItem_insert: DeferredItem_Key;
}

export interface CreateDeferredItemVariables {
  description: string;
  notes?: string | null;
  reminderDateTime?: TimestampString | null;
}

export interface DeferredItem_Key {
  id: UUIDString;
  __typename?: 'DeferredItem_Key';
}

export interface GetContextData {
  contexts: ({
    id: UUIDString;
    name: string;
    description?: string | null;
  } & Context_Key)[];
}

export interface GetMyProfileData {
  users: ({
    id: UUIDString;
    displayName: string;
    email?: string | null;
    photoUrl?: string | null;
  } & User_Key)[];
}

export interface ListMyDeferredItemsData {
  deferredItems: ({
    id: UUIDString;
    description: string;
    isCompleted: boolean;
    notes?: string | null;
    reminderDateTime?: TimestampString | null;
  } & DeferredItem_Key)[];
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface ListMyDeferredItemsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyDeferredItemsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyDeferredItemsData, undefined>;
  operationName: string;
}
export const listMyDeferredItemsRef: ListMyDeferredItemsRef;

export function listMyDeferredItems(): QueryPromise<ListMyDeferredItemsData, undefined>;
export function listMyDeferredItems(dc: DataConnect): QueryPromise<ListMyDeferredItemsData, undefined>;

interface GetContextRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetContextData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetContextData, undefined>;
  operationName: string;
}
export const getContextRef: GetContextRef;

export function getContext(): QueryPromise<GetContextData, undefined>;
export function getContext(dc: DataConnect): QueryPromise<GetContextData, undefined>;

interface CreateDeferredItemRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateDeferredItemVariables): MutationRef<CreateDeferredItemData, CreateDeferredItemVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateDeferredItemVariables): MutationRef<CreateDeferredItemData, CreateDeferredItemVariables>;
  operationName: string;
}
export const createDeferredItemRef: CreateDeferredItemRef;

export function createDeferredItem(vars: CreateDeferredItemVariables): MutationPromise<CreateDeferredItemData, CreateDeferredItemVariables>;
export function createDeferredItem(dc: DataConnect, vars: CreateDeferredItemVariables): MutationPromise<CreateDeferredItemData, CreateDeferredItemVariables>;

interface GetMyProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyProfileData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyProfileData, undefined>;
  operationName: string;
}
export const getMyProfileRef: GetMyProfileRef;

export function getMyProfile(): QueryPromise<GetMyProfileData, undefined>;
export function getMyProfile(dc: DataConnect): QueryPromise<GetMyProfileData, undefined>;

