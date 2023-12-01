import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  требования: DS.attr('string'),
  сотрудн: DS.belongsTo('i-i-s-i-n-v2-сотрудн', { inverse: null, async: false }),
  упрОБъек: DS.belongsTo('i-i-s-i-n-v2-упр-о-бъек', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-i-n-v2-выплат-доход.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-i-n-v2-выплат-доход.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  требования: {
    descriptionKey: 'models.i-i-s-i-n-v2-выплат-доход.validations.требования.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудн: {
    descriptionKey: 'models.i-i-s-i-n-v2-выплат-доход.validations.сотрудн.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  упрОБъек: {
    descriptionKey: 'models.i-i-s-i-n-v2-выплат-доход.validations.упрОБъек.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВыплатДоходE', 'i-i-s-i-n-v2-выплат-доход', {
    дата: attr('Дата', { index: 0 }),
    требования: attr('Требования', { index: 1 }),
    номер: attr('Номер', { index: 2 }),
    сотрудн: belongsTo('i-i-s-i-n-v2-сотрудн', 'Сотрудн', {
      фИО: attr('ФИО', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' }),
    упрОБъек: belongsTo('i-i-s-i-n-v2-упр-о-бъек', 'Упр о бъек', {

    }, { index: 3 })
  });

  modelClass.defineProjection('ВыплатДоходL', 'i-i-s-i-n-v2-выплат-доход', {
    дата: attr('Дата', { index: 0 }),
    требования: attr('Требования', { index: 1 }),
    номер: attr('Номер', { index: 2 }),
    сотрудн: belongsTo('i-i-s-i-n-v2-сотрудн', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
