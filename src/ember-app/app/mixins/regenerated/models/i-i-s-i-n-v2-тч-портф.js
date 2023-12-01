import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колич: DS.attr('number'),
  номинал: DS.attr('decimal'),
  сумма: DS.attr('decimal'),
  типАкц: DS.belongsTo('i-i-s-i-n-v2-тип-акц', { inverse: null, async: false })
});

export let ValidationRules = {
  колич: {
    descriptionKey: 'models.i-i-s-i-n-v2-тч-портф.validations.колич.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номинал: {
    descriptionKey: 'models.i-i-s-i-n-v2-тч-портф.validations.номинал.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-i-n-v2-тч-портф.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  типАкц: {
    descriptionKey: 'models.i-i-s-i-n-v2-тч-портф.validations.типАкц.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Тч_ПортфE', 'i-i-s-i-n-v2-тч-портф', {
    номинал: attr('Номинал', { index: 0 }),
    колич: attr('Колич', { index: 1 }),
    сумма: attr('Сумма', { index: 2 }),
    типАкц: belongsTo('i-i-s-i-n-v2-тип-акц', 'Тип акц', {
      типАкции: attr('Тип акции', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'типАкции' })
  });

  modelClass.defineProjection('Тч_ПортфL', 'i-i-s-i-n-v2-тч-портф', {
    номинал: attr('Номинал', { index: 0 }),
    колич: attr('Колич', { index: 1 }),
    сумма: attr('Сумма', { index: 2 }),
    типАкц: belongsTo('i-i-s-i-n-v2-тип-акц', 'Тип акции', {
      типАкции: attr('Тип акции', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
