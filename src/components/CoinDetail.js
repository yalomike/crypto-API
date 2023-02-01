import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../Coins.css";
import DOMPurify from "dompurify";

function CoinDetail() {
  const { id } = useParams();

  const [coin, setCoin] = useState([]);

  useEffect(() => {
    fetchCoin();
  }, []);

  async function fetchCoin() {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id} `
    );
    const detail = await response.json();
    setCoin(detail);
  }

  return (
    <div className="coin-container">
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center">
          <li className="d-flex position-relative text-center p-3">
            <Link to="/">
              <div className="row">
                <div className="col-lg-12 text-center pt-5">
                  <h1 className="text-primary w-100">Coin Search</h1>
                </div>
              </div>
            </Link>
          </li>
        </div>
      </div>

      <div className="coin-container">
        <div className="content text-uppercase text-light">
          <h1>{coin.name}</h1>
        </div>
        <div className="content">
          <div className="rank text-start">
            <span className="rank-btn ">Rank # {coin.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading justify-content-start mt-3">
              {coin.image ? <img src={coin.image.small} alt="" /> : null}
              <p className="coin-name2 mt-3">{coin.name}</p>
              <p className="coin-symbol2 position-absolute mt-3">
                {coin.symbol}
              </p>
            </div>
            <div className="coin-price d-flex">
              {coin.market_data?.current_price ? (
                <h1 className="text-center">
                  ${coin.market_data.current_price.usd.toLocaleString()}
                </h1>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="coin-container">
        <div className="content row">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                        1
                      )}{" "}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                        1
                      )}{" "}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_7d_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                        1
                      )}{" "}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_14d_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                        1
                      )}{" "}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_30d_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                        1
                      )}{" "}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_1y_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                        1
                      )}{" "}
                      %
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="coin-container">
        <div className="content">
          <div className="stats d-flex">
            <div className="left col-lg-6">
              <div className="row">
                <h4>24 Hour Low</h4>
                {coin.market_data?.low_24h ? (
                  <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="row">
                <h4>24 Hour High</h4>
                {coin.market_data?.high_24h ? (
                  <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
                ) : null}
              </div>
            </div>

            <div className="right col-lg-6">
              <div className="row">
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? (
                  <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
                ) : null}
              </div>

              <div className="row">
                <h4>Circulating Supply</h4>
                {coin.market_data ? (
                  <p>${coin.market_data.circulating_supply.toLocaleString()}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="coin-container">
        <div className="content row">
          <div className="about">
            <h3>About</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description ? coin.description.en : ""
                ),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinDetail;
