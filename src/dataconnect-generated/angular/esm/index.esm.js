import { listMyDeferredItemsRef, getContextRef, createDeferredItemRef, getMyProfileRef } from '../../';
import { DataConnect, CallerSdkTypeEnum } from '@angular/fire/data-connect';
import { injectDataConnectQuery, injectDataConnectMutation } from '@tanstack-query-firebase/angular/data-connect';
import { inject, EnvironmentInjector } from '@angular/core';
export function injectListMyDeferredItems(options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  listMyDeferredItemsRef(dc),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectGetContext(options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  getContextRef(dc),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectCreateDeferredItem(args, injector) {
  return injectDataConnectMutation(createDeferredItemRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectGetMyProfile(options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  getMyProfileRef(dc),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

