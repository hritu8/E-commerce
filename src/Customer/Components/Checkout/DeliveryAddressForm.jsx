import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Access form data from event.target
    const formData = new FormData(event.target);

    // Create an object to store form data
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Print form data to console (optional)
    console.log("Form Data:", data);

    // Here, you can perform any further processing with the form data, such as sending it to a server

    // Clear the form fields (optional)
    // event.target.reset();
  };
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5 -mt-8">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="adddress"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zipCode"
                    label="Zip/Postal Code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phonenumber"
                    name="phonenumber"
                    label="Phonenumber"
                    fullWidth
                    autoComplete="number"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
