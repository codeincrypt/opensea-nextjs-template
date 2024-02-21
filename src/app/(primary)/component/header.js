"use client";
import { useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdWallet } from "react-icons/md";

export default function Header() {

  const [login, setLogin] = useState(false);
  return (
    <div id="header">
      <nav className="navbar navbar-expand-lg navbar-light nav-pad">
        <a href="/">
          <img
            src="https://altcoinsbox.com/wp-content/uploads/2023/03/full-opensea-logo.png"
            alt=""
            className="logo"
          />
        </a>

        <ul className="navbar-nav mr-auto ml-4">
          <li className="nav-item mx-2">
            <a className="text-dark font-weight-bold nav-link" href="/drops">
              Drops
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="text-dark font-weight-bold nav-link" href="/stats">
              Stats
            </a>
          </li>
          <li className="nav-item mx-2">
            <a
              className="text-dark font-weight-bold nav-link"
              href="/studio/create"
            >
              Create
            </a>
          </li>
        </ul>

        <span className="mx-auto">
          <div className="search-box">
            <span className="icon">
              <i className="fa fa-search"></i>
            </span>
            <input
              type="text"
              name="search"
              id="search"
              className="search"
              autoComplete="off"
              placeholder="Search"
            />
            <span className="right">/</span>
          </div>
        </span>
        <span className="navbar-text">
          {login === true ? (
            <>
              <a className="btn main-btn">
              <MdWallet className="h4 mb-0" /> 
                1.439 ETH <span className="text-muted px-1">|</span>
                0.2 WETH
              </a>
              <a className="btn main-btn" href="/account/created">
                <img src="https://i.seadn.io/s/raw/files/d41a9f52c66cc36c269d49f4b6c76651.jpg?auto=format&dpr=1&w=1920" />
              </a>
            </>
          ) : (
            <>
              <a className="btn main-btn">
              <MdWallet className="h4 mb-0" /> Login
              </a>
              <a className="btn main-btn" href="/account/created">
              <FaRegUserCircle className="h4 mb-0" />
              </a>
            </>
          )}

          <a className="btn main-btn">
          <MdOutlineShoppingCart className="h4 mb-0" />
          </a>
        </span>
      </nav>
    </div>
  );
}
