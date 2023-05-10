import React, {useState} from "react";

function NewCarForm({onNewCarFormSubmit}) {
  const [showForm, setShowForm] = useState(false);
  const [newCarFormData, setNewCarFormData] = useState({
    car_model_year: "",
    car_make: "",
    car_model: "",
    price: "",
    condition: "",
    mileage: "",
    color: "",
    image: "",
  });
  function handleChange(event) {
    const name = event.target.name;
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setNewCarFormData({...newCarFormData, [name]: value});
  }
  function handleNewCarSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:3001/cars`, {
      method: "POST",
      body: JSON.stringify(newCarFormData),
      headers: {"content-type": "application/json"},
    })
      .then(response => response.json())
      .then(newCar => {
        onNewCarFormSubmit(newCar);
        setShowForm(prevShowForm => !prevShowForm);
        setNewCarFormData({
          car_model_year: "",
          car_make: "",
          car_model: "",
          price: "",
          condition: "",
          mileage: "",
          color: "",
          image: "",
        });
      });
  }
  function toggleForm() {
    setShowForm(prevShowForm => !prevShowForm);
  }

  return (
    <div className="new_car_form">
      {showForm ? (
        <form id="car-form" className="sale-form" onSubmit={handleNewCarSubmit}>
          <div className="row">
            <div className="left">
              <label htmlFor="car_model_year">YEAR</label>
            </div>
            <div className="right">
              <select
                name="car_model_year"
                id="year-input"
                required
                aria-required="true"
                value={newCarFormData.car_model_year}
                onChange={handleChange}>
                <option value=""></option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="left">
              <label htmlFor="car_make">MAKE</label>
            </div>
            <div className="right">
              <input
                type="text"
                name="car_make"
                id="make-form"
                required
                aria-required="true"
                minLength="2"
                value={newCarFormData.car_make}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="left">
              <label htmlFor="car_model">MODEL</label>
            </div>
            <div className="right">
              <input
                type="text"
                name="car_model"
                id="model-form"
                required
                aria-required="true"
                value={newCarFormData.car_model}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="left">
              <label htmlFor="price">PRICE</label>
            </div>
            <div className="right">
              <input
                type="text"
                name="price"
                id="price-form"
                required
                pattern="^\d{1,}$|(?=^.{1,}$)^\d+\.\d{0,2}$"
                aria-required="true"
                minLength="3"
                maxLength="10"
                value={newCarFormData.price}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="left">
              <label htmlFor="condition">CONDITION</label>
            </div>
            <div className="right">
              <select
                name="condition"
                id="condition-form"
                required
                aria-required="true"
                value={newCarFormData.condition}
                onChange={handleChange}>
                <option value="New">New</option>
                <option value="Used">Used</option>
                <option value="Certified Pre-Owned">Certified Pre-Owned</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="left">
              <label htmlFor="mileage">MILEAGE</label>
            </div>
            <div className="right">
              <input
                type="tel"
                name="mileage"
                id="mileage-form"
                required
                aria-required="true"
                maxLength="7"
                value={newCarFormData.mileage}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="left">
              <label htmlFor="color">COLOR</label>
            </div>
            <div className="right">
              <input
                type="text"
                name="color"
                id="color-form"
                required
                aria-required="true"
                minLength="3"
                value={newCarFormData.color}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row" id="image_url_row">
            <div className="left">
              <label htmlFor="image">IMAGE URL</label>
            </div>
            <div className="right">
              <input
                type="text"
                name="image"
                id="image_url"
                value={newCarFormData.image}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <input type="submit" id="submit-btn" value="ADD CAR" />
            <input
              type="button"
              id="cancel-btn"
              value="CANCEL"
              onClick={toggleForm}
            />
          </div>
        </form>
      ) : (
        <button onClick={toggleForm}>Show Add New Car Form</button>
      )}
    </div>
  );
}

export default NewCarForm;
