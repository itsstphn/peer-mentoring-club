import "./Register.css";
import TextField from "@mui/material/TextField";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { FormControl, Grid } from "@mui/material";
import { Box } from "@mui/system";

const Register = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Ubuntu"],
    },
    palette: {
      primary: {
        main: "#ff1654",
      },
    },
  });

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#ff1654",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ff1654",
    },
  });

  return (
    <div className="register">
      <ThemeProvider theme={theme}>
        <form action="">
          <h2>JOIN US NOW</h2>
          <p>Welcome! Please enter your details.</p>
          <div className="group-inputs">
            <Grid container>
              <Grid item xs={12} md={6}>
                <CssTextField
                  sx={{ width: 190, marginRight: 2, marginY: 1 }}
                  id="standard-basic"
                  label="First Name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CssTextField
                  sx={{ width: 190, marginY: 1 }}
                  id="standard-basic"
                  label="Last Name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  sx={{ width: "100%", marginY: 1 }}
                  id="standard-basic"
                  label="Address"
                  variant="standard"
                />
              </Grid>
              <Grid item>
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 150, marginY: 1 }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Gender
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Gender"
                    defaultValue=""
                  >
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"female"}>Female</MenuItem>
                    <MenuItem value={"nonBinary"}>Non-binary</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  sx={{ width: "100%", marginY: 1 }}
                  id="standard-basic"
                  label="Course"
                  variant="standard"
                />
              </Grid>
              <Grid item>
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 150, marginY: 1, marginRight: 2 }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Year"
                    defaultValue=""
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={3}>4</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 150, marginY: 1 }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Section
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Section"
                    defaultValue=""
                  >
                    <MenuItem value={"a"}>A</MenuItem>
                    <MenuItem value={"b"}>B</MenuItem>
                    <MenuItem value={"c"}>C</MenuItem>
                    <MenuItem value={"d"}>D</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <CssTextField
                  sx={{ width: 250, marginY: 1 }}
                  id="standard-basic"
                  label="Email"
                  type="email"
                  variant="standard"
                />
              </Grid>
              <Grid item>
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 180, marginY: 1 }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Im joining as...
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Role"
                    defaultValue=""
                  >
                    <MenuItem value={"mentor"}>Mentor</MenuItem>
                    <MenuItem value={"apprentice"}>Apprentice</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
          <button className="button-primary">Submit</button>
        </form>
      </ThemeProvider>
    </div>
  );
};

export default Register;

{
  /* <Box sx={{ width: "100%" }}>
              <CssTextField
                sx={{ width: 190 }}
                id="standard-basic"
                label="First Name"
                variant="standard"
              />
              <CssTextField
                sx={{ width: 190, marginLeft: 2 }}
                id="standard-basic"
                label="Last Name"
                variant="standard"
              />
            </Box>

            <CssTextField
              sx={{ width: 300, marginY: 1 }}
              id="standard-basic"
              label="Address"
              variant="standard"
            />
            <FormControl variant="standard" sx={{ minWidth: 150, marginY: 1 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Gender"
                defaultValue=""
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"nonBinary"}>Non-binary</MenuItem>
              </Select>
            </FormControl>
            <CssTextField
              sx={{ width: 300, marginY: 1 }}
              id="standard-basic"
              label="Course"
              variant="standard"
            />
            <Box>
              <FormControl
                variant="standard"
                sx={{ minWidth: 150, marginY: 1 }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Year
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Year"
                  defaultValue=""
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={3}>4</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                variant="standard"
                sx={{ minWidth: 150, marginY: 1, marginX: 2 }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Section
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Section"
                  defaultValue=""
                >
                  <MenuItem value={"a"}>A</MenuItem>
                  <MenuItem value={"b"}>B</MenuItem>
                  <MenuItem value={"c"}>C</MenuItem>
                  <MenuItem value={"d"}>D</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <CssTextField
              sx={{ width: 250, marginY: 1 }}
              id="standard-basic"
              label="Email"
              type="email"
              variant="standard"
            />
            <FormControl variant="standard" sx={{ minWidth: 180, marginY: 1 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Im joining as...
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Role"
                defaultValue=""
              >
                <MenuItem value={"mentor"}>Mentor</MenuItem>
                <MenuItem value={"apprentice"}>Apprentice</MenuItem>
              </Select>
            </FormControl> */
}
