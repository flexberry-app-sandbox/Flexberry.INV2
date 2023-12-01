import {
  defineNamespace,
  defineProjections,
  Model as ДоговрИнвMixin
} from '../mixins/regenerated/models/i-i-s-i-n-v2-договр-инв';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДоговрИнвMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
