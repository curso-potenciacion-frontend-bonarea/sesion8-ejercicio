import { useAppStore } from "@/store";
import { useMemo } from "react";

const EmployeesCount = (): React.ReactElement => {
  const shops = useAppStore((state) => state.shops.list);

  const total = useMemo(() => {
    return shops.reduce((total, shop) => total + shop.employees, 0);
  }, [shops]);

  return <p>Employees: {total}</p>;
};

export default EmployeesCount;
