import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  доляУК: DS.attr('decimal'),
  номинал: DS.attr('decimal'),
  основание: DS.attr('string'),
  сумма: DS.attr('decimal'),
  типАкц: DS.belongsTo('i-i-s-i-n-v2-тип-акц', { inverse: null, async: false })
});

export let ValidationRules = {
  доляУК: {
    descriptionKey: 'models.i-i-s-i-n-v2-тч-реес.validations.доляУК.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  номинал: {
    descriptionKey: 'models.i-i-s-i-n-v2-тч-реес.validations.номинал.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  основание: {
    descriptionKey: 'models.i-i-s-i-n-v2-тч-реес.validations.основание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-i-n-v2-тч-реес.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  типАкц: {
    descriptionKey: 'models.i-i-s-i-n-v2-тч-реес.validations.типАкц.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Тч_реесE', 'i-i-s-i-n-v2-тч-реес', {
    номинал: attr('Номинал', { index: 0 }),
    сумма: attr('Сумма', { index: 1 }),
    доляУК: attr('Доля УК', { index: 2 }),
    основание: attr('Основание', { index: 3 }),
    типАкц: belongsTo('i-i-s-i-n-v2-тип-акц', 'Тип акц', {
      типАкции: attr('Тип акции', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'типАкции' })
  });

  modelClass.defineProjection('Тч_реесL', 'i-i-s-i-n-v2-тч-реес', {
    номинал: attr('Номинал', { index: 0 }),
    сумма: attr('Сумма', { index: 1 }),
    доляУК: attr('Доля УК', { index: 2 }),
    основание: attr('Основание', { index: 3 }),
    типАкц: belongsTo('i-i-s-i-n-v2-тип-акц', 'Тип акции', {
      типАкции: attr('Тип акции', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
