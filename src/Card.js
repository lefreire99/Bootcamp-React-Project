function Card (props) {
    return (
        <div className="card w-75">
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}

export default Card;