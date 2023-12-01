import {
  defineNamespace,
  defineProjections,
  Model as Тч_реесMixin
} from '../mixins/regenerated/models/i-i-s-i-n-v2-тч-реес';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(Тч_реесMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
