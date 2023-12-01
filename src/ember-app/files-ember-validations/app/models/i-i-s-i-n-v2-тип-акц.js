import {
  defineNamespace,
  defineProjections,
  Model as ТипАкцMixin
} from '../mixins/regenerated/models/i-i-s-i-n-v2-тип-акц';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТипАкцMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
