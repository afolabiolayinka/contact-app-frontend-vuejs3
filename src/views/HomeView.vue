<script>
const API_URL = `http://45.56.71.218:8080/contacts`;

export default {
  data: () => ({
    contacts: null,
  }),

  created() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      const url = `${API_URL}`;
      this.contacts = await (await fetch(url)).json();
    },
    deleteData(id) {
      fetch(API_URL + "/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(function (response) {
        if (response.status != 200) {
        } else {
          alert("Done");
          window.location.reload();
        }
      });
    },
  },
};
</script>

<template>
  <div>
    <table class="table table-bordered table-striped" v-if="contacts.length">
      <thead>
        <tr>
          <td>First Name</td>
          <td>Middle Name</td>
          <td>Last Name</td>
          <td>Email</td>
          <td>Mobile Number</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{
            id,
            firstName,
            middleName,
            lastName,
            email,
            mobileNumber,
          } in contacts"
        >
          <td>{{ firstName }}</td>
          <td>{{ middleName }}</td>
          <td>{{ lastName }}</td>
          <td>{{ email }}</td>
          <td>{{ mobileNumber }}</td>
          <td class="text-center">
            <router-link
              :to="{ name: 'edit', params: { id: id } }"
              class="btn btn-sm btn-primary"
              >Edit</router-link>
            &nbsp;&nbsp;
            <button @click="deleteData(id)" class="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
