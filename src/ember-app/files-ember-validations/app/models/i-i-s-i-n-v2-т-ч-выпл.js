import {
  defineNamespace,
  defineProjections,
  Model as ТЧ_выплMixin
} from '../mixins/regenerated/models/i-i-s-i-n-v2-т-ч-выпл';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧ_выплMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
