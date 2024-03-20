import Logo from "@/assets/img/logo/logo_header.svg"
import { useNavigate } from "react-router-dom"
import "./style.css"
import SearchBar from "../SearchBar"



function Header () {
    const navigate = useNavigate()
    function handleLogin () {
        navigate("/login")
    }

    return (
        <header>
            <div className="header">
                <div className="d-flex align-items-center py-2 justify-content-between">
                    <div className="d-flex">
                        <img
                            src={Logo}
                            className="logo me-4"
                            alt="QAjuda"
                        />
                        <SearchBar placeholder="Busque uma ação ou categoria"></SearchBar>
                    </div>
                    <div className="d-flex">
                        <button
                            className="btn btn-primary rounded rounded-pill"
                            onClick={handleLogin}
                        >
                            <i className="fa-solid fa-user pe-1"> Login </i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header