import {Link, Outlet} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

function HomeLayout() {

const submitForm = (e) => {
        e.preventDefault()
        const user = {
            username: e.target.username.value,
            email: e.target.email.value,
            contact: e.target.contact.value,
            password: e.target.password.value
        }
        fetch("http://localhost:5000/signup/insert",{
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Contact-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then((data)=>{
            if(data.userFound){
                alert("SignUp success")
            }
            else{
                alert("SignUp Failed")
            }
        })
    }
    

    return(
        <>
    <nav class="navbar fixed-top bg-light p-0">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://www.miloshouse.com.au/img/logo-beebcffb.svg" alt="Logo" width="270" height="100" class="d-inline-block align-text-top" />
    </a>

  <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link fw-bold" href="#"><Link to="/" class="nav-icon text-dark link-underline-light" style={{fontFamily:"Lucida Handwriting"}}><span class="nav-head">Home</span></Link></a>
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
    <a class="nav-link text-dark fw-bold" style={{fontFamily:"Lucida Handwriting"}}>
      <button type="button" class="btn btn-info rounded-5 fw-bold" data-bs-toggle="modal" data-bs-target="#signup">SignUp</button>
      </a>
  </li>
  
  <li class="nav-item">
    <a class="nav-link text-dark fw-bold" style={{fontFamily:"Lucida Handwriting"}}>
      <button type="button" class="btn bg-info rounded-5 fw-bold" data-bs-toggle="modal" data-bs-target="#login">Login </button>

      </a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-dark fw-bold" href="./https://www.instagram.com/" style={{fontFamily:"Lucida Handwriting"}}><span class="nav-head"><i class="bi bi-instagram"></i></span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-dark fw-bold" href="./https://www.facebook.com/" style={{fontFamily:"Lucida Handwriting"}}><span class="nav-head"><i class="bi bi-facebook"></i></span></a>
  </li>
</ul>
</div>
</nav>

{/* SIGNUP */}


<div class="modal fade" id="signup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
          <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel" style={{fontFamily:"Lucida Handwriting"}}>Signup</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form onSubmit={(e)=>{submitForm(e)}}>
          <div class="mb-1">
            <label name="username" for="recipient-name" class="col-form-label" style={{fontFamily:"cursive"}}>Username</label>
            <input type="text" class="form-control" id="recipient-name" />
          </div>
          <div class="mb-1">
            <label name="email" for="recipient-name" class="col-form-label" style={{fontFamily:"cursive"}}>EmailId</label>
            <input type="text" class="form-control" id="recipient-name" />
          </div>
          <div class="mb-1">
            <label name="contact" for="recipient-name" class="col-form-label" style={{fontFamily:"cursive"}}>Contact</label>
            <input type="text" class="form-control" id="recipient-name" />
          </div>
          <div class="mb-1">
            <label name="password" for="recipient-name" class="col-form-label" style={{fontFamily:"cursive"}}>Password</label>
            <input type="text" class="form-control" id="recipient-name" />
            </div>
            <div class="mb-1">
            <button type="button" class="btn btn-info rounded-5" style={{fontFamily:"Lucida Handwriting"}}>SignUp</button>
          </div>
          <div class="modal-footer">
         <button type="button" class="btn btn-secondary rounded-5" data-bs-dismiss="modal" style={{fontFamily:"Lucida Handwriting"}}>Close</button>
        
       </div>
         </form>
      </div>
      </div>
    </div>
  </div>

{/* LOGIN */}

<div class="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel" style={{fontFamily:"Lucida Handwriting"}}>Login</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-1">
            <label for="recipient-name" class="col-form-label" style={{fontFamily:"cursive"}}>Username</label>
            <input type="text" class="form-control" id="recipient-name" />
          </div>
          <div class="mb-1">
            <label for="recipient-name" class="col-form-label" style={{fontFamily:"cursive"}}>Password</label>
            <input type="text" class="form-control" id="recipient-name" />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary rounded-5" data-bs-dismiss="modal" style={{fontFamily:"Lucida Handwriting"}}>Close</button>
        <button type="button" class="btn btn-info rounded-5" style={{fontFamily:"Lucida Handwriting"}}>Login</button>
      </div>
    </div>
  </div>
</div>

<Outlet />

<footer class="text-center text-lg-start pt-5">
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