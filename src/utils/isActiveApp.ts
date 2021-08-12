import type { Apps } from '../types';
import { getStorageData } from './getStorageData';

export const isActiveApp = (name: Apps) => {
  const zIndexes = getStorageData<{ [k in Apps]?: number }>('z_index', {});
  const windowStatus = getStorageData<{ [k in Apps]?: boolean }>('windows_state', {});

  if (!zIndexes.hasOwnProperty(name) || !windowStatus.hasOwnProperty(name)) {
    return false;
  }

  if (!windowStatus[name]) {
    return false;
  }

  const maxIndex = Math.max.apply(null, Object.values(zIndexes));

  return zIndexes[name] === maxIndex;
};
