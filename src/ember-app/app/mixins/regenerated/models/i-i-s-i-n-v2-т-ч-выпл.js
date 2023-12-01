import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сумма: DS.attr('decimal')
});

export let ValidationRules = {
  сумма: {
    descriptionKey: 'models.i-i-s-i-n-v2-т-ч-выпл.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧ_выплE', 'i-i-s-i-n-v2-т-ч-выпл', {
    сумма: attr('Сумма', { index: 0 })
  });

  modelClass.defineProjection('ТЧ_выплL', 'i-i-s-i-n-v2-т-ч-выпл', {
    сумма: attr('Сумма', { index: 0 })
  });
};
