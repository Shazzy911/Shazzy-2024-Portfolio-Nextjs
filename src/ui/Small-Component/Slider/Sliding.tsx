"use client";

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import All 5 Images
import Image from 'next/image';
import Hero1 from "@/images/project/project-image01.png";
import Hero2 from "@/images/project/project-image02.png";
import Hero3 from "@/images/project/project-image03.png";
import Hero4 from "@/images/project/project-image04.png";
import Hero5 from "@/images/project/project-image05.png";


import styles from "./Sliding.module.scss";
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Sliding = () => {
  return (
    <>
      <div className={styles.Container}>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          className={"mySwiper"}
        >


          <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image src={Hero1} height={665} width={980} alt="Image not found" className={styles.img} />
          </SwiperSlide>
          <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image src={Hero2} height={665} width={980} alt="Image not found" className={styles.img} />
          </SwiperSlide>
          <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image src={Hero3} height={665} width={980} alt="Image not found" className={styles.img} />
          </SwiperSlide>
          <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image src={Hero4} height={665} width={980} alt="Image not found" className={styles.img} />
          </SwiperSlide>
          <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image src={Hero5} height={665} width={980} alt="Image not found" className={styles.img} />
          </SwiperSlide>
        </Swiper>
      </div>



    </>
  )
}

export default Sliding

