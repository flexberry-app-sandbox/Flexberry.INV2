'use strict';

define('ember-app/tests/acceptance/flexberry/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s i n v2 выплат доход l');

  (0, _qunit.test)('testing i-i-s-i-n-v2-выплат-доход-l', function (assert) {
    var _this = this;

    visit('/i-i-s-i-n-v2-выплат-доход-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s i n v2 договр инв l');

  (0, _qunit.test)('testing i-i-s-i-n-v2-договр-инв-l', function (assert) {
    var _this = this;

    visit('/i-i-s-i-n-v2-договр-инв-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s i n v2 должност l');

  (0, _qunit.test)('testing i-i-s-i-n-v2-должност-l', function (assert) {
    var _this = this;

    visit('/i-i-s-i-n-v2-должност-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s i n v2 инв взн l');

  (0, _qunit.test)('testing i-i-s-i-n-v2-инв-взн-l', function (assert) {
    var _this = this;

    visit('/i-i-s-i-n-v2-инв-взн-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s i n v2 клиен l');

  (0, _qunit.test)('testing i-i-s-i-n-v2-клиен-l', function (assert) {
    var _this = this;

    visit('/i-i-s-i-n-v2-клиен-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s i n v2 организация l');

  (0, _qunit.test)('testing i-i-s-i-n-v2-организация-l', function (assert) {
    var _this = this;

    visit('/i-i-s-i-n-v2-организация-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s i n v2 портф ц б l');

  (0, _qunit.test)('testing i-i-s-i-n-v2-портф-ц-б-l', function (assert) {
    var _this = this;

    visit('/i-i-s-i-n-v2-портф-ц-б-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s i n v2 реестр ак l');

  (0, _qunit.test)('testing i-i-s-i-n-v2-реестр-ак-l', function (assert) {
    var _this = this;

    visit('/i-i-s-i-n-v2-реестр-ак-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s i n v2 сотрудн l');

  (0, _qunit.test)('testing i-i-s-i-n-v2-сотрудн-l', function (assert) {
    var _this = this;

    visit('/i-i-s-i-n-v2-сотрудн-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s i n v2 т ч выпл l');

  (0, _qunit.test)('testing i-i-s-i-n-v2-т-ч-выпл-l', function (assert) {
    var _this = this;

    visit('/i-i-s-i-n-v2-т-ч-выпл-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s i n v2 тип акц l');

  (0, _qunit.test)('testing i-i-s-i-n-v2-тип-акц-l', function (assert) {
    var _this = this;

    visit('/i-i-s-i-n-v2-тип-акц-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s i n v2 тч портф l');

  (0, _qunit.test)('testing i-i-s-i-n-v2-тч-портф-l', function (assert) {
    var _this = this;

    visit('/i-i-s-i-n-v2-тч-портф-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s i n v2 тч реес l');

  (0, _qunit.test)('testing i-i-s-i-n-v2-тч-реес-l', function (assert) {
    var _this = this;

    visit('/i-i-s-i-n-v2-тч-реес-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s i n v2 упр о бъек l');

  (0, _qunit.test)('testing i-i-s-i-n-v2-упр-о-бъек-l', function (assert) {
    var _this = this;

    visit('/i-i-s-i-n-v2-упр-о-бъек-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/flexberry/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-выплат-доход-e', 'Unit | Controller | i-i-s-i-n-v2-выплат-доход-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-выплат-доход-l', 'Unit | Controller | i-i-s-i-n-v2-выплат-доход-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-договр-инв-e', 'Unit | Controller | i-i-s-i-n-v2-договр-инв-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-договр-инв-l', 'Unit | Controller | i-i-s-i-n-v2-договр-инв-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-должност-e', 'Unit | Controller | i-i-s-i-n-v2-должност-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-должност-l', 'Unit | Controller | i-i-s-i-n-v2-должност-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-инв-взн-e', 'Unit | Controller | i-i-s-i-n-v2-инв-взн-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-инв-взн-l', 'Unit | Controller | i-i-s-i-n-v2-инв-взн-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-клиен-e', 'Unit | Controller | i-i-s-i-n-v2-клиен-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-клиен-l', 'Unit | Controller | i-i-s-i-n-v2-клиен-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-организация-e', 'Unit | Controller | i-i-s-i-n-v2-организация-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-организация-l', 'Unit | Controller | i-i-s-i-n-v2-организация-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-портф-ц-б-e', 'Unit | Controller | i-i-s-i-n-v2-портф-ц-б-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-портф-ц-б-l', 'Unit | Controller | i-i-s-i-n-v2-портф-ц-б-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-реестр-ак-e', 'Unit | Controller | i-i-s-i-n-v2-реестр-ак-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-реестр-ак-l', 'Unit | Controller | i-i-s-i-n-v2-реестр-ак-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-сотрудн-e', 'Unit | Controller | i-i-s-i-n-v2-сотрудн-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-сотрудн-l', 'Unit | Controller | i-i-s-i-n-v2-сотрудн-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-т-ч-выпл-e', 'Unit | Controller | i-i-s-i-n-v2-т-ч-выпл-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-т-ч-выпл-l', 'Unit | Controller | i-i-s-i-n-v2-т-ч-выпл-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-тип-акц-e', 'Unit | Controller | i-i-s-i-n-v2-тип-акц-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-тип-акц-l', 'Unit | Controller | i-i-s-i-n-v2-тип-акц-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-тч-портф-e', 'Unit | Controller | i-i-s-i-n-v2-тч-портф-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-тч-портф-l', 'Unit | Controller | i-i-s-i-n-v2-тч-портф-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-тч-реес-e', 'Unit | Controller | i-i-s-i-n-v2-тч-реес-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-тч-реес-l', 'Unit | Controller | i-i-s-i-n-v2-тч-реес-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-упр-о-бъек-e', 'Unit | Controller | i-i-s-i-n-v2-упр-о-бъек-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-i-n-v2-упр-о-бъек-l', 'Unit | Controller | i-i-s-i-n-v2-упр-о-бъек-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-выплат-доход', 'Unit | Model | i-i-s-i-n-v2-выплат-доход', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-договр-инв', 'Unit | Model | i-i-s-i-n-v2-договр-инв', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-должност', 'Unit | Model | i-i-s-i-n-v2-должност', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-инв-взн', 'Unit | Model | i-i-s-i-n-v2-инв-взн', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-клиен', 'Unit | Model | i-i-s-i-n-v2-клиен', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-организация', 'Unit | Model | i-i-s-i-n-v2-организация', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-портф-ц-б', 'Unit | Model | i-i-s-i-n-v2-портф-ц-б', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-реестр-ак', 'Unit | Model | i-i-s-i-n-v2-реестр-ак', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-сотрудн', 'Unit | Model | i-i-s-i-n-v2-сотрудн', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-т-ч-выпл', 'Unit | Model | i-i-s-i-n-v2-т-ч-выпл', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-тип-акц', 'Unit | Model | i-i-s-i-n-v2-тип-акц', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-тч-портф', 'Unit | Model | i-i-s-i-n-v2-тч-портф', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-тч-реес', 'Unit | Model | i-i-s-i-n-v2-тч-реес', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-упр-о-бъек', 'Unit | Model | i-i-s-i-n-v2-упр-о-бъек', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-выплат-доход-e', 'Unit | Route | i-i-s-i-n-v2-выплат-доход-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-выплат-доход-l', 'Unit | Route | i-i-s-i-n-v2-выплат-доход-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-договр-инв-e', 'Unit | Route | i-i-s-i-n-v2-договр-инв-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-договр-инв-l', 'Unit | Route | i-i-s-i-n-v2-договр-инв-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-должност-e', 'Unit | Route | i-i-s-i-n-v2-должност-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-должност-l', 'Unit | Route | i-i-s-i-n-v2-должност-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-инв-взн-e', 'Unit | Route | i-i-s-i-n-v2-инв-взн-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-инв-взн-l', 'Unit | Route | i-i-s-i-n-v2-инв-взн-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-клиен-e', 'Unit | Route | i-i-s-i-n-v2-клиен-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-клиен-l', 'Unit | Route | i-i-s-i-n-v2-клиен-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-организация-e', 'Unit | Route | i-i-s-i-n-v2-организация-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-организация-l', 'Unit | Route | i-i-s-i-n-v2-организация-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-портф-ц-б-e', 'Unit | Route | i-i-s-i-n-v2-портф-ц-б-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-портф-ц-б-l', 'Unit | Route | i-i-s-i-n-v2-портф-ц-б-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-реестр-ак-e', 'Unit | Route | i-i-s-i-n-v2-реестр-ак-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-реестр-ак-l', 'Unit | Route | i-i-s-i-n-v2-реестр-ак-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-сотрудн-e', 'Unit | Route | i-i-s-i-n-v2-сотрудн-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-сотрудн-l', 'Unit | Route | i-i-s-i-n-v2-сотрудн-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-т-ч-выпл-e', 'Unit | Route | i-i-s-i-n-v2-т-ч-выпл-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-т-ч-выпл-l', 'Unit | Route | i-i-s-i-n-v2-т-ч-выпл-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-тип-акц-e', 'Unit | Route | i-i-s-i-n-v2-тип-акц-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-тип-акц-l', 'Unit | Route | i-i-s-i-n-v2-тип-акц-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-тч-портф-e', 'Unit | Route | i-i-s-i-n-v2-тч-портф-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-тч-портф-l', 'Unit | Route | i-i-s-i-n-v2-тч-портф-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-тч-реес-e', 'Unit | Route | i-i-s-i-n-v2-тч-реес-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-тч-реес-l', 'Unit | Route | i-i-s-i-n-v2-тч-реес-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-упр-о-бъек-e', 'Unit | Route | i-i-s-i-n-v2-упр-о-бъек-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-i-n-v2-упр-о-бъек-l', 'Unit | Route | i-i-s-i-n-v2-упр-о-бъек-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-i-n-v2-\u0432\u044B\u043F\u043B\u0430\u0442-\u0434\u043E\u0445\u043E\u0434-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-выплат-доход', 'Unit | Serializer | i-i-s-i-n-v2-выплат-доход', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-i-n-v2-выплат-доход', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-i-n-v2-\u0434\u043E\u0433\u043E\u0432\u0440-\u0438\u043D\u0432-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-договр-инв', 'Unit | Serializer | i-i-s-i-n-v2-договр-инв', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-i-n-v2-договр-инв', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-i-n-v2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-должност', 'Unit | Serializer | i-i-s-i-n-v2-должност', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-i-n-v2-должност', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-i-n-v2-\u0438\u043D\u0432-\u0432\u0437\u043D-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-инв-взн', 'Unit | Serializer | i-i-s-i-n-v2-инв-взн', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-i-n-v2-инв-взн', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-i-n-v2-\u043A\u043B\u0438\u0435\u043D-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-клиен', 'Unit | Serializer | i-i-s-i-n-v2-клиен', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-i-n-v2-клиен', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-i-n-v2-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-организация', 'Unit | Serializer | i-i-s-i-n-v2-организация', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-i-n-v2-организация', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-i-n-v2-\u043F\u043E\u0440\u0442\u0444-\u0446-\u0431-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-портф-ц-б', 'Unit | Serializer | i-i-s-i-n-v2-портф-ц-б', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-i-n-v2-портф-ц-б', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-i-n-v2-\u0440\u0435\u0435\u0441\u0442\u0440-\u0430\u043A-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-реестр-ак', 'Unit | Serializer | i-i-s-i-n-v2-реестр-ак', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-i-n-v2-реестр-ак', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-i-n-v2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-сотрудн', 'Unit | Serializer | i-i-s-i-n-v2-сотрудн', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-i-n-v2-сотрудн', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-i-n-v2-\u0442-\u0447-\u0432\u044B\u043F\u043B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-т-ч-выпл', 'Unit | Serializer | i-i-s-i-n-v2-т-ч-выпл', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-i-n-v2-т-ч-выпл', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-i-n-v2-\u0442\u0438\u043F-\u0430\u043A\u0446-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-тип-акц', 'Unit | Serializer | i-i-s-i-n-v2-тип-акц', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-i-n-v2-тип-акц', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-i-n-v2-\u0442\u0447-\u043F\u043E\u0440\u0442\u0444-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-тч-портф', 'Unit | Serializer | i-i-s-i-n-v2-тч-портф', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-i-n-v2-тч-портф', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-i-n-v2-\u0442\u0447-\u0440\u0435\u0435\u0441-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-тч-реес', 'Unit | Serializer | i-i-s-i-n-v2-тч-реес', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-i-n-v2-тч-реес', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-i-n-v2-\u0443\u043F\u0440-\u043E-\u0431\u044A\u0435\u043A-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-i-n-v2-упр-о-бъек', 'Unit | Serializer | i-i-s-i-n-v2-упр-о-бъек', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-i-n-v2-упр-о-бъек', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-i-n-v2-выплат-доход', 'model:i-i-s-i-n-v2-договр-инв', 'model:i-i-s-i-n-v2-должност', 'model:i-i-s-i-n-v2-инв-взн', 'model:i-i-s-i-n-v2-клиен', 'model:i-i-s-i-n-v2-организация', 'model:i-i-s-i-n-v2-портф-ц-б', 'model:i-i-s-i-n-v2-реестр-ак', 'model:i-i-s-i-n-v2-сотрудн', 'model:i-i-s-i-n-v2-т-ч-выпл', 'model:i-i-s-i-n-v2-тип-акц', 'model:i-i-s-i-n-v2-тч-портф', 'model:i-i-s-i-n-v2-тч-реес', 'model:i-i-s-i-n-v2-упр-о-бъек', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
