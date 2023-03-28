import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import DropZone from "../components/DropZone"
import React, { useState } from 'react'
import sleep from "../utils/sleep"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

	const [loading, setLoading] = useState(false);
	const [imgURL, setImgURL] = useState(null);


	const handleTranslate = async () => {
		if(!imgURL) {
			alert("Please upload a video");
			return;
		}

		setLoading(true);
		await sleep(10_000);
		const urlImg = '/video_with_captions.mp4';
		setLoading(false);
		setImgURL(urlImg);
	}


	const handleVideoChange = async (newImg) => {
		const urlImg = URL.createObjectURL(newImage);
    setImgURL(urlImg);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
				<div className={styles.inputContainer}>
					<DropZone onVideoChange={handleVideoChange} loading={loading} setLoading={setLoading} imgURL={imgURL}/>
					<input type="text" id="file-input" className={styles.textInput} placeholder="https://images.unsplash.com/photo-1679948205100-b4a9270b23ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80" />
				</div>
				<button onClick={handleTranslate}>Translate</button>
      </main>
    </>
  )
}