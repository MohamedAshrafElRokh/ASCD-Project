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
import Pin from "./Pin";
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
                  <Pin arr={FirstFloorPins} />
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
                  <Pin arr={SecondFloorPins} />
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
                  <Pin arr={ThirdFloorPins} />
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
                  <Pin arr={FourthFloorPins} />
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
      </div>

      <script src="assets/js/scripts.js"></script>
    </div>
  );
}

export default App;
