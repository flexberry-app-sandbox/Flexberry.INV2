import {
  defineNamespace,
  defineProjections,
  Model as СотруднMixin
} from '../mixins/regenerated/models/i-i-s-i-n-v2-сотрудн';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СотруднMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
