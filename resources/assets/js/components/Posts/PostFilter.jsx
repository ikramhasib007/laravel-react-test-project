import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from '../../actions/filters';

function PostFilter(props) {
  return (
    <div className="form-group">
      <input 
        type="text" 
        className="form-control" 
        placeholder="Search..."
        value={props.filters.text}
        onChange={(e) => {props.dispatch(setTextFilter(e.target.value))}}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(PostFilter);
