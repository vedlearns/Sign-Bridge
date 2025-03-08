import SocialContactComponent from"./SocialContactComponent"

const FooterComponent=()=>{

return(
  <>
   <footer  >
        <div>
          <p>&copy; 2025 Sign Bridge. All rights reserved.</p>
          <p>Bridging communication gaps, one sign at a time.</p>
        </div>
        <div >
          <a href="/privacy-policy" >Privacy Policy</a>
          <a href="/terms-of-service" >Terms of Service</a>
        </div>
        <SocialContactComponent/>
      </footer>
  </>
)
}

export default FooterComponent;