import {
  defineNamespace,
  defineProjections,
  Model as Тч_ПортфMixin
} from '../mixins/regenerated/models/i-i-s-i-n-v2-тч-портф';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(Тч_ПортфMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
