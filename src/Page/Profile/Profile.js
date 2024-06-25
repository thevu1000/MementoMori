import React, { useState, useEffect, useMemo } from 'react';
import { getDatabase, ref, child, onValue } from "firebase/database";
import { useParams } from 'react-router-dom';
import { database } from '~/firebase';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
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

    useEffect(() => {
        const dbRef = ref(database);
        const charactersRef = child(dbRef, 'characters');

        onValue(charactersRef, (snapshot) => {
            if (snapshot.exists()) {
                setCharactersData(snapshot.val());
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
        setSearchValue(event.target.value);
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
            { title: 'TỔNG QUAN', content: <Overview datas={character}/> },
            { title: 'KÝ ỨC', content: <Memory datas={character.memory}/>},
            { title: 'LỒNG TIẾNG', content: <Voice datas={character.voice_line}/> }
        ] : [];
    }, [character]);

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
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    className={cx({ active: index === activeTab })}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {tab.title}
                                </button>
                            ))}
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
                        </div>
                        <div className={cx('char-wrapper')}>
                            {filteredCharacters.map(character => (
                                <CharactersItem key={character.id} data={character} />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default GalleryPage;
