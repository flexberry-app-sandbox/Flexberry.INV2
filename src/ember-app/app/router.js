import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-i-n-v2-выплат-доход-l');
  this.route('i-i-s-i-n-v2-выплат-доход-e',
  { path: 'i-i-s-i-n-v2-выплат-доход-e/:id' });
  this.route('i-i-s-i-n-v2-выплат-доход-e.new',
  { path: 'i-i-s-i-n-v2-выплат-доход-e/new' });
  this.route('i-i-s-i-n-v2-договр-инв-l');
  this.route('i-i-s-i-n-v2-договр-инв-e',
  { path: 'i-i-s-i-n-v2-договр-инв-e/:id' });
  this.route('i-i-s-i-n-v2-договр-инв-e.new',
  { path: 'i-i-s-i-n-v2-договр-инв-e/new' });
  this.route('i-i-s-i-n-v2-должност-l');
  this.route('i-i-s-i-n-v2-должност-e',
  { path: 'i-i-s-i-n-v2-должност-e/:id' });
  this.route('i-i-s-i-n-v2-должност-e.new',
  { path: 'i-i-s-i-n-v2-должност-e/new' });
  this.route('i-i-s-i-n-v2-инв-взн-l');
  this.route('i-i-s-i-n-v2-инв-взн-e',
  { path: 'i-i-s-i-n-v2-инв-взн-e/:id' });
  this.route('i-i-s-i-n-v2-инв-взн-e.new',
  { path: 'i-i-s-i-n-v2-инв-взн-e/new' });
  this.route('i-i-s-i-n-v2-клиен-l');
  this.route('i-i-s-i-n-v2-клиен-e',
  { path: 'i-i-s-i-n-v2-клиен-e/:id' });
  this.route('i-i-s-i-n-v2-клиен-e.new',
  { path: 'i-i-s-i-n-v2-клиен-e/new' });
  this.route('i-i-s-i-n-v2-организация-l');
  this.route('i-i-s-i-n-v2-организация-e',
  { path: 'i-i-s-i-n-v2-организация-e/:id' });
  this.route('i-i-s-i-n-v2-организация-e.new',
  { path: 'i-i-s-i-n-v2-организация-e/new' });
  this.route('i-i-s-i-n-v2-портф-ц-б-l');
  this.route('i-i-s-i-n-v2-портф-ц-б-e',
  { path: 'i-i-s-i-n-v2-портф-ц-б-e/:id' });
  this.route('i-i-s-i-n-v2-портф-ц-б-e.new',
  { path: 'i-i-s-i-n-v2-портф-ц-б-e/new' });
  this.route('i-i-s-i-n-v2-реестр-ак-l');
  this.route('i-i-s-i-n-v2-реестр-ак-e',
  { path: 'i-i-s-i-n-v2-реестр-ак-e/:id' });
  this.route('i-i-s-i-n-v2-реестр-ак-e.new',
  { path: 'i-i-s-i-n-v2-реестр-ак-e/new' });
  this.route('i-i-s-i-n-v2-сотрудн-l');
  this.route('i-i-s-i-n-v2-сотрудн-e',
  { path: 'i-i-s-i-n-v2-сотрудн-e/:id' });
  this.route('i-i-s-i-n-v2-сотрудн-e.new',
  { path: 'i-i-s-i-n-v2-сотрудн-e/new' });
  this.route('i-i-s-i-n-v2-т-ч-выпл-l');
  this.route('i-i-s-i-n-v2-т-ч-выпл-e',
  { path: 'i-i-s-i-n-v2-т-ч-выпл-e/:id' });
  this.route('i-i-s-i-n-v2-т-ч-выпл-e.new',
  { path: 'i-i-s-i-n-v2-т-ч-выпл-e/new' });
  this.route('i-i-s-i-n-v2-тип-акц-l');
  this.route('i-i-s-i-n-v2-тип-акц-e',
  { path: 'i-i-s-i-n-v2-тип-акц-e/:id' });
  this.route('i-i-s-i-n-v2-тип-акц-e.new',
  { path: 'i-i-s-i-n-v2-тип-акц-e/new' });
  this.route('i-i-s-i-n-v2-тч-портф-l');
  this.route('i-i-s-i-n-v2-тч-портф-e',
  { path: 'i-i-s-i-n-v2-тч-портф-e/:id' });
  this.route('i-i-s-i-n-v2-тч-портф-e.new',
  { path: 'i-i-s-i-n-v2-тч-портф-e/new' });
  this.route('i-i-s-i-n-v2-тч-реес-l');
  this.route('i-i-s-i-n-v2-тч-реес-e',
  { path: 'i-i-s-i-n-v2-тч-реес-e/:id' });
  this.route('i-i-s-i-n-v2-тч-реес-e.new',
  { path: 'i-i-s-i-n-v2-тч-реес-e/new' });
  this.route('i-i-s-i-n-v2-упр-о-бъек-l');
  this.route('i-i-s-i-n-v2-упр-о-бъек-e',
  { path: 'i-i-s-i-n-v2-упр-о-бъек-e/:id' });
  this.route('i-i-s-i-n-v2-упр-о-бъек-e.new',
  { path: 'i-i-s-i-n-v2-упр-о-бъек-e/new' });
});

export default Router;
