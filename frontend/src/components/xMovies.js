import React, { useMemo, useState, useContext } from "react";
import context from "./xapiContext";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  PlayCircleFilled,
  Visibility,
  Create,
  Delete
} from "@material-ui/icons";

import styled from "styled-components";
const Tab = styled.button`
  font-size: 1em;
  padding: 5px 20px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid purple;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const tabs = [
  {
    title: "All",
    label: "All",
    content: date => item => item.Title.length > 0
  },
  {
    title: "Now Showing",
    label: "Now",
    content: date => item =>
      date > Date.parse(item.OpeningDate.substring(0, 10))
  },
  {
    title: "Coming Soon",
    label: "Soon",
    content: date => item =>
      date < Date.parse(item.OpeningDate.substring(0, 10))
  }
];

const dummyData = new Array(4).fill({
  Id: "00000001",
  Title: "Placeholder",
  Rating: "N/A",
  FilmPosterUrl:
    "https://ticketing.eu.veezi.com/Media/Poster?siteToken=njvxyxv49n49mrr4xgetqrpfrw&code=0000000427&isHighRes=true",
  OpeningDate: "2021-01-02"
});

console.log(dummyData);

function Movies() {
  const responsive = {
    0: {
      items: 2
    },
    767: {
      items: 4
    },
    992: {
      items: 4
    },
    1024: {
      items: 5
    }
  };
  const { films, loading } = useContext(context);
  const date = new Date();

  console.log(films);
  const [active, setActive] = useState(tabs[0]);

  let active_films = useMemo(() => {
    let all_films = films.filter(active.content(date));

    if (all_films.length < 5) {
      all_films = all_films.concat(dummyData);
    }
    return all_films;
  }, [films, active, date]);

  return (
    <>
      {/* <div className="movies"> */}
        <div className="title">
          <h1>
            Movies: <span>
            {active.label}
            </span>
          </h1>
          </div>
          <div className="tab-menu">
            <ButtonGroup>
              {tabs.map(tab => (
                <Tab
                  key={tab.label}
                  active={active === tab}
                  onClick={() => setActive(tab)}
                >
                  {tab.label}
                </Tab>
              ))}
            </ButtonGroup>
        </div>
        <div className="filmcarousel">
          <AliceCarousel
            mouseTrackingEnabled
            responsive={responsive}
            buttonsDisabled
          >
            {loading ? (
              <div>Loading ...</div>
            ) : (
              active_films.map((image, index) => (
                <div class="card" key={index}>
                  <picture class="thumbnail">
                    <img
                      src={image.FilmPosterUrl}
                      alt={image.Title}
                    />
                  </picture>
                  <div class="card-content">
                    <div class="title">
                      <span class="title">{image.Title}</span>{" "}
                      <span class="cert">({image.Rating})</span>
                    </div>
                    <div class="controls">
                      <span>
                        {new Date(image.OpeningDate).toLocaleDateString("en", {
                          day: "2-digit",
                          month: "short"
                        })}
                      </span>
                      <span class="icons">
                        <Visibility />
                        <Create />
                        <Delete />
                        <PlayCircleFilled />
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </AliceCarousel>
        </div>
      {/* </div> */}
    </>
  );
}

export default Movies;
