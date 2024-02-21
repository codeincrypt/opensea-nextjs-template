"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Mint() {
  function removeImg() {
    const textSection = document.getElementById("text-section");
    const previewContainer = document.getElementById("dragdrop");
    const removeBtn = document.getElementById("remove-btn");
    textSection.style.display = "";
    removeBtn.style.display = "none";
    previewContainer.style.backgroundImage = "url()";
  }

  const [highlight, setHighlight] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [showTextSection, setShowTextSection] = useState(true);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setHighlight(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setHighlight(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setHighlight(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    if (!files || files.length === 0) return;

    const file = files[0];
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
        setShowTextSection(false);
      };
      reader.readAsDataURL(file);
    } else {
      console.log(`${file.name} is not a valid image file.`);
    }
  };

  return (
    <>
      <div className="mb-4"></div>
      <div className="container-max">
        <div className="col-lg-12 my-5">
          <div className="row">
            <div className="col-lg-5">
              <h3 className="font-weight-bold">Create an NFT</h3>
              <p>Once your item is minted you will not be able to change any of its information.</p>
              {/* <div>
                <button className="remove-img-btn" id="remove-btn" onclick="removeImg()">
                  <i className="fa fa-trash"></i>
                </button>
                <div className="dragdrop justify-content-center mainbox" id="dragdrop">
                  <section className="text-center" id="text-section">
                    <input id="media" name="media" type="file" tabindex="-1" style="display: none;"
                      accept="image/*" />
                    <i className="fa fa-upload mb-3" style="font-size: 26px;"></i>
                    <p className="mb-0" style="font-size: 16px;font-weight: 600;">Drag and drop media</p>
                    <p className="mb-0" style="font-size: 14px;font-weight: 600;color: #007aff;">Browse files</p>
                    <p className="mb-0" style="font-size: 14px;">Max size: 50MB</p>
                    <p className="mb-0" style="font-size: 14px;">JPG, PNG, GIF, SVG, MP4</p>
                  </section>
                </div>

              </div> */}
              <div
                id="dragdrop"
                className={`drop-area ${highlight ? 'highlight' : ''}`}
                onClick={() => fileInput.click()}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  id="media"
                  style={{ display: 'none' }}
                  onChange={handleFileInputChange}
                />
                <div
                  id="preview-container"
                  style={{ backgroundImage: `url(${previewImage})`, backgroundSize: 'cover' }}
                ></div>
                <div id="text-section" style={{ display: showTextSection ? 'block' : 'none' }}>
                </div>
                <button id="remove-btn" style={{ display: showTextSection ? 'none' : 'block' }}>
                  Remove
                </button>
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