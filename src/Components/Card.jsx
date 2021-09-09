export default function Card({ data }) {
    const { image, titulo, descripcion } = data;

    return (
        <div className="m-auto d-flex text-center">
            <div className="card my-5 mx-3" style={{ width: "18rem" }}>
                <img
                    src={image} 
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body text-center">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">
                        {descripcion}
                    </p>
                </div>
            </div>
        </div>
    );
}
