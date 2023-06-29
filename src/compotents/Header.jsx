const Header = () => {
    return (
        <nav className="green darken-1">
            <div classNameName="nav-wrapper">
                <a href="/" className="brand-logo">
                    React Shop
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a
                            href="https://github.com/Spartak-Sargsyan/React-Shop"
                            target="black"
                        >
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
