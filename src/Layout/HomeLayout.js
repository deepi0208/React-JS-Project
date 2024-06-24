import {Link, Outlet} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

function HomeLayout() {
    return(
        <>
    <nav class="navbar fixed-top bg-light p-0">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://www.miloshouse.com.au/img/logo-beebcffb.svg" alt="Logo" width="270" height="100" class="d-inline-block align-text-top" />
    </a>

  <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link fw-bold over" href="#"><Link to="/" class="nav-icon text-dark link-underline-light" style={{fontFamily:"Lucida Handwriting"}}><span class="nav-head">Home</span></Link></a>
  </li>
  <li class="nav-item">
    <a class="nav-link active text-dark fw-bold" aria-current="page" href="./About_Us" style={{fontFamily:"Lucida Handwriting"}}><span class="nav-head">About Us</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-dark fw-bold" href="./Programs" style={{fontFamily:"Lucida Handwriting"}}><span class="nav-head">Programs</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-dark fw-bold" href="./Time_Table" style={{fontFamily:"Lucida Handwriting"}}><span class="nav-head">Time Table</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-dark fw-bold" href="./Testi" style={{fontFamily:"Lucida Handwriting"}}><span class="nav-head">Testimonials</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-dark fw-bold" href="./Contact" style={{fontFamily:"Lucida Handwriting"}}><span class="nav-head">Contact Us</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-dark fw-bold" href="./" style={{fontFamily:"Lucida Handwriting"}}><span class="nav-head"><i class="bi bi-instagram"></i></span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-dark fw-bold" href="./" style={{fontFamily:"Lucida Handwriting"}}><span class="nav-head"><i class="bi bi-facebook"></i></span></a>
  </li>
</ul>
</div>
</nav>

{/* <footer class="text-center bg-body-tertiary">
  <div class="container pt-4">
    <section class="mb-4">
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-instagram"></i
      ></a>

      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-github"></i
      ></a>
    </section>
  </div>
  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © 2020 Copyright:
    <a class="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</footer> */}
        <Outlet />
        </>
    )
}
export default HomeLayout