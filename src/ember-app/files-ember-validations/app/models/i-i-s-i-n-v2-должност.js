import {
  defineNamespace,
  defineProjections,
  Model as ДолжностMixin
} from '../mixins/regenerated/models/i-i-s-i-n-v2-должност';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДолжностMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
