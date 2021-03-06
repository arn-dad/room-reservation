import React, { useState } from 'react';
import { roomDefault, mapBool } from '../../constants';

const Form = (props) => {
  const [room, setRoom] = useState(roomDefault);

  const onFormChange = ({ target: { value, name } }) => {
    setRoom({
      ...room,
      [name]: value
    })
  }

  const handleSelect = ({ target: { name, value } }) => {
    setRoom({
      ...room,
      [name]: value === 'Yes'
    })
  }
  
  const { floor, beds, balcony, roomId } = room;
  return (
    <div className='form-wrapper'>
      <div>
        <div className='form-title'>Add New Room</div>
        <label className="form-label" htmlFor="">
          Floor
          <input name='floor' onChange={onFormChange} className='form-item form-input' type="number" value={floor}/>
        </label>
        <label className="form-label" htmlFor="">
          Beds
          <input name='beds' onChange={onFormChange} className='form-item form-input' type="number" value={beds}/>
        </label>
        <label className="form-label" htmlFor="">
          Balcony
          <select onChange={handleSelect} className='form-item form-select' value={Boolean(balcony) ? 'Yes' : 'No'} name="balcony">
            <option value='No'>No</option>
            <option value='Yes'>Yes</option>
          </select>
        </label>
        <label className="form-label" htmlFor="">
          Room Number
          <input name='roomId' onChange={onFormChange} className='form-item form-input' type="text" value={roomId}/>
        </label>
      </div>
      <button onClick={() => props.createRoom(room)} className='form-button'>Create</button>
    </div>
  );
};

export default Form;