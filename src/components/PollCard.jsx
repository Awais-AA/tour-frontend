const PollCard = ({componentvalue}) => {
    const componentVal="UserListPolling"
  return (
   
    <>
    <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">{componentVal}</h2>
    
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: "url('unsplash-photo-1.jpg')"}}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <p>Created By:</p><h5>awais akram</h5>
                <div className="mt-5 d-flex justify-content-between">
                <p className="text-info">Source: </p><p className="fw-bold">Lahore</p>
                <p className="text-info">Destination: </p><p className="fw-bold">Lahore</p>
                </div>
                <div className="mt-2 d-flex justify-content-between">
                <p className="text-info">Total Seats: </p><p className="fw-bold">6</p>
                <p className="text-info">Available Seats: </p><p className="fw-bold">3</p>
                </div>
                <div className="mt-2 d-flex justify-content-between">
                <p className="text-info">Total Price: </p><p className="fw-bold">6000</p>
                <p className="text-info">Total Days: </p><p className="fw-bold">3</p>
                </div>
                <div className="mt-2 d-flex justify-content-between">
                <p className="text-info">Tour Start: </p><p className="fw-bold">6000</p>
                <p className="text-info">Tour End: </p><p className="fw-bold">3</p>
                </div>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                   <button className="btn btn-info">Chat</button>
                  </li>
                  <li className="d-flex align-items-center me-3">
                  <button className="btn btn-primary">Book Tour</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
export default PollCard