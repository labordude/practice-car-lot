import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

/**can modify below this line */

import React, {useState} from "react";

function Car({car, onEditCarFormSubmit, onMarkCarAsSold}) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    car_model_year: car.car_model_year,
    car_make: car.car_make,
    car_model: car.car_model,
    price: car.price,
    condition: car.condition,
    mileage: car.mileage,
    color: car.color,
    image: car.image,
  });
  function handleChange(event) {
    const name = event.target.name;
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setFormData({...formData, [name]: value});
  }
  function toggleForm() {
    setShowForm(prevShowForm => !showForm);
  }
  function handleEditCarFormSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:3001/cars/${car.id}`, {
      method: "PATCH",
      body: JSON.stringify(formData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then(response => response.json())
      .then(updatedCar => {
        onEditCarFormSubmit(updatedCar);
        setShowForm(prevShowForm => !showForm);
      });
  }
  function handleMarkCarAsSold(event) {
    event.preventDefault();
    fetch(`http://localhost:3001/cars/${car.id}`, {
      method: "DELETE",
    }).then(() => onMarkCarAsSold(car.id));
  }
  return (
    <Grid item xs={2} sm={4} md={4}>
      {/**can edit below this */}
      {!showForm ? (
        <Card sx={{maxWidth: 350, height: 600}}>
          <CardHeader
            title={`${car.car_model_year} ${car.car_make} ${car.car_model}`}
            sx={{fontSize: "20px"}}
          />
          <CardMedia
            component="img"
            height="250"
            image={car.image}
            alt={`YEAR MAKE MODEL`}
          />
          <CardContent>
            <Typography variant="h5" color="text.secondary" align="center">
              ${parseFloat(car.price).toFixed(2)}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography paragraph>Condition: {car.condition}</Typography>
            <Typography paragraph>Mileage: {car.mileage}</Typography>
            <Typography paragraph>Color: {car.color}</Typography>
          </CardContent>
          <CardContent className="flex justify-around">
            <Button variant="contained" onClick={toggleForm}>
              Edit
            </Button>
            <Button variant="contained" onClick={handleMarkCarAsSold}>
              Mark Sold
            </Button>
          </CardContent>
        </Card>
      ) : (
        <form
          id="car-form"
          className="sale-form"
          onSubmit={handleEditCarFormSubmit}>
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
                value={formData.car_model_year}
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
                value={formData.car_make}
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
                value={formData.car_model}
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
                value={formData.price}
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
                value={formData.condition}
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
                value={formData.mileage}
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
                value={formData.color}
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
                value={formData.image}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <input type="submit" id="submit-btn" value="SAVE" />
            <input
              type="button"
              id="cancel-btn"
              value="CANCEL"
              onClick={toggleForm}
            />
          </div>
        </form>
      )}
      {/**can edit the above section */}
    </Grid>
  );
}

export default Car;
