// Pathify
import { make } from 'vuex-pathify';
import { AppState } from './types';
import { RootState } from '../types';
import { Module } from 'vuex';
import { createAjv } from '../validate/validate';

const ajv = createAjv();

// Data
const state: AppState = {
  drawer: null,
  settings: null,
  jsonforms: {
    readonly: false,
    validationMode: 'ValidateAndShow',
    config: {
      restrict: true,
      trim: false,
      showUnfocusedDescription: false,
      hideRequiredAsterisk: true,
      collapseNewItems: false,
      breakHorizontal: false,
      initCollapsed: false,
      hideAvatar: false,
      hideArraySummaryValidation: false,
    },
    locale: 'en',
  },
  monaco: {
    schemaModel: undefined,
    uischemaModel: undefined,
    dataModel: undefined,
  },
};

const mutations = make.mutations(state);

const actions = make.actions(state);

const getters = {};

const app: Module<AppState, RootState> = {
  namespaced: true,
  state: () => state,
  mutations,
  actions,
  getters,
};

export default app;
