import { Serializer as РеестрАкSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-n-v2-реестр-ак';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РеестрАкSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
