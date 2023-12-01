import { Serializer as Тч_ПортфSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-n-v2-тч-портф';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(Тч_ПортфSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
