export function category(category) {
  const prefix = "inline-block px-3 py-1 rounded-lg text-white my-2 bg-";

  switch (category) {
    case "pribadi":
      return prefix + "pribadi";
    case "umum":
      return prefix + "umum";
    case "keluarga":
      return prefix + "keluarga";
    case "tabungan":
      return prefix + "tabungan";
    case "hiburan":
      return prefix + "hiburan";
    case "asmara":
      return prefix + "asmara";
    case "pendidikan":
      return prefix + "pendidikan";
    case "kesehatan":
      return prefix + "kesehatan";
    case "pembangunan":
      return prefix + "pembangunan";
    case "makanan":
      return prefix + "makanan";
    case "ibadah":
      return prefix + "ibadah";

    default:
      return prefix + "white";
  }
}

export function categoryHeader(category) {
  const prefix = "p-4 rounded-lg text-white m-4 bg-";

  switch (category) {
    case "pribadi":
      return prefix + "pribadi";
    case "umum":
      return prefix + "umum";
    case "keluarga":
      return prefix + "keluarga";
    case "tabungan":
      return prefix + "tabungan";
    case "hiburan":
      return prefix + "hiburan";
    case "asmara":
      return prefix + "asmara";
    case "pendidikan":
      return prefix + "pendidikan";
    case "kesehatan":
      return prefix + "kesehatan";
    case "pembangunan":
      return prefix + "pembangunan";
    case "makanan":
      return prefix + "makanan";
    case "ibadah":
      return prefix + "ibadah";

    default:
      return prefix + "white";
  }
}
