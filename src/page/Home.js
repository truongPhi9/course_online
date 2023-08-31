import React from 'react'
import ListElement from '../components/ListElement';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const listBanner = [
  {
    id: 1,
    urlBanner: 'https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png',
    title: 'Học ReactJS Miễn Phí',
    describe: 'Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.',
    colorBanner: 'bg-gradient-to-r from-sky-500 to-indigo-500',
    colorText: 'text-sky-500',
  },
  {
    id: 2,
    urlBanner: 'https://files.fullstack.edu.vn/f8-prod/banners/20/6308a6bf603a4.png',
    title: 'Khóa Học HTML, CSS Pro',
    describe: 'Đây là khóa học đầy đủ và chi tiết nhất bạn có thể tìm thấy được ở trên Internet!',
    colorBanner: 'bg-gradient-to-r from-purple-500 to-indigo-500',
    colorText: 'text-purple-500',
  },
  {
    id: 3,
    urlBanner: 'https://files.fullstack.edu.vn/f8-prod/banners/Banner_01_2.png',
    title: 'Thành Quả Của Học Viên',
    describe: 'Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.',
    colorBanner: 'bg-gradient-to-r from-red-500 to-indigo-500',
    colorText: 'text-red-500',
  },
]

export default function Home() {
  const [ data, setData ] = useState([]);
  const [ dataBlog, setDataBlog ] = useState([]);

  const urlCourse = "http://localhost:8000/Course";
  const urlBlog = "http://localhost:8000/Blog";

  useEffect(() => {
    fetch(urlCourse)
    .then(response => response.json())
    .then(json => {
      setData(json);
    })

    fetch(urlBlog)
    .then(response => response.json())
    .then(json => {
      setDataBlog(json);
    })
    .catch(e => console.log("Error: ", e))
  }, [])

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {listBanner.map(items => (
          <SwiperSlide key={items.id} data-hash={`slide${items.id}`}>
            <div className={`w-full h-fit ${items.colorBanner} rounded-2xl grid grid-cols-5 items-center`}>
              <div className='p-9 text-white col-span-3'>
                <h2 className='text-4xl font-bold mb-3'>{items.title}</h2>
                <p className='text-lg mb-6'>{items.describe}</p>
                <a href='#Click' className={`px-4 py-2 border-2 rounded-full font-bold`}>Tìm hiểu thêm</a>
              </div>
              <div className='col-span-2 h-72'>
                <div style={{ backgroundImage: `url(${items.urlBanner})` }} className='w-full h-full bg-center bg-contain bg-no-repeat'></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* page list course */}
      <div className='w-full h-fit, mt-20'>
        <ListElement title="Khóa học miễn phí" dataElement={data} router='/course-detail' />
      </div>
      {/* page BLog */}
      <div>
        <ListElement title="Bài viết nổi bật" dataElement={dataBlog} router='/blog-detail' />
      </div>
    </div>
  )
}
