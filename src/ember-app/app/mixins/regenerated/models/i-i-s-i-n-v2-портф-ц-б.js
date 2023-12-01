import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  обязаности: DS.attr('string'),
  подписьК: DS.attr('boolean'),
  подписьО: DS.attr('boolean'),
  сумма: DS.attr('decimal'),
  клиен: DS.belongsTo('i-i-s-i-n-v2-клиен', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-i-n-v2-организация', { inverse: null, async: false }),
  сотрудн: DS.belongsTo('i-i-s-i-n-v2-сотрудн', { inverse: null, async: false }),
  упрОБъек: DS.belongsTo('i-i-s-i-n-v2-упр-о-бъек', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-i-n-v2-портф-ц-б.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-i-n-v2-портф-ц-б.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  обязаности: {
    descriptionKey: 'models.i-i-s-i-n-v2-портф-ц-б.validations.обязаности.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  подписьК: {
    descriptionKey: 'models.i-i-s-i-n-v2-портф-ц-б.validations.подписьК.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  подписьО: {
    descriptionKey: 'models.i-i-s-i-n-v2-портф-ц-б.validations.подписьО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-i-n-v2-портф-ц-б.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  клиен: {
    descriptionKey: 'models.i-i-s-i-n-v2-портф-ц-б.validations.клиен.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-i-n-v2-портф-ц-б.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудн: {
    descriptionKey: 'models.i-i-s-i-n-v2-портф-ц-б.validations.сотрудн.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  упрОБъек: {
    descriptionKey: 'models.i-i-s-i-n-v2-портф-ц-б.validations.упрОБъек.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПортфЦБE', 'i-i-s-i-n-v2-портф-ц-б', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    обязаности: attr('Обязаности', { index: 2 }),
    сумма: attr('Сумма', { index: 3 }),
    подписьК: attr('Подпись К', { index: 4 }),
    подписьО: attr('Подпись О', { index: 5 }),
    сотрудн: belongsTo('i-i-s-i-n-v2-сотрудн', 'Сотрудн', {
      фИО: attr('ФИО', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'фИО' }),
    организация: belongsTo('i-i-s-i-n-v2-организация', 'Организация', {
      наим: attr('Наим', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'наим' }),
    клиен: belongsTo('i-i-s-i-n-v2-клиен', 'Клиен', {
      наим: attr('Наим', { index: 12, hidden: true })
    }, { index: 11, displayMemberPath: 'наим' }),
    упрОБъек: belongsTo('i-i-s-i-n-v2-упр-о-бъек', 'Упр о бъек', {

    }, { index: 10 })
  });

  modelClass.defineProjection('ПортфЦБL', 'i-i-s-i-n-v2-портф-ц-б', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    обязаности: attr('Обязаности', { index: 2 }),
    сумма: attr('Сумма', { index: 3 }),
    подписьК: attr('Подпись К', { index: 4 }),
    подписьО: attr('Подпись О', { index: 5 }),
    сотрудн: belongsTo('i-i-s-i-n-v2-сотрудн', 'ФИО', {
      фИО: attr('ФИО', { index: 6 })
    }, { index: -1, hidden: true }),
    организация: belongsTo('i-i-s-i-n-v2-организация', 'Наим', {
      наим: attr('Наим', { index: 7 })
    }, { index: -1, hidden: true }),
    клиен: belongsTo('i-i-s-i-n-v2-клиен', 'Наим', {
      наим: attr('Наим', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
