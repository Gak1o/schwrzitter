const { listMyDeferredItemsRef, getContextRef, createDeferredItemRef, getMyProfileRef } = require('../');
const { DataConnect, CallerSdkTypeEnum } = require('@angular/fire/data-connect');
const { injectDataConnectQuery, injectDataConnectMutation } = require('@tanstack-query-firebase/angular/data-connect');
const { inject, EnvironmentInjector } = require('@angular/core');

exports.injectListMyDeferredItems = function injectListMyDeferredItems(options, injector) {
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

exports.injectGetContext = function injectGetContext(options, injector) {
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

exports.injectCreateDeferredItem = function injectCreateDeferredItem(args, injector) {
  return injectDataConnectMutation(createDeferredItemRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectGetMyProfile = function injectGetMyProfile(options, injector) {
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

