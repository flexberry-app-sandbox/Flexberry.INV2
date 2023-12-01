import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  подпись: DS.attr('boolean'),
  клиен: DS.belongsTo('i-i-s-i-n-v2-клиен', { inverse: null, async: false }),
  сотрудн: DS.belongsTo('i-i-s-i-n-v2-сотрудн', { inverse: null, async: false }),
  упрОБъек: DS.belongsTo('i-i-s-i-n-v2-упр-о-бъек', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-i-n-v2-реестр-ак.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-i-n-v2-реестр-ак.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  подпись: {
    descriptionKey: 'models.i-i-s-i-n-v2-реестр-ак.validations.подпись.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиен: {
    descriptionKey: 'models.i-i-s-i-n-v2-реестр-ак.validations.клиен.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудн: {
    descriptionKey: 'models.i-i-s-i-n-v2-реестр-ак.validations.сотрудн.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  упрОБъек: {
    descriptionKey: 'models.i-i-s-i-n-v2-реестр-ак.validations.упрОБъек.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РеестрАкE', 'i-i-s-i-n-v2-реестр-ак', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    подпись: attr('Подпись', { index: 2 }),
    клиен: belongsTo('i-i-s-i-n-v2-клиен', 'Клиен', {
      наим: attr('Наим', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наим' }),
    сотрудн: belongsTo('i-i-s-i-n-v2-сотрудн', 'Сотрудн', {
      фИО: attr('ФИО', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фИО' }),
    упрОБъек: belongsTo('i-i-s-i-n-v2-упр-о-бъек', 'Упр о бъек', {

    }, { index: 7 })
  });

  modelClass.defineProjection('РеестрАкL', 'i-i-s-i-n-v2-реестр-ак', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    подпись: attr('Подпись', { index: 2 }),
    клиен: belongsTo('i-i-s-i-n-v2-клиен', 'Наим', {
      наим: attr('Наим', { index: 3 })
    }, { index: -1, hidden: true }),
    сотрудн: belongsTo('i-i-s-i-n-v2-сотрудн', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
