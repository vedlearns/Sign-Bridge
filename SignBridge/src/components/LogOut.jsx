const LogOut=({handleLogOut})=>{
  return(
    <>
          <button className="Btn">
          <a className="text-xl" onClick={handleLogOut} href="#">
            Log Out
          </a>
        </button>
    </>
  )  
  }
  export default LogOut