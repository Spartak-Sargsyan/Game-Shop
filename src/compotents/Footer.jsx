const Footer = () => {
    return (
        <footer class="page-footer green lighten-4">
            <div class="footer-copyright">
                <div class="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a class="grey-text text-lighten-4 right" href="#!">
                        More Links
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
