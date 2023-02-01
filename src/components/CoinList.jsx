import React, { useEffect, useState } from "react";
import CoinListItem from "./CoinListItem";

export const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  useEffect(() => {
    fetchCrypto();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  async function fetchCrypto() {
    const response = await fetch(url);
    const data = await response.json();
    setCoins(data);
  }

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="row">
        <div className="col-lg-12 text-center pt-2">
          <h1 className="text-primary">CRYPTO</h1>
        </div>
      </div>

      <div className="container px-0">
        <div className="row-1">
          <div className="col-lg-12 d-flex mt-3 mb-5">
            <button className="btn btn-dark" type="button">
              <i className="bi bi-search"></i>
            </button>

            <input
              type="text"
              className="form-control position-relative"
              placeholder="What crypto are you looking for?"
              aria-label="search"
              onChange={handleChange}
            />
            <button className="btn btn-primary my-1 my-sm-0" type="submit">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="row heading ">
        <h5>#</h5>
        <p className="coin-name">Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className="hide-mobile">Volume</p>
        <p className="hide-mobile">Mkt Cap</p>
      </div>

      <div className="container py-0 px-3">
        <div className="row">
          <div className="col-lg-12 pt-0 px-0 mx-0">
            {filteredCoins.map((coin) => {
              return (
                <CoinListItem
                  // coin={coin}
                  data={fetchCrypto}
                  key={coin.id}
                  number={coin.market_cap_rank}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  price={coin.current_price}
                  lastPrice={coin.price_change_24h}
                  id={coin.id}
                  totalVolume={coin.total_volume}
                  volume={coin.market_cap}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
