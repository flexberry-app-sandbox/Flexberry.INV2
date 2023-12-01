import { Serializer as ПортфЦБSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-n-v2-портф-ц-б';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПортфЦБSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
