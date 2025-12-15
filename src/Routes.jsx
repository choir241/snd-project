import Package from "./pages/package/Package";
import Bookings from "./pages/bookings/Bookings";
import Appointments from "./pages/appointments/Appointments";
import { BrowserRouter, Routes, Route } from "react-router";
import { labels } from "./static/labels";
import axios from "axios";
import { PackageSession } from "./middleware/packageContext";
import { useState, useEffect } from "react";
import { packageNameCamelCase } from "./hooks/packageNameCamelCase";
import CardForm from "./components/Purchase/CardForm";

export default function BrowserRoutes() {
  const [packages, setPackages] = useState([]);

  {
    /* Grab packages from backend */
  }
  useEffect(() => {
    async function getPackages() {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_API_URL}/packages`,
      );

      setPackages(response.data.packageList);
    }

    getPackages();
  }, []);

  {
    /* Refresh oAuth Token */
  }
  useEffect(() => {
    const refreshToken = "";
    setTimeout(() => {
      async function refreshToken() {
        try {
          axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/refreshToken`, {
            refreshToken: refreshToken,
          });
        } catch (err) {
          console.error(`Error refreshing token + ${err}`);
        }
      }
    }, 518400000);
  }, []);

  return (
    <PackageSession.Provider value={{ packages }}>
      <BrowserRouter>
        <Routes>
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/purchase" element={<CardForm />} />
          <Route path="/" element={<Bookings />} />
          {packages.map((packageService) => {
            if (packageService.name !== "Touch Up Labor (Hourly)") {
              const camelCasedPackageName = packageNameCamelCase({
                packageName: packageService.name,
              });
              const packagePrice = labels.packages[camelCasedPackageName].price;
              const packageTimeAlloted =
                labels.packages[camelCasedPackageName].timeAlloted;
              return (
                <Route
                  path={`/${camelCasedPackageName}`}
                  key={camelCasedPackageName}
                  element={
                    <Package
                      packageName={packageService.name}
                      packagePrice={packagePrice}
                      packageTimeAlloted={packageTimeAlloted}
                      packageFeatureList={packageService.descriptionPlaintext}
                      packageOptionList={packageService.variations}
                    />
                  }
                />
              );
            }
          })}
        </Routes>
      </BrowserRouter>
    </PackageSession.Provider>
  );
}
