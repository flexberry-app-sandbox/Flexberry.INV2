import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISINV2ВыплатДоходLForm from './forms/i-i-s-i-n-v2-выплат-доход-l';
import IISINV2ДоговрИнвLForm from './forms/i-i-s-i-n-v2-договр-инв-l';
import IISINV2ДолжностLForm from './forms/i-i-s-i-n-v2-должност-l';
import IISINV2ИнвВзнLForm from './forms/i-i-s-i-n-v2-инв-взн-l';
import IISINV2КлиенLForm from './forms/i-i-s-i-n-v2-клиен-l';
import IISINV2ОрганизацияLForm from './forms/i-i-s-i-n-v2-организация-l';
import IISINV2ПортфЦБLForm from './forms/i-i-s-i-n-v2-портф-ц-б-l';
import IISINV2РеестрАкLForm from './forms/i-i-s-i-n-v2-реестр-ак-l';
import IISINV2СотруднLForm from './forms/i-i-s-i-n-v2-сотрудн-l';
import IISINV2ТЧ_выплLForm from './forms/i-i-s-i-n-v2-т-ч-выпл-l';
import IISINV2ТипАкцLForm from './forms/i-i-s-i-n-v2-тип-акц-l';
import IISINV2Тч_ПортфLForm from './forms/i-i-s-i-n-v2-тч-портф-l';
import IISINV2Тч_реесLForm from './forms/i-i-s-i-n-v2-тч-реес-l';
import IISINV2УпрОБъекLForm from './forms/i-i-s-i-n-v2-упр-о-бъек-l';
import IISINV2ВыплатДоходEForm from './forms/i-i-s-i-n-v2-выплат-доход-e';
import IISINV2ДоговрИнвEForm from './forms/i-i-s-i-n-v2-договр-инв-e';
import IISINV2ДолжностEForm from './forms/i-i-s-i-n-v2-должност-e';
import IISINV2ИнвВзнEForm from './forms/i-i-s-i-n-v2-инв-взн-e';
import IISINV2КлиенEForm from './forms/i-i-s-i-n-v2-клиен-e';
import IISINV2ОрганизацияEForm from './forms/i-i-s-i-n-v2-организация-e';
import IISINV2ПортфЦБEForm from './forms/i-i-s-i-n-v2-портф-ц-б-e';
import IISINV2РеестрАкEForm from './forms/i-i-s-i-n-v2-реестр-ак-e';
import IISINV2СотруднEForm from './forms/i-i-s-i-n-v2-сотрудн-e';
import IISINV2ТЧ_выплEForm from './forms/i-i-s-i-n-v2-т-ч-выпл-e';
import IISINV2ТипАкцEForm from './forms/i-i-s-i-n-v2-тип-акц-e';
import IISINV2Тч_ПортфEForm from './forms/i-i-s-i-n-v2-тч-портф-e';
import IISINV2Тч_реесEForm from './forms/i-i-s-i-n-v2-тч-реес-e';
import IISINV2УпрОБъекEForm from './forms/i-i-s-i-n-v2-упр-о-бъек-e';
import IISINV2ВыплатДоходModel from './models/i-i-s-i-n-v2-выплат-доход';
import IISINV2ДоговрИнвModel from './models/i-i-s-i-n-v2-договр-инв';
import IISINV2ДолжностModel from './models/i-i-s-i-n-v2-должност';
import IISINV2ИнвВзнModel from './models/i-i-s-i-n-v2-инв-взн';
import IISINV2КлиенModel from './models/i-i-s-i-n-v2-клиен';
import IISINV2ОрганизацияModel from './models/i-i-s-i-n-v2-организация';
import IISINV2ПортфЦБModel from './models/i-i-s-i-n-v2-портф-ц-б';
import IISINV2РеестрАкModel from './models/i-i-s-i-n-v2-реестр-ак';
import IISINV2СотруднModel from './models/i-i-s-i-n-v2-сотрудн';
import IISINV2ТЧ_выплModel from './models/i-i-s-i-n-v2-т-ч-выпл';
import IISINV2ТипАкцModel from './models/i-i-s-i-n-v2-тип-акц';
import IISINV2Тч_ПортфModel from './models/i-i-s-i-n-v2-тч-портф';
import IISINV2Тч_реесModel from './models/i-i-s-i-n-v2-тч-реес';
import IISINV2УпрОБъекModel from './models/i-i-s-i-n-v2-упр-о-бъек';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-n-v2-выплат-доход': IISINV2ВыплатДоходModel,
    'i-i-s-i-n-v2-договр-инв': IISINV2ДоговрИнвModel,
    'i-i-s-i-n-v2-должност': IISINV2ДолжностModel,
    'i-i-s-i-n-v2-инв-взн': IISINV2ИнвВзнModel,
    'i-i-s-i-n-v2-клиен': IISINV2КлиенModel,
    'i-i-s-i-n-v2-организация': IISINV2ОрганизацияModel,
    'i-i-s-i-n-v2-портф-ц-б': IISINV2ПортфЦБModel,
    'i-i-s-i-n-v2-реестр-ак': IISINV2РеестрАкModel,
    'i-i-s-i-n-v2-сотрудн': IISINV2СотруднModel,
    'i-i-s-i-n-v2-т-ч-выпл': IISINV2ТЧ_выплModel,
    'i-i-s-i-n-v2-тип-акц': IISINV2ТипАкцModel,
    'i-i-s-i-n-v2-тч-портф': IISINV2Тч_ПортфModel,
    'i-i-s-i-n-v2-тч-реес': IISINV2Тч_реесModel,
    'i-i-s-i-n-v2-упр-о-бъек': IISINV2УпрОБъекModel
  },

  'application-name': 'I n v2',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'I n v2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I n v2',
          title: 'I n v2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'i-n-v2': {
          caption: 'INV2',
          title: 'INV2',
          'i-i-s-i-n-v2-портф-ц-б-l': {
            caption: 'Портф ЦБ',
            title: ''
          },
          'i-i-s-i-n-v2-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-i-n-v2-тч-портф-l': {
            caption: 'Тч_ портф',
            title: ''
          },
          'i-i-s-i-n-v2-сотрудн-l': {
            caption: 'Сотрудн',
            title: ''
          },
          'i-i-s-i-n-v2-реестр-ак-l': {
            caption: 'Реестр ак',
            title: ''
          },
          'i-i-s-i-n-v2-т-ч-выпл-l': {
            caption: 'Т ч_выпл',
            title: ''
          },
          'i-i-s-i-n-v2-клиен-l': {
            caption: 'Клиен',
            title: ''
          },
          'i-i-s-i-n-v2-тч-реес-l': {
            caption: 'Тч_реес',
            title: ''
          },
          'i-i-s-i-n-v2-выплат-доход-l': {
            caption: 'Выплат доход',
            title: ''
          },
          'i-i-s-i-n-v2-должност-l': {
            caption: 'Должност',
            title: ''
          },
          'i-i-s-i-n-v2-упр-о-бъек-l': {
            caption: 'Упр о бъек',
            title: ''
          },
          'i-i-s-i-n-v2-инв-взн-l': {
            caption: 'Инв взн',
            title: ''
          },
          'i-i-s-i-n-v2-тип-акц-l': {
            caption: 'Тип акц',
            title: ''
          },
          'i-i-s-i-n-v2-договр-инв-l': {
            caption: 'Договр инв',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-i-n-v2-выплат-доход-l': IISINV2ВыплатДоходLForm,
    'i-i-s-i-n-v2-договр-инв-l': IISINV2ДоговрИнвLForm,
    'i-i-s-i-n-v2-должност-l': IISINV2ДолжностLForm,
    'i-i-s-i-n-v2-инв-взн-l': IISINV2ИнвВзнLForm,
    'i-i-s-i-n-v2-клиен-l': IISINV2КлиенLForm,
    'i-i-s-i-n-v2-организация-l': IISINV2ОрганизацияLForm,
    'i-i-s-i-n-v2-портф-ц-б-l': IISINV2ПортфЦБLForm,
    'i-i-s-i-n-v2-реестр-ак-l': IISINV2РеестрАкLForm,
    'i-i-s-i-n-v2-сотрудн-l': IISINV2СотруднLForm,
    'i-i-s-i-n-v2-т-ч-выпл-l': IISINV2ТЧ_выплLForm,
    'i-i-s-i-n-v2-тип-акц-l': IISINV2ТипАкцLForm,
    'i-i-s-i-n-v2-тч-портф-l': IISINV2Тч_ПортфLForm,
    'i-i-s-i-n-v2-тч-реес-l': IISINV2Тч_реесLForm,
    'i-i-s-i-n-v2-упр-о-бъек-l': IISINV2УпрОБъекLForm,
    'i-i-s-i-n-v2-выплат-доход-e': IISINV2ВыплатДоходEForm,
    'i-i-s-i-n-v2-договр-инв-e': IISINV2ДоговрИнвEForm,
    'i-i-s-i-n-v2-должност-e': IISINV2ДолжностEForm,
    'i-i-s-i-n-v2-инв-взн-e': IISINV2ИнвВзнEForm,
    'i-i-s-i-n-v2-клиен-e': IISINV2КлиенEForm,
    'i-i-s-i-n-v2-организация-e': IISINV2ОрганизацияEForm,
    'i-i-s-i-n-v2-портф-ц-б-e': IISINV2ПортфЦБEForm,
    'i-i-s-i-n-v2-реестр-ак-e': IISINV2РеестрАкEForm,
    'i-i-s-i-n-v2-сотрудн-e': IISINV2СотруднEForm,
    'i-i-s-i-n-v2-т-ч-выпл-e': IISINV2ТЧ_выплEForm,
    'i-i-s-i-n-v2-тип-акц-e': IISINV2ТипАкцEForm,
    'i-i-s-i-n-v2-тч-портф-e': IISINV2Тч_ПортфEForm,
    'i-i-s-i-n-v2-тч-реес-e': IISINV2Тч_реесEForm,
    'i-i-s-i-n-v2-упр-о-бъек-e': IISINV2УпрОБъекEForm
  },

});

export default translations;
