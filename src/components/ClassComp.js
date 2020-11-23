import React from 'react';

class ClassComp extends React.Component {
   render() {
      return (
         <div>
            <h3>Hello React {this.props.data} Comp</h3>
         </div>
      )
   }
}

export default ClassComp;