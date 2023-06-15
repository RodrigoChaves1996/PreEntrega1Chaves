import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField,} from "@mui/material";
import { useState } from "react";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "flex-stard",
        flexDirection: "revert",
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }}
    >
      <TextField
        label="Email"
        variant="outlined"
        color="success"
        size="medium"
      />

      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel color="success" htmlFor="outlined-adornment-password">
          Contraseña
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          color="success"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility color="success" />
                )}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <Button variant="contained" color="success">
        Ingrear
      </Button>
    </Box>
  );
};

