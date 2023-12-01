import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({});

export let ValidationRules = {};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УпрОБъекE', 'i-i-s-i-n-v2-упр-о-бъек', {
    
  });

  modelClass.defineProjection('УпрОБъекL', 'i-i-s-i-n-v2-упр-о-бъек', {
    
  });
};
