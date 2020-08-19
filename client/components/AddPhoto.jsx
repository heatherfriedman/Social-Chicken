import React, { useState, useEffect } from 'react';

import DateTimePicker from 'react-datetime-picker';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button, Form, Card } from 'react-bootstrap';

export default function AddPhoto(props) {
  /* Form data */
  // const initialFormData = Object.freeze({
  //   eventtitle: '',
  //   eventlocation: '',
  //   eventdetails: '',
  // });

  // const [formData, updateFormData] = useState(initialFormData);
  // const [dateTime, onChange] = useState(new Date());
  const [show, setShow] = useState(false);
  //handles any change tot he form and updates the state
  const uploadedImage = React.useRef(null);
  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    // updateFormData({
    //   ...formData,
    //   // Trimming any whitespace
    //   [e.target.name]: e.target.value.trim(),
    // });
  };
  //handles submit event - create date and time and append to the event object
  const handleSubmit = (e) => {
    e.preventDefault();
    // const eventdate = dateTime.toDateString();
    // let time = dateTime.toTimeString();
    // let eventstarttime = time.split(' ')[0];
    // // ... submit to API or something
    // addEvent({ ...formData, eventdate, eventstarttime });
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="cardContainer" onClick={handleShow}>
        <FontAwesomeIcon className="mx-auto faPlus" icon={faPlus} size="4x" />
        <p>Add Photo To Event</p>
      </div>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Add Photo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input
            type="file"
            accept="image/*"
            multiple="false"
            onChange={handleImageUpload}
          />
          <img
            ref={uploadedImage}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
          {/* <Form>
            <Form.Group controlId="formEventTitle">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                name="eventtitle"
                onChange={handleChange}
                required
                type="text"
                placeholder="Enter title"
              />
            </Form.Group>

            <Form.Group controlId="formEventLocation">
              <Form.Label>Location</Form.Label> */}
          {/* <Form.Control
                name="eventlocation"
                onChange={handleChange}
                required
                type="text"
                placeholder="Enter location"
              />
            </Form.Group>

            <Form.Group controlId="formEventDescription">
              <Form.Label>Event Description</Form.Label>
              <Form.Control
                name="eventdetails" */}
          {/* //         onChange={handleChange}
        //         required
        //         as="textarea"
        //         placeholder="Enter description"
        //       />
        //     </Form.Group>

        //     <Form.Group controlId="formEventDescription">
        //       <Form.Label>Start Date & Time</Form.Label>
        //       <DateTimePicker onChange={onChange} value={dateTime} />
        //     </Form.Group>

        //     <Button */}
          {/* //       variant="primary"
        //       type="submit"
        //       onClick={(e) => { */}
          {/* //         handleSubmit(e);
        //       }}
        //     >
        //       Submit
        //     </Button>
        //   </Form> */}
        </Modal.Body>
      </Modal>
    </div>
  );
}
