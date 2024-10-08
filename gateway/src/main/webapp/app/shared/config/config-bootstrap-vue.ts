import {
  BForm,
  BFormInput,
  BFormCheckbox,
  BFormGroup,
  BProgress,
  BProgressBar,
  BPagination,
  BButton,
  BNavbar,
  BNavbarNav,
  BNavbarBrand,
  BNavbarToggle,
  BNavItem,
  BNavItemDropdown,
  BCollapse,
  BBadge,
  BDropdown,
  BDropdownItem,
  BLink,
  BAlert,
  BModal,
  VBModal,
  BFormDatepicker,
  BInputGroup,
  BInputGroupPrepend,
  ToastPlugin,
  // jhcc-custom begin
  BImg,
  BNav,
  BSidebar,
  VBToggle,
  BFormSelect,
  BCard,
  BContainer,
  BRow,
  BCol,
  BTabs,
  BTab,
  BTooltip,
  BFormRadio,
  BFormRadioGroup,
  BTable
  // jhcc-custom end
} from 'bootstrap-vue';

export function initBootstrapVue(vue) {
  vue.use(ToastPlugin);

  vue.component('b-badge', BBadge);
  vue.component('b-dropdown', BDropdown);
  vue.component('b-dropdown-item', BDropdownItem);
  vue.component('b-link', BLink);
  vue.component('b-alert', BAlert);
  vue.component('b-button', BButton);
  vue.component('b-navbar', BNavbar);
  vue.component('b-navbar-nav', BNavbarNav);
  vue.component('b-navbar-brand', BNavbarBrand);
  vue.component('b-navbar-toggle', BNavbarToggle);
  vue.component('b-pagination', BPagination);
  vue.component('b-progress', BProgress);
  vue.component('b-progress-bar', BProgressBar);
  vue.component('b-form', BForm);
  vue.component('b-form-input', BFormInput);
  vue.component('b-form-group', BFormGroup);
  vue.component('b-form-checkbox', BFormCheckbox);
  vue.component('b-collapse', BCollapse);
  vue.component('b-nav-item', BNavItem);
  vue.component('b-nav-item-dropdown', BNavItemDropdown);
  vue.component('b-modal', BModal);
  vue.directive('b-modal', VBModal);
  vue.component('b-form-datepicker', BFormDatepicker);
  vue.component('b-input-group', BInputGroup);
  vue.component('b-input-group-prepend', BInputGroupPrepend);
  // jhcc-custom begin
  vue.component('b-button', BButton);
  vue.directive('bToggle', VBToggle);
  vue.component('b-sidebar', BSidebar);
  vue.component('b-img', BImg);
  vue.component('b-nav', BNav);
  vue.component('b-form-select', BFormSelect);
  vue.component('b-card', BCard);
  vue.component('b-row', BRow);
  vue.component('b-col', BCol);
  vue.component('b-tabs', BTabs);
  vue.component('b-tab', BTab);
  vue.component('b-container', BContainer);
  vue.component('b-tooltip', BTooltip);
  vue.component('b-form-radio', BFormRadio);
  vue.component('b-form-radio-group', BFormRadioGroup);
  vue.component('b-table', BTable);
  // jhcc-custom end
}
