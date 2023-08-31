import React from 'react'
// import LessonContent from '../components/LessonContent'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCirclePlay } from '@fortawesome/free-solid-svg-icons'

export default function CourseDetail() {
  const [data, setData] = useState([]);
  const [video, setVideo] = useState("");
  const [title, setTitle] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const { id } = useParams();
  const urlCourse = `http://localhost:8000/Course/${id}`;
  useEffect(() => {
    fetch(urlCourse)
      .then(res => res.json())
      .then(json => { setData(json) })
      .catch(e => console.log("Error: ", e))
  }, [urlCourse]);

  if (data.ListCourse) {
    return (
      <div className='w-full h-fit grid grid-cols-3 pb-10'>
        <div className='col-span-2 pr-4'>
          <h3 className='text-2xl mb-4 font-bold text-stone-600'>{data.title}</h3>
          <ReactPlayer
            width={"100%"}
            height={"400px"} 
            url={video === "" ? data.ListCourse[0].Video[0].VideoLesson : video }
            controls={true}
          />
          <h2 className="text-2xl mt-4 font-semibold text-slate-800">{title === "" ? data.ListCourse[0].Video[0].LessonTitle : title}</h2>
        </div>
        <div className='col-span-1'>
          <h3 className='text-2xl mb-4 font-medium text-stone-600'>Nội dung bài học</h3>
          <div className='w-full h-fit overflow-auto'>
            {data.ListCourse.map(item => (
              <div key={item.TitleSesion} className='snap-y'>
                <div
                  className='flex justify-between items-center px-5 py-3 bg-gray-200 border-b-2 border-b-gray-300 cursor-pointer'
                  onClick={handleClick}
                >
                  <h3 className='text-lg'>{item.TitleSesion}</h3>
                  <FontAwesomeIcon className={`${isDropdownOpen ? 'rotate' : 'rotate-180'}`} icon={faChevronDown} />
                </div>
                <div className={`${isDropdownOpen ? 'hidden' : 'block'}`}>
                  {item.Video.map(e => (
                    <div 
                      key={e.LessonTitle} 
                      onClick={() => { 
                        setVideo(e.VideoLesson) 
                        setTitle(e.LessonTitle) }
                      } 
                      className='flex gap-3 items-center py-5 px-3 text-base cursor-pointer hover:bg-slate-300'
                    >
                      <FontAwesomeIcon icon={faCirclePlay} color="rgb(37 99 235" />
                      <p>{e.LessonTitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
