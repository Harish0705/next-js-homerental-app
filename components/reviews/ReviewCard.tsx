import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Rating from "./Rating";
import Comment from "./Comment";
import { ReviewCardProps } from "@/utils/types";

function ReviewCard({ reviewInfo, children }: ReviewCardProps) {
  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-center">
          <Image
            src={reviewInfo.image}
            alt="profile"
            width={12}
            height={12}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-4">
            <h3 className="text-sm font-bold capitalize mb-1">
              {reviewInfo.name}
            </h3>
            <Rating rating={reviewInfo.rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={reviewInfo.comment} />
      </CardContent>
      {/* delete button later */}
      <div className="absolute top-3 right-3">{children}</div>
    </Card>
  );
}
export default ReviewCard;
