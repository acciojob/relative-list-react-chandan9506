import React from 'react'

const App = () => {

  const relatives =["chandan","pawan","sandeep","miku","ansh"];

  return (
    <div id="main">
               {/* Do not remove the main div */}
              

             <ol key="relativeList">
              {relatives.map((item,index) =>
                  <li key={`relativeListItem${index + 1}`}>{item}</li>
              )}
             
             </ol>
    </div>
  )
}

export default App
