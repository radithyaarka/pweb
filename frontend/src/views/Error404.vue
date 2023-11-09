<template>
  <div class="not-found">
    <h1 class="not-found-title">404 - Page Not Found</h1>
    <p class="not-found-text">The page you are looking for does not exist.</p>
    <a href="/" class="back-link">Go back to the homepage</a>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
/* Add your CSS styles for the 404 page here */
.not-found {
  text-align: center;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  background-color: #1F2937; /* Background color */
  color: #fff; /* Text color */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
}

.not-found-title {
  font-size: 48px;
  margin-bottom: 10px;
}

.not-found-text {
  font-size: 24px;
  margin-bottom: 20px;
}

.back-link {
  font-size: 18px;
  color: #fff;
  text-decoration: none;
  border: 2px solid #fff;
  padding: 10px 20px;
  border-radius: 30px;
  transition: background-color 0.3s, color 0.3s;
}

.back-link:hover {
  background-color: #fff;
  color: #f06292;
}
</style>
