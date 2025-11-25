export default function PackageServiceList({ packageFeatureList }) {
  return (
    <div
      className="paragraph-20 text-core-text-20 whitespace-pre-wrap"
      data-testid="service-description"
    >
      <ul>
        {packageFeatureList
          ? packageFeatureList.split("\n").map((feature) => {
              return <li key={feature}>{feature}</li>;
            })
          : ""}
      </ul>
    </div>
  );
}
