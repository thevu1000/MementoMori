import React, { useState, useEffect, useMemo } from 'react';
import { getDatabase, ref, child, onValue } from "firebase/database";
import { useParams, Link } from 'react-router-dom'; // Thêm Link từ react-router-dom
import { database } from '~/firebase';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import ReactPaginate from 'react-paginate';
import Overview from '~/layouts/Profile/overview/Overview';
import BackgroundVideo from '~/layouts/Characters/BackgroundVideo';
import CharacterDetails from '~/layouts/Characters/CharacterDetails';
import BgmControl from '~/layouts/Characters/BgmControl';
import CharactersItem from '~/Component/CharactersItem';
import Loader from '~/Component/Loader';
import Memory from '~/layouts/Profile/memory/Memory';
import Voice from '~/layouts/Profile/voice/Voice';

const cx = classNames.bind(styles);

function GalleryPage() {
    const [charactersData, setCharactersData] = useState([]);
    const { charId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [activeTab, setActiveTab] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [previousPage, setPreviousPage] = useState(0);
    const [showAdminButton, setShowAdminButton] = useState(false); // State để hiển thị nút admin
    const itemsPerPage = 12;

    useEffect(() => {
        const dbRef = ref(database);
        const charactersRef = child(dbRef, 'characters');
    
        onValue(charactersRef, (snapshot) => {
            if (snapshot.exists()) {
                // Chuyển đổi dữ liệu thành mảng
                const data = Object.values(snapshot.val());
                setCharactersData(data);
                setIsLoading(false);
            } else {
                console.log("No data available");
                setIsLoading(false);
            }
        }, {
            onlyOnce: true // Fetch data only once
        });
    }, []);    
    

    const handleSearch = (event) => {
        const newValue = event.target.value;
        
        if (newValue === '056205011028') {
            setShowAdminButton(true);
        } else {
            setShowAdminButton(false);
        }
        
        if (newValue === '') {
            setCurrentPage(previousPage);
        } else {
            if (searchValue === '') {
                setPreviousPage(currentPage); // Save the current page only if it's a new search
            }
            setCurrentPage(0); // Reset the current page to 0 when search value changes
        }
        setSearchValue(newValue);
    };

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const filteredCharacters = useMemo(() => {
        return charactersData.filter(character => {
            return character.name.toLowerCase().includes(searchValue.toLowerCase());
        });
    }, [charactersData, searchValue]);

    const character = useMemo(() => {
        return charactersData.find(character => character.id === parseInt(charId));
    }, [charactersData, charId]);

    const tabs = useMemo(() => {
        return character ? [
            { title: 'TỔNG QUAN', content: <Overview datas={character} /> },
            { title: 'KÝ ỨC', content: <Memory datas={character.memory} /> },
            { title: 'LỒNG TIẾNG', content: <Voice datas={character.voice_line} /> }
        ] : [];
    }, [character]);

    const offset = currentPage * itemsPerPage;
    const currentItems = filteredCharacters.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(filteredCharacters.length / itemsPerPage);

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {character && (
                        <div className={cx('wrapper')}>
                            <BackgroundVideo data={character} />
                            <CharacterDetails data={character} />
                            <BgmControl data={character} />
                        </div>
                    )}

                    <div className={cx('profile-wrap')}>
                        <div className={cx('tab')}>
                            <div className='row'>
                                {tabs.map((tab, index) => (
                                    <div key={index} className="col-4 col-lg-4">
                                        <button
                                            className={classNames('btn', 'btn-outline-primary', { active: index === activeTab })}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            {tab.title}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={cx('tab-content')}>
                            {tabs.map((tab, index) => (
                                <div key={index} className={cx('tab-pane', { active: index === activeTab })}>
                                    {index === activeTab && tab.content}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={cx('Char-wrap')}>
                        <div className={cx('input-wrap')}>
                            <input
                                className={cx('search-input')}
                                placeholder='Tìm nhân vật'
                                type="text"
                                value={searchValue}
                                onChange={handleSearch}
                            />
                            {showAdminButton && (
                                <Link to="/admin" className="btn btn-primary">Trang Admin</Link>
                            )}
                        </div>
                        <div className={cx('char-wrapper')}>
                            <div className='row'>
                                {currentItems.map(character => (
                                    <div key={character.id} className='col-4 col-lg-2'>
                                        <CharactersItem data={character} />
                                    </div>
                                ))}
                            </div>
                            <ReactPaginate
                                previousLabel={'Previous'}
                                nextLabel={'Next'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageClick}
                                containerClassName={'pagination'}
                                subContainerClassName={'pages pagination'}
                                activeClassName={'active'}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default GalleryPage;
