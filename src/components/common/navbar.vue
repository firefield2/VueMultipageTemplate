<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a href="/index.html" class="navbar-brand">Index</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="/test.html" class="nav-link">Test</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style lang="scss">
  @import "~bootstrap/dist/css/bootstrap.min";
</style>
