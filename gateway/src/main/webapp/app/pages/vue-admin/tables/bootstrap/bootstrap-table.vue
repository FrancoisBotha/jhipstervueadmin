<template>
  <div>
    <h1>Bootstrap Tables</h1>

    <!-- Table Options Section -->
    <div class="form-group row">
      <label class="col-lg-2 col-form-label">Table Options</label>
      <div class="col-lg-10">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" v-model="striped" id="striped">
          <label class="form-check-label" for="striped">Striped</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" v-model="bordered" id="bordered">
          <label class="form-check-label" for="bordered">Bordered</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" v-model="borderless" id="borderless">
          <label class="form-check-label" for="borderless">Borderless</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" v-model="small" id="small">
          <label class="form-check-label" for="small">Small</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" v-model="hover" id="hover">
          <label class="form-check-label" for="hover">Hover</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" v-model="dark" id="dark">
          <label class="form-check-label" for="dark">Dark</label>
        </div>
      </div>
    </div>

    <!-- Head Variant Section -->
    <div class="form-group row">
      <label class="col-lg-2 col-form-label">Head Variant</label>
      <div class="col-lg-10 mt-lg-2">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" v-model="headVariant" :value="null" id="head-none">
          <label class="form-check-label" for="head-none">None</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" v-model="headVariant" value="light" id="head-light">
          <label class="form-check-label" for="head-light">Light</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" v-model="headVariant" value="dark" id="head-dark">
          <label class="form-check-label" for="head-dark">Dark</label>
        </div>
      </div>
    </div>

    <!-- Table Variant Section -->
    <div class="form-group row">
      <label class="col-lg-2 col-form-label" for="table-style-variant">Table Variant</label>
      <div class="col-lg-10">
        <select class="form-control" id="table-style-variant" v-model="tableVariant">
          <option value="">-- None --</option>
          <option v-for="variant in tableVariants" :key="variant" :value="variant">{{ variant }}</option>
        </select>
      </div>
    </div>

    <!-- Table -->
    <table
      class="table"
      :class="[
        striped ? 'table-striped' : '',
        bordered ? 'table-bordered' : '',
        borderless ? 'table-borderless' : '',
        outlined ? 'table-outline' : '',
        small ? 'table-sm' : '',
        hover ? 'table-hover' : '',
        dark ? 'table-dark' : '',
        tableVariant ? 'table-' + tableVariant : ''
      ]"
    >
      <thead :class="headVariant ? 'thead-' + headVariant : ''">
        <tr>
          <th v-for="field in fields" :key="field">{{ field }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.first_name + item.last_name">
          <td>{{ item.first_name }}</td>
          <td>{{ item.last_name }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ['First Name', 'Last Name', 'Age'],
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 34, first_name: 'George', last_name: 'Smith' },
        { age: 28, first_name: 'Alice', last_name: 'Johnson' },
        { age: 55, first_name: 'Emma', last_name: 'Brown' },
        { age: 63, first_name: 'Michael', last_name: 'Jones' },
        { age: 47, first_name: 'Sarah', last_name: 'Williams' },
        { age: 30, first_name: 'Chris', last_name: 'Taylor' },
        { age: 72, first_name: 'Patricia', last_name: 'Davis' }
      ],
      tableVariants: [
        'primary', 'secondary', 'info', 'danger', 'warning', 'success', 'light', 'dark'
      ],
      striped: true,
      bordered: true,
      borderless: false,
      small: false,
      hover: true,
      dark: false,
      fixed: false,
      headVariant: 'dark',
      tableVariant: ''
    };
  }
};
</script>
