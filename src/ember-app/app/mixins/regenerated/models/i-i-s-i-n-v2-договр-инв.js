import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  обяз: DS.attr('string'),
  подписьК: DS.attr('boolean'),
  подписьО: DS.attr('boolean'),
  предмДог: DS.attr('string'),
  сумма: DS.attr('decimal'),
  требования: DS.attr('string'),
  клиен: DS.belongsTo('i-i-s-i-n-v2-клиен', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-i-n-v2-организация', { inverse: null, async: false }),
  упрОБъек: DS.belongsTo('i-i-s-i-n-v2-упр-о-бъек', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-i-n-v2-договр-инв.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-i-n-v2-договр-инв.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  обяз: {
    descriptionKey: 'models.i-i-s-i-n-v2-договр-инв.validations.обяз.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  подписьК: {
    descriptionKey: 'models.i-i-s-i-n-v2-договр-инв.validations.подписьК.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  подписьО: {
    descriptionKey: 'models.i-i-s-i-n-v2-договр-инв.validations.подписьО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  предмДог: {
    descriptionKey: 'models.i-i-s-i-n-v2-договр-инв.validations.предмДог.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-i-n-v2-договр-инв.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  требования: {
    descriptionKey: 'models.i-i-s-i-n-v2-договр-инв.validations.требования.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиен: {
    descriptionKey: 'models.i-i-s-i-n-v2-договр-инв.validations.клиен.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-i-n-v2-договр-инв.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  упрОБъек: {
    descriptionKey: 'models.i-i-s-i-n-v2-договр-инв.validations.упрОБъек.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДоговрИнвE', 'i-i-s-i-n-v2-договр-инв', {
    требования: attr('Требования', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    номер: attr('Номер', { index: 2 }),
    предмДог: attr('Предм дог', { index: 3 }),
    обяз: attr('Обяз', { index: 4 }),
    подписьК: attr('Подпись К', { index: 5 }),
    подписьО: attr('Подпись О', { index: 6 }),
    сумма: attr('Сумма', { index: 7 }),
    организация: belongsTo('i-i-s-i-n-v2-организация', 'Организация', {
      наим: attr('Наим', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'наим' }),
    клиен: belongsTo('i-i-s-i-n-v2-клиен', 'Клиен', {
      наим: attr('Наим', { index: 12, hidden: true })
    }, { index: 11, displayMemberPath: 'наим' }),
    упрОБъек: belongsTo('i-i-s-i-n-v2-упр-о-бъек', 'Упр о бъек', {

    }, { index: 8 })
  });

  modelClass.defineProjection('ДоговрИнвL', 'i-i-s-i-n-v2-договр-инв', {
    требования: attr('Требования', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    номер: attr('Номер', { index: 2 }),
    предмДог: attr('Предм дог', { index: 3 }),
    обяз: attr('Обяз', { index: 4 }),
    подписьК: attr('Подпись К', { index: 5 }),
    подписьО: attr('Подпись О', { index: 6 }),
    сумма: attr('Сумма', { index: 7 }),
    организация: belongsTo('i-i-s-i-n-v2-организация', 'Наим', {
      наим: attr('Наим', { index: 8 })
    }, { index: -1, hidden: true }),
    клиен: belongsTo('i-i-s-i-n-v2-клиен', 'Наим', {
      наим: attr('Наим', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
