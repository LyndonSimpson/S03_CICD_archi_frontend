import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oopsie!</h1>
      <p>This is not the page you are looking for...</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}