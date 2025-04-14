export default defineEventHandler(async (event) => {
  return {
    fish_and_seafood: [
      {
        id: crypto.randomUUID(),
        name: "Bạch tuộc sốt wasabi (tako wasabi)",
        image: "/images/fish_and_seafood/octopus.jpg",
        price: 702000,
      },
      {
        id: crypto.randomUUID(),
        name: "Cá hồi Nauy nguyên con tươi (Salmon)",
        image: "/images/fish_and_seafood/salmon.png",
        price: 618000,
      },
      {
        id: crypto.randomUUID(),
        name: "Cá hồi Nauy tươi Fillet (Salmon)",
        image: "/images/fish_and_seafood/salmon_fillet.png",
        price: 948000,
      },
      {
        id: crypto.randomUUID(),
        name: "Đầu cá hồi (Salmon)",
        image: "/images/fish_and_seafood/salmon_head.jpg",
        price: 98000,
      },
      {
        id: crypto.randomUUID(),
        name: "Lườn Cá hồi Nauy tươi (Salmon)",
        image: "/images/fish_and_seafood/salmon_fillet_2.jpg",
        price: 178000,
      },
      {
        id: crypto.randomUUID(),
        name: "Trứng cá tuyết tẩm gia vị Mentaiko {YAMAYA}-80g",
        image: "/images/fish_and_seafood/cod_roe.jpg",
        price: 128000,
      },
      {
        id: crypto.randomUUID(),
        name: "Xương Cá hồi",
        image: "/images/fish_and_seafood/salmon_bones.jpg",
        price: 58000,
      },
    ],
    frozen_meat: [
      {
        id: crypto.randomUUID(),
        name: "Ba chỉ bò Mỹ cuộn 500g",
        image: "/images/frozen_meat/beef_belly.jpg",
        price: 189000,
      },
      {
        id: crypto.randomUUID(),
        name: "Ba rọi cuộn (Iberico roll Belly) - Khay 300gr",
        image: "/images/frozen_meat/pork_belly_roll.jpg",
        price: 168000,
      },
      {
        id: crypto.randomUUID(),
        name: "Bánh nhân bạch tuộc Takoyaki 1.2kg (40x30g)",
        image: "/images/frozen_meat/octopus_pie.jpg",
        price: 235000,
      },
      {
        id: crypto.randomUUID(),
        name: "Bánh nhân bạch tuộc Takoyaki túi 1kg",
        image: "/images/frozen_meat/octopus_pie_2.jpg",
        price: 189000,
      },
      {
        id: crypto.randomUUID(),
        name: "Đầu Thăn Ngoại Bò Hokubee Úc Đông Lạnh 300G",
        image: "/images/frozen_meat/beef_tenderloin.jpg",
        price: 349000,
      },
      {
        id: crypto.randomUUID(),
        name: "IB Jowl Meat Thịt diềm má 300gr/khay",
        image: "/images/frozen_meat/ib_jowl_meat.jpg",
        price: 282000,
      },
      {
        id: crypto.randomUUID(),
        name: "Lõi nạc vai bò (top blade) Mỹ cắt steak 500g",
        image: "/images/frozen_meat/beef_shoulder.jpg",
        price: 359000,
      },
      {
        id: crypto.randomUUID(),
        name: "Thăn Ngoại Bò Hitachi A5 (Sirloin)",
        image: "/images/frozen_meat/beef_tenderloin_a5.jpg",
        price: 4980000,
      },
      {
        id: crypto.randomUUID(),
        name: "Thịt ba rọi Bò Mỹ cắt sẵn 500gr",
        image: "/images/frozen_meat/america_beef_belly.jpg",
        price: 358000,
      },
      {
        id: crypto.randomUUID(),
        name: "Thịt diềm thăn (IB Serecto Penceta)",
        image: "/images/frozen_meat/sirloin.jpg",
        price: 258000,
      },
    ],
  };
});
