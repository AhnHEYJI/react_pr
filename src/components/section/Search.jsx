import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// 검색 컴포넌트의 목적은 검색입력필드를 제공하여 사용자가 입력하고 엔터를 누르면 검색키워드를 포함하는 새로운 URL로 이동하는 것입니다.
const Search = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log(searchKeyword)
        if (searchKeyword) {
            navigate(`/search/${searchKeyword}`);
            setSearchKeyword('');
        }
    };

    return (
        <div id='search'>
            <div className='search__inner'>
                <label htmlFor='searchInput'>
                    <span className='ir'>검색</span>
                </label>
                <input 
                    type='search' 
                    id='searchInput' 
                    placeholder='검색어를 입력해주세요' 
                    autoComplete='off' 
                    className='search__input' 
                    onChange={e => setSearchKeyword(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Search