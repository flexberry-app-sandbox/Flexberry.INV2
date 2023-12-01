import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РеестрАкMixin
} from '../mixins/regenerated/models/i-i-s-i-n-v2-реестр-ак';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РеестрАкMixin, Validations, {
});

defineProjections(Model);

export default Model;
