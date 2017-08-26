// { .. } stores React.Component in Component
import React, { Component } from 'react';

class SearchBar extends Component{
   constructor(props){
      super(props);
      this.state = {
         term: ''
      };
   }

   onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
   }

   render() {
      return (
         <div className="search-bar input-group align-self-center">
            <input
               value={this.state.term}
               onChange={ e => this.onInputChange(e.target.value) }
               placeholder="Search for..."
               className="form-control"/>
            <span className="input-group-addon">
               <i className="fa fa-search">
               </i>
            </span>
         </div>
      );
   }
}

export default SearchBar;