// Hendawy Was Here
import { useState, useRef } from "react";
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

function App() {
  const [level, setLevel] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState(0);
  const handleClick = (num: number) => {
    if (level != num) {
      setLevel(num);
      setSelectedLevel(`levels--selected-${num} levels--opened`);
    }
  };

  const levelControls = (move: string) => {
    if (level < 4 && move == "up") {
      setLevel(level + 1);
      setSelectedLevel(`levels--selected-${level + 1} levels--opened`);
    }

    if (move == "down" && level > 1) {
      if (level > 1) {
        setLevel(level - 1);
        setSelectedLevel(`levels--selected-${level - 1} levels--opened`);
      }
    }
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
          <div className="building miller">
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
          <div className="content">
            <div className="content__item" data-space="1.20" data-category="4">
              <h3 className="content__item-title">Microfilm</h3>
              <h4>Microfilm Viewing Machine</h4>
            </div>
            <div className="content__item" data-space="1.21" data-category="3">
              <h3 className="content__item-title">Hall Study Area</h3>
              <h4>Open Space for Study</h4>
            </div>
            <div className="content__item" data-space="1.22" data-category="2">
              <h3 className="content__item-title">Seminar Room</h3>
              <h4>Open Space for Study</h4>
            </div>
            <div className="content__item" data-space="1.23" data-category="1">
              <h3 className="content__item-title">Lauren Yoshizawa</h3>
              <h4>Pre-doctoral Fellow in Education</h4>
              <div className="content__item-details">
                <p className="content__meta">
                  <span className="content__meta-item">
                    <strong>Office:</strong> 035
                  </span>
                  <span className="content__meta-item">
                    <strong>Hours:</strong> 8:00AM &mdash; 4:30PM
                  </span>
                  <span className="content__meta-item">
                    <strong>Phone:</strong> (207) 859-4423
                  </span>
                </p>
                <p className="content__desc">
                  <img src={ProfileF} alt="" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                  id repellat ducimus obcaecati, aliquam temporibus earum sequi
                  iure quae doloribus? Labore enim laboriosam pariatur, sed
                  omnis cum eligendi, possimus in.
                </p>
              </div>
            </div>
            <div className="content__item" data-space="1.24" data-category="1">
              <h3 className="content__item-title">Celeste Cessaro</h3>
              <h4>Administrative Assistant</h4>
              <div className="content__item-details">
                <p className="content__meta">
                  <span className="content__meta-item">
                    <strong>Office:</strong> 039
                  </span>
                  <span className="content__meta-item">
                    <strong>Hours:</strong> 8:00AM &mdash; 4:30PM
                  </span>
                  <span className="content__meta-item">
                    <strong>Phone:</strong> (207) 859-4420
                  </span>
                </p>
                <p className="content__desc">
                  <img src={ProfileF} alt="" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                  id repellat ducimus obcaecati, aliquam temporibus earum sequi
                  iure quae doloribus? Labore enim laboriosam pariatur, sed
                  omnis cum eligendi, possimus in.
                </p>
              </div>
            </div>
            <div className="content__item" data-space="1.25" data-category="1">
              <h3 className="content__item-title">David Casalaspi</h3>
              <h4>Visiting Assistant Professor of Education</h4>
              <div className="content__item-details">
                <p className="content__meta">
                  <span className="content__meta-item">
                    <strong>Office:</strong> 038
                  </span>
                  <span className="content__meta-item">
                    <strong>Hours:</strong> 8:00AM &mdash; 4:30PM
                  </span>
                  <span className="content__meta-item">
                    <strong>Phone:</strong> (207) 859-4428
                  </span>
                </p>
                <p className="content__desc">
                  <img src={ProfileF} alt="" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                  id repellat ducimus obcaecati, aliquam temporibus earum sequi
                  iure quae doloribus? Labore enim laboriosam pariatur, sed
                  omnis cum eligendi, possimus in.
                </p>
              </div>
            </div>
            <div className="content__item" data-space="1.26" data-category="1">
              <h3 className="content__item-title">Lyn Brown & Mark Tappan</h3>
              <h4>Professor and Director</h4>
              <div className="content__item-details">
                <p className="content__meta">
                  <span className="content__meta-item">
                    <strong>Office:</strong> 037
                  </span>
                  <span className="content__meta-item">
                    <strong>Hours:</strong> 8:00AM &mdash; 4:30PM
                  </span>
                  <span className="content__meta-item">
                    <strong>Phone:</strong> (207) 859-4426
                  </span>
                </p>
                <p className="content__desc">
                  <img src={ProfileF} alt="" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                  id repellat ducimus obcaecati, aliquam temporibus earum sequi
                  iure quae doloribus? Labore enim laboriosam pariatur, sed
                  omnis cum eligendi, possimus in.
                </p>
              </div>
            </div>
            <div className="content__item" data-space="1.27" data-category="1">
              <h3 className="content__item-title">Adam Howard</h3>
              <h4>Professor of Education Program Director</h4>
              <div className="content__item-details">
                <p className="content__meta">
                  <span className="content__meta-item">
                    <strong>Office:</strong> 036
                  </span>
                  <span className="content__meta-item">
                    <strong>Hours:</strong> 8:00AM &mdash; 4:30PM
                  </span>
                  <span className="content__meta-item">
                    <strong>Phone:</strong> (207) 859-4428
                  </span>
                </p>
                <p className="content__desc">
                  <img src={ProfileF} alt="" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                  id repellat ducimus obcaecati, aliquam temporibus earum sequi
                  iure quae doloribus? Labore enim laboriosam pariatur, sed
                  omnis cum eligendi, possimus in.
                </p>
              </div>
            </div>
            <div className="content__item" data-space="2.01" data-category="1">
              <h3 className="content__item-title">Ellen Freeman</h3>
              <div className="content__item-details">
                <p className="content__meta">
                  <span className="content__meta-item">
                    <strong>Opening Hours:</strong> 7:30AM &mdash; 11:30PM
                  </span>
                  <span className="content__meta-item">
                    <strong>Phone:</strong> (207) 859-5555
                  </span>
                </p>
                <p className="content__desc">
                  <img src={ProfileF} alt="" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                  id repellat ducimus obcaecati, aliquam temporibus earum sequi
                  iure quae doloribus? Labore enim laboriosam pariatur, sed
                  omnis cum eligendi, possimus in.
                </p>
              </div>
            </div>
            <div className="content__item" data-space="2.02" data-category="3">
              <h3 className="content__item-title">Brewster Reading Room</h3>
              <div className="content__item-details">
                <p className="content__meta">
                  <span className="content__meta-item">
                    <strong>Office:</strong> 007D
                  </span>
                  <span className="content__meta-item">
                    <strong>Hours:</strong> 8:00AM &mdash; 4:30PM
                  </span>
                  <span className="content__meta-item">
                    <strong>Phone:</strong> (207) 859-5555
                  </span>
                </p>
                <p className="content__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Expedita iste fuga veniam consectetur voluptates laborum quo
                  maxime error ullam dicta provident vero culpa optio est
                  voluptatem, magnam omnis quos amet?
                </p>
              </div>
            </div>
            <div className="content__item" data-space="2.04" data-category="4">
              <h3 className="content__item-title">First Floor Stacks</h3>
              <div className="content__item-details">
                <p className="content__meta">
                  <span className="content__meta-item">
                    <strong>Office:</strong> 007D
                  </span>
                  <span className="content__meta-item">
                    <strong>Hours:</strong> 8:00AM &mdash; 4:30PM
                  </span>
                  <span className="content__meta-item">
                    <strong>Phone:</strong> (207) 859-5555
                  </span>
                </p>
                <p className="content__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum aperiam adipisci accusantium quisquam officiis,
                  culpa alias ex officia nam ea eius, quasi exercitationem
                  expedita consequuntur neque sit numquam consectetur
                  reprehenderit.
                </p>
              </div>
            </div>
            <div className="content__item" data-space="2.20" data-category="2">
              <h3 className="content__item-title">Davis classNameroom</h3>
              <h4>Computer Lab and classNameroom</h4>
            </div>
            <div className="content__item" data-space="3.01" data-category="4">
              <h3 className="content__item-title">Second Floor Stacks</h3>
              <div className="content__item-details">
                <p className="content__meta">
                  <span className="content__meta-item">
                    <strong>Opening Hours:</strong> 6:30AM &mdash; 9:30PM
                  </span>
                  <span className="content__meta-item">
                    <strong>Phone:</strong> (207) 859-5555
                  </span>
                </p>
                <p className="content__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  ad expedita soluta nesciunt dignissimos beatae vero eius unde
                  dicta adipisci officia, quis eos iusto quidem ratione iure
                  aspernatur, ea eaque.
                </p>
              </div>
            </div>
            <div className="content__item" data-space="3.02" data-category="3">
              <h3 className="content__item-title">Second Floor Study Area</h3>
              <div className="content__item-details">
                <p className="content__meta">
                  <span className="content__meta-item">
                    <strong>Office:</strong> NA
                  </span>
                  <span className="content__meta-item">
                    <strong>Hours:</strong> 8:00AM &mdash; 11:30PM
                  </span>
                  <span className="content__meta-item">
                    <strong>Phone:</strong> NA
                  </span>
                </p>
                <p className="content__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat culpa modi nam consequuntur tempora, mollitia eveniet
                  quas alias facere incidunt et, fugit nemo pariatur quia, quasi
                  neque molestias hic maiores.
                </p>
              </div>
            </div>
            <div className="content__item" data-space="3.04" data-category="2">
              <h3 className="content__item-title">Room 205</h3>
              <div className="content__item-details">
                <p className="content__meta">
                  <span className="content__meta-item">
                    <strong>Opening Hours:</strong> 8:00AM &mdash; 4:30PM
                  </span>
                  <span className="content__meta-item">
                    <strong>Phone:</strong> (207) 859-5555
                  </span>
                </p>
                <p className="content__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam, fugiat, distinctio! Placeat dicta voluptas facilis
                  nobis, deleniti expedita ad eum corporis ex maxime! Voluptate
                  dolore error, expedita distinctio amet laboriosam?
                </p>
              </div>
            </div>
            <div className="content__item" data-space="3.06" data-category="1">
              <h3 className="content__item-title">Meghan Hancock</h3>
              <div className="content__item-details">
                <p className="content__meta">
                  <span className="content__meta-item">
                    <strong>Office:</strong> 207A
                  </span>
                  <span className="content__meta-item">
                    <strong>Hours:</strong> 8:00AM &mdash; 4:30PM
                  </span>
                  <span className="content__meta-item">
                    <strong>Phone:</strong> (207) 859-5555
                  </span>
                </p>
                <p className="content__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium architecto reiciendis modi, odio reprehenderit
                  accusamus pariatur officiis distinctio neque velit doloribus
                  error, impedit quisquam tempore possimus, eos temporibus
                  laudantium culpa?
                </p>
              </div>
            </div>
            <div className="content__item" data-space="4.06" data-category="2">
              <h3 className="content__item-title">Room 306 B</h3>
              <div className="content__item-details">
                <p className="content__meta">
                  <span className="content__meta-item">
                    <strong>Office:</strong> 007D
                  </span>
                  <span className="content__meta-item">
                    <strong>Hours:</strong> 8:00AM &mdash; 4:30PM
                  </span>
                  <span className="content__meta-item">
                    <strong>Phone:</strong> (207) 859-5555
                  </span>
                </p>
                <p className="content__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                  officia aspernatur voluptatem voluptate eveniet, quam
                  voluptatibus, quod ex eos, provident voluptates reiciendis
                  aliquam aliquid esse hic eaque vero molestias accusantium?
                </p>
              </div>
            </div>
            <div className="content__item" data-space="4.07" data-category="2">
              <h3 className="content__item-title">Room 306 C</h3>
              <div className="content__item-details">
                <p className="content__meta">
                  <span className="content__meta-item">
                    <strong>Opening Hours:</strong> 13:00PM &mdash; 03:00AM
                  </span>
                  <span className="content__meta-item">
                    <strong>Phone:</strong> (207) 859-5555
                  </span>
                </p>
                <p className="content__desc">
                  Ipomoea aquatica smallanthus sonchifolius.
                </p>
                <p className="content__desc">
                  Lorem ipsum and a link: <a href="#">click here</a>.
                </p>
              </div>
            </div>
            <div className="content__item" data-space="4.05" data-category="2">
              <h3 className="content__item-title">Room 306 A</h3>
              <div className="content__item-details">
                <p className="content__meta">
                  <span className="content__meta-item">
                    <strong>Office:</strong> 007D
                  </span>
                  <span className="content__meta-item">
                    <strong>Hours:</strong> 8:00AM &mdash; 4:30PM
                  </span>
                  <span className="content__meta-item">
                    <strong>Phone:</strong> (207) 859-5555
                  </span>
                </p>
                <p className="content__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas molestiae velit labore cupiditate, odit non
                  praesentium cumque iusto in repellendus nemo fugit nulla
                  reiciendis temporibus ratione quisquam ex, iure nesciunt.
                </p>
              </div>
            </div>
            <div className="content__item" data-space="4.03" data-category="2">
              <h3 className="content__item-title">Room 305 B</h3>
              <div className="content__item-details">
                <p className="content__meta">
                  <span className="content__meta-item">
                    <strong>Opening Hours:</strong> 8:30AM &mdash; 11:00PM
                  </span>
                  <span className="content__meta-item">
                    <strong>Phone:</strong> (207) 859-5555
                  </span>
                </p>
                <p className="content__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  sed quos, dicta libero repellendus fugiat! Qui, dolores odio
                  autem dignissimos illum, earum esse amet recusandae hic rerum,
                  asperiores sequi natus.
                </p>
              </div>
            </div>
            <div className="content__item" data-space="4.01" data-category="4">
              <h3 className="content__item-title">Third Floor Stacks</h3>
              <div className="content__item-details">
                <p className="content__meta">
                  <span className="content__meta-item">
                    <strong>Opening Hours:</strong> 7:30AM &mdash; 11:30PM
                  </span>
                  <span className="content__meta-item">
                    <strong>Phone:</strong> (207) 859-5555
                  </span>
                </p>
                <p className="content__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Expedita nulla pariatur amet id ipsam similique saepe beatae
                  quasi aliquid. Eos fugit esse nesciunt similique maxime,
                  architecto totam ducimus placeat consequatur?
                </p>
              </div>
            </div>
            <div className="content__item" data-space="4.04" data-category="2">
              <h3 className="content__item-title">Room 305 A</h3>
              <div className="content__item-details">
                <p className="content__meta">
                  <span className="content__meta-item">
                    <strong>Opening Hours:</strong> 7:30AM &mdash; 09:00PM
                  </span>
                  <span className="content__meta-item">
                    <strong>Phone:</strong> (207) 859-5555
                  </span>
                </p>
                <p className="content__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Provident inventore molestias ad quisquam officiis cupiditate
                  itaque sed id quasi quo eveniet, quam unde laboriosam nam
                  voluptatum vero odio ullam omnis!
                </p>
              </div>
            </div>
            <div className="content__item" data-space="4.08" data-category="2">
              <h3 className="content__item-title">Room 319</h3>
              <div className="content__item-details">
                <p className="content__meta">
                  <span className="content__meta-item">
                    <strong>Opening Hours:</strong> 7:30AM &mdash; 12:30PM
                  </span>
                  <span className="content__meta-item">
                    <strong>Phone:</strong> (207) 859-5555
                  </span>
                </p>
                <p className="content__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque ipsa explicabo asperiores? Quibusdam atque ducimus,
                  perferendis, eaque quasi asperiores. Eum obcaecati ut sunt
                  culpa soluta, eius natus reprehenderit itaque quae.
                </p>
              </div>
            </div>
            <div className="content__item" data-space="4.02" data-category="3">
              <h3 className="content__item-title">Third Floor Study Area</h3>
              <div className="content__item-details">
                <p className="content__meta">
                  <span className="content__meta-item">
                    <strong>Office:</strong> NA
                  </span>
                  <span className="content__meta-item">
                    <strong>Hours:</strong> 8:00AM &mdash; 11:30PM
                  </span>
                  <span className="content__meta-item">
                    <strong>Phone:</strong> NA
                  </span>
                </p>
                <p className="content__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat culpa modi nam consequuntur tempora, mollitia eveniet
                  quas alias facere incidunt et, fugit nemo pariatur quia, quasi
                  neque molestias hic maiores.
                </p>
              </div>
            </div>
            <button
              className="boxbutton boxbutton--dark content__button content__button--hidden"
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

        <aside className="spaces-list" id="spaces-list">
          <div className="search">
            <input className="search__input" placeholder="Search..." />
            <button
              className="boxbutton boxbutton--darker close-search"
              aria-label="Close details"
            >
              <svg className="icon icon--cross">
                <use xlinkHref="#icon-cross"></use>
              </svg>
            </button>
          </div>
          <span className="label">
            <input
              id="sort-by-name"
              className="label__checkbox"
              type="checkbox"
              aria-label="Show alphabetically"
            />
            <label className="label__text">A - Z</label>
          </span>
          <ul className="list grouped-by-category">
            <li
              className="list__item"
              data-level="2"
              data-category="4"
              data-room=""
              data-space="2.07"
            >
              <a href="#" className="list__link">
                Service Desk
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="4"
              data-room="Stacks"
              data-space="1.07"
            >
              <a href="#" className="list__link">
                Ground Level Stacks
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="4"
              data-room="Stacks"
              data-space="2.04"
            >
              <a href="#" className="list__link">
                First Floor Stacks
              </a>
            </li>
            <li
              className="list__item"
              data-level="3"
              data-category="4"
              data-room="Stacks"
              data-space="3.01"
            >
              <a href="#" className="list__link">
                Second Floor Stacks
              </a>
            </li>
            <li
              className="list__item"
              data-level="4"
              data-category="4"
              data-room="Stacks"
              data-space="4.01"
            >
              <a href="#" className="list__link">
                Third Floor Stacks
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="4"
              data-room="MFLM"
              data-space="1.20"
            >
              <a href="#" className="list__link">
                Microfilm
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="4"
              data-room="NB"
              data-space="2.15"
            >
              <a href="#" className="list__link">
                New Books
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="4"
              data-room="NB"
              data-space="2.16"
            >
              <a href="#" className="list__link">
                Colby Authors
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="4"
              data-room="134"
              data-space="2.18"
            >
              <a href="#" className="list__link">
                Reference Books
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="4"
              data-room="134"
              data-space="2.19"
            >
              <a href="#" className="list__link">
                Periodicals
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="3"
              data-room="Mule Works"
              data-space="1.09"
            >
              <a href="#" className="list__link">
                Mule Works Lab
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="3"
              data-room="Hall"
              data-space="1.21"
            >
              <a href="#" className="list__link">
                Hall Study Area
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="3"
              data-room="SC"
              data-space="2.14"
            >
              <a href="#" className="list__link">
                Special Collections
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="3"
              data-room="SCP"
              data-space="1.10"
            >
              <a href="#" className="list__link">
                Special Collections Processing
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="3"
              data-room="020A-D"
              data-space="1.19"
            >
              <a href="#" className="list__link">
                Study Rooms 020A-D
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="3"
              data-room="134"
              data-space="2.02"
            >
              <a href="#" className="list__link">
                Brewster Reading Room
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="3"
              data-room="113"
              data-space="2.13"
            >
              <a href="#" className="list__link">
                Chapman Room
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="3"
              data-room="108"
              data-space="2.03"
            >
              <a href="#" className="list__link">
                Robinson Room
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="3"
              data-room="119"
              data-space="2.08"
            >
              <a href="#" className="list__link">
                Healy Room
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="3"
              data-room="115"
              data-space="2.12"
            >
              <a href="#" className="list__link">
                Wormser Room
              </a>
            </li>
            <li
              className="list__item"
              data-level="3"
              data-category="3"
              data-room="Hall"
              data-space="3.02"
            >
              <a href="#" className="list__link">
                Second Floor Study Area
              </a>
            </li>
            <li
              className="list__item"
              data-level="4"
              data-category="3"
              data-room="Hall"
              data-space="4.02"
            >
              <a href="#" className="list__link">
                Third Floor Study Area
              </a>
            </li>
            <li
              className="list__item"
              data-level="3"
              data-category="3"
              data-room="206"
              data-space="3.03"
            >
              <a href="#" className="list__link">
                Farnham Writing Center
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="3"
              data-room="105"
              data-space="2.11"
            >
              <a href="#" className="list__link">
                Fit Lab
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="3"
              data-room="005"
              data-space="1.14"
            >
              <a href="#" className="list__link">
                Room 005
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="2"
              data-room="008"
              data-space="1.11"
            >
              <a href="#" className="list__link">
                classNameroom 008
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="2"
              data-room="014"
              data-space="1.08"
            >
              <a href="#" className="list__link">
                classNameroom 014
              </a>
            </li>
            <li
              className="list__item"
              data-level="3"
              data-category="2"
              data-room="205"
              data-space="3.04"
            >
              <a href="#" className="list__link">
                Room 205
              </a>
            </li>
            <li
              className="list__item"
              data-level="3"
              data-category="2"
              data-room="208"
              data-space="3.05"
            >
              <a href="#" className="list__link">
                Room 208
              </a>
            </li>
            <li
              className="list__item"
              data-level="4"
              data-category="2"
              data-room="305A"
              data-space="4.04"
            >
              <a href="#" className="list__link">
                Room 305 A
              </a>
            </li>
            <li
              className="list__item"
              data-level="4"
              data-category="2"
              data-room="305B"
              data-space="4.03"
            >
              <a href="#" className="list__link">
                Room 305 B
              </a>
            </li>
            <li
              className="list__item"
              data-level="4"
              data-category="2"
              data-room="306A"
              data-space="4.05"
            >
              <a href="#" className="list__link">
                Room 306 A
              </a>
            </li>
            <li
              className="list__item"
              data-level="4"
              data-category="2"
              data-room="306B"
              data-space="4.06"
            >
              <a href="#" className="list__link">
                Room 306 B
              </a>
            </li>
            <li
              className="list__item"
              data-level="4"
              data-category="2"
              data-room="306C"
              data-space="4.07"
            >
              <a href="#" className="list__link">
                Room 306 C
              </a>
            </li>
            <li
              className="list__item"
              data-level="4"
              data-category="2"
              data-room="319"
              data-space="4.08"
            >
              <a href="#" className="list__link">
                Room 319
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="2"
              data-room="034"
              data-space="1.22"
            >
              <a href="#" className="list__link">
                Seminar Room
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="2"
              data-room="104"
              data-space="2.20"
            >
              <a href="#" className="list__link">
                Davis classNameroom
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="1"
              data-room="007B"
              data-space="1.01"
            >
              <a href="#" className="list__link">
                Darylyne Provost
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="1"
              data-room="007C"
              data-space="1.02"
            >
              <a href="#" className="list__link">
                Mike McGuire
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="1"
              data-room="007B"
              data-space="1.04"
            >
              <a href="#" className="list__link">
                Mike Jandreau
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="1"
              data-room="007A"
              data-space="1.03"
            >
              <a href="#" className="list__link">
                Matt LeVan
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="1"
              data-room="005B"
              data-space="1.06"
            >
              <a href="#" className="list__link">
                Eileen Richards
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="1"
              data-room="005A"
              data-space="1.05"
            >
              <a href="#" className="list__link">
                Martin Kelly
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="1"
              data-room="009"
              data-space="1.12"
            >
              <a href="#" className="list__link">
                Room 009
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="1"
              data-room="009A"
              data-space="1.13"
            >
              <a href="#" className="list__link">
                Room 009A
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="1"
              data-room="004A"
              data-space="1.15"
            >
              <a href="#" className="list__link">
                Ana Noriega
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="1"
              data-room="004B"
              data-space="1.16"
            >
              <a href="#" className="list__link">
                Katie Donahue
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="1"
              data-room="004"
              data-space="1.17"
            >
              <a href="#" className="list__link">
                Room 004
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="1"
              data-room="028"
              data-space="1.18"
            >
              <a href="#" className="list__link">
                Bess Stokes
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="1"
              data-room="035"
              data-space="1.23"
            >
              <a href="#" className="list__link">
                Lauren Yoshizawa
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="1"
              data-room="039"
              data-space="1.24"
            >
              <a href="#" className="list__link">
                Celeste Cessaro
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="1"
              data-room="038"
              data-space="1.25"
            >
              <a href="#" className="list__link">
                David Casalaspi
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="1"
              data-room="037"
              data-space="1.26"
            >
              <a href="#" className="list__link">
                Lyn Brown & Mark Tappan
              </a>
            </li>
            <li
              className="list__item"
              data-level="1"
              data-category="1"
              data-room="036"
              data-space="1.27"
            >
              <a href="#" className="list__link">
                Adam Howard
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="1"
              data-room="130"
              data-space="2.06"
            >
              <a href="#" className="list__link">
                Rachel Gammon
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="1"
              data-room="106B"
              data-space="2.01"
            >
              <a href="#" className="list__link">
                Ellen Freeman
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="1"
              data-room="106"
              data-space="2.05"
            >
              <a href="#" className="list__link">
                Mark Wardecker
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="1"
              data-room="102"
              data-space="2.09"
            >
              <a href="#" className="list__link">
                Tim Stonsifer
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="1"
              data-room="101"
              data-space="2.10"
            >
              <a href="#" className="list__link">
                Lareese Hall
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="1"
              data-room="129"
              data-space="2.17"
            >
              <a href="#" className="list__link">
                April Paul
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="1"
              data-room="106D"
              data-space="2.21"
            >
              <a href="#" className="list__link">
                Stacey Sheriff
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="1"
              data-room="106C"
              data-space="2.22"
            >
              <a href="#" className="list__link">
                Carol Hurney
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="1"
              data-room="106A"
              data-space="2.23"
            >
              <a href="#" className="list__link">
                Jason Parkhill
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="1"
              data-room="107"
              data-space="2.24"
            >
              <a href="#" className="list__link">
                Karen Gillum
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="1"
              data-room="107A"
              data-space="2.25"
            >
              <a href="#" className="list__link">
                Bonnie Paige
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="1"
              data-room="107B"
              data-space="2.26"
            >
              <a href="#" className="list__link">
                Marilyn Pukkila
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="1"
              data-room="107C"
              data-space="2.27"
            >
              <a href="#" className="list__link">
                Laine Thielstrom
              </a>
            </li>
            <li
              className="list__item"
              data-level="2"
              data-category="1"
              data-room="107D"
              data-space="2.28"
            >
              <a href="#" className="list__link">
                Stephanie Frost
              </a>
            </li>
            <li
              className="list__item"
              data-level="3"
              data-category="1"
              data-room="207A"
              data-space="3.06"
            >
              <a href="#" className="list__link">
                Meghan Hancock
              </a>
            </li>
            <li
              className="list__item"
              data-level="3"
              data-category="1"
              data-room="207B"
              data-space="3.07"
            >
              <a href="#" className="list__link">
                Ghada Gherwash
              </a>
            </li>
            <li
              className="list__item"
              data-level="3"
              data-category="1"
              data-room="207C"
              data-space="3.08"
            >
              <a href="#" className="list__link">
                Jordan Bailey
              </a>
            </li>
            <li
              className="list__item"
              data-level="3"
              data-category="1"
              data-room="200"
              data-space="3.09"
            >
              <a href="#" className="list__link">
                Kerrill O'Neil
              </a>
            </li>
            <li
              className="list__item"
              data-level="3"
              data-category="1"
              data-room="201"
              data-space="3.10"
            >
              <a href="#" className="list__link">
                Megan Fossa
              </a>
            </li>
            <li
              className="list__item"
              data-level="3"
              data-category="1"
              data-room="202"
              data-space="3.11"
            >
              <a href="#" className="list__link">
                Paula Harrington
              </a>
            </li>
            <li
              className="list__item"
              data-level="3"
              data-category="1"
              data-room="203A"
              data-space="3.12"
            >
              <a href="#" className="list__link">
                FWC Tutor Office
              </a>
            </li>
            <li
              className="list__item"
              data-level="3"
              data-category="1"
              data-room="203B"
              data-space="3.13"
            >
              <a href="#" className="list__link">
                Carolyn Megan
              </a>
            </li>
            {/* <!-- <li className="list__item" data-level="4" data-category="1" data-room="RLA" data-space="2.29"><a href="#" className="list__link">Alcove</a></li> --> */}
          </ul>
        </aside>
      </div>

      <script src="assets/js/scripts.js"></script>
    </div>
  );
}

export default App;
