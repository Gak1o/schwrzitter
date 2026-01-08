import { ListMyDeferredItemsData, GetContextData, CreateDeferredItemData, CreateDeferredItemVariables, GetMyProfileData } from '../';
import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise} from '@angular/fire/data-connect';
import { CreateQueryResult, CreateMutationResult} from '@tanstack/angular-query-experimental';
import { CreateDataConnectQueryResult, CreateDataConnectQueryOptions, CreateDataConnectMutationResult, DataConnectMutationOptionsUndefinedMutationFn } from '@tanstack-query-firebase/angular/data-connect';
import { FirebaseError } from 'firebase/app';
import { Injector } from '@angular/core';

export type ListMyDeferredItemsOptions = () => Omit<CreateDataConnectQueryOptions<ListMyDeferredItemsData, undefined>, 'queryFn'>;
export function injectListMyDeferredItems(options?: ListMyDeferredItemsOptions, injector?: Injector): CreateDataConnectQueryResult<ListMyDeferredItemsData, undefined>;

export type GetContextOptions = () => Omit<CreateDataConnectQueryOptions<GetContextData, undefined>, 'queryFn'>;
export function injectGetContext(options?: GetContextOptions, injector?: Injector): CreateDataConnectQueryResult<GetContextData, undefined>;

type CreateDeferredItemOptions = DataConnectMutationOptionsUndefinedMutationFn<CreateDeferredItemData, FirebaseError, CreateDeferredItemVariables>;
export function injectCreateDeferredItem(options?: CreateDeferredItemOptions, injector?: Injector): CreateDataConnectMutationResult<CreateDeferredItemData, CreateDeferredItemVariables, CreateDeferredItemVariables>;

export type GetMyProfileOptions = () => Omit<CreateDataConnectQueryOptions<GetMyProfileData, undefined>, 'queryFn'>;
export function injectGetMyProfile(options?: GetMyProfileOptions, injector?: Injector): CreateDataConnectQueryResult<GetMyProfileData, undefined>;
