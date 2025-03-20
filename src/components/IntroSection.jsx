// export default function IntroSection() {
//     return  (
//         <section>
//             <h1 className="centerend">Дима Шпырковичь</h1>
//             <h3 className="centerend" style={{color: "#666"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ullam minima aut sed expedita beatae soluta, aliquid cumque quos culpa et praesentium animi similique voluptate dolorem aperiam. Amet, nemo dignissimos.</h3>
//         </section>
//     )
// }

import React from "react"
const e = React.createElement;
export default function IntroSection()  {
    return e("section", null, [e('h1', {className : "centerend" , key: 1}, 'Дима Шпырковичь'),
           e('h3', {className : "centerend", style : {color: "#666"}, key: 2}, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ullam minima aut sed expedita beatae soluta, aliquid cumque quos culpa et praesentium animi similique voluptate dolorem aperiam. Amet, nemo dignissimos.'),
     ])

}