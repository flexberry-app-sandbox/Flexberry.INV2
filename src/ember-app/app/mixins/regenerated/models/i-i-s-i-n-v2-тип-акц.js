import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  типАкции: DS.attr('string')
});

export let ValidationRules = {
  типАкции: {
    descriptionKey: 'models.i-i-s-i-n-v2-тип-акц.validations.типАкции.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТипАкцE', 'i-i-s-i-n-v2-тип-акц', {
    типАкции: attr('Тип акции', { index: 0 })
  });

  modelClass.defineProjection('ТипАкцL', 'i-i-s-i-n-v2-тип-акц', {
    типАкции: attr('Тип акции', { index: 0 })
  });
};
