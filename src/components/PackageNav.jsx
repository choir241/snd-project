import { labels } from "../static/labels";

export default function PackageNav() {
  return (
    <nav aria-label="Breadcrumb" className="font-semibold mb-5 text-sm">
      <ol className="flex list-none m-0 p-0">
        <li className="after:content-['/'] after:mx-2 after:text-core-text-20">
          <a
            className="min-w-fit text-nowrap !text-core-text-20"
            href="/appointments/bvvj6fvmjuosjt/location/LP3QWMTHKC1DJ/services/P24I7TCH2NXL7WFU5SLM3QAJ/appointments/bvvj6fvmjuosjt/location/LP3QWMTHKC1DJ/services"
          >
            <span>{labels.services.allServices}</span>
          </a>
        </li>
        <li>
          <a
            aria-current="page"
            className="!text-black"
            href="/appointments/bvvj6fvmjuosjt/location/LP3QWMTHKC1DJ/services/P24I7TCH2NXL7WFU5SLM3QAJ"
          >
            <span className="line-clamp-1">
              {labels.packages.premiumPackage.name}
            </span>
          </a>
        </li>
      </ol>
    </nav>
  );
}
