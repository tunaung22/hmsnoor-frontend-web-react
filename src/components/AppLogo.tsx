import { SvgIcon, SvgIconProps } from "@mui/material";

/**
 * App Logo
 * @param props
 * @returns
 */
function AppLogo(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0.5 33 33">
        <path
          fill="currentColor"
          stroke="#0182a3"
          strokeWidth="1px"
          d="M6.22.132V13.3H1.252v7.32H6.22v10.887h7.318V20.62h7.435v13.114h7.318V20.62h4.324V13.3H28.29V2.36h-7.318V13.3h-7.435V.132Z"
          // style="stroke:#001e26;stroke-width:.26458333;stroke-dasharray:none;stroke-opacity:1;fill:#0182a3;fill-opacity:1"
        />
      </svg>

      {/* <svg
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
      </svg> */}
    </SvgIcon>
  );
}

export { AppLogo };
