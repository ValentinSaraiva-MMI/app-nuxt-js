<template>
  <nav class="navbar">
    <div class="topnav">
      <div>
        <img src="public/image/logo.png" alt="logo de la page" />
      </div>
      <a href="#">Home</a>
      <a href="#">Menu</a>
      <a href="#">Service</a>
      <a href="#">Shop</a>
      <div class="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search" name="search" />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.topnav {
  overflow: hidden;
}

.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav img {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav .search-container {
  float: right;
}

.topnav input[type="text"] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.topnav .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav .search-container button:hover {
  background: #ccc;
}

@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a,
  .topnav input[type="text"],
  .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type="text"] {
    border: 1px solid #ccc;
  }
}
</style>

<script setup></script>
