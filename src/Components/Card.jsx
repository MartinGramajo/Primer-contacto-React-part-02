export default function Card(props) {
    return (
        <div className="container py-5">
            <div className="card" style={{ width: "25rem" }}>
                <img
                    src={props.data.image} 
                    class="card-img-top"
                    alt="..."
                />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.data.titulo}</h5>
                    <p className="card-text">
                        {props.data.descripcion}
                    </p>
                </div>
            </div>
        </div>
    );
}
