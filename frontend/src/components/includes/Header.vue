<template>
    <!-- Header Start-->
    <header class="sticky_header">


        <div class="top_header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-10">
                        <p class="location">
                            <i class="fa-solid fa-location-dot"></i>
                            Location: Purba Burdwan, West Bengal, India
                        </p>
                    </div>
                    <div class="col-lg-6 col-2">
                        <select class="form-select language" aria-label="Default select example">
                            <option selected>Eng</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom_header">
            <div class="container">
                <div class="lg_menu nav_section">
                    <div class="logo_section">
                        <RouterLink to="/" class="h_logo">
                            <img src="@/assets/image/hostcart.png" alt="logo" />
                        </RouterLink>
                    </div>
                    
                    <div class="menu">
                        <ul>
                            <li class="nave_item active">
                                <RouterLink to="/" class="nave_link">Home</RouterLink>
                            </li>
                            <li class="nave_item">
                                <RouterLink to="/plans" class="nave_link">Plans</RouterLink>
                            </li>
                            <li class="nave_item">
                                <RouterLink to="/billing" class="nave_link">Billing</RouterLink>
                            </li>
                            <li class="nave_item">
                                <RouterLink to="/support" class="nave_link">Support</RouterLink>
                            </li>
                        </ul>
                    </div>

                    <!-- <div class="logo_section">
                        <RouterLink to="/" class="h_logo">
                            <img src="@/assets/image/hostcart.png" alt="logo" />
                        </RouterLink>
                    </div> -->

                    <div class="right_section">
                        <a href="tel:965396795" class="h_call">
                            <i class="fa-solid fa-phone-volume"></i>
                            <span>7001516974</span>
                        </a>

                        <ul class="action_icon_list">
                            <li class="search_icon">
                                <i class="fa-solid fa-magnifying-glass"></i>

                                <form class="productSearchform">
                                    <div class="input-group">
                                        <input list="search_terms" type="text" class="form-control"
                                            placeholder="Search Products" />
                                    </div>
                                    <datalist id="search_terms">
                                        <option value="Products"></option>
                                        <option value="New orders"></option>
                                        <option value="Apple iphone"></option>
                                        <option value="Ahmed Hassan"></option>
                                    </datalist>
                                </form>
                            </li>

                            <li>
                                <!-- <RouterLink to="/wishlist"><i class="fa-regular fa-heart"></i></RouterLink> -->
                            </li>
                            <li class="bag card_icon px-4">
                                <RouterLink to="/dashboard">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    <!-- <span ></span> -->
                                    <!-- <span v-else>0</span> -->
                                </RouterLink>
                            </li>

                            <!-- <li class="auth_link"><a href="signUp.html" class="common-btn4">Sign Up</a></li> -->
                            <!-- <li class="dropdown nav-item user_info" v-if="status">

                                <div class="dropdown" @click="toggleDropdown">
                                    <RouterLink class="dropdown-toggle" to="/admin" role="button" id="dropdownMenuLink"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <img class="img-xs rounded-circle abc" src="@/assets/image/customer_1.png" 
                                            alt="User" />
                                    </RouterLink>

                                    <ul :class="[
                                        'dropdown-menu',
                                        'common-dropdown-menu',
                                        { show: isDropdownOpen },
                                    ]" aria-labelledby="dropdownMenuLink">
                                        <li>
                                            <RouterLink class="dropdown-item" to="/profile"><i
                                                    class="fa-solid fa-user"></i>Profile</ RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink class="dropdown-item" to="/wishlist"><i
                                                    class="fa-solid fa-bookmark"></i>Wish list</RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink class="dropdown-item" to="/order-history"><i
                                                    class="fa-solid fa-bag-shopping"></i>
                                                Order</RouterLink>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#"><i class="fa-solid fa-gear"></i>Account
                                                Settings</a>
                                        </li>


                                        <div class="dropdown-divider"></div>
                                        <button class="dropdown-item text-danger" href="#" ><i
                                                class="fa-solid fa-arrow-right-from-bracket"></i>Logout</button>
                                    </ul> 
                                </div>

                            </li> -->
                            <li class="dropdown nav-item user_info" v-if="status">

                                <div class="dropdown" @click="toggleDropdown">
                                     <img class="img-xs rounded-circle abc" src="@/assets/image/customer_1.png" 
                                            alt="User" />
                                    <!-- <RouterLink class="dropdown-toggle" to="/admin" role="button" id="dropdownMenuLink"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <img class="img-xs rounded-circle abc" src="@/assets/image/customer_1.png" 
                                            alt="User" />
                                    </RouterLink> -->

                                    <ul :class="[
                                        'dropdown-menu',
                                        'common-dropdown-menu',
                                        { show: isDropdownOpen },
                                    ]" aria-labelledby="dropdownMenuLink">
                                        <li>
                                            <RouterLink class="dropdown-item" to="/profile"><i
                                                    class="fa-solid fa-user"></i>Profile</ RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink class="dropdown-item" to="/wishlist"><i
                                                    class="fa-solid fa-bookmark"></i>Wish list</RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink class="dropdown-item" to="/order-history"><i
                                                    class="fa-solid fa-bag-shopping"></i>
                                                Order</RouterLink>
                                        </li>
                                        <!-- <li>
                                            <a class="dropdown-item" href="#"><i class="fa-solid fa-gear"></i>Account
                                                Settings</a>
                                        </li> -->


                                        <div class="dropdown-divider"></div>
                                        <button class="dropdown-item text-danger" href="#" @click="logout"><i
                                                class="fa-solid fa-arrow-right-from-bracket"></i>Logout</button>
                                    </ul>
                                </div>

                            </li>


                            <li class="auth_link" v-else>
                                <RouterLink to="/login" class="singin-btn"><span><i class="fa-solid fa-user"></i>
                                    </span class="singin-btn-text"> Client Login</RouterLink>
                            </li>

                            <div id="toggle" class="">
                                <div class="one"></div>
                                <div class="two"></div>
                                <div class="three"></div>
                            </div>
                            <!-- <li><i class="fa-regular fa-user"></i></li> -->
                        </ul>
                    </div>
                </div>

                <div class="mobile_menu menu" id="menu">
                    <ul>
                        <li class="nave_item">
                            <RouterLink to="/" class="nave_link">Home</RouterLink>
                        </li>
                        <li class="nave_item">
                            <RouterLink to="/shope" class="nave_link">Shope</RouterLink>
                        </li>
                        <li class="nave_item">
                            <a href="about.html" class="nave_link">About Us</a>
                        </li>
                        <li class="nave_item active">
                            <a href="contact.html" class="nave_link">Contect Us</a>
                        </li>
                    </ul>


                </div>
            </div>
        </div>

        <!-- <div class="card_right_main">
            <div class="top_boxes">
                <div class="head">
                    <h3>Shopping Card <span>(2)</span></h3>
                    <i class="fa-solid fa-xmark card_remove"></i>
                </div>

                <ul>
                    <li>
                        <div class="left">
                            <img src="@/assets/image/product/Image-6.png" alt="" />
                            <div class="content">
                                <h4>Fresh Indian Orange</h4>
                                <h5 class="quantity">12.00</h5>
                            </div>
                        </div>

                        <div class="right">
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                    </li>

                    <li>
                        <div class="left">
                            <img src="@/assets/image/product/Image-6.png" alt="" />
                            <div class="content">
                                <h4>Fresh Indian Orange</h4>
                                <h5 class="quantity">12.00</h5>
                            </div>
                        </div>

                        <div class="right">
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="bottom_boxes">
                <div class="head">
                    <h3>2 Product</h3>
                    <h4>$26.00</h4>
                </div>
                <a href="checkout.html" class="common-btn">Checkout</a>
                <a href="shoppinCart.html" class="common-btn">Go To Cart</a>
            </div>
        </div> -->
    </header>
    <!-- Header End-->
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { useAuthStore } from "@/services/store/auth.js";
import api from "@/services/api";
import { toast } from 'vue3-toastify' ;


const authstore = useAuthStore();
const router = useRouter();
// const status = true;
const status = computed(() => authstore.status);


const isDropdownOpen = ref(false);

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};




const logout = async () => {
    // await api.post('/logout');
    const logoutStore = useAuthStore();
    logoutStore.removeUser();

    router.replace('/');
        toast.success( "Logout successfully!");  
    
}

</script>

<style scoped>
.singin-btn {
    display: inline-block;
    padding: 10px 14px;
    background: linear-gradient(135deg, #007bff 0%, #6610f2 100%);
    color: white !important;
    text-decoration: none;
    border-radius: 25px;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
    font-size: 15px;
    /* margin-right: 5px; */
}

.singin-btn:hover {
    background: linear-gradient(135deg, #6610f2 0%, #007bff 100%);
    box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
    transform: translateY(-2px);
    color: white !important;
}

.singin-btn span {
    margin-right: 5px;
}
 .rounded-circle{
    width:40px;
    height:40px;
    margin-top: 15px;
 }
 .dropdown-menu li .dropdown-item{
    font-size:14px;
    color:#333;
 }  
 .dropdown-menu .dropdown-item {
    font-size:14px !important;
 }  
</style>