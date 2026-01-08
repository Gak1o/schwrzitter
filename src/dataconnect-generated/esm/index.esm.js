import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'schwrzitter',
  location: 'us-east4'
};

export const listMyDeferredItemsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMyDeferredItems');
}
listMyDeferredItemsRef.operationName = 'ListMyDeferredItems';

export function listMyDeferredItems(dc) {
  return executeQuery(listMyDeferredItemsRef(dc));
}

export const getContextRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetContext');
}
getContextRef.operationName = 'GetContext';

export function getContext(dc) {
  return executeQuery(getContextRef(dc));
}

export const createDeferredItemRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateDeferredItem', inputVars);
}
createDeferredItemRef.operationName = 'CreateDeferredItem';

export function createDeferredItem(dcOrVars, vars) {
  return executeMutation(createDeferredItemRef(dcOrVars, vars));
}

export const getMyProfileRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyProfile');
}
getMyProfileRef.operationName = 'GetMyProfile';

export function getMyProfile(dc) {
  return executeQuery(getMyProfileRef(dc));
}

