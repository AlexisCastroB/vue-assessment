<template>
  <div class="not-found">
    <div class="container mt-4 mt-4 w-md-75 w-lg-50">
      <div class="row mb-3">
        <div class="col">
          <h1>404</h1>
          <h2>Sorry, the page you're looking for has gone.</h2>
          <p>Maybe the link is broken, maybe the page never existed...</p>
          <p>Why don't you make a new search?</p>
          <p class="text-center">
            <RouterLink class="text-dark"
            :to="{ name: 'Job Search' }">
              Go to Homepage
            </RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>