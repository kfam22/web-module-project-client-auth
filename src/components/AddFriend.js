import React from 'react';

const AddFriend = ()=>{
    return (<div>
    <h2>AddFriend</h2>
    <form>
        <div>
            <label htmlFor='username'>Friend Name:</label>
            <input/>
        </div>
        <div>
            <label htmlFor='age'>Friend Age:</label>
            <input/>
        </div>
        <div>
            <label htmlFor='email'>Friend Email:</label>
            <input/>
        </div>
    </form>
    </div>)
  }

  export default AddFriend;