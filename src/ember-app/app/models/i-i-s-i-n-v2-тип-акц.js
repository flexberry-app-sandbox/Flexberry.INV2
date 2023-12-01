import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТипАкцMixin
} from '../mixins/regenerated/models/i-i-s-i-n-v2-тип-акц';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТипАкцMixin, Validations, {
});

defineProjections(Model);

export default Model;
