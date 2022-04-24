import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState("");

    const onInputChange = (e) => {
        setTerm(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input value={term} type="text" onChange={onInputChange} />
                </div>
            </form>
        </div>
    );

};

// class SearchBar extends React.Component{
//     state = {term: ""};


//     onInputChange = (e) =>{
//         this.setState({term: e.target.value});
//     };

//     onFormSubmit = (e) =>{
//         e.preventDefault();
//         this.props.onFormSubmit(this.state.term);
//     }

//     render(){
//         return( 
//         <div className="search-bar ui segment">
//             <form onSubmit={this.onFormSubmit} className="ui form">
//                 <div className="field">
//                     <label>Video Search</label>
//                     <input value={this.state.term} type="text" onChange={this.onInputChange} />    
//                 </div>                
//             </form>
//         </div>
//         );
//     }
// }


export default SearchBar;
