import { useLogin } from "@refinedev/core";
import { useEffect, useRef } from "react";

import { logo } from "assets";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ThemedTitleV2 } from "@refinedev/mui";

import { CredentialResponse } from "../interfaces/google";


export const Login: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse>();

  const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window === "undefined" || !window.google || !divRef.current) {
        return;
      }

      try {
        window.google.accounts.id.initialize({
          ux_mode: "popup",
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          callback: async (res: CredentialResponse) => {
            if (res.credential) {
              login(res);
            }
          },
        });
        window.google.accounts.id.renderButton(divRef.current, {
          theme: "filled_blue",
          size: "medium",
          type: "standard",
        });
      } catch (error) {
        console.log(error);
      }
    }, []);

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div ref={divRef} />
      </div>
    );
  };

  return (
    <div
      style={{
        backgroundColor: "#9074b4", // Set the background color here
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Box
          display="flex"
          gap="36px"
          justifyContent="center"
          flexDirection="column"
        >
          <img src={logo} alt="dark-mode-logo" />
          <GoogleButton />
        </Box>
      </Container>
    </div>
  );
};
