import {
  defineNamespace,
  defineProjections,
  Model as ПортфЦБMixin
} from '../mixins/regenerated/models/i-i-s-i-n-v2-портф-ц-б';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПортфЦБMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
