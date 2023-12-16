

const Footer = (props) => {


  return (
    <>
      <div className='bottom'>
        <footer>
          <div className='footer'>
            <h1 style={{ marginBottom: "20px", textTransform: "uppercase" }}>{props.ownerName}</h1>
            <p style={{ lineHeight: "26px" }}>{props.contant}</p>

          </div>
          <div className='footer'>
            <h1 style={{ marginBottom: "20px" }}>SOCIAL</h1>
            <ul>
              <i><a target='_blank' href='https://instagram.com/code.by.rajput?igshid=NGVhN2U2NjQ0Yg==' className='fa fa-instagram'></a></i>
              <i><a target='_blank' href='https://www.linkedin.com/in/rohit-rajput-31058125b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='fa fa-linkedin'></a></i>
              <i><a target='_blank' href='https://github.com/rohitraj-put' className='fa fa-github'></a></i>

            </ul>
          </div>
        </footer>
        <hr />
        <p style={{ color: 'white', textAlign: 'center', marginTop: "30px", marginBottom: "10px", textTransform: "uppercase" }}>© Copyright 2023. Made by 🤍<a href='#'>{props.ownerName}</a></p>
      </div>
    </>
  )
}

export default Footer