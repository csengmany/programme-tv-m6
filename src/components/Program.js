const Program = (props) => {
    return (
        <div className="container">
            <span>{props.time}</span>
            <img src={props.image} alt="program" />
            <div className="description">
                <h3>{props.title}</h3>
                <p>{props.type}</p>
                <div>
                    <span>{props.duration}</span>
                    <span>{props.isUnseen ? "• Inédit" : ""}</span>
                    <span>{props.direct ? "• Direct" : ""}</span>
                </div>
            </div>
        </div>
    );
};
export default Program;
