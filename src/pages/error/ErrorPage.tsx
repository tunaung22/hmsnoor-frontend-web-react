import { isRouteErrorResponse, useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  let statusMessage: string;

  if (isRouteErrorResponse(error)) {
    statusMessage = error.statusText;
  } else {
    statusMessage = "Unknown error";
  }

  return (
    <>
      <h1>Error Page</h1>
      <p>Error! An unexpected error occured.</p>

      <p>
        <i>{statusMessage}</i>
      </p>
    </>
  );
}

export { ErrorPage };
