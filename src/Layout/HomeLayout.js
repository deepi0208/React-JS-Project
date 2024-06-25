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

<Outlet />

<footer class="text-center text-lg-start">
    <div class="text-center p-3 text-light" style={{backgroundColor: "rgb(46, 124, 177)"}}>
      © 2024 Copyright: <br />
      <a class="text-light" href="https://mdbootstrap.com/">Milo's House Preschool Literacy</a>
      <div class="p-2">
      <a
        data-mdb-ripple-init
          class="btn text-white btn-floating m-1 rounded-5"
          style={{backgroundColor: "#3b5998"}}
          href="#!"
          role="button"
          ><i class="bi bi-facebook"></i></a>
  
        {/* <!-- Twitter --> */}
        <a
          data-mdb-ripple-init
          class="btn text-white btn-floating m-1 rounded-5"
          style={{backgroundColor: "#55acee"}}
          href="#!"
          role="button"
          ><i class="bi bi-twitter"></i></a>
  
        {/* <!-- Google --> */}
        <a
          data-mdb-ripple-init
          class="btn text-white btn-floating m-1 rounded-5"
          style={{backgroundColor: "#dd4b39"}}
          href="#!"
          role="button"
          ><i class="bi bi-google"></i></a>
  
        {/* <!-- Instagram --> */}
        <a
          data-mdb-ripple-init
          class="btn text-white btn-floating m-1 rounded-5"
          style={{backgroundColor: "#ac2bac"}}
          href="#!"
          role="button"
          ><i class="bi bi-instagram"></i
        ></a>
  
        {/* <!-- Linkedin --> */}
        <a
          data-mdb-ripple-init
          class="btn text-white btn-floating m-1 rounded-5"
          style={{backgroundColor: "#0082ca"}}
          href="#!"
          role="button"
          ><i class="bi bi-linkedin"></i></a>
        {/* <!-- Github --> */}
        <a
          data-mdb-ripple-init
          class="btn text-white btn-floating m-1 rounded-5"
          style={{backgroundColor:"#333333"}}
          href="#!"
          role="button"
          ><i class="bi bi-github"></i></a>
      </div>
    </div>
  </footer>
        
        </>
    )
}
export default HomeLayout