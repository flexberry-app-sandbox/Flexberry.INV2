import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДоговрИнвMixin
} from '../mixins/regenerated/models/i-i-s-i-n-v2-договр-инв';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДоговрИнвMixin, Validations, {
});

defineProjections(Model);

export default Model;
