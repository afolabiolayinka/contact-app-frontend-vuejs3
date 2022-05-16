<script>
const API_URL = `http://45.56.71.218:8080/contacts`;
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      middleName: "",
      email: "",
      mobileNumber: "",
    };
  },
  methods: {
    doSave() {
      //alert(this.firstName);

      fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          middleName: this.middleName,
          email: this.email,
          mobileNumber: this.mobileNumber,
        }),
      }).then(function (response) {
        if (response.status != 200) {
        } else {
          alert("Saved");
          this.firstName = "";
          this.lastName = "";
          this.middleName = "";
          this.email = "";
          this.mobileNumber = "";
        }
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <input
          type="text"
          class="form-control"
          v-model="firstName"
          placeholder="First name"
        />
      </div>
      <div class="col-md-6">
        <input
          type="text"
          class="form-control"
          v-model="lastName"
          placeholder="Last name"
        />
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-md-6">
        <input
          type="text"
          class="form-control"
          v-model="middleName"
          placeholder="Middle name"
        />
      </div>
      <div class="col-md-6"></div>
    </div>
    <br />
    <div class="row">
      <div class="col-md-6">
        <input
          type="text"
          class="form-control"
          v-model="email"
          placeholder="Email Address"
        />
      </div>
      <div class="col-md-6">
        <input
          type="text"
          class="form-control"
          v-model="mobileNumber"
          placeholder="Mobile Number"
        />
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-md-6">
        <button @click="doSave" class="btn btn-primary">Save</button>
      </div>
      <div class="col-md-6"></div>
    </div>
  </div>
</template>

<style>
</style>
