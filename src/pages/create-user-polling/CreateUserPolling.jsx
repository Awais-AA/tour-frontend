import {Link,useNavigate} from "react-router-dom"

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
                       
                        <Link
                          class="nav-link active"
                          to="/user-polling"
                          data-toggle="tab"
                        >
                          
                          Create Poll
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/user-polling-list" data-toggle="tab">
                          
                        User Polling List
                        </Link>
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