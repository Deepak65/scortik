import React from 'react'
import "../../assests/dashboardThirdComponent.css"

export default function DashboardThirdComponent() {
  return (
    <div className='row search-field'>
      <div className='col-sm-4 div-search'>
        <div className='input-group'>
          <i className='fa-solid fa-search'></i>
          <input className='form-control py-2 border-0 ' type="search" placeholder="Search" id="Search"/>
        </div>
      </div>
    </div>
  )
}
