import React from "react";

function Pin({ arr }) {
  console.log(arr);

  return arr.map((pin) => (
    <a key={pin.dataSpace} className={pin.aClass} data-category={pin.dataCategory} data-space={pin.dataSpace} href="#" aria-label={pin.arialabel}>
      <span className="pin__icon">
        <svg className="icon icon--pin" href="path/to/svg-sprite.svg">
          <use xlinkHref="#icon-pin"></use>
        </svg>
        <svg className={pin.svgClassName} href="path/to/svg-sprite.svg">
          <use xlinkHref={pin.xlinkHref}></use>
        </svg>
      </span>
    </a>
  ));
}

export default Pin;

// function move3D (e){
//   let x = e.clientX - window.innerWidth / 2;
//   let y = e.clientY - window.innerHeight / 2;
//   let q = 0.15;
  
// }