import React from "react";

function NotFound() {
  React.useEffect(() => {
    document.title = "ACM CEC | Not Found";
  });

  return (
    <div>
      <h4>Page Not Found </h4>
    </div>
  );
}

export default NotFound;
