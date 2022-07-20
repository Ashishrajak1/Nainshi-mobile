import React from 'react'

function LatestProduct() {
  return (
    <>
      <div className="latest_heading">
        Latest product 
      </div>
      <div className="containar">
        <div className="row">
            <div className="col">
                <LatestProductCard/>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <LatestProductCard/>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <LatestProductCard/>
            </div>
        </div>
      </div>
    </>
  )
}

export default LatestProduct
