import Link from "next/link";
import { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { Form, Input } from "@bootstrap";
import { IoSearchOutline } from "react-icons/io5";
import { SearchBoxWrap, SearchBox, SearchButton } from "./style";
import scrollTop from "../../../assets/image/header/scrollTop.png";

import { OffCanvasCloseBtn } from "@components/ui/offCanvas/style";

import { useSelector, useDispatch } from "react-redux";
import { changeIsShowSearchModelAction } from "@global/actions/cardActions";
const SearchForm = ({ isShow, onHandler }) => {
  var dispatch = useDispatch();
  var cardData = useSelector(state => state.cardReducer);
  const router = useRouter();
  const [searchParam, setSearchParam] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(false);

  const onSearchFormHandler = (event) => {
    event.preventDefault();
    // onHandler();
    // router.push(`/search/${searchParam}`);
    console.log("here");
  };
  const onChangeHandler = (event) => {
    setSearchParam(event.target.value);
  };

  return (
    <SearchBoxWrap show={cardData.isShowSearchModel}>
      <SearchBox style={{position: 'fixed', maxWidth: '1440px'}}>
          <div className="form-wrap">
            <Form onSubmit={onSearchFormHandler}>
              <input type="text" placeholder="Search" className="searchInput" />
              <select id="selectoption" className="selectoption">
                <option value="volvo">All Categories</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <SearchButton type="submit" onClick={onSearchFormHandler}>
                <IoSearchOutline />
              </SearchButton>
              <div
                className="close_search"
                onClick={() => dispatch(changeIsShowSearchModelAction(false))}
              >
                <div>
                  <img
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block"
                    }}
                    src={scrollTop.src}
                  />
                </div>
                <div style={{ textAlign: "center", paddingTop: "10px" }}>close</div>
              </div>
            </Form>
          </div>

      </SearchBox>
      <div className="overlay" onClick={() => onHandler()} />
    </SearchBoxWrap>
  );
};

SearchForm.propTypes = {
  isShow: PropTypes.bool.isRequired,
  onHandler: PropTypes.func.isRequired,
};

export default SearchForm;
