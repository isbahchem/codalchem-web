

function Navbar(){
    const myNav = {
        display: "flex",
        color: "white",
        margin: "12px",
        padding: "12px",
        backgroundColor: "DodgerBlue",
        fontFamily: "Arial",
        listStyle: "none",
        borderRadius: "25px"
      };
      const anchor = {
        margin: "2px",
        padding: "5px",
        backgroundColor: "LightBlue",
        borderRadius: "15px",
        color: "Black"
      }
    return(
        <>
        <nav>
        <div>
            <ul style={myNav}>
                <li><a style={anchor}>Home</a></li>
                <li><a style={anchor}>About</a></li>
                <li><a style={anchor}>Computer Science</a></li>
                <li><a style={anchor}>Programming Languages</a></li>
                <li><a style={anchor}>Chemistry</a></li>
            </ul>
        </div>
    </nav>
    </>
    )}

    export default Navbar;