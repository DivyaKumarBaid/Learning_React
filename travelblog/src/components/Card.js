export default function Card(props) {

    console.log(props)

    const marker = "https://img.icons8.com/material-rounded/48/000000/marker.png"

    return (
        <div className="card">

            <div className="card--img" >
                <img src={props.props.imageUrl} alt="" className="card--pic" />
            </div>

            <div className="card--text">

                <div className="card--loc">
                    <img src={marker} alt="" className="loc--icon" />
                    <h6 className="card--country">{props.props.location}</h6>
                    <h6 className="google"><a href={props.props.googleMapsUrl}>View on Google Maps</a></h6>
                </div>

                <div className="place">
                    <h4>{props.props.title}</h4>
                </div>

                <div className="date">
                    <span className="date--date">
                        {props.props.startDate} - {props.props.endDate}
                    </span>
                </div>

                <div className="des">
                    {props.props.description}
                </div>
            </div>
            <hr />
        </div >
    )
}