import * as T from './types';
import { actionTypes as at } from './constants';

export function emitAppStarted(): T.EmitAppReadyAction {
  return {
    type: at.EMIT_APP_STARTED,
  };
}
