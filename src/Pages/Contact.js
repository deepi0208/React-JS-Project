import 'bootstrap/dist/css/bootstrap.min.css'

function Contact() {
    return(
        <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
        <div class="contact">
        <img src="https://i.pinimg.com/originals/69/b9/0e/69b90ed4e4087e02faaaccf33a843dfb.jpg" alt="contactImage" height="100%" width="100%" class="pt-5" />
        <div class="container rounded-5 p-5" style={{marginTop:"60px"}}>
        <input type="text" class="form-control rounded-4" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" style={{fontFamily:"cursive", marginTop:"100px"}} /><br></br>
                <input type="text" class="form-control rounded-4" placeholder="Contact Number" aria-label="Username" aria-describedby="basic-addon1" style={{fontFamily:"cursive"}} /><br></br>
                <input type="text" class="form-control rounded-4" placeholder="E-mail" aria-label="Username" aria-describedby="basic-addon1" style={{fontFamily:"cursive"}} /><br></br>
                <input type="text" class="form-control rounded-4" placeholder="Your enquiry" aria-label="Username" aria-describedby="basic-addon1" style={{fontFamily:"cursive"}} /><br></br>
                
                <button type="submit" class="btn btn-primary rounded-4 text-light" style={{color:"darkblue",fontFamily:"cursive"}}>Send</button>
            {/* <div class="row">
                <div class="col"><h1 class="fw-bold" style={{fontFamily:"cursive", color:"darkblue"}}>Contact Us</h1><br />
                <blockquote class="p-2">
                    <p>Suite 3 / 131 Bulleen Road<br></br> Balwyn North VIC 3104</p>
                </blockquote>
                <h3><i class="bi bi-envelope-fill"></i></h3> <p>info@miloshouse.com.au</p><br />
                <h3><i class="bi bi-telephone-fill"></i></h3> <p>0412 088 544</p>
                </div>
                <div class="col pt-5">
                </div>
            </div> */}
        </div>
        </div>
        </>
    )
}
export default Contact


