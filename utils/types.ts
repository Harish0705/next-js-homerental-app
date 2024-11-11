export type actionFunction = (
  prevState: unknown,
  formData: FormData
) => Promise<{ message: string }>;

export type PropertyCardProps = {
  image: string;
  id: string;
  name: string;
  tagline: string;
  country: string;
  price: number;
};

export type PropertyDetailsProps = {
  details: {
    bedrooms: number;
    baths: number;
    guests: number;
    beds: number;
  };
};

export type UserInfoProps = {
  profile: {
    profileImage: string;
    firstName: string;
  };
};

export type ReviewCardProps = {
  reviewInfo: {
    comment: string;
    rating: number;
    name: string;
    image: string;
  };
  children?: React.ReactNode;
};