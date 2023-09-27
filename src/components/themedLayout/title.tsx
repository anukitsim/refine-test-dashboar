import React from "react";
import { useRouterContext, useLink, useRouterType } from "@refinedev/core";
import MuiLink from "@mui/material/Link";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import type { RefineLayoutThemedTitleProps } from "@refinedev/mui";
import { logo } from "assets";




export const ThemedTitleV2: React.FC<RefineLayoutThemedTitleProps> = ({
  collapsed,
  wrapperStyles,

 
}) => {
  const routerType = useRouterType();
  const Link = useLink();
  const { Link: LegacyLink } = useRouterContext();

  const ActiveLink = routerType === "legacy" ? LegacyLink : Link;

  return (
    <MuiLink
      to="/"
      component={ActiveLink}
      underline="none"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        ...wrapperStyles,
      }}
    >
      
      {!collapsed && (
        <img
        src={logo}
        alt="logo"
        style={{ width: "200px", height: "200px" }} 
      />
      )}
    </MuiLink>
  );
};
