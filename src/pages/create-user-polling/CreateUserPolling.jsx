import PoolingPic from '../../components/PoolingPic'
import "./PoolingPage.css"
import PoolingMap from './components/PoolingMap'
function CreateUserPolling() {
  return (
    <>
    <div className="container">
    <PoolingPic/>
    </div>
    <div class="container">
      
        <div class="row">
          <div class="col-md-12">

            <div class="card card-nav-tabs">
              <div class="card-header card-header-primary">
                <div class="nav-tabs-navigation">
                  <div class="nav-tabs-wrapper">
                    <ul class="nav nav-tabs" data-tabs="tabs">
                      <li class="nav-item">
                       
                        <a
                          class="nav-link active"
                          href="/user-polling"
                          data-toggle="tab"
                        >
                          
                          Create Poll
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/user-polling-list" data-toggle="tab">
                          
                        User Polling List
                        </a>
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body ">
                <div class="tab-content text-center">
                  <div class="tab-pane active" id="profile">
                  <PoolingMap/>
                  </div>
               
                  <div class="tab-pane" id="settings">
                  <PoolingMap/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>

    
    
    </>
  )
}
export default CreateUserPolling