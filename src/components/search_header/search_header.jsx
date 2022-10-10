import React, { useRef } from 'react';
import styles from './search_header.module.css';
import logo from '../../images/logo.png';
import search from '../../images/search.png';

const SearchHeader = ({onSearch}) => {
    const inputRef = useRef(null);

    const searchVideos = () => {
        onSearch(inputRef.current.value);
    };

    const onClick = () => {
        searchVideos();
    };

    const onKeyPress = (event) => {
        if (event.code === 'Enter')
        searchVideos();
    };

    return <header className={styles.header}>
        <div className={styles.logo}>
            <img className={styles.img} src={logo} alt="logo" />
            <h1 className={styles.title}>Youtube</h1>
        </div>
        <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress}/>
        <button className={styles.button} type="submit" onClick={onClick}>
            <img className={styles.buttonImg} src={search} alt="search" />
        </button>
    </header>;
};

export default SearchHeader;