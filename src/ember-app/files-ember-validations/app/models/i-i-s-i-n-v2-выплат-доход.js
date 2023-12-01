import {
  defineNamespace,
  defineProjections,
  Model as ВыплатДоходMixin
} from '../mixins/regenerated/models/i-i-s-i-n-v2-выплат-доход';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВыплатДоходMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
