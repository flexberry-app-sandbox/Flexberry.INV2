import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.i-n-v2.caption'),
          title: i18n.t('forms.application.sitemap.i-n-v2.title'),
          children: [{
            link: 'i-i-s-i-n-v2-портф-ц-б-l',
            caption: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-портф-ц-б-l.caption'),
            title: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-портф-ц-б-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-i-n-v2-организация-l',
            caption: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-организация-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-i-n-v2-тч-портф-l',
            caption: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-тч-портф-l.caption'),
            title: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-тч-портф-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-i-n-v2-сотрудн-l',
            caption: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-сотрудн-l.caption'),
            title: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-сотрудн-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-i-n-v2-реестр-ак-l',
            caption: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-реестр-ак-l.caption'),
            title: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-реестр-ак-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-i-n-v2-т-ч-выпл-l',
            caption: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-т-ч-выпл-l.caption'),
            title: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-т-ч-выпл-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-i-n-v2-клиен-l',
            caption: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-клиен-l.caption'),
            title: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-клиен-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-i-n-v2-тч-реес-l',
            caption: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-тч-реес-l.caption'),
            title: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-тч-реес-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-i-n-v2-выплат-доход-l',
            caption: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-выплат-доход-l.caption'),
            title: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-выплат-доход-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-i-n-v2-должност-l',
            caption: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-должност-l.caption'),
            title: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-должност-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-i-n-v2-упр-о-бъек-l',
            caption: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-упр-о-бъек-l.caption'),
            title: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-упр-о-бъек-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-i-n-v2-инв-взн-l',
            caption: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-инв-взн-l.caption'),
            title: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-инв-взн-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-i-n-v2-тип-акц-l',
            caption: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-тип-акц-l.caption'),
            title: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-тип-акц-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-i-n-v2-договр-инв-l',
            caption: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-договр-инв-l.caption'),
            title: i18n.t('forms.application.sitemap.i-n-v2.i-i-s-i-n-v2-договр-инв-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})