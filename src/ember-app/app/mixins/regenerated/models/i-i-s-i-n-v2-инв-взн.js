import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  подпись: DS.attr('boolean'),
  сумма: DS.attr('decimal'),
  договрИнв: DS.belongsTo('i-i-s-i-n-v2-договр-инв', { inverse: null, async: false }),
  упрОБъек: DS.belongsTo('i-i-s-i-n-v2-упр-о-бъек', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-i-n-v2-инв-взн.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-i-n-v2-инв-взн.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  подпись: {
    descriptionKey: 'models.i-i-s-i-n-v2-инв-взн.validations.подпись.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-i-n-v2-инв-взн.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  договрИнв: {
    descriptionKey: 'models.i-i-s-i-n-v2-инв-взн.validations.договрИнв.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  упрОБъек: {
    descriptionKey: 'models.i-i-s-i-n-v2-инв-взн.validations.упрОБъек.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИнвВзнE', 'i-i-s-i-n-v2-инв-взн', {
    дата: attr('Дата', { index: 0 }),
    сумма: attr('Сумма', { index: 1 }),
    подпись: attr('Подпись', { index: 2 }),
    номер: attr('Номер', { index: 3 }),
    договрИнв: belongsTo('i-i-s-i-n-v2-договр-инв', 'Договр инв', {
      требования: attr('Требования', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'требования' }),
    упрОБъек: belongsTo('i-i-s-i-n-v2-упр-о-бъек', 'Упр о бъек', {

    }, { index: 4 })
  });

  modelClass.defineProjection('ИнвВзнL', 'i-i-s-i-n-v2-инв-взн', {
    дата: attr('Дата', { index: 0 }),
    сумма: attr('Сумма', { index: 1 }),
    подпись: attr('Подпись', { index: 2 }),
    номер: attr('Номер', { index: 3 }),
    договрИнв: belongsTo('i-i-s-i-n-v2-договр-инв', 'Требования', {
      требования: attr('Требования', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
