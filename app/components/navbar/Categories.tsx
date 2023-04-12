"use client";

import Container from "../Container";

import { IoDiamond } from "react-icons/io5";
import { BsSnow } from "react-icons/bs";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiWindmill,
  GiIsland,
  GiBoatFishing,
  GiCastle,
  GiForestCamp,
  GiCaveEntrance,
  GiCactus,
  GiBarn,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import CategoryBox from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "this propery is close to the beach",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "this propery has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "this propery is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "this propery is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "this propery has a pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "this propery is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "this propery is close to a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "this propery has skiing activities!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "this propery is in a castle!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "this propery has camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "this propery is in the arctic!",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "this propery is in a cave!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "this propery is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "this propery is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "this propery is luxurios!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
