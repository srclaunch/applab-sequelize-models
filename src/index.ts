// @ts-expect-error
import * as SequelizeModals from './models/index';

export function getSequelizeModels() {
  return SequelizeModals.default;
}