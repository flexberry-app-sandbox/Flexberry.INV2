import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧ_выплMixin
} from '../mixins/regenerated/models/i-i-s-i-n-v2-т-ч-выпл';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧ_выплMixin, Validations, {
});

defineProjections(Model);

export default Model;
