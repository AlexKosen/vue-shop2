<script>
export default {};
</script>

<template>
  <header class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <RouterLink class="navbar-brand" :to="{ name: 'home' }" 
                ><span> Timups </span></RouterLink>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <RouterLink class="nav-link" :to="{ name: 'home' }" 
                >Home</RouterLink>
              <!-- <a class="nav-link" href="index.html"
                >Home <span class="sr-only">(current)</span></a> -->
              
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" :to="{ name: 'watches' }" 
                >Watches</RouterLink>
              <!-- <a class="nav-link" href="watches.html"> Watches </a> -->
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" :to="{ name: 'about' }" 
                >About</RouterLink>
              <!-- <a class="nav-link" href="about.html"> About </a> -->
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" :to="{ name: 'contact' }" 
                >Contact Us</RouterLink>
              <!-- <a class="nav-link" href="contact.html">Contact Us</a> -->
            </li>
          </ul>
          <div class="user_option-box">
            <a href="">
              <i class="fa fa-user" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-cart-plus" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-search" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<style>

</style>
