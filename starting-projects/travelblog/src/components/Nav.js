export default function Nav() {
    const img_src = "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-world-user-experience-flatart-icons-outline-flatarticons.png"

    return (
        <div className="nav">
            <img src={img_src} alt="Not Found" className="nav--img" />
            <h6 className="nav--text">My Travel Journal</h6>
        </div>
    )
}