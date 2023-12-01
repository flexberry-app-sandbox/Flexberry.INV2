import { Serializer as КлиенSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-n-v2-клиен';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КлиенSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
