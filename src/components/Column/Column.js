import { useSelector } from "react-redux";
import styles from "./Column.module.scss";
import Card from "../Card/Card";
import CardForm from "../CardForm/CardForm";
import { getFilteredCards } from "../../redux/store";

const Column = ({icon, title, id}) => {
  const cards = useSelector(state => getFilteredCards(state, id))
  //const cards = useSelector(state => getFilteredCards(state, props.id));


//const cards = props.cards.filter(card=>card.columnId===props.id)
//const addToCard = () => {props.addCard()};


  return (
    <article className={styles.column}>
      <h2 className={styles.title}><span className={styles.icon + " fa fa-" + icon} />{title}</h2>
      
      <ul className={styles.cards}>
      {cards && cards.map(card => <Card key={card.id} title={card.title} />)}
</ul>
<CardForm columnId={id} />
    </article>
  );


};


export default Column;
