import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  должност: DS.belongsTo('i-i-s-i-n-v2-должност', { inverse: null, async: false })
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-i-n-v2-сотрудн.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должност: {
    descriptionKey: 'models.i-i-s-i-n-v2-сотрудн.validations.должност.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотруднE', 'i-i-s-i-n-v2-сотрудн', {
    фИО: attr('ФИО', { index: 0 }),
    должност: belongsTo('i-i-s-i-n-v2-должност', 'Должност', {
      должность: attr('Должность', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'должность' })
  });

  modelClass.defineProjection('СотруднL', 'i-i-s-i-n-v2-сотрудн', {
    фИО: attr('ФИО', { index: 0 }),
    должност: belongsTo('i-i-s-i-n-v2-должност', 'Должность', {
      должность: attr('Должность', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
