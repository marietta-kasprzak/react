import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavoriteCard } from '../../redux/cardsRedux';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCard);
  if (favoriteCards.length === 0) {
    return (
      <>
        <PageTitle>No favorite cards here!</PageTitle>
      </>
    );
  }

  return (
    <>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.column}>
        <ul className={styles.cards}>
          {favoriteCards.map((favoriteCard) => (
            <Card
              key={favoriteCard.id}
              cardId={favoriteCard.id}
              title={favoriteCard.title}
              isFavorite={favoriteCard.isFavorite}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Favorite;