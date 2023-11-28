import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <nav>
                &nbsp;
                <Link to="/"> Home</Link>  |


                 <Link to="/cards"> All Cards </Link> |

                <Link to="/addcard"> Add Card </Link> |



            </nav>
            <Outlet />

        </>
    );
}
export default Layout;