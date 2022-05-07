import Link from "next/link";
import {useState} from "react";
import PropTypes from "prop-types";
import {useRouter} from "next/router";
import {Form, Input} from "@bootstrap";
import {IoSearchOutline} from "react-icons/io5";
import {SearchBoxWrap, SearchBox, SearchButton} from "./style";
import {OffCanvasCloseBtn} from "@components/ui/offCanvas/style";

const SearchForm = ({isShow, onHandler}) => {
    const router = useRouter();
    const [searchParam, setSearchParam] = useState('');

    const onSearchFormHandler = (event) => {
        event.preventDefault();
        onHandler();
        router.push(`/search/${searchParam}`);
    }

    const onChangeHandler = (event) => {
        setSearchParam(event.target.value);
    }

    return (
        <SearchBoxWrap show={isShow}>
            <SearchBox>
                <div className="form-wrap">
                    <Form onSubmit={onSearchFormHandler}>
                        <Input
                            type="search"
                            name="search"
                            className="furns-form-control"
                            placeholder="Enter your search keyword..."
                            onChange={onChangeHandler}
                        />
                        <SearchButton type="submit" onClick={onSearchFormHandler}>
                            <IoSearchOutline/>
                        </SearchButton>
                    </Form>

                    <div className="popular-searches">
                        <h4>Popular Searches:</h4>
                        <ul>
                            <li><Link href="/search/bed">bed</Link></li>
                            <li><Link href="/search/chair">chair</Link></li>
                        </ul>
                    </div>

                    <OffCanvasCloseBtn onClick={() => onHandler()}/>
                </div>
            </SearchBox>
            <div className="overlay" onClick={() => onHandler()}/>
        </SearchBoxWrap>
    );
};

SearchForm.propTypes = {
    isShow: PropTypes.bool.isRequired,
    onHandler: PropTypes.func.isRequired,
};

export default SearchForm;
