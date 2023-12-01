import { Serializer as УпрОБъекSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-n-v2-упр-о-бъек';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(УпрОБъекSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
