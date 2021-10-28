import React from 'react'; 
import "./QuickCard.css"; 
import {BsFillTrashFill} from "react-icons/bs"; 

function QuickCard(props) {

    return (
        <div className = "quickCard">
            <div className = "quickCard__container">
                <div className = "quickCard__subcontainer">
                    <img className="quickCard__img" src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX////UAADPAADVAAD78PHOAADdV1nacnL8///+//3YPT7keHrYOjvZQ0TuwL/46ur69PT43Nzhf3/nsbDXNTbbTE3ol5fmkJHacnH34OHzz8/rsrXrqqnpn57jiYvhcnPga2rhYmPZKi7VHyLSFBXTCQ3aMTPfWlzzxsbgb2zkhofqoaHVLSvwxcjgb23tr7CPMU/QAAAEO0lEQVR4nO3cbXOaQBSG4WV9CYryohGVgGIUtZrU///vCmoTTZoPHPbsqTPP9bEz7XBLgWVZUAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwA5XegNuhfPEf0mz6WLkLfPVrjvpD7av6/VmUxROSX/j6PKPi6LYrNevr9tBfzjp7lb5cumNDtM4S09jf5/MA+mss/Y+ywflBldbbNT5hyiGv2I/ENybQbw1n/ap1bq25uO2TN+qw1d3T+uubz8wZdx7X1U7c/1iOTC2GHip1EOrp54X24EVndgLDCQCy0R7R+NOt2QSI0uBicwuLA/GQvWsFO6EAksLK5f/udQuLOnQRuFBsNCJbRQK9pVXfguBYueZMx1xH4muOkgGOs6RObBMfJMtXLEXtkX/k5Y3zuyF77KBFq4XmXQh+8jtt3Chs+cufJYuPHEXCp9oHCdjDpQ+lTrOlLmQNOxuFW/mfpgRc2FC2iptcGJnyVzoEwtVMDFUmDMXnqiFSo3N7EbuYRvtgl8V9lSYm2jkLoxJW9W5/u29gcQdcyHt3ulvoXJHjRu5C72GhSpqevfVZS6kDUt1eHNnHjd7pMNduCJtVee2UAWNxrbchbS50i83dW6T6z93YddEYbkbh/9tIW1kor8/xSU/gOQ+l9J++38UqnaX1vg4hdRhHHdh32ChCleERu7jcGCykPQw+cEKCaNx7kLaxfrnwvp3nJNHKywHO7Nau3HC/BzY/D4sJXVG4w9Y6Cp3WWPlw/DxClW0qbO04+EK3bp3U33WPobCYFhzcQ53oenrYf1L/oC50OSorVcN21p1l1dxF5oceat3ytD7+YEKn0j3FtyFxu6AVVKQ/in2QuIsxrdC+sQpd+HKTGGyIfbxn2lyI4WHBgtUua+HxBnhu8Jm097co7ZR88JFs0cX3IW0JzP6c519tG7Ux3/3RHu6di3sKbfJEXjBPYtxJG1V57oPqdfAW9yzibSn3JfCsN50xQ+4nwHTViqcCw09x+dei0EaLFeFAXES/xvu9TQRsTAztp5mwVwY0M6FG8fYWzbc69rkV+6l3IXSgfyvd9Ef3hoqZH9Hj7bcxGAh+4uW0uu8He5A4iXfHP7XgoTeH/2QsxdKn0zZL4fKpc1FmWLjdWfa/ZMhLf4TDXVkakpuoVDRJwKb0+xvzFSmgoU2XiGVfdOZfdh9Ife2+sZOoNxOtHMUVmjTws3ltj431FNbkUA7nxu4CA3Me9YPtPqhofDZ+udNNPdreffcps9X6gda+V7EncC7fHfNhk5xkPl8m++tO9UHzcyHnj9bp3VHO2+TZezPBb/BFwbzKNn74/EpTY9ZHE+n08XhMKp43tPVbDZ7+uB5o4tDZbGYVuJSlh3TND2NT+Oxv98n0XweWDx5yrHzUSEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeCx/AE6XUwZt/iLqAAAAAElFTkSuQmCC" alt="" />
                    {console.log(props.rName)}
                    <a style={{maxWidth : "180px"}} href = {props.url}>{props.rName}</a>
                </div>
                <BsFillTrashFill onClick={() => props.removeLink(props.index)}/>
            </div>
        </div>
    )
}

export default QuickCard
