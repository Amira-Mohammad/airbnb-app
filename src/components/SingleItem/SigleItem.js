import "./SigleItem.css";
function SigleItem({ Item }) {
  return (
    <div className="itemContainer position-relative border">
      <span>
        <i
          className="fa fa-heart position-absolute wishlistIcon"
          aria-hidden="true"
        ></i>
      </span>

      <img src={Item.img} className="itemImg w-100" />
      <div className="itemInfo px-4 d-flex flex-column justify-content-between">
        <div className="d-flex flex-column">
          <h3 className="text-start">{Item.title}</h3>
          <p className="text-muted text-start">{Item.hint}</p>
        </div>
        <div className="d-flex justify-content-between">
          <div>{Item.price}/night</div>
          <div>
            <i className="fa fa-star" aria-hidden="true"></i> {Item.rate}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigleItem;
