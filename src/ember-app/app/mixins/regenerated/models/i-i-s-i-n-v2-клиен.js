import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  банк: DS.attr('string'),
  бИК: DS.attr('number'),
  иНН: DS.attr('number'),
  кПП: DS.attr('number'),
  наим: DS.attr('string'),
  расСчет: DS.attr('number')
});

export let ValidationRules = {
  банк: {
    descriptionKey: 'models.i-i-s-i-n-v2-клиен.validations.банк.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  бИК: {
    descriptionKey: 'models.i-i-s-i-n-v2-клиен.validations.бИК.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-i-n-v2-клиен.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кПП: {
    descriptionKey: 'models.i-i-s-i-n-v2-клиен.validations.кПП.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наим: {
    descriptionKey: 'models.i-i-s-i-n-v2-клиен.validations.наим.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расСчет: {
    descriptionKey: 'models.i-i-s-i-n-v2-клиен.validations.расСчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиенE', 'i-i-s-i-n-v2-клиен', {
    наим: attr('Наим', { index: 0 }),
    расСчет: attr('Рас счет', { index: 1 }),
    бИК: attr('БИК', { index: 2 }),
    банк: attr('Банк', { index: 3 }),
    иНН: attr('ИНН', { index: 4 }),
    кПП: attr('КПП', { index: 5 })
  });

  modelClass.defineProjection('КлиенL', 'i-i-s-i-n-v2-клиен', {
    наим: attr('Наим', { index: 0 }),
    расСчет: attr('Рас счет', { index: 1 }),
    бИК: attr('БИК', { index: 2 }),
    банк: attr('Банк', { index: 3 }),
    иНН: attr('ИНН', { index: 4 }),
    кПП: attr('КПП', { index: 5 })
  });
};
