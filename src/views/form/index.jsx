import { Box, Button, Grid, TextField } from "@mui/material";
import Header from "../../components/Header";
import { Formik } from "formik";
import * as yup from "yup";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};
const phoneRegEx =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegEx, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

function Form() {
  const handleFormSubmit = (data) => console.log(data);

  return (
    <Box>
      <Header title="create user" subtitle="Create a New User Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container mt={2} gap={4}>
              <Grid item xs>
                <TextField
                  variant="filled"
                  fullWidth
                  hiddenLabel
                  placeholder="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  variant="filled"
                  fullWidth
                  hiddenLabel
                  placeholder="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  fullWidth
                  hiddenLabel
                  placeholder="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  fullWidth
                  hiddenLabel
                  placeholder="Contact Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact}
                  name="contact"
                  error={!!touched.contact && !!errors.contact}
                  helperText={touched.contact && errors.contact}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  fullWidth
                  hiddenLabel
                  placeholder="Address 1"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address1}
                  name="address1"
                  error={!!touched.address1 && !!errors.address1}
                  helperText={touched.address1 && errors.address1}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  fullWidth
                  hiddenLabel
                  placeholder="Address 2"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address2}
                  name="address2"
                  error={!!touched.address2 && !!errors.address2}
                  helperText={touched.address2 && errors.address2}
                />
              </Grid>
              <Grid item xs={12} container justifyContent="flex-end">
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  size="large"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default Form;
