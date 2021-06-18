<template>
  <!-- <header> -->

    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <!-- Sidebar - Brand -->
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">{{Prof}}</div>
        <!-- {{profName}} -->
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <a class="nav-link" href="index.html">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Mon Profile</span></a
        >
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Heading -->
      <div class="sidebar-heading">Action</div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fas fa-fw fa-book-open"></i>
          <span>Modules</span>
        </a>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <a class="collapse-item" href="modules.html">Java</a>
            <a class="collapse-item" href="modules.html">Web dev</a>
            <a class="collapse-item" href="modules.html">UML</a>
            <a class="collapse-item" href="modules.html">Theorie des graphes</a>
            <a class="collapse-item" href="modules.html">statistique</a>
            <a class="collapse-item" href="modules.html"
              >compta et management</a
            >
            <!-- utiliser v-for ici {{module}} -->
          </div>
        </div>
      </li>

      <!-- Nav Items-->

      <li class="nav-item active">
        <a class="nav-link" href="PFE.html">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>PFE</span>
        </a>
      </li>

      <li class="nav-item active">
        <a class="nav-link" href="emploi.html">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Emploi de temps</span>
        </a>
      </li>

      <li class="nav-item active">
        <a class="nav-link" href="notes.html">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Notes des Etudiants</span>
        </a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>

  <!-- </header> -->
</template>

<script>

export default {
  data(){
    return {
      prof:'Pr.Laachak Lotfi'
    }
  }
}
</script>

<style>

</style>

