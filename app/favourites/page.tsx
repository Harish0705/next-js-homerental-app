import EmptyList from '@/components/home/EmptyList';
import PropertiesList from '@/components/home/PropertiesList';
import { fetchFavourites } from '@/utils/actions';

async function FavouritesPage() {
  const favourites = await fetchFavourites();

  if (favourites.length === 0) {
    return <EmptyList />;
  }

  return <PropertiesList properties={favourites} />;
}
export default FavouritesPage;