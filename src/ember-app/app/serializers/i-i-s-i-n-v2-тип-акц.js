import { Serializer as ТипАкцSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-n-v2-тип-акц';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТипАкцSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
