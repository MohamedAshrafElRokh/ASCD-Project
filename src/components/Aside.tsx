const Aside = () => {
  return (
    <div>
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
  );
};

export default Aside;
