import styles from "./List.module.scss";
import Column from "./../Column/Column";
import ColumnForm from "./../ColumnForm/ColumnForm";
import { useState } from "react";
import shortid from "shortid";
import { useSelector } from "react-redux";

const List = () => {

 const columns2 = useSelector(state => state.columns)
 const [columns, setColumns] = useState(columns2);

  const addColumn = (newColumn) => {
    setColumns([
      ...columns,
      {
        id: shortid(),
        title: newColumn.title,
        icon: newColumn.icon,
        cards: [],
      },
    ]);
  };

  const addCard = (newCard, columnId) => {
    const columnsUpdated = columns && columns.map((column) => {
      if (column.id === columnId)
        return {
          ...column,
          cards: [...column.cards, { id: shortid(), title: newCard.title }],
        };
      else return column;
    });

    setColumns(columnsUpdated);
  };

  console.log(columns);

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do<span>soon!</span>
        </h2>
      </header>
      <p className={styles.description}>
        Interesting things I want to check out
      </p>
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column action={addCard} key={column.id} title={column.title} icon={column.icon} id={column.id}/>
        ))}
      </section>
      <ColumnForm action={addColumn} />
    </div>
  );
};

export default List;
