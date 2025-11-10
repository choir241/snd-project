import { labels } from "../../static/labels";
import CollapsedPackage from "./CollapsedPackage";

export default function CollapsedPackageList() {
  return (
    <section
      aria-label="Main content"
      className="transition-opacity delay-150 duration-500 ease-in-out opacity-100 flex flex-col w-full px-4 md-lg:max-w-main-content "
    >
      <div data-testid="services-page" className="flex-col">
        <h2 className="sr-only">Services</h2>
        <CollapsedPackage
          packageRedirectLink={labels.bookings.premiumPackageLink}
          packageName={labels.packages.premiumPackage.name}
          packageFirstService={labels.packages.premiumPackage.featureList[0]}
          packageSecondService={labels.packages.premiumPackage.featureList[1]}
          packagePrice={labels.packages.premiumPackage.price}
          packageTimeAlloted={labels.packages.premiumPackage.timeAlloted}
        />

        <CollapsedPackage
          packageRedirectLink={labels.bookings.expressPackageLink}
          packageName={labels.packages.expressPackage.name}
          packageFirstService={labels.packages.expressPackage.featureList[0]}
          packageSecondService={labels.packages.expressPackage.featureList[1]}
          packagePrice={labels.packages.expressPackage.price}
          packageTimeAlloted={labels.packages.expressPackage.timeAlloted}
        />

        <CollapsedPackage
          packageRedirectLink={labels.bookings.interiorPackageLink}
          packageName={labels.packages.interiorPackage.name}
          packageFirstService={labels.packages.interiorPackage.featureList[0]}
          packageSecondService={labels.packages.interiorPackage.featureList[1]}
          packagePrice={labels.packages.interiorPackage.price}
          packageTimeAlloted={labels.packages.interiorPackage.timeAlloted}
        />

        <CollapsedPackage
          packageRedirectLink={labels.bookings.exteriorPackageLink}
          packageName={labels.packages.exteriorPackage.name}
          packageFirstService={labels.packages.exteriorPackage.featureList[0]}
          packageSecondService={labels.packages.exteriorPackage.featureList[1]}
          packagePrice={labels.packages.exteriorPackage.price}
          packageTimeAlloted={labels.packages.exteriorPackage.timeAlloted}
        />

        <CollapsedPackage
          packageRedirectLink={labels.bookings.supremeNomadsSpecialLink}
          packageName={labels.packages.supremeNomadsSpecial.name}
          packageFirstService={
            labels.packages.supremeNomadsSpecial.featureList[0]
          }
          packageSecondService={
            labels.packages.supremeNomadsSpecial.featureList[1]
          }
          packagePrice={labels.packages.supremeNomadsSpecial.price}
          packageTimeAlloted={labels.packages.supremeNomadsSpecial.timeAlloted}
        />

        <CollapsedPackage
          packageRedirectLink={labels.bookings.ceramicCoatingLink}
          packageName={labels.packages.ceramicCoating.name}
          packageFirstService={labels.packages.ceramicCoating.featureList[0]}
          packageSecondService={labels.packages.ceramicCoating.featureList[1]}
          packagePrice={labels.packages.ceramicCoating.price}
          packageTimeAlloted={labels.packages.ceramicCoating.timeAlloted}
        />
      </div>
    </section>
  );
}
