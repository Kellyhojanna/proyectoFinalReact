export const HeaderIzquierdo = ({ children }) => {
    return (
        <div className="header-left col-md">
            {children}
        </div>
    );
}

export const HeaderDerecho = ({ children }) => {
    return (
        <div className="header-rigth col-md-auto">
            {children}
        </div>
    );
}


const Header = ({ children }) => {
    return (
        <header className="header">
            <div className="container-fluid">
                <div className="row d-flex align-items-center">
                    {children}
                </div>
            </div>
        </header>
    )
}

export default Header
