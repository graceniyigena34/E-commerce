
import React from "react";
import ProductCard from "./ProductCard";

function Product() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Smartwatch",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Laptop Stand",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Phone Case",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop",
    },
    {
      id: 7,
      name: "Wireless Charger",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
    },
    {
      id: 8,
      name: "USB Cable",
      price: 12.99,
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA2QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBBQMECAL/xABBEAABAwMBBAcEBwcCBwAAAAABAAIDBAURBhIhMUEHEyJRYXGBFDKRsUJSYnKhwdEVIySCwuHwQ/EWMzRzdJKi/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALxREQEREBERAREQEREBERAWHHCw92yMnAA4k8lXGtekVlGx8FoIJGW+0nfnv2Bz8/mgnF1vdutEZfX1UcXc0nLj5Ab1X176XaeEuZaqQPI4STO/pH6qo7tfKu4VD3zTPe9/vBziSfMrVueSe3Ic9zeP6oJxdOk7UFXtAV7oGHgIsR49eKjdTqa6VRJmrqmXxc9zvxWpzs7wwM+044XLHS10+DDTTSg8DHA9+fVBym7VJOXSzuPfgrLb1UsO6edv/t+S5W2C+PbtMt9Vj/sYXxLY73E3akt9Xj/xyfkg79BrO70RHst1qY8cB1rgPg5Su0dLV9pQ32p0NZGOPWtGT/M39FXE0VVB/wBRT7PhIws+a4iI/eMb4z9j+yD0TYelay3HZjrWvopDuy7ew+qnVNVQVcQlppWSxuG5zHZBXkFj5Qdtj2yNHEjipDpjV9ysU7X0NS9rAcvhd7pHkg9RoojovXVBqWEMOIKsDtRE8fJS3KDKIiAiIgIiICIiAiIgIiICwThZWr1NdGWWxVtxfxp4nOaO92N34oIT0i6q7VRbKV5FPTj+Lc12C93KMfmqRuVc6rndJI7DeG7gPALf6grSaGnge/amfmaod3yOXV05p9tc1tfc3OhoBujjae3P4D7P2vFBrLRaLhd5+ot1K+QD3n+61v3nHh5KXUei7XQgOvdxM8nOCk3NB8XcT6YUloaOrq4GU9JCyioWjDYYtw/v5qQWvScDAHOiDnH6Tt5QRWiZbqUg2XTsQdw66Ru04+ZO9bRrtRSAdVHFTt5BoxhTulsscYALRuXfjt0TBuaEFb+w6jfv9vx4AIaHUjN7bhnw2VZopIh9FZNLEfooKqlZqFjT18NNVMPJ7BvWjr7dbJ9o3PTvUPPvTUnZPnu4q7JLfE/6O5dKpskTwcNGD3oPP9XpCmqMvsVwEj+UFSNh/oeBUaq6WoopzT10Mkcrd+C3Dh4+Xir/ALxo6mqNp3UgPx7zdxULvdgqoqcw1UP7Qo27w126SLxa7iPTigry219RRVMc8EuxKze1zfpL0N0e6uj1FbmNlIbVMGHA8yvPlxt3sbushcZaUu3O4OjPc4cj8+Pgt3oO7TWy/wAOxJsiUhjhyzyP+d6D00i69FUiro4qhnB7Q7C7CAiIgIiICIiAiIgIiIME4VVdNN8A9issbxgkVNQPAHsD47/RWlM9rGFzyA0DJJXmHW17N4vNfcMkieUti54ibuafI8fVB9xW91bWwRTglj2iaUfZ5BWJZLN7U9j5WdluA1h4NA5YWtstGyrqaeoiALZaWMj0GPmrJstEI2N3IOW2WtkTQdkZHBbmOFrANy+mNDRgBfYQMDuWPJfSIMIsogwsYX0iDjfG13ELVXK2MlYSAtyvlwGMYQU5rDS4Ilmp2APIO2MbnjuKrKOJ1LXMbggslbs9/FelrxRCRj+yN4VN6ptDItR0oaABI7bfjkG8Sgt3RNSZbTJG52THO8fHf+akWQoF0b1vX2+d/wBeqeR+CnG0g5kREBERAREQEREBYOcbseqwT/gCgvSHr2LT0D6C2vjlurxxI2mUw+s7vPc31O7iGt6XNZNt9LJYqCQe0zs/i5Gn/kRH6P3nfgN/cq3gsZbpCruFRHsz1Qa6BhGCyNpyPiuzpPT8uoK83W6F77c2Rz3GV3brJc78nm3PvO9BwUg1TO6WJwa3DOGyBgY7sINb0ZXqLbit9U/DmE9U482niPz+KvKijAjBG/xXlOeOe2VwMRcwZ2oXDu5equbo46RoKuKO23hzYpuEcuMNd4eHl+XALSCyvmNwc3aaQQeBHNfSAiIgIiICIiAiLq19dT2+mfU1k7IYWcXvOP8AcoOO5PiippZpntZFG0ue9xwGgcSVQ+pLv7bcqiqYC0zDYiHAxxDmfE8fgtxr3XrrrIaOia5lGx2WsdudMR9J/cOYb6nuEBZM6Z5e8l2TnP1j+iC3Oi/abagfrSOI+X5Kw9pQrQNG6ntcDSMHZyVNthB3EREBEPBccsscMTpZZGsY0Zc5xwAg5Fg8Nyr7UvSG2F5prG3rZOczh8h+ZUcdra818T6d9Z1RI7bRHsvHkf0QWjJf7ZHcW0D6yIVDvo54eBPI+C6GoNYWyyO6iSUT1pGRTREbQHefqjzVS8QcjnknmT+q1moaynrqV1G4l9S3tRzxu91w4bR5j+6DZXvpOutRO58c/VDOGx07/wB21p4OB4vPjuwo1QwSXa5D2sOky7JhZnaf5nkuvY7JWXyqNPQQl4JH75zSGgHBOz6q/dH6QprPSh00bXVDgC5xG/KDTWOy19TAxskLYIWtDWRgYDQOAAWyuGlmGLtgE81MmtDRgAALEsYkaQUFH3/TkFQx9HO3ZwcxyAe4f0VdXGhrLNVdRVs2Hgdl4GQ8d4PMfJei7/ZRM0low7kQoVXUUT430d2phPTE7s8Qe8HkgjGk+kq7WNrIZH+10g/05DkjyPFWrYukqw3QNbNMaSY8WS8M+aqO7dHdR2p9Ozipi4iJ7g2UevByiNTHW2+oMNXA+GUfQkaWOPoePmg9cU9XT1LQ6nnjlaeBY4Fc2cryTR3uronB0FTPC4fVyPkt9SdI+oKcAMush+8Qfmg9MovO7OljUTW49qY7xLAuObpW1C8Y9t2D9loCD0XndldGvvNttzC6troIQPrPGV5trde3uuBbNcql/eGuI+S00tyqZ3Fz+sc53EvKC8790rW6lY9lqidUScpJBstHpxKqvUerrjep+srah7t52GjcGeQ5eajJlJAfJK0N5bJzk+C+4mvecRRHfwJ4oPtzi5xMhOHHOzzd5qQ6StMt1uLG7JMUZBkI4DwXSsVjqbrUiOmaXA+/Lyb5d6uvSWmYrbSsijbu4uON5KDfWKj6iBgDcADC3OysU8YjjAwuZAQ8EXDLMyNpLnDd44wg1GoNUUFjZsTPMtURltPH7x8/qjxPplVXfdSXXUEhdO50NK09mNm4ejTx83fALaa20VdBcqu+2ifr/aHdZJB3DwHMfiohBWtnc6CcPpqj3cH8cE/mgw2fYc2OnY05wXbQcXnxPd5ldk08kuDUuacb2GNpDm/zZ3/AL5dTRRMJknlZHxk2n5D/ADJ3n0Wnud/J2o6Bob9HrTu+CDe0l2js9ZSyVhFS6KYO6pg7Tmjk4cM/5hR+z0j6y4QW+ljc97nAOa1uSG957h4rgacuDWh0ksu7AyXOKvfQ+naa22+NzadkckjQ6Q43udjeSeZQbfT1ko7ZRRxwQMGGgZwtyBhAMHcFlAREQcUsTX7nDOVorrZIp2OGyPgpEsOaDyQVnV2WroXl9M52ByXE+4RTxmnvNDDUxHi2eMOB9CrKlpo5N7gM94C1tXZIJxgxg+iCtZ9G6MuWTHHUUEjudPMcDya7LR8Fr5uia3TH+B1E5nhUUrXn/wCXNVhVGk43b4iWHmuhJp6aAOeyfZY0Ekl24AIIEehypJyNQUGPtUzh/UvuPodm+nqKib92kc7+tbqa5hlR1cErpYx70odu9BzXR1FqJ1rhjMW3Ix2M1EjXdVFnvHF3kPig+G9F9joI2Ou+p5cOdgFjY4Gk9w2tpaa71ujrQXU+mrW251beyayuc6WFh72tO5x8gAorca2puNc6aZ8tTO0nZdKBlmyN7cDc0Eb8j8Vsrdpy6XetZT29gawsaXzYzs55Dx4fFBrpeurKrrqt7pZ5NwAbknwDRwCmemtC1dxDJa9pp6UkERA9p33j+SnmjujihszGyzs66pO8vfvOVOoaSOMDZa0DuAQaGx6cprfAxkMbWMbuAa3CkUEAj3ADC5A1faAiIg02ob5DZI6V9UJOrnm6suYMlm4nOPRZqKe2ahtL4JOrq6Cpbh2He8ujrelrau1ObRMidI05a2QZblV5Zb5UW24mIbVDXu3PpZfcm+7yd80FkVbv+GrNE2122qr44S1ghjftPDe/tHetFrLTtku1J7RPEaauLA4FgG0OeHDvXedqd81u69zW0gAPWue/3ceJ4eqh0l0uWpXmn0zA4QHc+4TN3OHPYaePnwQVuZ3SlzZHPdHGS1oceAyu5Y9KXLUVURTs6um2987xuPl3qwdPdEjKaXrbpVOqY9raEZGMk9/erNt9spqKFkcEbWhvcBuQRbSWg6CyNEhZ1tTjtTP3u8h3eimscbWNAaMAL6AWUBERAREQERYPegFdO6XKktdMZ62YRsHAc3eQ5qO6r1pBaKx1spWh9eWBx29zWg/M+Crm4VFZcql1Rc6l0nc3O7+3kEG81HrStuxfTW1pp6bOHEOwXebh8h8VHTVVEYLK5xfHwMgcS3+YcvkulJO54c2OeNnVNJJik2WBo4+Z3jcu/FTRtcZXue5+N+07I+HBB2I4y8t2MPL8bOOfctPX1r6h0lEyBoiJLJeubnfwOB+az+0mUk+LSNuQPD9px7EZG/cs0FBcb/cXinhztvzLKeywZOT5+iDq6W0Zcr1MBFHJTW9zWsc/PbkDQR6Dtfgrz01p2lsVEyCFoLgN5wu7Z6FlDRsjY0NDRuwFsUHys4WUQEREBERBgjKjuo9J0F8gMdTCxx4tPAg+BUjRBWtJ0azSTxi73apr6SI5ip5iNlvnj3j4lT6gt9PQRCOnjaxgAADQu3hZQYwsoiAiIgIiICIiAunca6OhpJqqcuEMLC+RzWF5DRx7Lck+gXU1RV11DbfaLbEyaZkgLoncHM5j/b4HguCxakortiAZp6vZyaeQ7yO9p4OHkgjt009YukG3tvNoqszPGBUNB4t+i4Hhj4qvbjT3bTVR7Je6d8kOcNmaNrI8O/5q8LtDXOtskVnqIKSpx+7fLFtMb6Aj4rXVTjV2ptJdY6aplLQJy1pEeeeznegqCeut7KaOUujkBOY2tG/PgFoLvc6qpcInnqYSfcB7RHiVyvdTsuVw6vZDI5y1gG8NA5BSHT2hK6/VDKqsElNR4BaCMPePyQaO2U89Z1NJQU755i3cxg3N38XHkPP0yrx0fZ3W62wNnaDK1oDscMrsWHTNBZqZsNLTsYB3d/efFb1owAAgyiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg1d/tv7SoJYBI+PaGNuM4cPIqrrlBcrFMBeY5KqlD8sr4GfvYj3vaPe+83erkK69VSQVMZZKwEeSCEU2p6ensTam6XWKeInERicHOlGNwwN5PHktcIb9rEluzLarSf9Np/fSj7RHujwCk9NoSx01ea2KijE5OS4Dd8FJYoWRN2Y2hreQAQRCy9HVktcjZmUwMg4Z3gHvwpdDAyJgawYwuUBZQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//2Q==",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12 text-gray-800">
          Our Products
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
