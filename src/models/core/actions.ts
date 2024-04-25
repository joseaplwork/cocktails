import { actionTypes as at } from './constants';
import * as T from './types';

export function emitAppStarted(): T.EmitAppReadyAction {
  return {
    type: at.EMIT_APP_STARTED,
  };
}
