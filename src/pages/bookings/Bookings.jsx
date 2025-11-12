import PackageHeader from "../../components/Package/PackageHeader";
import CollapsedPackageList from "../../components/CollapsedPackage/CollapsedPackageList";
import PackageCart from "../../components/Cart/PackageCart";
import "./Booking.css";

export default function Bookings() {
  return (
    <div id="bookings">
      <div className="bg-white" id="root">
        <div className="mb-0 flex w-screen max-h-screen-svh min-h-screen-svh h-full overflow-hidden relative">
          <div className="flex flex-col flex-grow overflow-y-auto">
            <PackageHeader />

            <div className="flex justify-center flex-grow w-full max-w-lg mx-auto">
              {/* Package list */}
              <CollapsedPackageList />

              {/* Service Cart */}
              <PackageCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
