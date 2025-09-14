import { useMemo, useCallback } from "react";
import { useLocation, Navigate } from "react-router-dom";
import Gen from "./Gen";
import GenPage2 from "./GenPage2";

export default function GenRouter() {
  const location = useLocation();
  
  const searchParams = useMemo(() => 
    new URLSearchParams(location.search), 
    [location.search]
  );
  
  const page = useMemo(() => 
    searchParams.get("page"), 
    [searchParams]
  );

  const defaultRedirectPath = useMemo(() => "/gen?page=1", []);

  const getPageComponent = useCallback(() => {
    switch (page) {
      case "1":
      case null:
        return <Gen />;
      case "2":
        return <GenPage2 />;
      default:
        return <Navigate to={defaultRedirectPath} replace />;
    }
  }, [page, defaultRedirectPath]);

  return getPageComponent();
}