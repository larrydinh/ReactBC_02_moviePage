import React,{useState} from 'react'

export default function BaiTapChonXe(props) {
    let [img,setImg] = useState("./img/car/products/black-car.jpg")
    const renderPic =(color) =>{ 
        setImg(`./img/car/products/${color}-car.jpg`)
    }

    return (
        <div className="container">
        <div className="row mt-5">
          <div className="col-6">
            <img className="w-100" src={img}/>
          </div>
          <div className="row">
            <div className="col-6">
              <button
                className="col-6 btn btn-danger"
                onClick={(event) => {
                  renderPic("red");
                }}
              >
                Red car
              </button>
            </div>
            <div className="col-6">
              <button
                className="col-6 btn btn-secondary"
                onClick={(event) => {
                  renderPic("silver");
                }}
              >
                Silver car
              </button>
            </div>
            <div className="col-6">
              <button
                className="col-6 btn btn-dark"
                onClick={(event) => {
                  renderPic("black");
                }}
              >
                Black car
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}
