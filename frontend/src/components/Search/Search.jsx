import React, { Fragment } from "react";
import { IoIosSearch } from "react-icons/io"

const SearchBar = ({ style }) => {
    return (
        <Fragment>
            <input
                type="search"
                placeholder="Search your product..."
                className={style.searchbar}
            />
            <IoIosSearch
                className={style.search_icon}
                type="submit"
            />
        </Fragment>
    )
}

export default SearchBar