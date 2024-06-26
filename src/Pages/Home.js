import 'bootstrap/dist/css/bootstrap.min.css'


function Home() {
    return(
        <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
        <div class="homepage">
  {/* <div class="banner">
    <video autoplay loop muted plays-inline>
        <source src="./child.mp4" type="video/mp4" />
    </video> */}
       <img src="./kid1.jpg" width="100%" height="700" alt="..." class="image" />
       <h1 style={{fontFamily:"Lucida Handwriting"}}>Preschool Education </h1><br />
       {/* </div> */}

       <button type="button" class="btn btn-danger rounded-4 mt-4 mb-4 fw-bold" id="myBtn" style={{fontFamily:"cursive"}}><a class="text-light link-offset-2 link-underline link-underline-opacity-0" href="./Contact">ADMISSION <i class="bi bi-arrow-right-circle"></i></a></button>

       </div>

    <div class="rounded-5 pb-4 bg-primary-subtle">
       <div class="container text-center">
          <div class="row">
            <div class="col animate">
            <img src="./kid4 (1).jpg" width="450" height="380" class="rounded-5 mt-5" alt="..." />
        </div>
        <div class="col">
           <h1 class="text-danger fw-bold pt-5 pb-3" style={{fontFamily:"Lucida Handwriting"}}>About Us <img src="https://www.miloshouse.com.au/img/monkey-99bcbe39.svg" width="100" height="80" class="" alt="..." /></h1>
           <p>Milo's House Preschool Literacy is a unique learning environment for children aged 3-6 years. It is a multi-sensory phonemic awareness/phonics based program where children come together in small groups to have fun, learn to recognise the sounds of the alphabet and the links between reading, writing, and spelling.</p>
           <button type="button" class="btn btn-light rounded-5 mt-4 mb-4 fw-bold" style={{fontFamily:"cursive"}}><a class="text-dark link-offset-2 link-underline link-underline-opacity-0" href="./About_Us">Learn More</a></button>
        </div>
     </div>
  </div>
  </div>
  <div class="bg-info p-5 rounded-5">
      <h2 class="fw-bold text-light pb-4" style={{fontFamily:"cursive", fontSize: "45px"}}>Programs <img src="https://www.miloshouse.com.au/img/monkey-99bcbe39.svg" width="100" height="70" alt="..." /></h2>
      <div class="container">
  <div class="row">
    <div class="col">
    <div class="card rounded-5 animate" style={{width: "25rem", marginLeft: "80px"}}>
  <img src="kid3.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Kinder 3</h5>
    <p class="card-text p-3"><li style={{listStyleType: "none"}}>
      <ul><i class="bi bi-star-fill"></i> Developmental play</ul>
      <ul><i class="bi bi-star-fill"></i> Show and tell</ul>
      <ul><i class="bi bi-star-fill"></i> Phonemic awareness activities</ul>
      <ul><i class="bi bi-star-fill"></i> Music and dance</ul>
      </li></p>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card rounded-5 animate" style={{width: "25rem", marginLeft: "30px"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0JeCJcAqNEtZvYOvoNn_GoWp66m_HErvTmA&s" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Kinder 4</h5>
    <p class="card-text p-4">
      <li style={{listStyleType: "none"}}>
      <ul><i class="bi bi-star-fill"></i> All Activities from Kinder 3</ul>
      <ul><i class="bi bi-star-fill"></i> Writing alphabet letters</ul>
      <ul><i class="bi bi-star-fill"></i> Reading: blending and segmenting sounds</ul>
      </li></p>
  </div>
</div>
    </div>
  </div>
</div>
<button type="button" class="btn btn-danger rounded-4 mt-4 mb-4 fw-bold" style={{fontFamily:"cursive", marginLeft: "170px"}}><a class="text-light link-offset-2 link-underline link-underline-opacity-0" href="./Programs">LEARN MORE <i class="bi bi-caret-right-fill"></i></a></button>
  </div>
        </>
    )
}
export default Home;