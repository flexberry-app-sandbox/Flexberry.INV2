import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ИнвВзнMixin
} from '../mixins/regenerated/models/i-i-s-i-n-v2-инв-взн';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ИнвВзнMixin, Validations, {
});

defineProjections(Model);

export default Model;
