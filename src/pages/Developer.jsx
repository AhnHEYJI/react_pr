import React from 'react'
import Main from '../components/section/Main'
import { developerText } from '../data/developer'
import { Link } from 'react-router-dom' 
import { useState,useEffect } from 'react' 

const Developer = () => {
    const[loading,setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },300);
    },[]);
    const developerPageClass = loading ? 'isLoading':'isLoaded';

  return (
   <Main title = "추천 개발자 유튜브 채널" 
        description="Today 추천 개발자 유튜브 채널입니다.."> 
      <section id='developerPage' className={developerPageClass}>
        <h2>🧑‍💻 개발자 추천 유튜브 채널</h2>
             <div className="developer__inner">
                {developerText.map((developer, key) => (
                    <div className="developer" key={key}>
                        <div className="developer__img play__icon">
                            <Link to={`/channel/${developer.channelId}`}>
                                <img src={developer.img} alt={developer.name} />
                            </Link>
                        </div>
                        <div className="developer__info">
                            <Link to={`/channel/${developer.channelId}`}>
                                {developer.name}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
      </section>
   </Main>
  )
}

export default Developer