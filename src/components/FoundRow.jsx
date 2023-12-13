
const FoundRow = (props) => {
  return (
    <div className="d-flex justify-content-start mt-3">
      <div>
        <img src={props.image} alt={props.title}  style={{height:"80px", width:"100px"}}/>
      </div>
      <div className="ps-3 fs-5 fw-bold">
        <p>{props.title}</p>
      </div>  
    </div>       
  )
}

export default FoundRow