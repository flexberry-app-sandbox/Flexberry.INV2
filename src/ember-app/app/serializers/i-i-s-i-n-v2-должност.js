import { Serializer as ДолжностSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-n-v2-должност';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДолжностSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
