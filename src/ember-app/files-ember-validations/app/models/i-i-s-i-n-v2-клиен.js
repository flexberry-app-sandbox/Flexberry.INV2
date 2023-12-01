import {
  defineNamespace,
  defineProjections,
  Model as КлиенMixin
} from '../mixins/regenerated/models/i-i-s-i-n-v2-клиен';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КлиенMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
