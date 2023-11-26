export type NekoId = `neko-${number}`;
export type Neko = {
  id: NekoId;
  description: string;
  image: any;
};

export const Nekos: Record<NekoId, Neko> = {
  "neko-01": {
    id: "neko-01",
    description: "猫の顔",
    image: require("./images/neko-01.png"),
  },
  "neko-02": {
    id: "neko-02",
    description: "香箱座り",
    image: require("./images/neko-02.png"),
  },
  "neko-03": {
    id: "neko-03",
    description: "三毛猫",
    image: require("./images/neko-03.png"),
  },
  "neko-04": {
    id: "neko-04",
    description: "照れる猫",
    image: require("./images/neko-04.png"),
  },
  "neko-05": {
    id: "neko-05",
    description: "走る猫",
    image: require("./images/neko-05.png"),
  },
  "neko-06": {
    id: "neko-06",
    description: "座る猫",
    image: require("./images/neko-06.png"),
  },
};
