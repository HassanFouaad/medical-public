import React from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import { useFormik } from "formik";
import * as yup from "yup";
import CountrySelect from "./CountrySelect";
import axios from "axios";
const joinAPI = `${process.env.NEXT_PUBLIC_API_URL}/public/request`;

const makeJoinRequest = async (bodyData) => {
  try {
    const { data } = await axios.post(joinAPI, bodyData);
    return {
      data,
    };
  } catch (error) {
    console.error(error);
    return {
      error: error?.response?.data?.error?.message || "Unkown Error",
    };
  }
};
export default function Join() {
  const [unkownError, setUnkownError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const validationSchema = yup.object({
    code: yup.string(),

    firstName: yup
      .string(`First name is required`)
      .required("First name is required")
      .max(50, "First name must be less than 50 chars"),
    lastName: yup
      .string(`Last name is required`)
      .required("Last name is required")
      .max(50, "Last name must be less than 50 chars"),
    email: yup
      .string(`Email is required`)
      .required("Email is required")
      .email("Please enter valid email")
      .max(50, "Email must be less than 255 chars"),

    type: yup.string().default("user"),

    name: yup.string().when("type", (type, schema) => {
      if (type === "user") return schema;
      return yup.string().required(type + " name is required");
    }),

    phone: yup.string().when("type", (type, schema) => {
      if (type === "user") return schema;
      return yup
        .number("Please insert valid number")
        .required(type + " phone is required");
    }),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      type: "pharmacy",
      code: "+20",
      name: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, formikHelp) => {
      let { firstName, lastName, email, type, code, phone, name, about } =
        values;
      if (type !== "user") {
        if (!phone)
          return formikHelp.setFieldError("phone", "Please enter phone");
        if (!name) return formikHelp.setFieldError("name", "Please enter name");

        phone = String(phone);
        if (String(phone).startsWith("+")) {
          phone = String(phone).replace("+", 0);
        }
        if (String(phone).startsWith("0")) {
          phone[0] = "";
        }
      }
      setUnkownError(false);
      setLoading(true);

      const { error } = await makeJoinRequest({
        firstName,
        lastName,
        email,
        type,
        phone: phone ? code + phone : "Invalid Phone",
        name: name || firstName + " " + lastName,
        about: about || undefined,
      });

      if (error) {
        setLoading(false);
        if (String(error).includes("Email")) {
          return formikHelp.setFieldError(
            "email",
            "Email already exists in our system"
          );
        }

        return setUnkownError(true);
      }

      setLoading(false);
      return setSuccess(true);
    },
  });

  const currentType = formik.values.type;

  return (
    <Box width={1} id="request" sx={{ backgroundColor: "text.border", py: 7 }}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={1}
          flexDirection="column"
          alignContent={"center"}
        >
          {success && (
            <>
              <img src="assets/success.svg" alt="footer logo" width="300" />

              <Typography variant="h6" color="text.primary" sx={{ my: 5 }}>
                We have successfully received your request, We will contact you
                in 24-48 hours
              </Typography>
            </>
          )}

          {!success && (
            <>
              <img src="assets/join.svg" alt="footer logo" width="300" />
              <Box
                width={1}
                component="form"
                sx={{ my: 2 }}
                onSubmit={formik.handleSubmit}
              >
                <TextField
                  sx={{ my: 3 }}
                  fullWidth
                  autoComplete="off"
                  onChange={formik.handleChange}
                  value={formik.values.type}
                  id="type"
                  name="type"
                  label={"Type"}
                  type="text"
                  InputProps={{
                    autocomplete: "off",
                    form: {
                      autocomplete: "off",
                    },
                  }}
                  placeholder={"Type"}
                  select
                >
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="pharmacy">Pharmacy</MenuItem>
                  <MenuItem value="warehouse">Warehouse</MenuItem>
                </TextField>
                <TextField
                  sx={{ my: 3 }}
                  fullWidth
                  autoComplete="off"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                  id="firstName"
                  name="firstName"
                  label={"First Name"}
                  type="text"
                  InputProps={{
                    autocomplete: "off",
                    form: {
                      autocomplete: "off",
                    },
                  }}
                  placeholder={"First Name"}
                />
                <TextField
                  sx={{ my: 3 }}
                  fullWidth
                  autoComplete="off"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  id="lastName"
                  name="lastName"
                  label={"Last Name"}
                  type="text"
                  InputProps={{
                    autocomplete: "off",
                    form: {
                      autocomplete: "off",
                    },
                  }}
                  placeholder={"Last Name"}
                />

                <TextField
                  sx={{ my: 3 }}
                  fullWidth
                  autoComplete="off"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  id="email"
                  name="email"
                  label={"Email"}
                  type="text"
                  InputProps={{
                    autocomplete: "off",
                    form: {
                      autocomplete: "off",
                    },
                  }}
                  placeholder={"Email"}
                />

                {currentType !== "user" && (
                  <>
                    <TextField
                      sx={{ my: 3 }}
                      fullWidth
                      autoComplete="off"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                      id="name"
                      name="name"
                      label={`${currentType} name`}
                      type="text"
                      InputProps={{
                        autocomplete: "off",
                        form: {
                          autocomplete: "off",
                        },
                      }}
                      placeholder={`${currentType} name`}
                    />
                    <Grid display={"flex"} sx={{ my: 3 }} container spacing={1}>
                      <Grid item md={2} sm={3} xs={3}>
                        <CountrySelect
                          chooseCode={(code) => {
                            formik.setFieldValue("code", code);
                          }}
                        />
                      </Grid>
                      <Grid item md={10} sm={9} xs={9}>
                        <TextField
                          fullWidth
                          autoComplete="off"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.phone && Boolean(formik.errors.phone)
                          }
                          helperText={
                            formik.touched.phone && formik.errors.phone
                          }
                          id="phone"
                          name="phone"
                          label={`${currentType} phone`}
                          type="number"
                          InputProps={{
                            autocomplete: "off",
                            form: {
                              autocomplete: "off",
                            },
                          }}
                          placeholder={`${currentType} phone`}
                        />
                      </Grid>
                    </Grid>
                  </>
                )}

                {unkownError && (
                  <Typography variant="body1" color="red">
                    {"Unkown error happened, Please try again later"}
                  </Typography>
                )}
                <Button
                  variant="outlined"
                  color="secondary"
                  type="submit"
                  disabled={loading}
                >
                  Request to join
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
}
