import React from 'react'

const Footer = () => {
  let footerStyle = {
      backgroundColor: "#C38154",
      width: "100%",
      height: "50px",
      textAlign: "center",
      paddingTop: "15px",
      fontSize: "17px",
      fontWeight: "500",
      marginTop: "20px"
    }
  return (
    <footer style={footerStyle}>
      <p>Lorem ipsum dolor sit amet.</p>
    </footer>
  )
}

export default Footer