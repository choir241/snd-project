import Package from "./pages/package/Package";
import Bookings from "./pages/bookings/Bookings";
import Appointments from "./pages/appointments/Appointments";
import { BrowserRouter, Routes, Route } from "react-router";
import { labels } from "./static/labels";
import axios from "axios";
import { PackageSession } from "./middleware/packageContext";
import { ModifierSession } from "./middleware/packageContext";
import { useState, useEffect } from "react";
import { packageNameCamelCase } from "./hooks/packageNameCamelCase";
import CardForm from "./components/Purchase/CardForm";
import AddOns from "./pages/add-ons/AddOns";
import Checkout from "./pages/checkout/Checkout";

export default function BrowserRoutes() {
  const [packages, setPackages] = useState([]);
  const [modifiers, setModifiers] = useState([]);

  {
    /* Grab packages from backend */
  }
  useEffect(() => {
    async function getPackages() {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_API_URL}/packages`,
      );
      setModifiers(response.data.modifierList);

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
      <ModifierSession.Provider value={{ modifiers }}>
        <BrowserRouter>
          <Routes>
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/purchase" element={<CardForm />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<Bookings />} />
            {packages.map((packageService) => {
              if (
                packageService.name !== "Touch Up Labor (Hourly)" &&
                packageService.name !== "Ceramic Coating"
              ) {
                const camelCasedPackageName = packageNameCamelCase({
                  packageName: packageService.name,
                });
                return (
                  <Route
                    path={`/${camelCasedPackageName}/addOns`}
                    element={<AddOns packageName={packageService.name} />}
                  />
                );
              }
            })}
            {packages.map((packageService) => {
              if (packageService.name !== "Touch Up Labor (Hourly)") {
                const camelCasedPackageName = packageNameCamelCase({
                  packageName: packageService.name,
                });
                const packagePrice =
                  labels.packages[camelCasedPackageName].price;
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
      </ModifierSession.Provider>
    </PackageSession.Provider>
  );
}
