// TODO on pre save mongo commit to git
// or commit to git which then saves to mongo
// on merge pr save to mongo
// or simply introduce some replication
import Ember from 'ember';
// TODO maybe we do not need relative paths ?
import sessionControllerMixin from '../../mixins/session-mixin';

const { Controller, computed } = Ember;

export default Controller.extend(sessionControllerMixin);
