import React from "react";
import { Link } from "react-router-dom";
import "../Coins.css";

function CoinListItem({
  name,
  image,
  volume,
  lastPrice,
  price,
  id,
  number,
  market_cap_rank,
  totalVolume,
}) {
  return (
    <>
      <Link to={`/CoinDetail/${id}`}>
        <div className="container coin-row">
          <div className="heading">
            <div className="col-lg-12 coin-box d-flex justify-content-between">
              <p className="coin-number">{number}</p>
              <div className="coin">
                <img className="coin-image" src={image} alt="" />
                <p className="coin-name">{name}</p>
              </div>

              <p className="coin-price">${price.toLocaleString()}</p>
              <p>{lastPrice.toFixed(2)}% </p>
              <p>${totalVolume.toLocaleString()}</p>
              <p className="coin-volume">${volume.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <hr />
      </Link>
    </>
  );
}

export default CoinListItem;
