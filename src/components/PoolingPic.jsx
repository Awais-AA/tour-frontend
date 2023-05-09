import poolingPic from '../assets/images/crousel-image1.jpg'
function PoolingPic() {
  return (
    <div className="d-flex justify-content-center">
    <img src={poolingPic} style={{height:"calc(100vh - 5rem)", width:"calc(100% - 1rem)"}} className="img-fluid" alt="Pooling Picture"></img>
    </div>
  )
}
export default PoolingPic