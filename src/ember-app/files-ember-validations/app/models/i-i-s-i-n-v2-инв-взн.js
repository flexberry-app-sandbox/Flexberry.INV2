import {
  defineNamespace,
  defineProjections,
  Model as ИнвВзнMixin
} from '../mixins/regenerated/models/i-i-s-i-n-v2-инв-взн';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ИнвВзнMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
