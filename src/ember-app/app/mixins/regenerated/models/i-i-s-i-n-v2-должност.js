import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.attr('string'),
  код: DS.attr('number')
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-i-n-v2-должност.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-i-n-v2-должност.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностE', 'i-i-s-i-n-v2-должност', {
    должность: attr('Должность', { index: 0 }),
    код: attr('Код', { index: 1 })
  });

  modelClass.defineProjection('ДолжностL', 'i-i-s-i-n-v2-должност', {
    должность: attr('Должность', { index: 0 }),
    код: attr('Код', { index: 1 })
  });
};
