import { useLocation, Navigate } from "react-router-dom";
import Gen from "./Gen";
import GenPage2 from "./GenPage2";

export default function GenRouter() {
  const query = new URLSearchParams(useLocation().search);
  const page = query.get("page");

  switch (page) {
    case "1":
    case null:
      return <Gen />;
    case "2":
      return <GenPage2 />;
    default:

      return <Navigate to="/gen?page=1" replace />;
  }
}
