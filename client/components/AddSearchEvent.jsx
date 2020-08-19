import React from 'react';
import CreateEvent from './CreateEvent.jsx';
import SearchEvent from './SearchEvent.jsx';
import AddPhoto from './AddPhoto.jsx';

export default function AddSearchEvent(props) {
  return (
    <div className="myCol">
      <CreateEvent {...props} />
      <AddPhoto {...props} />
      <SearchEvent {...props} />
    </div>
  );
}
