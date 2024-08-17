<template>
  <div class="container my-4">
    <h1 class="text-left mb-5">Components</h1>

    <!-- Nav Tabs -->
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="buttons-tab" data-toggle="tab" href="#buttons" role="tab" aria-controls="buttons" aria-selected="true">Buttons</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="forms-tab" data-toggle="tab" href="#forms" role="tab" aria-controls="forms" aria-selected="false">Forms</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="cards-tab" data-toggle="tab" href="#cards" role="tab" aria-controls="cards" aria-selected="false">Cards</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="modals-tab" data-toggle="tab" href="#modals" role="tab" aria-controls="modals" aria-selected="false">Modals</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="alerts-tab" data-toggle="tab" href="#alerts" role="tab" aria-controls="alerts" aria-selected="false">Alerts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="badges-tab" data-toggle="tab" href="#badges" role="tab" aria-controls="badges" aria-selected="false">Badges</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="tooltips-tab" data-toggle="tab" href="#tooltips" role="tab" aria-controls="tooltips" aria-selected="false">Tooltips</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="popovers-tab" data-toggle="tab" href="#popovers" role="tab" aria-controls="popovers" aria-selected="false">Popovers</a>
      </li>
    </ul>

    <!-- Tab Content -->
    <div class="tab-content" id="myTabContent">
      <!-- Buttons Tab -->
      <div class="tab-pane fade show active" id="buttons" role="tabpanel" aria-labelledby="buttons-tab">
        <h2 class="mt-5">Buttons</h2>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>

        <h2 class="mt-3">Buttons - Outline</h2>
        <button type="button" class="btn btn-outline-primary">Primary</button>
        <button type="button" class="btn btn-outline-secondary">Secondary</button>
        <button type="button" class="btn btn-outline-success">Success</button>
        <button type="button" class="btn btn-outline-danger">Danger</button>
        <button type="button" class="btn btn-outline-warning">Warning</button>
        <button type="button" class="btn btn-outline-info">Info</button>
        <button type="button" class="btn btn-outline-light">Light</button>
        <button type="button" class="btn btn-outline-dark">Dark</button>
      </div>

      <!-- Forms Tab -->
      <div class="tab-pane fade" id="forms" role="tabpanel" aria-labelledby="forms-tab">
        <h2 class="mt-5">Forms</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
            <small class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-group form-check">
            <input v-model="checked" type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>

      <!-- Cards Tab -->
      <div class="tab-pane fade" id="cards" role="tabpanel" aria-labelledby="cards-tab">
        <h2 class="mt-5">Cards</h2>
        <div class="card" style="width: 18rem;">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="Card image">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <h2 class="mt-5">Collapsible Cards</h2>
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseExample">
                Click to Toggle Collapse
              </button>
            </h5>
          </div>
          <div id="collapseExample" class="collapse">
            <div class="card-body">
              This content is hidden in a collapsible card. Click the button above to toggle visibility.
            </div>
          </div>
        </div>
      </div>

      <!-- Modals Tab -->
      <div class="tab-pane fade" id="modals" role="tabpanel" aria-labelledby="modals-tab">
        <h2 class="mt-5">Modals</h2>
        <button type="button" class="btn btn-primary" @click="showModal = true">Launch demo modal</button>
        <div v-if="showModal" class="modal fade show d-block" tabindex="-1" role="dialog" style="background: rgba(0,0,0,0.5)">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="close" @click="showModal = false">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Woohoo, you're reading this text in a modal!
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="showModal = false">Close</button>
                <button type="button" class="btn btn-primary" @click="showModal = false">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Alerts Tab -->
      <div class="tab-pane fade" id="alerts" role="tabpanel" aria-labelledby="alerts-tab">
        <h2 class="mt-5">Alerts</h2>
        <div class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
        <div class="alert alert-secondary" role="alert">
          A simple secondary alert—check it out!
        </div>
      </div>

      <!-- Badges Tab -->
      <div class="tab-pane fade" id="badges" role="tabpanel" aria-labelledby="badges-tab">
        <h2 class="mt-5">Badges</h2>
        <button type="button" class="btn btn-primary">
          Notifications <span class="badge badge-light">4</span>
        </button>
      </div>

      <!-- Tooltips Tab -->
      <div class="tab-pane fade" id="tooltips" role="tabpanel" aria-labelledby="tooltips-tab">
        <h2 class="mt-5">Tooltips</h2>
        <button type="button" class="btn btn-secondary" ref="tooltipBtn">Hover me</button>
      </div>

      <!-- Popovers Tab -->
      <div class="tab-pane fade" id="popovers" role="tabpanel" aria-labelledby="popovers-tab">
        <h2 class="mt-5">Popovers</h2>
        <button type="button" class="btn btn-lg btn-danger" ref="popoverBtn">Click me for popover</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import $ from 'jquery';
import 'bootstrap';

// Form state
const email = ref('');
const password = ref('');
const checked = ref(false);

// Modal state
const showModal = ref(false);

// Tooltip and Popover References
const tooltipBtn = ref(null);
const popoverBtn = ref(null);

onMounted(() => {
  // Initialize tooltips and popovers
  $(tooltipBtn.value).tooltip({ title: 'This is a tooltip!', placement: 'top' });
  $(popoverBtn.value).popover({
    title: 'Popover Title',
    content: 'And here is some amazing content. It is very engaging. Right?',
    trigger: 'focus'
  });
});

const submitForm = () => {
  console.log("Email:", email.value);
  console.log("Password:", password.value);
};
</script>

<style>

.btn {
  margin-right: 0.2rem;
}
</style>
