const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'schwrzitter',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const listMyDeferredItemsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMyDeferredItems');
}
listMyDeferredItemsRef.operationName = 'ListMyDeferredItems';
exports.listMyDeferredItemsRef = listMyDeferredItemsRef;

exports.listMyDeferredItems = function listMyDeferredItems(dc) {
  return executeQuery(listMyDeferredItemsRef(dc));
};

const getContextRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetContext');
}
getContextRef.operationName = 'GetContext';
exports.getContextRef = getContextRef;

exports.getContext = function getContext(dc) {
  return executeQuery(getContextRef(dc));
};

const createDeferredItemRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateDeferredItem', inputVars);
}
createDeferredItemRef.operationName = 'CreateDeferredItem';
exports.createDeferredItemRef = createDeferredItemRef;

exports.createDeferredItem = function createDeferredItem(dcOrVars, vars) {
  return executeMutation(createDeferredItemRef(dcOrVars, vars));
};

const getMyProfileRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyProfile');
}
getMyProfileRef.operationName = 'GetMyProfile';
exports.getMyProfileRef = getMyProfileRef;

exports.getMyProfile = function getMyProfile(dc) {
  return executeQuery(getMyProfileRef(dc));
};
