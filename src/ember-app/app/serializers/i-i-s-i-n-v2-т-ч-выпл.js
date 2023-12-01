import { Serializer as ТЧ_выплSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-n-v2-т-ч-выпл';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧ_выплSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
