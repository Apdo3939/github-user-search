import React, { useState } from 'react';

const Usersearch = () => {

    const [search, setSearch] = useState('');

    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const onClickSearch = () => {
        console.log('click!!!');
    }

    return (
        <>
            <form >
                <input
                    value={search}
                    name="search"
                    onChange={onChangeSearch}
                    className="search-input"
                />

                <button
                    type="button"
                    className="search-button"
                    onClick={onClickSearch}>
                    <h4 className="search-button-text">Encontrar</h4>
                </button>
            </form>

            <div>
                {search}
            </div>

        </>
    );
}

export default Usersearch;