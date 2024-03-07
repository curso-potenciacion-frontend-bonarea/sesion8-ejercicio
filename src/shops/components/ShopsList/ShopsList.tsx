import { useAppSelector } from "@/store/hooks";
import ShopCard from "../ShopCard";
import "./ShopsList.scss";

const ShopsList = (): React.ReactElement => {
  const shops = useAppSelector((state) => state.shops.list);

  return (
    <ul className="shops">
      {shops.map((shop) => (
        <li key={shop.id}>
          <ShopCard shop={shop} />
        </li>
      ))}
    </ul>
  );
};

export default ShopsList;
