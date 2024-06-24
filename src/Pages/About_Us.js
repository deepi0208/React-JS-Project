import 'bootstrap/dist/css/bootstrap.min.css';

function About_Us() {
    return(
        <>
        <div class="bg-primary-subtle" style={{paddingTop: "140px",paddingBottom:"50px"}}>
           <h1 class="fw-bold pt-2 pb-3 text-center" style={{fontFamily:"cursive", color:"darkblue"}}>About Milo's House <img src="https://www.miloshouse.com.au/img/monkey-99bcbe39.svg" width="100" height="80" class="" alt="..." /></h1>
           <blockquote class="blockquote fs-5">
            <p class="ps-5 pe-5">Milo's House Preschool Literacy is a unique learning environment for children aged 3-6 years. It is a multi-sensory phonemic awareness/phonics based program where children come together in small groups to have fun, learn to recognise the sounds of the alphabet and the links between reading, writing, and spelling.</p>
            <p class="ps-5 pe-5">Milo's House is run by an enthusiastic and engaging school teacher and literacy tutor, Fiona Antonopoulos. Milo the Monkey is the main character and he welcomes everyone to his 'house'.</p>
        </blockquote>
            <div class="container animate">
                <div class="row">
                    <div class="col">
                    <blockquote class="blockquote fs-5 pt-4 pe-5"><p>Children LOVE the program as they can't wait to see who Milo invites to his house next.</p>
                    <p>Parents LOVE the program as they see their children develop confidence, a love of learning, and exposure to literacy concepts.</p>
                    <p>Our classes are run in small groups so the children feel relaxed, and receive individual focus and attention.</p>
                    <p>All our staff are qualified and highly trained literacy teachers holding current Victorian Institute of Teaching cards</p></blockquote></div>
                    <div class="col">
                        <img src="./kid4 (3).jpg" class="rounded-5 text-center pt-4" width="600" height="400" />
                    </div>
            </div>
            </div>
            </div>
        {/* </div> */}
        </>
    )
}
export default About_Us;