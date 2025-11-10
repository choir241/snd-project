import { labels } from "../../static/labels";

export default function PackageNav({ packageNavName }) {
  const packageNameCamelCase = packageNavName.split(" ").reduce((a,b,i)=>{
    if(i === 0){
      return a + b.toLowerCase()
    }else{
      return a + b
    }
  }, "");

  return (
    <nav aria-label="Breadcrumb" className="font-semibold mb-5 text-sm">
      <ol className="flex list-none m-0 p-0">
        <li className="after:content-['/'] after:mx-2 after:text-core-text-20">
          <a
            className="min-w-fit text-nowrap !text-core-text-20"
            href={labels.bookings.bookingsLink}
          >
            <span>{labels.services.allServices}</span>
          </a>
        </li>
        <li>
          <a
            aria-current="page"
            className="!text-black"
            href={`/${packageNameCamelCase}`}
          >
            <span className="line-clamp-1">{packageNavName}</span>
          </a>
        </li>
      </ol>
    </nav>
  );
}
