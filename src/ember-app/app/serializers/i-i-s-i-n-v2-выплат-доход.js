import { Serializer as ВыплатДоходSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-n-v2-выплат-доход';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВыплатДоходSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
