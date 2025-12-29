<template>
    <div class="container">
        <!-- CONTENT -->
        <div class="container-fluid px-4 py-4">
            <div class="row">

                <!-- SIDEBAR -->
                <div class="col-lg-3">
                    <div class="sidebar-box">
                        <h6>Your Info</h6>
                        <p class="small">
                            abcd<br>
                            {{ loggedInUser }}<br>
                            abcd<br>
                            Kolkata, West Bengal, 700102<br>
                            India
                        </p>
                        <button class="btn btn-sm btn-outline-primary">
                            <i class="fa fa-pen"></i> Update
                        </button>
                    </div>

                    <div class="sidebar-box">
                        <h6>Contacts</h6>
                        <p class="small text-muted">No Contacts Found</p>
                        <button class="btn btn-sm btn-outline-primary">
                            <i class="fa fa-plus"></i> New Contact
                        </button>
                    </div>

                    <div class="sidebar-box">
                        <h6>Shortcuts</h6>
                        <ul class="sidebar-links">
                            <li>Order New Services</li>
                            <li>Register a New Domain</li>
                            <li class="text-danger" @click="logout">Logout</li>
                        </ul>
                    </div>
                </div>

                <!-- MAIN AREA -->
                <div class="col-lg-9">

                    <!-- STAT CARDS -->
                    <div class="row g-3 mb-4">

                        <div class="col-md-4">
                            <RouterLink to="/services">
                                <div class="stat-card">
                                    <div class="icon bg-danger-subtle text-danger">
                                        <i class="fa fa-cube"></i>
                                    </div>
                                    <h2 class="text-danger">0</h2>
                                    <span class="text-dark">SERVICES</span>
                                </div>
                            </RouterLink>
                        </div>

                        <!-- <div class="col-md-3">
                    <div class="stat-card">
                        <div class="icon bg-primary-subtle text-primary">
                            <i class="fa fa-globe"></i>
                        </div>
                        <h2>0</h2>
                        <span>DOMAINS</span>
                    </div>
                </div> -->

                        <div class="col-md-4">
                            <RouterLink to="/tickets">
                                <div class="stat-card">
                                    <div class="icon bg-success-subtle text-success">
                                        <i class="fa fa-comments"></i>
                                    </div>
                                    <h2 class="text-success">0</h2>
                                    <span class="text-dark">TICKETS</span>
                                </div>
                            </RouterLink>
                        </div>

                        <div class="col-md-4">
                            <RouterLink to="/invoices">

                                <div class="stat-card">
                                    <div class="icon bg-warning-subtle text-warning">
                                        <i class="fa fa-file-invoice"></i>
                                    </div>
                                    <h2 class="text-warning">0</h2>
                                    <span class="text-dark">INVOICES</span>
                                </div>
                            </RouterLink>
                        </div>
                    </div>

                    <!-- ACTIVE SERVICES -->
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between">
                            <span><i class="fa fa-cube fs-6 px-1"></i><strong> Your Active
                                    Products/Services</strong></span>
                            <a href="#">My Services</a>
                        </div>
                        <div class="card-body">
                            It appears you do not have any products/services yet.
                            <a href="#">Place an order to get started</a>
                        </div>
                    </div>

                    <div class="row g-3">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header d-flex justify-content-between">
                                    <span><i class="fa fa-comments fs-6 px-1"></i><strong> Recent Support
                                            Tickets</strong></span>
                                    <button class="btn btn-success btn-sm">Open New Ticket</button>
                                </div>
                                <div class="card-body">
                                    No Recent Tickets Found. Please <a href="#">open a ticket</a>.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header d-flex justify-content-between">
                                    <span><i class="fa fa-newspaper fs-6 px-1"></i><strong> Recent News</strong></span>
                                    <button class="btn btn-primary btn-sm">View All</button>
                                </div>
                                <div class="card-body">
                                    No Recent News Found.
                                </div>
                            </div>
                        </div>

                        <!-- <div class="col-md-6">
                    <div class="domain-box">
                        <h5><i class="fa fa-globe"></i> Register a New Domain</h5>
                        <input type="text" class="form-control my-3" placeholder="example.com">
                        <button class="btn btn-outline-light me-2">Register</button>
                        <button class="btn btn-success">Transfer</button>
                    </div>
                </div> -->
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    background: #e9eef3;
    font-size: 14px;
}

.menu-bar {
    background: #fff;
    border-bottom: 1px solid #ddd;
}

.menu-bar .nav-link {
    color: #333;
    font-weight: 500;
    padding: 15px;
}

.menu-bar .nav-link.active {
    border-bottom: 3px solid #0d6efd;
}

.sidebar-box {
    background: #fff;
    padding: 15px;
    border-radius: 4px;
    margin-bottom: 15px;
}

.sidebar-box h6 {
    font-weight: 600;
    margin-bottom: 10px;
}

.sidebar-links {
    list-style: none;
    padding: 0;
}

.sidebar-links li {
    padding: 5px 0;
    cursor: pointer;
}

.stat-card {
    background: #fff;
    text-align: center;
    padding: 20px;
    border-radius: 6px;
}

.stat-card .icon {
    width: 40px;
    height: 40px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin:0 auto 10px; */
    font-size: 18px;
}

.stat-card h2 {
    font-size: 36px;
    margin: 0;
}

.stat-card span {
    font-size: 13px;
    letter-spacing: 1px;
}

.domain-box {
    background: #0b4ea2;
    color: #fff;
    padding: 20px;
    border-radius: 6px;
}
</style>
<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";

import { toast } from 'vue3-toastify';
import { useAuthStore } from "@/services/store/auth.js";


// const authstore = useAuthStore();
const router = useRouter();
const loggedInUser = ref({});
onMounted(async () => {
  const logoutStore = useAuthStore();
//   console.log("User Details:", logoutStore.userDetails.name);
    loggedInUser.value = logoutStore.userDetails.name;
});
const logout = async () => {
    // await api.post('/logout');
    const logoutStore = useAuthStore();
    logoutStore.removeUser();

    router.replace('/');
    toast.success("Logout successfully!");

}
</script>