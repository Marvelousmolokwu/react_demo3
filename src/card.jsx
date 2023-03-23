const Card = (props) => {
  console.log(props);
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="cards">
      <div className="cards--img">
        <img src={`../images/image 12.png`} />
        {badgeText && <div className="status">{badgeText}</div>}
      </div>
      <div className="cards--info">
        <div className="cards--info--first--paragraph">
          <img src="images/Star 1.png" alt="star-pic" />
          <p>
            {props.stats.rating}
            <span className="gray">
              ({props.stats.reviewCount})-{props.location}
            </span>
          </p>
        </div>
        <p>{props.title}</p>
        <div>
          <span className="price">From ${props.price}</span>/person
        </div>
      </div>
    </div>
  );
};

export default Card;
