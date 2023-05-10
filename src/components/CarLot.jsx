import React, {useState, useEffect} from "react";
import Search from "./Search";
import Cars from "./Cars";
import NewCarForm from "./NewCarForm";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function CarLot() {
  const [cars, setCars] = useState([]);
  const [brand, setBrand] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://localhost:3001/cars")
      .then(response => response.json())
      .then(cars => setCars(cars));
  }, []);

  let filteredCars = cars;

  if (brand !== "" || search !== "") {
    filteredCars = [...cars].filter(
      car =>
        (car.car_make === brand || brand === "") &&
        car.car_model.toLowerCase().includes(search.toLowerCase()),
    );
  }

  function onBrandChange(newBrand) {
    setBrand(prevBrand => newBrand);
  }

  function onSearchChange(newSearch) {
    setSearch(prevSearch => newSearch);
  }

  function onNewCarFormSubmit(newCar) {
    setCars([newCar, ...cars]);
  }

  function onEditCarFormSubmit(updatedCar) {
    const updatedCars = [...cars].map(car =>
      car.id === updatedCar.id ? updatedCar : car,
    );
    setCars(updatedCars);
  }
  function onMarkCarAsSold(id) {
    const updatedCars = [...cars].filter(car => car.id !== id);
    setCars(updatedCars);
  }
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Search
            brand={brand}
            search={search}
            onBrandChange={onBrandChange}
            onSearchChange={onSearchChange}
          />{" "}
          {/**You can edit this line */}
        </Grid>
        <Grid item xs={6}>
          <NewCarForm onNewCarFormSubmit={onNewCarFormSubmit} />{" "}
          {/**You can edit this line */}
        </Grid>
        <Grid item xs={12}>
          {/** enter your code below */}
          <Cars cars={filteredCars} onEditCarFormSubmit={onEditCarFormSubmit} onMarkCarAsSold={onMarkCarAsSold} />
          {/** enter your code above */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default CarLot;
