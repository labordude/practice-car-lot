import React from "react";
import Grid from "@mui/material/Grid";
import Car from "./Car";
function Cars({cars, onEditCarFormSubmit, onMarkCarAsSold}) {
  return (
    <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
      {[...cars].map(car => (
        <Car
          key={car.id}
          car={car}
          onEditCarFormSubmit={onEditCarFormSubmit}
          onMarkCarAsSold={onMarkCarAsSold}
        />
      ))}
    </Grid>
  );
}

export default Cars;
