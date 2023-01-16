import { useState } from "react";
import Dropdown from "../Dropdown";
const sortData = [
  { id: "RECOMMENDED", value: "Recommended" },
  { id: "ASC_PRICE", value: "Price: Low to High" },
  { id: "DESC_PRICE", value: "Price: High to Low" },
  { id: "ASC", value: "A-Z" },
  { id: "DESC", value: "Z-A" },
];

const Sort = () => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [seletedValue, setSelectedValue] = useState<number>(0);

  return <Dropdown data={sortData} defaultSelectedId={sortData[0].id} />;
};

export default Sort;
