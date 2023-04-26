export default function Feed({catastrophe, title, text, region }) {
  return (
    <>
      <div class="col-sm p-1">
        <div class="card">
          <div class="card-header">{catastrophe} - {region}</div>
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{text}</p>
            <a href="#" class="btn btn-primary">
              Mehr
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
