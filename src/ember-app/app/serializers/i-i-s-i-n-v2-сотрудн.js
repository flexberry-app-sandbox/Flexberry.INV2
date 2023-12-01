import { Serializer as СотруднSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-n-v2-сотрудн';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СотруднSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
