import React, { useState } from 'react'

const App = () => {

  

  const [relatives] = useState(["chandan","pawan","sandeep","miku","ansh"]);

  return (
    <div id="main">
               {/* Do not remove the main div */}
              

             <ol key="relativeList" id='realativeList'>
              {relatives.map((item,index) =>
                  <li key={`relativeListItem${index + 1}`}  id={'relativeListItem'+(index+1)}>{item}</li>
              )}
             
             </ol>
    </div>
  )
}

export default App


// import React, { useState } from 'react'

// const App = () => {
//   const[arr] = useState(["Satish", "Ankita", "Amit", "Chetan", "Vijay", "Rahul"]);
//   return (
//     <div id="main">
//                <ol key="relativeList" id='relativeList'>
//                 {
//                   arr.map((item, index) => <li key={'relativeListItem'+(index+1)} id={'relativeListItem'+(index+1)}>{item}</li>)
//                 }
//                </ol>
//     </div>
//   )
// }

// export default App