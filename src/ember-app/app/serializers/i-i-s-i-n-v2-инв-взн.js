import { Serializer as ИнвВзнSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-n-v2-инв-взн';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ИнвВзнSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
