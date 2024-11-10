import { formatQuantity } from "@/utils/format";
import { PropertyDetailsProps } from "@/utils/types";

function PropertyDetails({
  details: { bedrooms, baths, guests, beds },
}: PropertyDetailsProps) {
  return (
    <p className="text-md font-light ">
      <span>{formatQuantity(bedrooms, "bedroom")} &middot; </span>
      <span>{formatQuantity(baths, "bath")} &middot; </span>
      <span>{formatQuantity(guests, "guest")} &middot; </span>
      <span>{formatQuantity(beds, "bed")}</span>
    </p>
  );
}
export default PropertyDetails;
