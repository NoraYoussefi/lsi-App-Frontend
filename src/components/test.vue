<template>

<div id="test">

            <div id="wrapper">
                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    Sidebar - Brand
                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div class="sidebar-brand-icon rotate-n-15">
                            <i class="fas fa-laugh-wink"></i>
                        </div>
                        <div class="sidebar-brand-text mx-3">John nn Doe</div>
                    </a>

                    <hr class="sidebar-divider my-0">

                    <li class="nav-item active">
                        <a class="nav-link" href="index.html">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Mon Profile</span></a>
                    </li>

                    <hr class="sidebar-divider">

                    <div class="sidebar-heading">
                        Action
                    </div>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i class="fas fa-fw fa-book-open"></i>
                            <span>Modules</span>
                        </a>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="buttons.html">Java</a>
                                <a class="collapse-item" href="cards.html">Web dev</a>
                                <a class="collapse-item" href="cards.html">UML</a>
                                <a class="collapse-item" href="cards.html">Theorie des graphes</a>
                                <a class="collapse-item" href="cards.html">statistique</a>
                                <a class="collapse-item" href="cards.html">compta et management</a>

                                
                            </div>
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <i class="fas fa-fw fa-project-diagram"></i>
                            <span>PFE</span>
                        </a>
                    
                    </li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <i class="fas fa-fw fa-calendar-times"></i>
                            <span>Emploi de temps</span>
                        </a>

                    </li>
        


                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <i class="fas fa-fw fa-graduation-cap"></i>
                            <span>Notes</span>
                        </a>

                    </li>

                    <hr class="sidebar-divider">

                    <div class="sidebar-heading">
                        Addons
                    </div>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                            aria-expanded="true" aria-controls="collapsePages">
                            <i class="fas fa-fw fa-folder"></i>
                            <span>Pages</span>
                        </a>
                        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <h6 class="collapse-header">Login Screens:</h6>
                                <a class="collapse-item" href="login.html">Login</a>
                                <a class="collapse-item" href="register.html">Register</a>
                                <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                                <div class="collapse-divider"></div>
                                <h6 class="collapse-header">Other Pages:</h6>
                                <a class="collapse-item" href="404.html">404 Page</a>
                                <a class="collapse-item" href="blank.html">Blank Page</a>
                            </div>
                        </div>
                    </li>


                    <hr class="sidebar-divider d-none d-md-block">

                    <div class="text-center d-none d-md-inline">
                        <button class="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>

                

                </ul>

                <div id="content-wrapper" class="d-flex flex-column">

                    <div id="content">

                        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                                <i class="fa fa-bars"></i>
                            </button>


                            <ul class="navbar-nav ml-auto">

                                <li class="nav-item dropdown no-arrow d-sm-none">
                                    <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-search fa-fw"></i>
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown">
                                        <form class="form-inline mr-auto w-100 navbar-search">
                                            <div class="input-group">
                                                <input type="text" class="form-control bg-light border-0 small"
                                                    placeholder="Search for..." aria-label="Search"
                                                    aria-describedby="basic-addon2">
                                                <div class="input-group-append">
                                                    <button class="btn btn-primary" type="button">
                                                        <i class="fas fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>

                                <li class="nav-item dropdown no-arrow">
                                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">John Doe</span>
                                        <img class="img-profile rounded-circle"
                                            src="assets/img/undraw_profile.svg">
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown">
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Profile
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Settings
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Activity Log
                                        </a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
                                        </a>
                                    </div>
                                </li>

                            </ul>

                        </nav>

                        <div class="container-fluid">

                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 class="h3 mb-0 text-gray-800">Profile D'etudiant</h1>
                            
                            </div>

                            <div class="row">

                                <div class="col-xl-3 col-md-6 mb-4">
                                    <div class="card border-left-primary shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        <h5>
                                                            <a href=""> <strong>Consulter Modules</strong> </a>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="fas fa-book-open fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-md-6 mb-4">
                                    <div class="card border-left-success shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                        <h5>
                                                            <a id="card" href="">
                                                            <strong>Consulter PFE</strong> </a>
                                                        </h5></div>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="fas fa-project-diagram fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-md-6 mb-4">
                                    <div class="card border-left-info shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1"><h5>
                                                        <a href="">
                                                            <strong>Consulter Emploi</strong>
                                                        </a>
                                                    </h5>
                                                    </div>
                                            
                                                </div>
                                                <div class="col-auto">
                                                    <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-md-6 mb-4">
                                    <div class="card border-left-warning shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                        <h5>
                                                            <a id="card" href="">
                                                            <strong>
                                                                Consulter Notes
                                                            </strong> </a>
                                                        </h5></div>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="fas fa-user-graduate fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="row">

                                <div class=" col-12">
                                    <div class="card shadow mb-4">
                                        <div
                                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                            <h6 class="m-0 font-weight-bold text-primary">Emploi De Temps</h6>
                                            <div class="dropdown no-arrow">
                                                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                    aria-labelledby="dropdownMenuLink">
                                                    <div class="dropdown-header">Dropdown Header:</div>
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Card Body -->
                                        <div class="card-body">
                                            <div class="chart-area">
                                                <!-- <canvas id="myAreaChart"></canvas> -->
                                                <iframe src="https://calendar.google.com/calendar/embed?src=ahmed.mellouk%40etu.uae.ac.ma&ctz=Africa%2FCasablanca" style="width: 100%; height: 100%;"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            <!-- Content Row -->
                            <div class="row-cols-6" style="width: 100%;">

                                <!-- Content Column -->
                                <div class="col-lg-12">

                                    <!-- Project Card Example -->
                                    <div class="card shadow ">
                                        <div class="card-header py-3">
                                            <h6 class="m-0 font-weight-bold text-primary">Projet de Fin d'etude</h6>
                                        </div>
                                        <div class="card-body">
                                            <h4 class="small font-weight-bold">Sujet de PFE :<span
                                                    class="float-right" style="color: #36b9cc; font-size: 1.5em;" >Systeme de gestion des etudiant</span></h4>
                                            <br>
                                            <h4 class="small font-weight-bold">Professeur Encadrant :<span
                                                    class="float-right" style="color: #f6c23e; font-size: 1.5em;">Pr john wick</span></h4>
                                            <br>
                                            <h4 class="small font-weight-bold">Date Limite :<span
                                                    class="float-right" style="color: #5a5c69; font-size: 1.5em;">01/07/2021</span></h4>
                                        
                                        </div>
                                    </div>


                                </div>
                            </div>
                            
                            <div class="row-cols-6" style="width: 100%;">
                                <div class="col-lg-12" >

                                    <!-- Illustrations -->
                                    <div class="card shadow ">
                                        <div class="card-header py-3">
                                            <h6 class="m-0 font-weight-bold text-primary">Tache d'aujoudhui</h6>
                                        </div>
                                        <div class="card-body">
                                        
                                            <div class="list-group">
                                                <!-- <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active"> -->
                                                <div class="d-flex w-100 justify-content-between">
                                                    <h5 class="mb-1" style="color:#1cc88a;">Seance java</h5>
                                                    <small class="text-muted" style="color:#4e73df;">salle E17</small>
                                                    <small class="text-muted">12:00 PM</small>

                                                </div>
                                        
                                                <!-- </a> -->
                                                <!-- <a href="#" class="list-group-item list-group-item-action flex-column align-items-start"> -->
                                                <div class="d-flex w-100 justify-content-between">
                                                    <h5 class="mb-1" style="color:#1cc88a;">Seance Web Dev</h5>
                                                    <small class="text-muted" style="color:#4e73df;">salle E22</small>
                                                    <small class="text-muted">14:00 PM</small>

                                                </div>
                                                
                                                <!-- </a> -->
                                                <!-- <a href="#" class="list-group-item list-group-item-action flex-column align-items-start"> -->
                                                <div class="d-flex w-100 justify-content-between">
                                                    <h5 class="mb-1" style="color:#1cc88a;">Seance Theorie de graphes</h5>
                                                    <small class="text-muted" style="color:#4e73df;">salle E20</small>
                                                    <small class="text">16:00 PM</small>
                                                </div>
                                                                                    </div>
                        
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                        <!-- containerfluid -->

                    </div>
                    <!-- End of Main Content -->

                    <!-- Footer -->
                    <footer class="sticky-footer bg-white">
                        <div class="container my-auto">
                            <div class="copyright text-center my-auto">
                                <span>Copyright &copy; Your Website 2021</span>
                            </div>
                        </div>
                    </footer>

                </div>

            </div>

            <a class="scroll-to-top rounded" href="#page-top">
                <i class="fas fa-angle-up"></i>
            </a>

            <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a class="btn btn-primary" href="login.html">Logout</a>
                        </div>
                    </div>
                </div>
            </div>

</div>


</template>



<script>
    export default {
        name:"test"
    }
</script>