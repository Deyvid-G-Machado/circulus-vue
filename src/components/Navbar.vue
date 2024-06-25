
<template>
<nav class="navbar navbar-expand-lg bg-info" >
    <div class="container-fluid">
      <img src="../assets/Logo_2.png"  class="navbar-brand" width="50px" alt="Logo da Circulos">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ps-5" id="navbarNav ">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link fw-bold pe-5 fs-5" :class="{'active': $route.name == 'home'}" aria-current="page" to="/">Início</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fw-bold pe-5 fs-5" :class="{'active': $route.name == 'temperatura'}" to="/temperatura"><img width="20px" src="../assets/temperature-three-quarters-solid.svg" alt="Icone temmperatura"> Temperatura</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fw-bold pe-5 fs-5" :class="{'active': $route.name == 'turbidez'}" to="/turbidez"><img width="30px" src="../assets/wave-svgrepo-com.svg" alt="Icone Turbidez"> Turbidez</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fw-bold pe-5 fs-5" :class="{'active': $route.name == 'ph'}" to="/ph"><img width="35px" src="../assets/ph.png" alt="Icone PH">  PH</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fw-bold pe-5 fs-5" :class="{'active': $route.name == 'nivel-agua'}" to="/nivel-agua"><img width="35px" src="../assets/water-level.png" alt="Icone Nivel da água"> Nivel da Agua</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

