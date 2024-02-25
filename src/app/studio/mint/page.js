"use client"
import { useRef, useState } from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { HiOutlineUpload } from "react-icons/hi";

import "./../../import.css";
export default function Mint() {
  const fileInput = useRef(null);

  const [removeImage, setRemoveImage] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const [showTextSection, setShowTextSection] = useState(true);

  function removeImg() {
    const textSection = document.getElementById("text-section");
    const previewContainer = document.getElementById("dragdrop");
    textSection.style.display = "";
    previewContainer.style.backgroundImage = "url()";
    setRemoveImage(false)
  }

  function handleFiles(files) {
    if (!files || files.length === 0) return;

    [...files].forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
          const previewContainer = document.getElementById("dragdrop");
          const textSection = document.getElementById("text-section");

          previewContainer.style.backgroundImage = `url(${reader.result})`;
          previewContainer.style.backgroundSize = "cover";
          textSection.style.display = "none";
          setRemoveImage(true)
        };
        reader.readAsDataURL(file);
      } else {
        console.log(`${file.name} is not a valid image file.`);
      }
    });
  }

  function handleFileInputChange(e) {
    const files = e.target.files;
    handleFiles(files);
  }

  function handleDragEvents(e) {
    setHighlight(true);
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDrop(e) {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFiles(files);
  }

  function handleDragLeave(e){
    setHighlight(false);
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <>
      <div className="container-max mt-4">
      <div>
        <Link href="/studio/create" className="icons"><FiArrowLeft className="h5 mb-0" /></Link>
      </div>
        <div className="col-lg-12 my-5">
          <div className="row">
            <div className="col-lg-5">
              <h3 className="font-weight-bold">Create an NFT</h3>
              <p>Once your item is minted you will not be able to change any of its information.</p>
              <div>
                {removeImage === true ? (
                <button className="remove-img-btn" id="remove-btn" onClick={removeImg}>
                  <BsTrash />
                </button>
                ):null}
                <div
                  id="dragdrop"
                  className={`dragdrop justify-content-center mainbox drop-area ${highlight ? 'highlight' : ''}`}
                  onClick={() => fileInput.current.click()}
                  onDragEnter={handleDragEvents}
                  onDragOver={handleDragEvents}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <section className="text-center" id="text-section">
                    <span className="fa fa-upload mb-3" style={{ fontSize: 30 }}><HiOutlineUpload /> </span>
                    <p className="mb-0" style={{ fontSize: 16, fontWeight: 600 }}>Drag and drop media</p>
                    <p className="mb-0" style={{ fontSize: 14, fontWeight: 600, color: '#007aff' }}>Browse files</p>
                    <p className="mb-0" style={{ fontSize: 14 }}>Max size: 50MB</p>
                    <p className="mb-0" style={{ fontSize: 14 }}>JPG, PNG, GIF, SVG, MP4</p>
                    <input
                      type="file"
                      id="media"
                      style={{ display: 'none' }}
                      onChange={handleFileInputChange}
                      ref={fileInput}
                    />
                  </section>
                  <div
                    id="preview-container"
                    style={{ backgroundImage: 'url()', backgroundSize: 'cover' }}
                  ></div>
                  <div id="text-section" style={{ display: showTextSection ? 'block' : 'none' }}>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-1">
            </div>
            <div className="col-lg-5">
              <div className="form-group mt-4">
                <h6 className="font-weight-bold">Collection *</h6>
                <Link href="#" className="nones">
                  <div className="collection-box">
                    <div className="row px-2">
                      <div className="col-lg-2 ">
                        <div className="box1 justify-content-center">
                          <i className="fa fa-server"></i>
                        </div>
                      </div>
                      <div className="col-lg-9" style={{ display: 'flex', alignItems: 'center' }}>
                        <h5>Choose a collection</h5>
                      </div>
                      <div className="col-lg-1" style={{ display: 'flex', alignItems: 'center' }}>
                        <i className="fa fa-chevron-down text-muted"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="form-group mt-4">
                <h6 className="font-weight-bold">Name *</h6>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group mt-4">
                <h6 className="font-weight-bold">Supply *</h6>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group mt-4">
                <h6 className="font-weight-bold">Description *</h6>
                <textarea type="text" className="form-control"></textarea>
              </div>
              <div className="form-group mt-4">
                <h6 className="font-weight-bold">External Link</h6>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group mt-4">
                <h6 className="font-weight-bold">Traits</h6>
                <p>Traits describe attributes of your item. They appear as filters inside your collection page
                  and are also listed out inside your item page.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}