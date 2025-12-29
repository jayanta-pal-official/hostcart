<script setup>

</script>
<template>
  <div class="home-page">
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-12">
          <div class="card shadow-sm">
            <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
              <h1 class="h3 mb-0"><i class="fa-solid fa-users me-2"></i>Dashboard - User Management</h1>
              <RouterLink to="/add" class="btn btn-light">
                <i class="fa-solid fa-plus me-1"></i>Add User
              </RouterLink>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <input type="text" v-model="searchTerm" @input="onSearch" class="form-control"
                  placeholder="Search users by name, email, or phone...">
                </input>
              </div>
              <div class="table-responsive">
                <table class="table table-hover table-striped">
                  <thead class="table-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col"><i class="fa-solid fa-user me-1"></i>Name</th>
                      <th scope="col"><i class="fa-solid fa-envelope me-1"></i>Email</th>
                      <th scope="col"><i class="fa-solid fa-phone me-1"></i>Phone</th>
                      <th scope="col"><i class="fa-solid fa-cogs me-1"></i>Action</th>
                    </tr>
                  </thead>
                  <tbody class="table-group-divider">
                    <tr v-for="(user, index) in users" :key="user.id" :class="{ 'fade-out': deletingId === user.id }">
                      <th scope="row">{{ (currentPage - 1) * 10 + index + 1 }}</th>
                      <td>{{ user.name }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.phone }}</td>
                      <td>
                        <RouterLink class="btn btn-outline-primary me-1"
                          :to="{ name: 'user-edit', params: { id: user.id } }">
                          <i class="fa-solid fa-edit"></i> Edit
                        </RouterLink>
                        <button class="btn btn-outline-danger" @click="deleteUser(user.id)">
                          <i class="fa-solid fa-trash"></i> Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- pagination -->
              <div v-if="totalPages > 1" class="pagination d-flex justify-content-center mt-4">
                <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1"
                  class="btn btn-outline-primary me-2" aria-label="Previous Page">
                  <i class="fa-solid fa-chevron-left"></i> Prev
                </button>
                <span v-for="page in visiblePages" :key="page" class="me-1">
                  <button @click="goToPage(page)"
                    :class="['btn', page === currentPage ? 'btn-primary' : 'btn-outline-primary']">{{ page }}</button>
                </span>
                <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages"
                  class="btn btn-outline-primary ms-2" aria-label="Next Page">
                  Next <i class="fa-solid fa-chevron-right"></i>
                </button>
              </div>
              <!-- pagination -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { RouterLink } from "vue-router";
import api from "@/services/api";
import { toast } from 'vue3-toastify' ;
import 'vue-awesome-paginate/dist/style.css';

const users = ref([]);
const deletingId = ref(null);
const searchTerm = ref('');
const debounceTimeout = ref(null);
onMounted(async () => {
  await fetchUsers();
 
});
const onSearch = () => {
  if (debounceTimeout.value) {
    clearTimeout(debounceTimeout.value);
  }
  debounceTimeout.value = setTimeout(() => {
    currentPage.value = 1;
    fetchUsers();
  }, 300); // 300ms delay
};
const currentPage = ref(1);
const total_items = ref(0);

const totalPages = computed(() => Math.ceil(total_items.value / 10));

const visiblePages = computed(() => {
  const pages = [];
  const maxVisible = 5;
  let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2));
  let end = Math.min(totalPages.value, start + maxVisible - 1);
  start = Math.max(1, end - maxVisible + 1);
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
});

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    fetchUsers(page);
  }
};
const fetchUsers = async (page = 1) => {
  currentPage.value = page;
  let url = `allusers?page=${currentPage.value}`;
  if (searchTerm.value.trim()) {
    url += `&search=${encodeURIComponent(searchTerm.value.trim())}`;
  }
  try{
    const response = await api.get(url);
    users.value = response.data.users;
    total_items.value = response.data.total;
  }catch(error){
    console.error("Error fetching data:", error);
  } 
}

const deleteUser = async (id) => {
  const result = confirm("Are you sure you want to delete this user?");
  if (!result) {
    return; 
  }
   deletingId.value = id;
  try {
    const response = await api.delete(`users/${id}`);
        setTimeout(() => {
        users.value = users.value.filter(user => user.id !== id);
        deletingId.value = null;
      }, 500); // animation duration
    if (response.status === 200) {
        toast.success(response.data.message || "User deleted successfully!");  
         await fetchUsers(); 
       }

  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
</script>
<style scoped>
.home-page {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  font-size: 18px;
}

.card {
  border: none;
  border-radius: 10px;
}

.card-header {
  border-radius: 10px 10px 0 0 !important;
}

.table th {
  font-weight: 600;
  vertical-align: middle;
}

.table td {
  vertical-align: middle;
}

.fade-out {
  animation: fadeOut 0.4s ease forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: scale(1);
  }

  to {
    opacity: 0;
    transform: scale(0.95);
  }
}

.pagination .btn {
  margin: 0 2px;
  min-width: 50px;
  padding: 10px 15px;
}
</style>
