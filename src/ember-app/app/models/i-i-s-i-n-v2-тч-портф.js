import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as Тч_ПортфMixin
} from '../mixins/regenerated/models/i-i-s-i-n-v2-тч-портф';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(Тч_ПортфMixin, Validations, {
});

defineProjections(Model);

export default Model;
