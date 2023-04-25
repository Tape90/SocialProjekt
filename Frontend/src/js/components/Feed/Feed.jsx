export default function Feed({title, text}) {
    return (
        <>
            <div class="col-sm-6 cardtopdistance">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">
                            {text}
                        </p>
                        <a href="#" class="btn btn-primary">
                            Mehr
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}