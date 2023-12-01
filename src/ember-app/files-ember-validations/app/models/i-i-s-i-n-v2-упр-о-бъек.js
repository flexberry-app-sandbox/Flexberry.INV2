import {
  defineNamespace,
  defineProjections,
  Model as УпрОБъекMixin
} from '../mixins/regenerated/models/i-i-s-i-n-v2-упр-о-бъек';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(УпрОБъекMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
