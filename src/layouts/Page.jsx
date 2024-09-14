const Page = ({ children }) => {
    return (
        <div className="page-wrapper container-fluid">
            <div className="page">
                {children}
            </div>
        </div>
    )
}

export default Page
