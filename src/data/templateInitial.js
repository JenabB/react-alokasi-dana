import { v4 as uuidv4 } from "uuid";

const templateInitial = [
  {
    templateId: "1",
    name: "Yogi Template",
    items: [
      {
        id: uuidv4(),
        createdAt: new Date(),
        nama: "Orang Tua",
        category: "keluarga",
        harga: "30%",
      },
      {
        id: uuidv4(),
        createdAt: new Date(),
        nama: "Bibit",
        category: "tabungan",
        harga: "30%",
      },
      {
        id: uuidv4(),
        createdAt: new Date(),
        nama: "e-IPO",
        category: "investasi",
        harga: "500000",
      },
    ],
  },
];

export default templateInitial;
