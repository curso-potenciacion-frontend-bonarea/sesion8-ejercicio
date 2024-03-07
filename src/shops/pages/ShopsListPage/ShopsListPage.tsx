import Heading from "@/shared/components/Heading";
import ShopsList from "@/shops/components/ShopsList";
import { useShopsQuery } from "@/shops/queries/useShopsQuery";
import { loadShops } from "@/shops/slice/shopsSlice";
import { useAppDispatch } from "@/store/hooks";
import { useEffect } from "react";

const ShopsListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const { data, isSuccess } = useShopsQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(loadShops(data.shops));
    }
  }, [data?.shops, dispatch, isSuccess]);

  return (
    <>
      <Heading level={2}>Shops list</Heading>
      <ShopsList />
    </>
  );
};

export default ShopsListPage;
