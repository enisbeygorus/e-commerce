interface IFilterDataCore {
  id: number;
  displayName: string;
}

interface IFilterData extends IFilterDataCore {
  value: string;
  colorCode?: string;
}

export interface IFiltersData extends IFilterDataCore {
  name: string;
  data: Array<IFilterData>;
}

export const filtersData: Array<IFiltersData> = [
  {
    id: 0,
    name: "size",
    displayName: "Size",
    data: [
      { id: 0, displayName: "S", value: "s" },
      { id: 1, displayName: "M", value: "m" },
      { id: 2, displayName: "L", value: "l" },
      { id: 3, displayName: "XL", value: "xl" },
      { id: 4, displayName: "XLL", value: "xll" },
    ],
  },
  {
    id: 1,
    name: "color",
    displayName: "Color",
    data: [
      { id: 0, displayName: "black", value: "black", colorCode: "#000" },
      {
        id: 1,
        displayName: "light blue",
        value: "light-blue",
        colorCode: "#c9dfed",
      },
      {
        id: 1,
        displayName: "dark blue",
        value: "dark-blue",
        colorCode: "#1b4872",
      },
      { id: 2, displayName: "green", value: "green", colorCode: "#017949" },
      { id: 3, displayName: "red", value: "red", colorCode: "#d14244" },
      { id: 5, displayName: "yellow", value: "yellow", colorCode: "#fbd552" },
      { id: 6, displayName: "orange", value: "orange", colorCode: "#f65826" },
      { id: 7, displayName: "beige", value: "beige", colorCode: "#f6efdd" },
      { id: 7, displayName: "pink", value: "pink", colorCode: "#f4c5bf" },
    ],
  },
];
