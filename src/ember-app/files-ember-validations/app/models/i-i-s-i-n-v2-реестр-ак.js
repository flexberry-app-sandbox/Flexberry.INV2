import {
  defineNamespace,
  defineProjections,
  Model as РеестрАкMixin
} from '../mixins/regenerated/models/i-i-s-i-n-v2-реестр-ак';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РеестрАкMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
