import React, { useState, useEffect } from 'react';
import { getDatabase, ref, child, onValue } from "firebase/database";
import { useParams } from 'react-router-dom';
import { database } from '~/firebase';
import styles from './Characters.module.scss';
import classNames from 'classnames/bind';
import BackgroundVideo from '~/layouts/Characters/BackgroundVideo';
import CharacterDetails from '~/layouts/Characters/CharacterDetails';
import BgmControl from '~/layouts/Characters/BgmControl';
import CharactersItem from '~/Component/CharactersItem';
import Loader from '~/Component/Loader';

const cx = classNames.bind(styles);

function GalleryPage() {
    const [charactersData, setCharactersData] = useState([]);
    const { charId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');

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

    const filteredCharacters = charactersData.filter(character => {
        return character.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    const character = charactersData.find(character => character.id === parseInt(charId));
    console.log(character);
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
