import React from "react";

export default function Phonectics(props) {
 return (
     <div className="Phonetics">
         <a href={props.phonetic.audio} target="_blank">
             Listen
         </a>
         <br />
         {props.phonetic.text}
     </div>
 )
}