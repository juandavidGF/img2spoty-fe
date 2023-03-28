import React, { useState } from 'react';
import styles from '@/styles/DropZone.module.css';
import { Upload as UploadIcon } from "lucide-react";
import sleep from "../utils/sleep";
import Image from 'next/image'

const ImageDropZone = ({ handleImgChange, loading, setLoading, imgURL }) => {

	const [videoState, setVideoState] = useState("Upload the Image");

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    if (files.length) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
				setLoading(true);
				await sleep(3_000);
				setLoading(false);
				setVideoState("Uploaded")
        // Handle the image or video file here
				handleImgChange(file);
      }
    }
  };

  const handleClick = () => {
    document.getElementById('file-input').click();
  };

  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (file.type.startsWith('image/')) {
			setLoading(true);
			await sleep(3_000);
			setLoading(false);
			setVideoState(" Image Uploaded")
      // Handle the image or video file here
			handleImgChange(file);
    }
  };

  return (
    <div 
			id="drop-zone" 
			className={styles.dropZone}
			onClick={handleClick}
			onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}
		>
			{loading ? (
        <div className={styles.loading}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      ) : imgURL ? (
				<Image 
					src={imgURL} 
					width={300}
					height={300}
				/>
			) : (
				<div>
					<input type="file" id="file-input" className={styles.fileInput} accept="image/*" onChange={handleChange} />
					<p>
						<UploadIcon className="icon" />
						{videoState}
					</p>
				</div>
      )}
    </div>
  );
};

export default ImageDropZone;
