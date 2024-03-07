import { Shop } from "@/shops/types";
import "./ShopCard.scss";
import Button from "@/shared/components/Button";

interface ShopCardProps {
  shop: Shop;
}

const ShopCard = ({
  shop: { name, city, picture },
}: ShopCardProps): React.ReactElement => {
  return (
    <article className="card">
      <h3 className="card__title">{name}</h3>
      <img
        className="card__picture"
        src={`/pictures/${picture.thumbnail}`}
        alt={`Botiga de ${city}`}
      />
      <Button variant="outline">delete</Button>
    </article>
  );
};

export default ShopCard;
