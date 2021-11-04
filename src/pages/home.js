import React, {useState} from 'react';

import '../styles/listing.scss';
import '../styles/forms.scss';
import '../styles/buttons.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import {contentData} from '../feed/data';
import search from '../assets/images/search.svg';
import arrowDown from '../assets/images/arrow-down.svg';
import arrowUp from '../assets/images/arrow-up.svg';

const Home = () => {
  const [isAscending, setSortType] = useState(true);

  const sortFuntion = () => {
    setSortType(!isAscending)
  }

  return (
    <>
      <Header />
      <div className="listing">
        <div className="container">
          <div className="search-sort-wrapper">
            <div className="search-wrapper">
              <form className="desktop-search">
                <label>
                  <button><img src={search} alt="" /></button>
                  <input type="text" name="search" placeholder="Search for mountains" />
                </label>
              </form>
              <form className="mobile-search">
                <label>
                  <button><img src={search} alt="" /></button>
                  <input type="text" name="search" placeholder="Search" />
                </label>
              </form>
            </div>
            <div className="sort-wrapper">
              <button onClick={sortFuntion}>{isAscending ? <>Sort a A - Z <img src={arrowDown} alt="" /></> : <>Sort a Z - A <img src={arrowUp} alt="" /></>}</button>
            </div>
          </div>
          <div className="listing-wrapper">
              {contentData.map((item, i ) => {
                const sorted = contentData.sort((a,b) => {
                  const isReversed = (isAscending === true) ? 1 : -1;
                  return isReversed * a.id.localeCompare(b.id)
                });
                return (
                  <div className="listing-holder" key={i}>
                    <img src={item.image} alt="" />
                    <p className="title">{item.title}</p>
                    <p className="desc">{item.title_long}</p>
                  </div>
                )
              })
            }
          </div>
          <div className="pagination-wrapper">
            <div className="pagination-btns-wrapper">
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>...</button>
              <button>9</button>
            </div>
            <button className="btn-primary">Show next</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
