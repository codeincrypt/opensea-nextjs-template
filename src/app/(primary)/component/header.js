"use client";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdWallet } from "react-icons/md";
import Link from "next/link";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { RxCross2 } from "react-icons/rx";

export default function Header() {
  const [login, setLogin] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div id="header">
      <nav className="navbar navbar-expand-lg navbar-light nav-pad">
        <Link href="/">
          <img
            src="https://altcoinsbox.com/wp-content/uploads/2023/03/full-opensea-logo.png"
            alt=""
            className="logo"
          />
        </Link>

        <ul className="navbar-nav mr-auto ml-4">
          <li className="nav-item mx-2">
            <Link className="text-dark font-weight-bold nav-link" href="/drops">
              Drops
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="text-dark font-weight-bold nav-link" href="/stats">
              Stats
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link
              className="text-dark font-weight-bold nav-link"
              href="/studio/create"
            >
              Create
            </Link>
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
              <button className="btn main-btn">
                <MdWallet className="h4 mb-0" />
                1.439 ETH <span className="text-muted px-1">|</span>
                0.2 WETH
              </button>
              <Link className="btn main-btn" href="/account/created">
                <img src="https://i.seadn.io/s/raw/files/d41a9f52c66cc36c269d49f4b6c76651.jpg?auto=format&dpr=1&w=1920" />
              </Link>
            </>
          ) : (
            <>
              <button className="btn main-btn" onClick={handleShow}>
                <MdWallet className="h4 mb-0" /> Login
              </button>
              <Link className="btn main-btn" href="/account/created">
                <FaRegUserCircle className="h4 mb-0" />
              </Link>
            </>
          )}

          <button className="btn main-btn">
            <MdOutlineShoppingCart className="h4 mb-0" />
          </button>
        </span>
      </nav>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="float-right">
        <RxCross2 />
        </Modal.Header>
        <Modal.Body className="p-4 text-center">
          <img src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.png" alt="opensea-test" 
          style={{width:100}}
          className="mb-3"
          />
          <h5>Connect to OpenSea</h5>
        </Modal.Body>
      </Modal>

    </div>
  );
}
