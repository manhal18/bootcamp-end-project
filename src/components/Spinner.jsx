import React from 'react'
import { Spinner } from 'react-bootstrap'

const SpinnerComponent = (props) => {
	return (
		<div style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'>
			<Spinner className='text-center'></Spinner>
		</div>
	)
}

export default SpinnerComponent