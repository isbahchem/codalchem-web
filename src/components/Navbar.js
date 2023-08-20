

function Navbar(){
    const myNav = {
        display: "flex",
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "5px",
        fontFamily: "Arial",
        listStyle: "none",
        borderRadius: "25px"
      };
    return(
        <>
        <nav>
        <div>
            <ul style={myNav}>
                <li>Home</li>
                <li>About</li>
                <li>Computer Science</li>
                <li>Programming Languages</li>
                <li>Chemistry</li>
            </ul>
        </div>
    </nav>
    </>
    )}

    export default Navbar;