import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-i-n-v2-портф-ц-б', 'Unit | Model | i-i-s-i-n-v2-портф-ц-б', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-i-n-v2-выплат-доход',
    'model:i-i-s-i-n-v2-договр-инв',
    'model:i-i-s-i-n-v2-должност',
    'model:i-i-s-i-n-v2-инв-взн',
    'model:i-i-s-i-n-v2-клиен',
    'model:i-i-s-i-n-v2-организация',
    'model:i-i-s-i-n-v2-портф-ц-б',
    'model:i-i-s-i-n-v2-реестр-ак',
    'model:i-i-s-i-n-v2-сотрудн',
    'model:i-i-s-i-n-v2-т-ч-выпл',
    'model:i-i-s-i-n-v2-тип-акц',
    'model:i-i-s-i-n-v2-тч-портф',
    'model:i-i-s-i-n-v2-тч-реес',
    'model:i-i-s-i-n-v2-упр-о-бъек',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
