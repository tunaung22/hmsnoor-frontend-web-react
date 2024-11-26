// import hmsLogo from "../assets/hms.svg";
import { SvgIcon, SvgIconProps } from "@mui/material";

function AppLogo(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 128"
        // strokeWidth={1.5}
        // stroke="none"
        // fill="#00667a"
      >
        <path
          // fill="#00667a"
          fill="currentColor"
          d="M25.08 4.49v50.36H6.073v28H25.08v41.64h28V82.85h28.447v50.162h28V82.849h16.543v-28h-16.543V13.012h-28V54.85H53.08V4.49h-28z"
          transform="translate(-6.072 -4.49)"
        />
      </svg>
    </SvgIcon>
  );
}

export { AppLogo };
