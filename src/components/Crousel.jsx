import crouselImage1 from "../assets/images/crousel-image1.jpg"
import crouselImage2 from "../assets/images/crousel-image2.jpg"
import crouselImage3 from "../assets/images/crousel-image3.jpg"


function Crousel() {
  return (
    <div className="container">
    <div id="carousel-1" className="carousel slide" data-bs-ride="carousel" style={{height: "600px"}} >
    <div className="carousel-inner h-100">
        <div className="carousel-item active h-100"><img className="w-100 d-block position-absolute h-100 fit-cover" src={crouselImage1} alt="Slide Image" style={{zIndex: "-1" }}/>
            <div className="container d-flex flex-column justify-content-center h-100">
                <div className="row">
                    <div className="col-md-6 col-xl-4 offset-md-2">
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="carousel-item h-100"><img className="w-100 d-block position-absolute h-100 fit-cover" src={crouselImage2} alt="Slide Image" style={{zIndex:"-1"}} />
            <div className="container d-flex flex-column justify-content-center h-100">
                <div className="row">
                    <div className="col-md-6 col-xl-4 offset-md-2">
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="carousel-item h-100"><img className="w-100 d-block position-absolute h-100 fit-cover" src={crouselImage3} alt="Slide Image" style={{zIndex: "-1"}}/>
            <div className="container d-flex flex-column justify-content-center h-100">
                <div className="row">
                    <div className="col-md-6 col-xl-4 offset-md-2">
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
    <ol className="carousel-indicators">
        <li className="active" data-bs-target="#carousel-1" data-bs-slide-to="0"></li>
        <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
        <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
    </ol>
</div>
</div>
  )
}
export default Crousel