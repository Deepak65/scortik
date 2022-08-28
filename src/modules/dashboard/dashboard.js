import React, { useEffect } from 'react'
import Footer from '../common/footer'
import Header from '../common/header'
import Share from '../common/share'
import DashboardForthComponent from './dashboardForthComponent'
import DashboardSecondPart from './dashboardSecondPart'
import DashboardThirdComponent from './dashboardThirdComponent'

export default function Dashboard() {

  return (
    <>
    <Header/>
    <nav className='widgets-social'>
      <ul>
        <li><a href="#"><p className='m-0 fs-18-px'>60 </p><p className='fs-11-px'>shares</p></a></li>
        <li><a href="#"><i className="fab fa-facebook-f"></i><span>Share</span></a></li>
        <li><a href="#"><i className="fab fa-twitter"></i><span>Share</span></a></li>
        <li><a href="#"><i className="fab fa-linkedin-in"></i><span>Share</span></a></li>
        <li><a href="#"><i className="fab fa-whatsapp"></i><span>Share</span></a></li>
        <li><a href="#"><i className="fab fa-solid fa-share-nodes"></i><span>Share</span></a></li>

      </ul>
    </nav>
    <div className='main-area pt-41-px main-component'>
    <div className="container">
        <div className='row div-area'>
            <div className='col-lg-5 sm-mb-2'>
            <h1 className="fw-700 mb-fs-22-px">Protocol Rating and Review</h1>
            <p className='fc-555'>Scortik is blockchain protocols rating and review platform to enable Web3 developers to make the right choice.
          Scortik utilises best in class formal verification process to review and monitor blockchain ecosystem tools.</p>
          <div className="card shadow mt-3 hidden-sm">
          <div className="text-area d-flex">
            <div className="text-area-info br-right">
              <img className="mr-2 img-size-prr" src="https://scortik.com/wp-content/themes/Divi/assets/img/protocol-added.svg" />
              <div className="d-block ml-3">
                <h1 className="pb-0 fs-style">34</h1>
                <div className="text-area-info-text">
                  Protocols Added
                </div>
              </div>
            </div>
            <div className="text-area-info">
              <img className="mr-2 img-size-prr" src="https://scortik.com/wp-content/themes/Divi/assets/img/audit_completed.svg" />
              <div className="d-block ml-2">
                <h1 className="pb-0 fs-style">119</h1>
                <div className="text-area-info-text">
                  Audits Completed
                </div>
              </div>
            </div>
          </div>
          <div className="hidden-area"></div>
        </div>
            </div>
            
        <div className="col-lg-7 p-4 card shadow column-req">
        <div className="col-md-8 text-white">
          <h1 className="text-white">Request Protocol Review</h1>
          <p className="text-white">Submit your protocol for evaluation on <br/>
            8 scoring parameters</p>
          <button className="btn btn-primary w-25 mt-4">Submit</button>
        </div>
      </div>
        </div>
        <DashboardSecondPart/>
        <DashboardThirdComponent/>
        <DashboardForthComponent/>
    </div>
    </div>
    <Footer/>
    <Share/>
    </>
  )
}
