<script setup>
import { RouterLink, RouterView } from "vue-router";
//importing bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Contact App</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/new">Create New</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
    <br />
    <br />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>