import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/section/Main'
import VideoSearch from '../components/videos/VideoSearch'
import { fetchFromAPI } from '../utils/api'


// 이 컴포넌트는 검색결과를 표시하는 페이지로 유튜브 API를 사용하여 검색결과를 가져오고 표시합니다.
const Search = () => {
    const { searchId } = useParams();
    const [ videos, setVideos ] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [ loading, setLoading ] = useState(true);  //로딩 상태를 나타내는 상태변수
  
    // 다음 페이지의 결과를 가져오기 위한 토큰을 저장하는 상태입니다.
    // 초기값은 null이며, API 응답에서 받은 nextPageToken으로 업데이트됩니다.
    useEffect(() => {
        setVideos([]);
        fetchVideos(searchId);
    }, [searchId]);

    const fetchVideos = (query, pageToken = '') => {
        fetchFromAPI(`search?part=snippet&q=${query}&pageToken=${pageToken}`)
            .then((data) => {
                setNextPageToken(data.nextPageToken);
                setVideos((prevVideos) => [...prevVideos, ...data.items]);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    };
    const handleLoadMore = () => {
        if (nextPageToken) { //nextPageToken은 다음 페이지의 토큰을 저장/ 사용하여 API호출시 다음페이지의 결과를 가져옵니다.
            fetchVideos(searchId, nextPageToken); //검색결과를 가져옵니다.
        }
    };


    return (
        <Main 
            title = "유투브 검색"
            description="유튜브 검색 결과 페이지입니다.">
            
            <section id='searchPage'>
                <h2><em>검색결과입니다.</em></h2>
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>
                <div className='video__more'>
                    {nextPageToken&&(
                        <button onClick={handleLoadMore}>더보기</button> //handleLoadMore = 더보기 버튼 클릭시호출되는 함수로 nextPageToken이 있을 때만 추가 데이터를 로드합니다.
                    )}
                </div>
            </section>
        </Main>
    )
}

export default Search