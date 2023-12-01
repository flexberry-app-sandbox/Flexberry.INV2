import { Serializer as ДоговрИнвSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-n-v2-договр-инв';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДоговрИнвSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
