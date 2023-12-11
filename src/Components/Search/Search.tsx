import { FC, useState } from 'react';

import { Link } from 'react-router-dom';

import { useGetProductsQuery } from '../../features/apiSlice';

import { IProduct } from '../../interfaces/interfaces';

import cl from './Search.module.scss'

const Search: FC= () => {

    const [search, setSearch] = useState<string>('');

    const { data } = useGetProductsQuery('');

    const handleSearch = data?.filter((elem: IProduct) => elem.title?.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <input
                type='search'
                className={cl.searchInput}
                placeholder='Search...'
                onChange={(e) => setSearch(e.target.value)}
            />

            <span>
                {search && 
                <div className={cl.searchBlock}>
                    {handleSearch?.length ?
                        handleSearch?.map((item: IProduct) =>
                            <Link to={`product/${item.id}`}
                                className={cl.item}
                                key={item.id}
                            >
                                <img src={item.image} alt={item.title} />
                                <h5>{item.title}</h5>
                            </Link>
                        )
                        : <div className={cl.item}>no result</div>
                    }
                </div>
                }
            </span>
        </>
    );
};

export default Search;