const Footer = () => {
    return (
        <footer>
            <div className="container site-footer">
           <div className="site-copy">
                <h3>Copyright 2020</h3>
                <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar tincidunt.</p>
            </div> 
            <div className="footer-nav">
                <h3>Sayt sahifalari</h3>
            <a href="/">Bosh sahifa</a>
            <a href="/xizmatlar">Xizmatlar</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/jamoa">Jamoa</a>
            <a href="/blog">Blog</a>
            <a href="/kontaktlar">Kontaktlar</a>
            </div>
            <div className="socials-list">
                <h3>Biz internetda</h3>
                <a href="https://telegram.me/pixer_uz"><i className="fab fa-telegram"/>Telegram</a>
                <a href="https://facebook.com/"><i className="fab fa-facebook"/>Facebook</a>
                <a href="https://instagram.com/"><i className="fab fa-instagram"/>Instagram</a>
            </div>
            </div>
        </footer>
    )
}

export default Footer
