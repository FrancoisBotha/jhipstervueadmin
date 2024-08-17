<template>
  <div>
    <h1>Tabulator Tables</h1>

    <!-- Paginated Tables Example -->
    <h2>Paginated Tables Example</h2>
    <div ref="paginatedTable"></div>
    
    <!-- Fit Data Layout -->
    <h3>Fit Data Layout</h3>
    <div ref="fitDataTable"></div>

    <!-- Fit Columns Layout -->
    <h3>Fit Columns Layout</h3>
    <div ref="fitColumnsTable"></div>

    <!-- Fit Data and Fill Layout -->
    <h3>Fit Data and Fill Layout</h3>
    <div ref="fitDataFillTable"></div>

    <!-- Fit Data and Stretch Last Column Layout -->
    <h3>Fit Data and Stretch Last Column Layout</h3>
    <div ref="fitDataStretchTable"></div>

    <!-- Fit Table to Data Layout -->
    <h3>Fit Table to Data Layout</h3>
    <div ref="fitTableToDataTable"></div>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watchEffect } from 'vue';
import { TabulatorFull as Tabulator } from 'tabulator-tables';

// Table Data (Fruit Trees)
const tableData = [
  { id: 1, name: "Apple Tree", type: "Apple", height: 15, age: 5 },
  { id: 2, name: "Orange Tree", type: "Orange", height: 18, age: 8 },
  { id: 3, name: "Banana Tree", type: "Banana", height: 12, age: 4 },
  { id: 4, name: "Mango Tree", type: "Mango", height: 20, age: 10 },
  { id: 5, name: "Lemon Tree", type: "Lemon", height: 10, age: 6 },
  { id: 6, name: "Cherry Tree", type: "Cherry", height: 14, age: 7 },
  { id: 7, name: "Pear Tree", type: "Pear", height: 16, age: 9 },
  { id: 8, name: "Peach Tree", type: "Peach", height: 13, age: 6 },
  { id: 9, name: "Plum Tree", type: "Plum", height: 15, age: 7 },
  { id: 10, name: "Avocado Tree", type: "Avocado", height: 22, age: 11 }
];

// Column Definitions
const columns = [
  { title: "ID", field: "id", sorter: "number", width: 100 },
  { title: "Tree Name", field: "name", sorter: "string" },
  { title: "Fruit Type", field: "type", sorter: "string" },
  { title: "Height (ft)", field: "height", sorter: "number" },
  { title: "Age (years)", field: "age", sorter: "number" }
];

// Refs for each table
const fitDataTable = ref(null);
const fitColumnsTable = ref(null);
const fitDataFillTable = ref(null);
const fitDataStretchTable = ref(null);
const fitTableToDataTable = ref(null);
const paginatedTable = ref(null);

// Reactive state for pagination options
const pagination = ref(true);
const paginationSize = ref(5);

// Paginated Table Options
const paginatedTableOptions = reactive({
  pagination: pagination.value ? "local" : false,
  paginationSize: paginationSize.value,
  paginationSizeSelector: [5, 10, 15, 20],
});

// Initialize the layout tables
onMounted(() => {
  // Fit Data Layout
  new Tabulator(fitDataTable.value, {
    data: tableData,
    layout: "fitData",
    columns,
  });

  // Fit Columns Layout
  new Tabulator(fitColumnsTable.value, {
    data: tableData,
    layout: "fitColumns",
    columns,
  });

  // Fit Data and Fill Layout
  new Tabulator(fitDataFillTable.value, {
    data: tableData,
    layout: "fitDataFill",
    columns,
  });

  // Fit Data and Stretch Last Column Layout
  new Tabulator(fitDataStretchTable.value, {
    data: tableData,
    layout: "fitDataStretch",
    columns,
  });

  // Fit Table to Data Layout
  new Tabulator(fitTableToDataTable.value, {
    data: tableData,
    layout: "fitDataTable",
    columns,
  });

  // Initialize the paginated table
  updatePaginatedTable();
});

// Function to update the paginated table based on settings
function updatePaginatedTable() {
  if (paginatedTable.value) {
    // Destroy existing paginated table
    paginatedTable.value.tabulator?.destroy();
  }

  // Create a new paginated table with updated options
  paginatedTable.value.tabulator = new Tabulator(paginatedTable.value, {
    data: tableData,
    layout: "fitColumns",
    columns,
    pagination: pagination.value ? "local" : false,
    paginationSize: paginationSize.value,
    paginationSizeSelector: [5, 10, 15, 20],
  });
}
</script>

<style>

/* Adding some space between tables */
h3, h2 {
  margin-top: 2rem;
}

div[ref] {
  margin-bottom: 2rem;
}
</style>
