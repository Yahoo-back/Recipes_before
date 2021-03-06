import { parse } from 'qs';
import modelExtend from 'dva-model-extend';

import { model } from 'utils/model';

export default modelExtend(model, {
  namespace: 'dashboard',
  state: {},
  subscriptions: {},
  effects: {}
});
