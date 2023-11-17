// Hendawy Was Here
import { useState } from "react";
import "../App.css";
import "../assets/css/style.css";
import ProfileF from "../assets/img/ProfileF.jpg";
import ProfileM from "../assets/img/profileM.jpg";
import HiddenSVG from "./HiddenSVG";
import surroundingsMiller from "../assets/img/surroundings-miller.svg";
import Level1 from "../levels/Level1";
import Level2 from "../levels/Level2";
import Level3 from "../levels/Level3";
import Level4 from "../levels/Level4";
import {
  FirstFloorPins,
  SecondFloorPins,
  ThirdFloorPins,
  FourthFloorPins,
} from "../components/Lists/PinsLists";
import { contentItems } from "../components/Lists/ContentLists";
import Aside from "./Aside";

function App() {
  const [level, setLevel] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const handleClick = (num: number) => {
    if (level != num) {
      setLevel(num);
      setSelectedLevel(`levels--selected-${num} levels--opened`);
      setContent("");
      setOpen(false);
    }
  };

  const levelControls = (move: string) => {
    if (level < 4 && move == "up") {
      setLevel(level + 1);
      setSelectedLevel(`levels--selected-${level + 1} levels--opened`);
      setContent("");
      setOpen(false);
    } else if (move == "down" && level > 1) {
      if (level > 1) {
        setLevel(level - 1);
        setSelectedLevel(`levels--selected-${level - 1} levels--opened`);
      }
    }
  };

  const handelOpenContent = (dataSpace: string) => {
    setOpen(true);
    setContent(dataSpace);
  };
  const handelCloseContent = () => {
    setContent("");
    setOpen(false);
  };
  return (
    <div>
      {/* <!-- start icons --> */}
      <HiddenSVG />
      {/* <!-- end icons --> */}

      <div className="map-container">
        <div className="map-main">
          <header className="library-header">
            <h1>Colby Libraries</h1>
            <ul>
              <li>
                <a className="current-library" href="/">
                  Miller
                </a>
              </li>
            </ul>
          </header>
          <div className="legend">
            <ul>
              <li>
                <strong>Key:</strong>
              </li>
              <li>
                <span className="category4">&#9679;</span>Resources
              </li>
              <li>
                <span className="category3">&#9679;</span>Lab/Study Areas
              </li>
              <li>
                <span className="category2">&#9679;</span>Classrooms
              </li>
              <li>
                <span className="category1">&#9679;</span>Staff
              </li>
            </ul>
          </div>
          <div
            className={
              content
                ? " building miller building--content-open"
                : "building miller"
            }
          >
            <div className="surroundings">
              <img
                className="surroundings__map"
                src={surroundingsMiller}
                alt="Surroundings"
              />
            </div>
            <div className={`levels ${selectedLevel} svg-group`}>
              <div
                className={
                  level == 1
                    ? "level level--1 level--current"
                    : "level level--1"
                }
                aria-label="Level 1"
                onClick={() => handleClick(1)}
              >
                <Level1 />
                <div
                  className={`level__pins ${
                    level == 1
                      ? "level__pins level__pins--active"
                      : "level__pins "
                  }`}
                >
                  {FirstFloorPins.map((pin) => (
                    <a
                      key={pin.dataSpace}
                      className={pin.aClass}
                      onClick={() => {
                        handelOpenContent(pin.dataSpace);
                      }}
                      data-category={pin.dataCategory}
                      data-space={pin.dataSpace}
                      href="#"
                      aria-label={pin.arialabel}
                    >
                      <span className="pin__icon">
                        <svg
                          className="icon icon--pin"
                          href="path/to/svg-sprite.svg"
                        >
                          <use xlinkHref="#icon-pin"></use>
                        </svg>
                        <svg
                          className={pin.svgClassName}
                          href="path/to/svg-sprite.svg"
                        >
                          <use xlinkHref={pin.xlinkHref}></use>
                        </svg>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div
                className={
                  level == 2
                    ? "level level--2 level--current"
                    : "level level--2"
                }
                aria-label="Level 2"
                onClick={() => handleClick(2)}
              >
                <Level2 />
                <div
                  className={`level__pins ${
                    level == 2 ? "level__pins--active" : ""
                  }`}
                >
                  {SecondFloorPins.map((pin) => (
                    <a
                      key={pin.dataSpace}
                      className={pin.aClass}
                      onClick={() => {
                        handelOpenContent(pin.dataSpace);
                      }}
                      data-category={pin.dataCategory}
                      data-space={pin.dataSpace}
                      href="#"
                      aria-label={pin.arialabel}
                    >
                      <span className="pin__icon">
                        <svg
                          className="icon icon--pin"
                          href="path/to/svg-sprite.svg"
                        >
                          <use xlinkHref="#icon-pin"></use>
                        </svg>
                        <svg
                          className={pin.svgClassName}
                          href="path/to/svg-sprite.svg"
                        >
                          <use xlinkHref={pin.xlinkHref}></use>
                        </svg>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div
                className={
                  level == 3
                    ? "level level--3 level--current"
                    : "level level--3"
                }
                aria-label="Level 3"
                onClick={() => handleClick(3)}
              >
                <Level3 />
                <div
                  className={`level__pins ${
                    level == 3 ? "level__pins--active" : ""
                  }`}
                >
                  {ThirdFloorPins.map((pin) => (
                    <a
                      key={pin.dataSpace}
                      className={pin.aClass}
                      onClick={() => {
                        handelOpenContent(pin.dataSpace);
                      }}
                      data-category={pin.dataCategory}
                      data-space={pin.dataSpace}
                      href="#"
                      aria-label={pin.arialabel}
                    >
                      <span className="pin__icon">
                        <svg
                          className="icon icon--pin"
                          href="path/to/svg-sprite.svg"
                        >
                          <use xlinkHref="#icon-pin"></use>
                        </svg>
                        <svg
                          className={pin.svgClassName}
                          href="path/to/svg-sprite.svg"
                        >
                          <use xlinkHref={pin.xlinkHref}></use>
                        </svg>
                      </span>
                    </a>
                  ))}
                </div>
                {/* <!-- /level__pins --> */}
              </div>

              <div
                className={
                  level == 4
                    ? "level level--4 level--current"
                    : "level level--4"
                }
                aria-label="Level 4"
                onClick={() => handleClick(4)}
              >
                <Level4 />
                <div
                  className={`level__pins ${
                    level == 4 ? "level__pins--active" : ""
                  }`}
                >
                  {FourthFloorPins.map((pin) => (
                    <a
                      key={pin.dataSpace}
                      className={pin.aClass}
                      onClick={() => {
                        handelOpenContent(pin.dataSpace);
                      }}
                      data-category={pin.dataCategory}
                      data-space={pin.dataSpace}
                      href="#"
                      aria-label={pin.arialabel}
                    >
                      <span className="pin__icon">
                        <svg
                          className="icon icon--pin"
                          href="path/to/svg-sprite.svg"
                        >
                          <use xlinkHref="#icon-pin"></use>
                        </svg>
                        <svg
                          className={pin.svgClassName}
                          href="path/to/svg-sprite.svg"
                        >
                          <use xlinkHref={pin.xlinkHref}></use>
                        </svg>
                      </span>
                    </a>
                  ))}
                </div>
                {/* <!-- /level__pins --> */}
              </div>
            </div>
            {/* <!-- /levels --> */}
          </div>
          {/* <!-- /building --> */}
          <button
            className="boxbutton boxbutton--dark open-search"
            aria-label="Show search"
          >
            <svg className="icon icon--search">
              <use xlinkHref="#icon-search"></use>
            </svg>
          </button>
          <nav
            className={`buildingnav ${level == 0 ? "buildingnav--hidden" : ""}`}
          >
            <button
              className={
                level == 4
                  ? "boxbutton buildingnav__button--up boxbutton--disabled"
                  : "boxbutton buildingnav__button--up"
              }
              aria-label="Go up"
              onClick={() => levelControls("up")}
            >
              <svg className="icon icon--angle-down">
                <use xlinkHref="#icon-angle-up"></use>
              </svg>
            </button>
            <button
              className="boxbutton boxbutton--dark buildingnav__button--all-levels"
              aria-label="Back to all levels"
              onClick={() => handleClick(0)}
            >
              <svg className="icon icon--stack">
                <use xlinkHref="#icon-stack"></use>
              </svg>
            </button>
            <button
              className={
                level == 1
                  ? "boxbutton buildingnav__button--down boxbutton--disabled"
                  : "boxbutton buildingnav__button--down"
              }
              aria-label="Go down"
            >
              <svg
                className="icon icon--angle-down"
                onClick={() => levelControls("down")}
              >
                <use xlinkHref="#icon-angle-down"></use>
              </svg>
            </button>
          </nav>
          <div className={isOpen ? "content content--open" : "content"}>
            {contentItems.map((item, index) => (
              <div
                key={index}
                className={
                  content === item.dataSpace
                    ? "content__item content__item--current"
                    : "content__item "
                }
                data-space={item.dataSpace}
                data-category={item.dataCategory}
              >
                <h3 className="content__item-title">{item.title}</h3>
                <h4>{item.role}</h4>
                <div className="content__item-details">
                  <p className="content__meta">
                    <span className="content__meta-item">
                      <strong>Office:</strong> {item.meta?.office}
                    </span>
                    <span className="content__meta-item">
                      <strong>Hours:</strong> {item.meta?.hours}
                    </span>
                    <span className="content__meta-item">
                      <strong>Phone:</strong> {item.meta?.phone}
                    </span>
                  </p>
                  <p className="content__desc">
                    <img src="img/profileF.jpg" alt="" /> {item.description}
                    <br />
                    <br />
                    Publications: <a href="#">Click here</a>
                  </p>
                </div>
              </div>
            ))}
            <button
              onClick={handelCloseContent}
              className={
                isOpen
                  ? "boxbutton boxbutton--dark content__button"
                  : "boxbutton boxbutton--dark content__button content__button--hidden"
              }
              aria-label="Close details"
            >
              <svg className="icon icon--cross">
                <use xlinkHref="#icon-cross"></use>
              </svg>
            </button>
          </div>
          {/* <!-- content --> */}
        </div>
        {/* <!-- /main --> */}

        <Aside />
      </div>
    </div>
  );
}

export default App;
