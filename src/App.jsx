import './App.css';
import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

function CardsInPlay(props) {

  const january = [
    {
      category: "spirit",
      name: "Whiskey",
      text: "",
      id: "whiskey-jan-1",
      img: "https://drive.google.com/uc?export=view&id=19sh9gzsz9jJ1omqvHEkH17hzedq7y6kc",
      ability: "",
      value: 0
     },
     {
       category: "spirit",
       name: "Whiskey",
       text: "",
       id: "whiskey-jan-2",
       img: "https://drive.google.com/uc?export=view&id=19sh9gzsz9jJ1omqvHEkH17hzedq7y6kc",
       ability: "",
       value: 1
      },
      {
       category: "spirit",
       name: "Gin",
       text: "",
       id: "gin-jan-1",
       img: "https://drive.google.com/uc?export=view&id=14VvM6xvOawikf1nC-5mklxCqngnCAjc6",
       ability: "",
       value: 2
      },
      {
       category: "spirit",
       name: "Gin",
       text: "",
       id: "gin-jan-2",
       img: "https://drive.google.com/uc?export=view&id=14VvM6xvOawikf1nC-5mklxCqngnCAjc6",
       ability: "",
       value: 3
      },
      {
       category: "spirit",
       name: "Vodka",
       text: "",
       id: "vodka-jan-1",
       img: "https://drive.google.com/uc?export=view&id=1I1h1oPZGwk0ylWmN_NAp0TLww0_YfeME",
       ability: "",
       value: 4
      },
      {
       category: "spirit",
       name: "Vodka",
       text: "",
       id: "vodka-jan-2",
       img: "https://drive.google.com/uc?export=view&id=1I1h1oPZGwk0ylWmN_NAp0TLww0_YfeME",
       ability: "",
       value: 5
      },
      {
       category: "spirit",
       name: "Rum",
       text: "",
       id: "rum-jan-1",
       img: "https://drive.google.com/uc?export=view&id=1Er-Q6kFh84uCkP5KvMhh0iYnbVd-OIL1",
       ability: "",
       value: 6
      },
      {
       category: "spirit",
       name: "Rum",
       text: "",
       id: "rum-jan-2",
       img: "https://drive.google.com/uc?export=view&id=1Er-Q6kFh84uCkP5KvMhh0iYnbVd-OIL1",
       ability: "",
       value: 7
      },
      {
       category: "spirit",
       name: "Tequila",
       text: "",
       id: "tequila-jan-1",
       img: "https://drive.google.com/uc?export=view&id=14VUMUE_LpyFzjs-H0wKfUIqnqL7axNJ9",
       ability: "",
       value: 8
      },
      {
       category: "spirit",
       name: "Tequila",
       text: "",
       id: "tequila-jan-2",
       img: "https://drive.google.com/uc?export=view&id=14VUMUE_LpyFzjs-H0wKfUIqnqL7axNJ9",
       ability: "",
       value: 9
      },
      {
       category: "ingredient",
       name: "Vermouth",
       text: "",
       id: "vermouth-jan",
       img: "https://drive.google.com/uc?export=view&id=1HqI8X7SEQ1r4QbtHFaDdE6XYqsj1y84z",
       ability: "",
       value: 10
      },
      {
       category: "ingredient",
       name: "Soda",
       text: "",
       id: "soda-jan",
       img: "https://drive.google.com/uc?export=view&id=17GpMOEYvL5_ZNLIkrUTqWmzGl2YcShy2",
       ability: "",
       value: 11
      },
      {
       category: "musician",
       name: "Pianist",
       text: "",
       id: "pianist-jan",
       img: "https://drive.google.com/uc?export=view&id=18FproS5tX-cgKWIRTGjcjDv9vrvBE7Ey",
       ability: "",
       value: 12
      },
      {
       category: "spirit",
       name: "Vodka",
       text: "",
       id: "vodka-jan-3",
       img: "https://drive.google.com/uc?export=view&id=1I1h1oPZGwk0ylWmN_NAp0TLww0_YfeME",
       ability: "",
       value: 13
      },
      {
       category: "decor",
       name: "White Paint",
       text: "Minimalist",
       id: "white-paint-jan",
       img: "https://drive.google.com/uc?export=view&id=1rvtoaH2xOdORftfNB4cV0jKnD-cZ2Ub1",
       ability: "",
       value: 14
      },
      {
       category: "ability",
       name: "Saving for Later",
       text: "Draw and keep both cards next round.",
       id: "ability-a-jan",
       img: "https://drive.google.com/uc?export=view&id=1wCdMQ7-UFg_H1q-e2NuALoajfA0odHXG",
       ability: "",
       value: 15
      }
  ];
  
  const february = [
    {
      category: "spirit",
      name: "Vodka",
      text: "",
      id: "vodka-feb",
      img: "https://drive.google.com/uc?export=view&id=1I1h1oPZGwk0ylWmN_NAp0TLww0_YfeME",
      ability: "",
      value: 0
     },
     {
      category: "spirit",
      name: "Gin",
      text: "",
      id: "gin-feb",
      img: "https://drive.google.com/uc?export=view&id=14VvM6xvOawikf1nC-5mklxCqngnCAjc6",
      ability: "",
      value: 1
     },
     {
      category: "spirit",
      name: "Tequila",
      text: "",
      id: "tequila-feb",
      img: "https://drive.google.com/uc?export=view&id=14VUMUE_LpyFzjs-H0wKfUIqnqL7axNJ9",
      ability: "",
      value: 2
     },
     {
      category: "spirit",
      name: "Whiskey",
      text: "",
      id: "whiskey-feb",
      img: "https://drive.google.com/uc?export=view&id=19sh9gzsz9jJ1omqvHEkH17hzedq7y6kc",
      ability: "",
      value: 3
     },
     {
      category: "spirit",
      name: "Rum",
      text: "",
      id: "rum-feb-1",
      img: "https://drive.google.com/uc?export=view&id=1Er-Q6kFh84uCkP5KvMhh0iYnbVd-OIL1",
      ability: "",
      value: 4
     },
     {
      category: "spirit",
      name: "Rum",
      text: "",
      id: "rum-feb-2",
      img: "https://drive.google.com/uc?export=view&id=1Er-Q6kFh84uCkP5KvMhh0iYnbVd-OIL1",
      ability: "",
      value: 5
     },
     {
      category: "ingredient",
      name: "Simple",
      text: "",
      id: "simple-feb",
      img: "https://drive.google.com/uc?export=view&id=1T_cMJmLu1utKkXPVB8x1ewGsSNujuyzR",
      ability: "",
      value: 6
     },
     {
      category: "ability",
      name: "Digging thru the Trash",
      text: "Draw 3 from discard, select 1.",
      id: "ability-b-feb",
      img: "https://drive.google.com/uc?export=view&id=11YmkwBBqqQ9zNguaJfPlUB7uZSAv9Z5i",
      ability: "",
      value: 7
     },
     {
      category: "musician",
      name: "Drummer",
      text: "",
      id: "drummer-feb",
      img: "https://drive.google.com/uc?export=view&id=1lzXSpmCmVnoq0h2ogioHi24nHNgTw2ug",
      ability: "",
      value: 8
     },
     {
      category: "decor",
      name: "Hanging Plant",
      text: "Bohemian",
      id: "hanging-plant-feb",
      img: "https://drive.google.com/uc?export=view&id=1S35jRLQ_HOL_U6wBdxKSF7PiYPA1o42F",
      ability: "",
      value: 9
     },  
     {
      category: "decor",
      name: "Wood Stools",
      text: "Minimalist",
      id: "wood-stools-feb",
      img: "https://drive.google.com/uc?export=view&id=1pZN-vKUDlWx1fh869Nvizw3-1dl8uexg",
      ability: "",
      value: 10
     },
     {
      category: "ingredient",
      name: "Ginger Beer",
      text: "",
      id: "ginger-beer-feb",
      img: "https://drive.google.com/uc?export=view&id=1J6kApMHSiwO1j9Q4f0j0HSLO2fh2Fx4_",
      ability: "",
      value: 11
     },
     {
      category: "ability",
      name: "Hoarding the Trash",
      text: "Draw 2 from the discard and keep both.",
      id: "ability-c-feb",
      img: "https://drive.google.com/uc?export=view&id=1la3rEzb0U1D-ppaH-eE3ZTrkB4CDu0tn",
      ability: "",
      value: 12
     },
     {
      category: "ingredient",
      name: "Bitters",
      text: "",
      id: "bitters-feb",
      img: "https://drive.google.com/uc?export=view&id=1ruLRJMo3LyC-szo_1HkViMUdt-Z7AlE3",
      ability: "",
      value: 13
     },
     {
      category: "ingredient",
      name: "Soda",
      text: "",
      id: "soda-feb",
      img: "https://drive.google.com/uc?export=view&id=17GpMOEYvL5_ZNLIkrUTqWmzGl2YcShy2",
      ability: "",
      value: 14
     },
     {
      category: "ingredient",
      name: "Vermouth",
      text: "",
      id: "vermouth-feb",
      img: "https://drive.google.com/uc?export=view&id=1HqI8X7SEQ1r4QbtHFaDdE6XYqsj1y84z",
      ability: "",
      value: 15
     }
  ];
  
  const march = [
    {
      category: "musician",
      name: "Bassist",
      text: "",
      id: "bassist-mar",
      img: "https://drive.google.com/uc?export=view&id=1uLkZTZibelP2Eq1-zk9oL-od40e-Mtvy",
      ability: "",
      value: 0
     },
     {
      category: "ability",
      name: "Hoarding the Trash",
      text: "Draw 2 from the discard and keep both.",
      id: "ability-c-mar",
      img: "https://drive.google.com/uc?export=view&id=1la3rEzb0U1D-ppaH-eE3ZTrkB4CDu0tn",
      ability: "",
      value: 1
     },
     {
      category: "decor",
      name: "Kaleido scope Mural",
      text: "Bohemian",
      id: "kaleidoscope-mural-mar",
      img: "https://drive.google.com/uc?export=view&id=1Qg0QdAEMF_xwQ50145yVH4EBU2ApTmN7",
      ability: "",
      value: 2
     },
     {
      category: "decor",
      name: "Hanging Edison Lights",
      text: "Minimalist",
      id: "hanging-edison-lights-mar",
      img: "https://drive.google.com/uc?export=view&id=1b5gM1M92blqR5dHoxQfDHGZxc9mDslPm",
      ability: "",
      value: 3
     },
     {
      category: "decor",
      name: "Pillows",
      text: "Bohemian",
      id: "pillows-mar",
      img: "https://drive.google.com/uc?export=view&id=1RrvrNX1FOkP0KsJ4QeCMFeQJzcooWiWW",
      ability: "",
      value: 4
     },
     {
      category: "ingredient",
      name: "Juice",
      text: "",
      id: "juice-mar",
      img: "https://drive.google.com/uc?export=view&id=1n9POf9dNoM31ftHTIN0lVcpGAe3BOpBA",
      ability: "",
      value: 5
     },
     {
      category: "ingredient",
      name: "Soda",
      text: "",
      id: "soda-mar",
      img: "https://drive.google.com/uc?export=view&id=17GpMOEYvL5_ZNLIkrUTqWmzGl2YcShy2",
      ability: "",
      value: 6
     },
     {
      category: "ingredient",
      name: "Lime",
      text: "",
      id: "lime-mar",
      img: "https://drive.google.com/uc?export=view&id=1sOZRrHWTGUDRS-32YTHOBzET3HbtERt9",
      ability: "",
      value: 7
     },
     {
      category: "ingredient",
      name: "Bitters",
      text: "",
      id: "bitters-mar",
      img: "https://drive.google.com/uc?export=view&id=1ruLRJMo3LyC-szo_1HkViMUdt-Z7AlE3",
      ability: "",
      value: 8
     },
     {
      category: "ingredient",
      name: "Ginger Beer",
      text: "",
      id: "ginger-beer-mar",
      img: "https://drive.google.com/uc?export=view&id=1J6kApMHSiwO1j9Q4f0j0HSLO2fh2Fx4_",
      ability: "",
      value: 9
     },
     {
      category: "ingredient",
      name: "Simple",
      text: "",
      id: "simple-mar",
      img: "https://drive.google.com/uc?export=view&id=1T_cMJmLu1utKkXPVB8x1ewGsSNujuyzR",
      ability: "",
      value: 10
     },
     {
      category: "musician",
      name: "Pianist",
      text: "",
      id: "pianist-mar",
      img: "https://drive.google.com/uc?export=view&id=18FproS5tX-cgKWIRTGjcjDv9vrvBE7Ey",
      ability: "",
      value: 11
     },
     {
      category: "decor",
      name: "White Paint",
      text: "Minimalist",
      id: "white-paint-mar",
      img: "https://drive.google.com/uc?export=view&id=1rvtoaH2xOdORftfNB4cV0jKnD-cZ2Ub1",
      ability: "",
      value: 12
     },
     {
      category: "ability",
      name: "Saving for Later",
      text: "Draw and keep both cards next round.",
      id: "ability-a-mar",
      img: "https://drive.google.com/uc?export=view&id=1wCdMQ7-UFg_H1q-e2NuALoajfA0odHXG",
      ability: "",
      value: 13
     },
     {
      category: "ingredient",
      name: "Schnapps",
      text: "",
      id: "schnapps-mar",
      img: "https://drive.google.com/uc?export=view&id=1wcDi5tAjpzcyJb2AAKq_d99YSVV86bMK",
      ability: "",
      value: 14
     },
     {
      category: "spirit",
      name: "Gin",
      text: "",
      id: "gin-mar",
      img: "https://drive.google.com/uc?export=view&id=14VvM6xvOawikf1nC-5mklxCqngnCAjc6",
      ability: "",
      value: 15
     },
  ];
  
  const april = [
    {
      category: "spirit",
      name: "Gin",
      text: "",
      id: "gin-apr",
      img: "https://drive.google.com/uc?export=view&id=14VvM6xvOawikf1nC-5mklxCqngnCAjc6",
      ability: "",
      value: 0
     },
     {
      category: "spirit",
      name: "Whiskey",
      text: "",
      id: "whiskey-apr-1",
      img: "https://drive.google.com/uc?export=view&id=19sh9gzsz9jJ1omqvHEkH17hzedq7y6kc",
      ability: "",
      value: 1
     },
     {
      category: "spirit",
      name: "Vodka",
      text: "",
      id: "vodka-apr",
      img: "https://drive.google.com/uc?export=view&id=1I1h1oPZGwk0ylWmN_NAp0TLww0_YfeME",
      ability: "",
      value: 2
     },
     {
      category: "spirit",
      name: "Tequila",
      text: "",
      id: "tequila-apr",
      img: "https://drive.google.com/uc?export=view&id=14VUMUE_LpyFzjs-H0wKfUIqnqL7axNJ9",
      ability: "",
      value: 3
     },
     {
      category: "spirit",
      name: "Rum",
      text: "",
      id: "rum-apr",
      img: "https://drive.google.com/uc?export=view&id=1Er-Q6kFh84uCkP5KvMhh0iYnbVd-OIL1",
      ability: "",
      value: 4
     },
     {
      category: "ingredient",
      name: "Vermouth",
      text: "",
      id: "vermouth-apr",
      img: "https://drive.google.com/uc?export=view&id=1HqI8X7SEQ1r4QbtHFaDdE6XYqsj1y84z",
      ability: "",
      value: 5
     },
     {
      category: "ingredient",
      name: "Campari",
      text: "",
      id: "campari-apr",
      img: "https://drive.google.com/uc?export=view&id=1iLyn830K5HXr0hF7_aBFVmwUGJPG1PVs",
      ability: "",
      value: 6
     },
     {
      category: "ingredient",
      name: "Schnapps",
      text: "",
      id: "schnapps-apr",
      img: "https://drive.google.com/uc?export=view&id=1wcDi5tAjpzcyJb2AAKq_d99YSVV86bMK",
      ability: "",
      value: 7
     },
     {
      category: "spirit",
      name: "WILD Spirit",
      text: "Functions as a spirit of your choice in June.",
      id: "wild-spirit-apr",
      img: "https://drive.google.com/uc?export=view&id=1lu4PSIJgJEkKBPBI_a-1kmIDpShtdD3B",
      ability: "",
      value: 8
     },
     {
      category: "musician",
      name: "Trumpeter",
      text: "",
      id: "trumpeter-apr",
      img: "https://drive.google.com/uc?export=view&id=1p3xrmUX71GpjTBGNfk9enF4fYUEVg8Ra",
      ability: "",
      value: 9
     },
     {
      category: "decor",
      name: "Bonsai Tree",
      text: "Zen",
      id: "bonsai-tree-apr",
      img: "https://drive.google.com/uc?export=view&id=1NDjaSZE0ALA4ELkV_udGIiQJBR8_t_SW",
      ability: "",
      value: 10
     },
     {
      category: "musician",
      name: "Drummer",
      text: "",
      id: "drummer-apr",
      img: "https://drive.google.com/uc?export=view&id=1lzXSpmCmVnoq0h2ogioHi24nHNgTw2ug",
      ability: "",
      value: 11
     },
     {
      category: "decor",
      name: "Hanging Plant",
      text: "Bohemian",
      id: "hanging-plant-apr",
      img: "https://drive.google.com/uc?export=view&id=1S35jRLQ_HOL_U6wBdxKSF7PiYPA1o42F",
      ability: "",
      value: 12
     },
     {
      category: "ability",
      name: "Digging thru the Trash",
      text: "Draw 3 from discard, select 1.",
      id: "ability-b-apr",
      img: "https://drive.google.com/uc?export=view&id=11YmkwBBqqQ9zNguaJfPlUB7uZSAv9Z5i",
      ability: "",
      value: 13
     },     
     {
      category: "ingredient",
      name: "Lime",
      text: "",
      id: "lime-apr",
      img: "https://drive.google.com/uc?export=view&id=1sOZRrHWTGUDRS-32YTHOBzET3HbtERt9",
      ability: "",
      value: 14
     },
     {
      category: "ingredient",
      name: "Grenadine",
      text: "",
      id: "grenadine-apr",
      img: "https://drive.google.com/uc?export=view&id=1JVX5s42mzsr1dTglskH3-ftu_ofYo0Ie",
      ability: "",
      value: 15
     },
     {
      category: "spirit",
      name: "Whiskey",
      text: "",
      id: "whiskey-apr-2",
      img: "https://drive.google.com/uc?export=view&id=19sh9gzsz9jJ1omqvHEkH17hzedq7y6kc",
      ability: "",
      value: 16
     }
  ];
  
  const may = [
    {
      category: "musician",
      name: "Saxophonist",
      text: "",
      id: "saxophonist-may",
      img: "https://drive.google.com/uc?export=view&id=1CN72ToX6K6e7Gbq7P86O_1HjzmzDYNYc",
      ability: "",
      value: 0
     },
     {
      category: "musician",
      name: "Vocalist",
      text: "",
      id: "vocalist-may",
      img: "https://drive.google.com/uc?export=view&id=1_lXcxiyXkR1ViKMP_9l_9jofOXrkQiXQ",
      ability: "",
      value: 1
     },
     {
      category: "decor",
      name: "Old Meditating Scholar Art",
      text: "Zen",
      id: "old-meditating-scholar-art-may",
      img: "https://drive.google.com/uc?export=view&id=1hba5vWhD18zGULuh-Y2rnslqtH9sdgun",
      ability: "",
      value: 2
     },
     {
      category: "decor",
      name: "Sliding Glass Door",
      text: "Zen",
      id: "sliding-glass-door-may",
      img: "https://drive.google.com/uc?export=view&id=19Z-RgowBE2MZ6eoq5Ej9sFe5EfbOZS_Y",
      ability: "",
      value: 3
     },
     {
      category: "ingredient",
      name: "WILD Ingredient",
      text: "Functions as an ingredient of your choice in June.",
      id: "wild-ingredient-may",
      img: "https://drive.google.com/uc?export=view&id=1RAY8FCK9dPOUja1LRtqsg9rVWX9EZgw8",
      ability: "",
      value: 4
     },
     {
      category: "ingredient",
      name: "Grenadine",
      text: "",
      id: "grenadine-may",
      img: "https://drive.google.com/uc?export=view&id=1JVX5s42mzsr1dTglskH3-ftu_ofYo0Ie",
      ability: "",
      value: 5
     },
     {
      category: "ingredient",
      name: "Juice",
      text: "",
      id: "juice-may-1",
      img: "https://drive.google.com/uc?export=view&id=1n9POf9dNoM31ftHTIN0lVcpGAe3BOpBA",
      ability: "",
      value: 6
     },
     {
      category: "spirit",
      name: "Tequila",
      text: "",
      id: "tequila-may",
      img: "https://drive.google.com/uc?export=view&id=14VUMUE_LpyFzjs-H0wKfUIqnqL7axNJ9",
      ability: "",
      value: 7
     },
     {
      category: "ingredient",
      name: "Lime",
      text: "",
      id: "lime-may",
      img: "https://drive.google.com/uc?export=view&id=1sOZRrHWTGUDRS-32YTHOBzET3HbtERt9",
      ability: "",
      value: 8
     },
     {
      category: "ingredient",
      name: "Simple",
      text: "",
      id: "simple-may",
      img: "https://drive.google.com/uc?export=view&id=1T_cMJmLu1utKkXPVB8x1ewGsSNujuyzR",
      ability: "",
      value: 9
     },
     {
      category: "ingredient",
      name: "Bitters",
      text: "",
      id: "bitters-may",
      img: "https://drive.google.com/uc?export=view&id=1ruLRJMo3LyC-szo_1HkViMUdt-Z7AlE3",
      ability: "",
      value: 10
     },
     {
      category: "ingredient",
      name: "Ginger Beer",
      text: "",
      id: "ginger-beer-may",
      img: "https://drive.google.com/uc?export=view&id=1J6kApMHSiwO1j9Q4f0j0HSLO2fh2Fx4_",
      ability: "",
      value: 11,
     },
     {
      category: "ingredient",
      name: "Vermouth",
      text: "",
      id: "vermouth-may",
      img: "https://drive.google.com/uc?export=view&id=1HqI8X7SEQ1r4QbtHFaDdE6XYqsj1y84z",
      ability: "",
      value: 12
     },
     {
      category: "ingredient",
      name: "Juice",
      text: "",
      id: "juice-may-2",
      img: "https://drive.google.com/uc?export=view&id=1n9POf9dNoM31ftHTIN0lVcpGAe3BOpBA",
      ability: "",
      value: 13
     },
     {
      category: "ingredient",
      name: "Campari",
      text: "",
      id: "campari-may",
      img: "https://drive.google.com/uc?export=view&id=1iLyn830K5HXr0hF7_aBFVmwUGJPG1PVs",
      ability: "",
      value: 14
     },
     {
      category: "musician",
      name: "Bassist",
      text: "",
      id: "bassist-may",
      img: "https://drive.google.com/uc?export=view&id=1uLkZTZibelP2Eq1-zk9oL-od40e-Mtvy",
      ability: "",
      value: 15,
     },
     {
      category: "ingredient",
      name: "Soda",
      text: "",
      id: "soda-may",
      img: "https://drive.google.com/uc?export=view&id=17GpMOEYvL5_ZNLIkrUTqWmzGl2YcShy2",
      ability: "",
      value: 16
     }
  ];

  const completed = [
    {
      category: "completed",
      name: "Vodka Martini",
      text: "Vodka & Vermouth - 10",
      id: "vodka-martini",
      img: "https://drive.google.com/uc?export=view&id=1lp7mCM5BgiZMzIThorPSTNqVUeKotMfY",
      ability: "",
      value: 10,
      requirements: ["Vodka", "Vermouth"]
     },
     {
      category: "completed",
      name: "Gin Martini",
      text: "Gin & Vermouth - 10",
      id: "gin-martini",
      img: "https://drive.google.com/uc?export=view&id=1lp7mCM5BgiZMzIThorPSTNqVUeKotMfY",
      ability: "",
      value: 10,
      requirements: ["Gin", "Vermouth"]
     },
     {
      category: "completed",
      name: "Bourbon Highball",
      text: "Whiskey & Soda - 11",
      id: "bourbon-highball",
      img: "https://drive.google.com/uc?export=view&id=1b6FVCfkJJtGxY4TCJo7yjVvXakMXQ1hF",
      ability: "",
      value: 11,
      requirements: ["Whiskey", "Soda"]
     },
     {
      category: "completed",
      name: "Rum & Coke",
      text: "Rum & Soda - 11",
      id: "rum-and-coke",
      img: "https://drive.google.com/uc?export=view&id=1VcCaAXJXvqiANJl5TwICBUmWGdXRT1Pg",
      ability: "",
      value: 11,
      requirements: ["Rum", "Soda"]
     },
     {
      category: "completed",
      name: "Paloma",
      text: "Tequila & Juice - 12",
      id: "paloma",
      img: "https://drive.google.com/uc?export=view&id=1cbLSHIfTvLXQ0q8FbuipfBtB9RyxyqGw",
      ability: "",
      value: 12,
      requirements: ["Tequila", "Juice"]
     },
     {
      category: "completed",
      name: "Daiquiri",
      text: "Rum, Lime, & Simple - 17",
      id: "daquiri",
      img: "https://drive.google.com/uc?export=view&id=1VetRmRsS04-ne1SbozprZjxgnphn50H5",
      ability: "",
      value: 17,
      requirements: ["Rum", "Lime", "Simple"]
     },
     {
      category: "completed",
      name: "Gimlet",
      text: "Gin, Lime, & Simple - 17",
      id: "gimlet",
      img: "https://drive.google.com/uc?export=view&id=1umWQ_wTl9XYt6m-MtMV0VsX50Gy-SRnU",
      ability: "",
      value: 17,
      requirements: ["Gin", "Lime", "Simple"]
     },
     {
      category: "completed",
      name: "Manhattan",
      text: "Whiskey, Bitters, & Vermouth - 18",
      id: "manhattan",
      img: "https://drive.google.com/uc?export=view&id=1ZUYHs2a6W_Q1IfQgQ9T11osqvWHTuyQS",
      ability: "",
      value: 18,
      requirements: ["Whiskey", "Bitters", "Vermouth"]
     },
     {
      category: "completed",
      name: "Moscow Mule",
      text: "Vodka, Lime, & Ginger Beer - 19",
      id: "moscow-mule",
      img: "https://drive.google.com/uc?export=view&id=15_L6vTqk00skwE8gHHIxFDheQYLdDFWX",
      ability: "",
      value: 19,
      requirements: ["Vodka", "Lime", "Ginger Beer"]
     },
     {
      category: "completed",
      name: "Dark & Stormy",
      text: "Rum, Lime, & Ginger Beer - 19",
      id: "dark-and-stormy",
      img: "https://drive.google.com/uc?export=view&id=1G8DcYAmj24kWaU-gOb2WAleczBK5_JpT",
      ability: "",
      value: 19,
      requirements: ["Rum", "Lime", "Ginger Beer"]
     },
     {
      category: "completed",
      name: "Old Fashioned",
      text: "Whiskey, Bitters, & Simple - 20",
      id: "old-fashioned",
      img: "https://drive.google.com/uc?export=view&id=1lGhnoqKhgumc3vxEkiHI4FQM9vlJpfFH",
      ability: "",
      value: 20,
      requirements: ["Whiskey", "Bitters", "Simple"]
     },
     {
      category: "completed",
      name: "Negroni",
      text: "Gin, Vermouth, & Campari - 21",
      id: "negroni",
      img: "https://drive.google.com/uc?export=view&id=14o7Awc6jNO43RWHWyKIzTxyLVN4yjIDg",
      ability: "",
      value: 21,
      requirements: ["Gin", "Vermouth", "Campari"]
     },
     {
      category: "completed",
      name: "Teqroni",
      text: "Tequila, Vermouth, & Campari - 21",
      id: "teqroni",
      img: "https://drive.google.com/uc?export=view&id=14o7Awc6jNO43RWHWyKIzTxyLVN4yjIDg",
      ability: "",
      value: 21,
      requirements: ["Tequila", "Vermouth", "Campari"]
     },
     {
      category: "completed",
      name: "Hairy Navel",
      text: "Vodka, Juice, & Schnapps - 22",
      id: "hairy-navel",
      img: "https://drive.google.com/uc?export=view&id=1qmGm5LYyegIcp2IeSu8uWJGzENSrz45U",
      ability: "",
      value: 22,
      requirements: ["Vodka", "Juice", "Schnapps"]
     },
     {
      category: "completed",
      name: "Tequila Sunrise",
      text: "Tequila, Juice, & Grenadine - 22",
      id: "tequila-sunrise",
      img: "https://drive.google.com/uc?export=view&id=1INAU6lMS9rn-ohmgYnSK5kwAkvUvZR2H",
      ability: "",
      value: 22,
      requirements: ["Tequila", "Juice", "Grenadine"]
     },
     {
      category: "completed",
      name: "Trio",
      text: "Drummer, Pianist, & Bassist - 20",
      id: "trio",
      img: "https://drive.google.com/uc?export=view&id=1Yr_7_XsL6IN_rOTAVAXUcAwy3VccNMEc",
      ability: "",
      value: 20,
      requirements: ["Drummer", "Pianist", "Bassist"]
     },
     {
      category: "completed",
      name: "Trumpet Led Quartet",
      text: "Trumpeter, Drummer, Pianist, & Bassist - 26",
      id: "trumpet-led-quartet",
      img: "https://drive.google.com/uc?export=view&id=1wv6o6ujM_paxNI7kSKO_MIGpp63GzYwS",
      ability: "",
      value: 26,
      requirements: ["Trumpeter", "Drummer", "Pianist", "Bassist"]
     },
     {
      category: "completed",
      name: "Saxophone Led Quartet",
      text: "Saxophonist, Drummer, Pianist, & Bassist - 26",
      id: "saxophone-led-quartet",
      img: "https://drive.google.com/uc?export=view&id=1wv6o6ujM_paxNI7kSKO_MIGpp63GzYwS",
      ability: "",
      value: 26,
      requirements: ["Saxophonist", "Drummer", "Pianist", "Bassist"]
     },
     {
      category: "completed",
      name: "Vocal Led Quartet",
      text: "Vocalist, Drummer, Pianist, & Bassist - 26",
      id: "vocal-led-quartet",
      img: "https://drive.google.com/uc?export=view&id=1wv6o6ujM_paxNI7kSKO_MIGpp63GzYwS",
      ability: "",
      value: 26,
      requirements: ["Vocalist", "Drummer", "Pianist", "Bassist"]
     },
     {
      category: "completed",
      name: "Full Band",
      text: "Trumpeter, Vocalist, Saxophonist, Drummer, Pianist, & Bassist - 40",
      id: "full-band",
      img: "https://drive.google.com/uc?export=view&id=1bFtpr2D6bai-xbUl0uIiOOuqT-fFPb0H",
      ability: "",
      value: 40,
      requirements: ["Trumpeter", "Saxophonist", "Vocalist", "Drummer", "Pianist", "Bassist"]
     },
     {
      category: "completed",
      name: "Minimalist Master",
      text: "3 different kinds of Minimalist decor - 22",
      id: "minimalist-master",
      img: "https://drive.google.com/uc?export=view&id=1dqfPq-V8m8scZ8sS5wFAlTRJuXRKQ2Qg",
      ability: "",
      value: 22,
      requirements: ["White Paint", "Wood Stools", "Hanging Edison Lights"]
     },
     {
      category: "completed",
      name: "Bohemian Master",
      text: "3 different kinds of Bohemian decor - 22",
      id: "bohemian-master",
      img: "https://drive.google.com/uc?export=view&id=1KN_B-cYT_d_ckKPWI4P2UhiXm-PMIfOw",
      ability: "",
      value: 22,
      requirements: ["Hanging Plant", "Kaleido scope Mural", "Pillows"]
     },
     {
      category: "completed",
      name: "Zen Master",
      text: "3 different kinds of Zen decor - 30",
      id: "zen-master",
      img: "https://drive.google.com/uc?export=view&id=1yT4s2Q1Ifi2tqYo-Oko5aD8DGtz462rm",
      ability: "",
      value: 30,
      requirements: ["Bonsai Tree", "Sliding Glass Door", "Old Meditating Scholar Art"]
     }
  ];

  const weirdCompleted = [
    {
      category: "completed",
      name: "Minimalist Vibe",
      text: "2 different kinds of Minimalist decor - 15",
      id: "minimalist-vibe",
      img: "https://drive.google.com/uc?export=view&id=1LODPrTZiXlwEfZGU79vX9tApWPeVTxbm",
      ability: "",
      value: 15,
     },
     {
      category: "completed",
      name: "Bohemian Vibe",
      text: "2 different kinds of Bohemian decor - 15",
      id: "bohemian-vibe",
      img: "https://drive.google.com/uc?export=view&id=15Sk1jFoceTpsMgq8yWpjgGQvZv7tkWpl",
      ability: "",
      value: 15,
      requirements: ["Hanging Plant", "Kaleido scope Mural", "Pillows"]
     },
     {
      category: "completed",
      name: "Zen Vibe",
      text: "2 different kinds of Zen decor - 18",
      id: "zen-vibe",
      img: "https://drive.google.com/uc?export=view&id=1k2jwg8O8zE4r3mHd3xhe9HwwLCNQBYuf",
      ability: "",
      value: 18,
      requirements: ["Bonsai Tree", "Sliding Glass Door", "Old Meditating Scholar Art"]
     }
  ];

  const date = ["JAN-1", "JAN-2", "JAN-3", "JAN-4", "JAN-5", "JAN-6", "FEB-1", "FEB-2", "FEB-3", "FEB-4", "FEB-5", "FEB-6", "MAR-1", "MAR-2", "MAR-3", "MAR-4", "MAR-5", "MAR-6", "APR-1", "APR-2", "APR-3", "APR-4", "APR-5", "APR-6", "MAY-1", "MAY-2", "MAY-3", "MAY-4", "MAY-5", "MAY-6", "JUNE"];
  
  const [dateDisplay, updateDate] = useState(date[0]);

  const difficulties = [160, 180, 200, 225];

  const [difficultyDisplay, updateDifficulty] = useState("");

  const [playerPoints, updatePlayerPoints] = useState(0);

  const ownerHand = props.initialHand;

  function randomNumber(max) {
    return Math.floor(Math.random() * max);
  };
  
  function createCard(obj) {
    return(
     <div className={obj.category} id={obj.id} key={obj.id}>
       <h3 className="card-header">{obj.name}</h3>
       <img className="card-img" src={obj.img} alt={obj.id}></img>
       <p className="card-description">{obj.text}</p>
     </div>
    )
  };

  const [arrayInPlay, updateInPlay] = useState([...january]);

  const [firstCard, updateFirstCard] = useState("");

  const [secondCard, updateSecondCard] = useState("");

  const [thirdCard, updateThirdCard] =  useState("");

  const [playerChoice, updatePlayerChoice] = useState("")

  const firstCardIndex = arrayInPlay.findIndex(element => element.id === firstCard.id);
  
  const secondCardIndex = arrayInPlay.findIndex(element => element.id === secondCard.id);

  useEffect(() => {
    if (firstCardIndex !== -1) {
      if (firstCardIndex < secondCardIndex) {
        arrayInPlay.splice(firstCardIndex, 1);
        arrayInPlay.splice((secondCardIndex - 1), 1);
      } else {
        arrayInPlay.splice(secondCardIndex, 1);
        arrayInPlay.splice((firstCardIndex - 1), 1);
      }
    };
    if (playerChoice.name === "Saving for Later") {
      updateNewCardArr([...newCardArr, firstCard, secondCard]);
    };
    if (playerChoice.name === "Saving for Later") {
      updateFirstCard("");
      updateSecondCard("");
    };
    if (playerChoice.name === "Hoarding the Trash") {
      updateNewCardArr([...newCardArr, firstCard, secondCard]);
    };
    if (playerChoice.name === "Hoarding the Trash") {
      updateFirstCard("");
      updateSecondCard("");
    }
  },[firstCard]);

  useEffect(() => {
    if (playerChoice.name === "Saving for Later") {
      updateNewCardArr([...newCardArr, firstCard, secondCard]);
    };
    if (playerChoice.name === "Saving for Later") {
      updateFirstCard("");
      updateSecondCard("");
    };
    if (playerChoice.name === "Hoarding the Trash") {
      updateNewCardArr([...newCardArr, firstCard, secondCard]);
    };
    if (playerChoice.name === "Hoarding the Trash") {
      updateFirstCard("");
      updateSecondCard("");
    }
  },[secondCard]);

  useEffect(() => {
    if (playerChoice.name === "Saving for Later") {
      updateNewCardArr([...newCardArr, firstCard, secondCard]);
    };
    if (playerChoice.name === "Saving for Later") {
      updateFirstCard("");
      updateSecondCard("");
    };
    if (playerChoice.name === "Hoarding the Trash") {
      updateNewCardArr([...newCardArr, firstCard, secondCard]);
    };
    if (playerChoice.name === "Hoarding the Trash") {
      updateFirstCard("");
      updateSecondCard("");
    }
  },[thirdCard])

  const [playerDiscard, updatePlayerDiscard] = useState("");

  const [newCardArr, updateNewCardArr] = useState([...ownerHand]);

  useEffect(() => {
    if (abilityCheck(playerChoice) !== false) {
      abilityCheck(playerChoice);
      if (playerChoice.name === "Digging thru the Trash") {
        discardArr.splice(0, 3);
      }
      if (playerChoice.name === "Hoarding the Trash") {
        discardArr.splice(0, 2);
      } 
    }
    updateNewCardArr([...newCardArr, playerChoice]); 
  },[playerChoice]);

  const [discardArr, updateDiscardArr] = useState(["hi"]); 
  
  useEffect(() => {
    updateDiscardArr([playerDiscard, ...discardArr]);
  },[playerDiscard]);

  function isItHi(arr) {
    if (arr[0] === "hi") {
      return "hi"
    } else if (/JUNE/.test(dateDisplay) === true) {
      return <h3 id="player-hand-header">Final Hand!</h3>
    } else {
      return createCard(arr[0]);
    }
  };

  function monthCheck(x) {
      if (/JAN-6/.test(x) === true) {
        updateInPlay([...february])
      } else if (/FEB-6/.test(x) === true) {
        updateInPlay([...march])
      } else if (/MAR-6/.test(x) === true) {
        updateInPlay([...april])
      } else if (/APR-6/.test(x) === true) {
        updateInPlay([...may])
      } else {
        return false;
      }
  };

  function abilityCheck(x) {
    if(x.name === "Saving for Later") {
      updateFirstCard(arrayInPlay[randomNumber(arrayInPlay.length)]);
      updateSecondCard(arrayInPlay[randomNumber(arrayInPlay.length)]);
      updateDate(date[date.indexOf(dateDisplay) + 1]);
    } else if (x.name === "Digging thru the Trash") {
      updateFirstCard(discardArr[0]);
      updateSecondCard(discardArr[1]);
      updateThirdCard(discardArr[2]);
      updateDate(date[date.indexOf(dateDisplay) - 1]);
    } else if (x.name === "Hoarding the Trash") {
      updateFirstCard(discardArr[0]);
      updateSecondCard(discardArr[1]);
      updateDate(date[date.indexOf(dateDisplay) + 1]);
    } else {
      return false;
    }
  };

  function sameCardCheck(x, y, z, arr, arr2) {
    if (x !== "" && y !== -1 && y === z) {
      updateSecondCard(arrayInPlay[randomNumber(arrayInPlay.length)])
    }
    if ((arr.length + arr2.length) > 10) {
        if (arr.length > arr2.length) {
          var heading = document.createElement('h1');
          heading.innerHTML = "You win :0";
          heading.setAttribute('id','victory-heading');
          document.getElementById("cards-in-play").appendChild(heading);
        } else {
          var heading = document.createElement('h1');
          heading.innerHTML = "You lose :(";
          heading.setAttribute('id','defeat-heading');
          document.getElementById("cards-in-play").appendChild(heading);
        }
    }
  };

  function wildSpiritCheck(arr, arr2) {
    if (arr.includes("WILD Spirit") && arr2.includes("Vodka") && !arr.includes("Vodka")) {
      let vodkaIndex = arr2.findIndex(element => element === "Vodka");
      if (arr2.length === 2) {
        if (vodkaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        } 
        if (vodkaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (vodkaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (vodkaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (vodkaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false
        }
      }
    } 
    if (arr.includes("WILD Spirit") && arr2.includes("Whiskey") && !arr.includes("Whiskey")) {
      let vodkaIndex = arr2.findIndex(element => element === "Whiskey");
      if (arr2.length === 2) {
        if (vodkaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        } 
        if (vodkaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (vodkaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (vodkaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (vodkaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false
        }
      }
    } 
    if (arr.includes("WILD Spirit") && arr2.includes("Tequila") && !arr.includes("Tequila")) {
      let vodkaIndex = arr2.findIndex(element => element === "Tequila");
      if (arr2.length === 2) {
        if (vodkaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        } 
        if (vodkaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (vodkaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (vodkaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (vodkaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false
        }
      }
    } 
    if (arr.includes("WILD Spirit") && arr2.includes("Gin") && !arr.includes("Gin")) {
      let vodkaIndex = arr2.findIndex(element => element === "Gin");
      if (arr2.length === 2) {
        if (vodkaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        } 
        if (vodkaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (vodkaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (vodkaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (vodkaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false
        }
      }
    } 
    if (arr.includes("WILD Spirit") && arr2.includes("Rum") && !arr.includes("Rum")) {
      let vodkaIndex = arr2.findIndex(element => element === "Rum");
      if (arr2.length === 2) {
        if (vodkaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        } 
        if (vodkaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (vodkaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (vodkaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (vodkaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false
        }
      }
    } else {
      return false;
    }
  };

  function wildIngredientCheck(arr, arr2) {
    if (arr.includes("WILD Ingredient") && arr2.includes("Soda") && !arr.includes("Soda")) {
      let sodaIndex = arr2.findIndex(element => element === "Soda");
      if (arr2.length === 2) {
        if (sodaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (sodaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
    }
    if (arr.includes("WILD Ingredient") && arr2.includes("Lime") && !arr.includes("Lime")) {
      let sodaIndex = arr2.findIndex(element => element === "Lime");
      if (arr2.length === 2) {
        if (sodaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (sodaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
    }
    if (arr.includes("WILD Ingredient") && arr2.includes("Juice") && !arr.includes("Juice")) {
      let sodaIndex = arr2.findIndex(element => element === "Juice");
      if (arr2.length === 2) {
        if (sodaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (sodaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
    }
    if (arr.includes("WILD Ingredient") && arr2.includes("Vermouth") && !arr.includes("Vermouth")) {
      let sodaIndex = arr2.findIndex(element => element === "Vermouth");
      if (arr2.length === 2) {
        if (sodaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (sodaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
    }
    if (arr.includes("WILD Ingredient") && arr2.includes("Campari") && !arr.includes("Campari")) {
      let sodaIndex = arr2.findIndex(element => element === "Campari");
      if (arr2.length === 2) {
        if (sodaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (sodaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
    }    
    if (arr.includes("WILD Ingredient") && arr2.includes("Grenadine") && !arr.includes("Grenadine")) {
      let sodaIndex = arr2.findIndex(element => element === "Grenadine");
      if (arr2.length === 2) {
        if (sodaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (sodaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
    }
    if (arr.includes("WILD Ingredient") && arr2.includes("Schnapps") && !arr.includes("Schnapps")) {
      let sodaIndex = arr2.findIndex(element => element === "Schnapps");
      if (arr2.length === 2) {
        if (sodaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (sodaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
    }  
    if (arr.includes("WILD Ingredient") && arr2.includes("Bitters") && !arr.includes("Bitters")) {
      let sodaIndex = arr2.findIndex(element => element === "Bitters");
      if (arr2.length === 2) {
        if (sodaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (sodaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
    } 
    if (arr.includes("WILD Ingredient") && arr2.includes("Simple") && !arr.includes("Simple")) {
      let sodaIndex = arr2.findIndex(element => element === "Simple");
      if (arr2.length === 2) {
        if (sodaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (sodaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
    } 
    if (arr.includes("WILD Ingredient") && arr2.includes("Ginger Beer") && !arr.includes("Ginger Beer")) {
      let sodaIndex = arr2.findIndex(element => element === "Ginger Beer");
      if (arr2.length === 2) {
        if (sodaIndex === 0 && arr.includes(arr2[1])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (arr2.length === 3) {
        if (sodaIndex === 0 && arr.includes(arr2[1]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 1 && arr.includes(arr2[0]) && arr.includes(arr2[2])) {
          return true;
        }
        if (sodaIndex === 2 && arr.includes(arr2[1]) && arr.includes(arr2[0])) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }               
  };

  function bothWildCheck (arr, arr2) {
    if (arr.includes("WILD Spirit") === true && arr.includes("WILD Ingredient") === true) {
        if (arr2.length === 2) {
          return true;
        }
        if (arr2.length === 3) {
          if (arr2.includes("Vodka") || arr2.includes("Whiskey") || arr2.includes("Gin") || arr2.includes("Rum") || arr2.includes("Tequila")) {
            if (arr.includes("Soda") && arr2.includes("Soda")) {
              return true;
            }
            if (arr.includes("Juice") && arr2.includes("Juice")) {
              return true;
            }
            if (arr.includes("Vermouth") && arr2.includes("Vermouth")) {
              return true;
            }
            if (arr.includes("Ginger Beer") && arr2.includes("Ginger Beer")) {
              return true;
            }
            if (arr.includes("Campari") && arr2.includes("Campari")) {
              return true;
            }
            if (arr.includes("Bitters") && arr2.includes("Bitters")) {
              return true;
            }
            if (arr.includes("Lime") && arr2.includes("Lime")) {
              return true;
            }
            if (arr.includes("Simple") && arr2.includes("Simple")) {
              return true;
            }
            if (arr.includes("Schnapps") && arr2.includes("Schnapps")) {
              return true;
            }
            if (arr.includes("Grenadine") && arr2.includes("Grenadine")) {
              return true;
            } else {
              return false;
            }                                               
         }
     }
  }
  };

  const customerArray = props.customerArray;

  const customerArr = customerArray.slice();

  const [arrYes, updateArrYes] = useState([]);

  const [customerYes, updateYes] = useState("");

  const [arrNo, updateArrNo] = useState([]);

  const [customerNo, updateNo] = useState("");

  useEffect(() => {
   updateArrYes([...arrYes, customerYes]);
  },[customerYes]);

  useEffect(() => {
    updateArrNo([...arrNo, customerNo]);
  },[customerNo])

  function customerSorting(cust, arr) {
    let baseScore = playerPoints;
    let diffScore = difficultyDisplay;
    if (cust.name === "Alpha") {
      if (!arr.includes("Vodka Martini") && !arr.includes("Hairy Navel") && !arr.includes("Moscow Mule")) {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
      if (arr.includes("Vodka Martini") || arr.includes("Hairy Navel") || arr.includes("Moscow Mule")) {
        if (arr.includes("Vodka Martini") && arr.includes("Hairy Navel") && arr.includes("Moscow Mule")) {
          let custScore = baseScore + 60;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }
        } else if ((arr.includes("Vodka Martini") && arr.includes("Hairy Navel")) || (arr.includes("Vodka Martini") && arr.includes("Moscow Mule")) || (arr.includes("Moscow Mule") && arr.includes("Hairy Navel"))) {
          let custScore = baseScore + 40;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        } else {
          let custScore = baseScore + 20;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        }
    }
    }
    if (cust.name === "Beta") {
      if (!arr.includes("Gin Martini") && !arr.includes("Negroni") && !arr.includes("Gimlet")) {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
      if (arr.includes("Gin Martini") || arr.includes("Negroni") || arr.includes("Gimlet")) {
        if (arr.includes("Gin Martini") && arr.includes("Negroni") && arr.includes("Gimlet")) {
          let custScore = baseScore + 60;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }
        } else if ((arr.includes("Gin Martini") && arr.includes("Negroni")) || (arr.includes("Gin Martini") && arr.includes("Gimlet")) || (arr.includes("Negroni") && arr.includes("Gimlet"))) {
          let custScore = baseScore + 40;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        } else {
          let custScore = baseScore + 20;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        }
    }
    }
    if (cust.name === "Gamma") {
      if (!arr.includes("Paloma") && !arr.includes("Teqroni") && !arr.includes("Tequila Sunrise")) {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
      if (arr.includes("Paloma") || arr.includes("Teqroni") || arr.includes("Tequila Sunrise")) {
        if (arr.includes("Paloma") && arr.includes("Teqroni") && arr.includes("Tequila Sunrise")) {
          let custScore = baseScore + 60;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }
        } else if ((arr.includes("Paloma") && arr.includes("Teqroni")) || (arr.includes("Paloma") && arr.includes("Tequila Sunrise")) || (arr.includes("Tequila Sunrise") && arr.includes("Teqroni"))) {
          let custScore = baseScore + 40;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        } else {
          let custScore = baseScore + 20;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        }
    }
    } 
    if (cust.name === "Delta") {
      if (!arr.includes("Rum & Coke") && !arr.includes("Dark & Stormy") && !arr.includes("Daiquiri")) {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
      if (arr.includes("Rum & Coke") || arr.includes("Dark & Stormy") || arr.includes("Daiquiri")) {
        if (arr.includes("Rum & Coke") && arr.includes("Dark & Stormy") && arr.includes("Daiquiri")) {
          let custScore = baseScore + 60;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }
        } else if ((arr.includes("Rum & Coke") && arr.includes("Dark & Stormy")) || (arr.includes("Rum & Coke") && arr.includes("Daiquiri")) || (arr.includes("Daiquiri") && arr.includes("Dark & Stormy"))) {
          let custScore = baseScore + 40;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        } else {
          let custScore = baseScore + 20;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        }
    }
    } 
    if (cust.name === "Epsilon") {
      if (!arr.includes("Bourbon Highball") && !arr.includes("Old Fashioned") && !arr.includes("Manhattan")) {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
      if (arr.includes("Bourbon Highball") || arr.includes("Old Fashioned") || arr.includes("Manhattan")) {
        if (arr.includes("Bourbon Highball") && arr.includes("Old Fashioned") && arr.includes("Manhattan")) {
          let custScore = baseScore + 60;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }
        } else if ((arr.includes("Bourbon Highball") && arr.includes("Old Fashioned")) || (arr.includes("Bourbon Highball") && arr.includes("Manhattan")) || (arr.includes("Manhattan") && arr.includes("Old Fashioned"))) {
          let custScore = baseScore + 40;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        } else {
          let custScore = baseScore + 20;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        }
    }
    }  
    if (cust.name === "Eta") {
      if (!arr.includes("Paloma") && !arr.includes("Tequila Sunrise") && !arr.includes("Hairy Navel")) {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
      if (arr.includes("Paloma") || arr.includes("Tequila Sunrise") || arr.includes("Hairy Navel")) {
        if (arr.includes("Paloma") && arr.includes("Tequila Sunrise") && arr.includes("Hairy Navel")) {
          let custScore = baseScore + 30;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }
        } else if ((arr.includes("Paloma") && arr.includes("Tequila Sunrise")) || (arr.includes("Paloma") && arr.includes("Hairy Navel")) || (arr.includes("Hairy Navel") && arr.includes("Tequila Sunrise"))) {
          let custScore = baseScore + 20;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        } else {
          let custScore = baseScore + 10;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        }
    }
    }     
    if (cust.name === "Theta") {
      if (!arr.includes("Bourbon Highball") && !arr.includes("Rum & Coke")) {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
      if (arr.includes("Bourbon Highball") && arr.includes("Rum & Coke")) {
        let custScore = baseScore + 20;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
      if (!arr.includes("Bourbon Highball") || !arr.includes("Rum & Coke")) {
        let custScore = baseScore + 10;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    }
    }     
    if (cust.name === "Iota") {
      if (arr.includes("Vodka Martini")) {
        let custScore = baseScore + 30;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    } 
    if (cust.name === "Kappa") {
      if (arr.includes("Bourbon Highball")) {
        let custScore = baseScore + 30;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    } 
    if (cust.name === "Lambda") {
      if (arr.includes("Paloma")) {
        let custScore = baseScore + 30;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    }   
    if (cust.name === "Mu") {
      if (arr.includes("Gin Martini")) {
        let custScore = baseScore + 30;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    }  
    if (cust.name === "Nu") {
      if (arr.includes("Rum & Coke")) {
        let custScore = baseScore + 30;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    }   
    if (cust.name === "Omicron") {
      if (!arr.includes("Paloma") && !arr.includes("Tequila Sunrise") && !arr.includes("Hairy Navel")) {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
      if (arr.includes("Paloma") || arr.includes("Tequila Sunrise") || arr.includes("Hairy Navel")) {
        if (arr.includes("Paloma") && arr.includes("Tequila Sunrise") && arr.includes("Hairy Navel")) {
          let custScore = baseScore - 30;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }
        } else if ((arr.includes("Paloma") && arr.includes("Tequila Sunrise")) || (arr.includes("Paloma") && arr.includes("Hairy Navel")) || (arr.includes("Hairy Navel") && arr.includes("Tequila Sunrise"))) {
          let custScore = baseScore - 20;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        } else {
          let custScore = baseScore - 10;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        }
    }      
    } 
    if (cust.name === "Pi") {
      if (!arr.includes("Bourbon Highball") && !arr.includes("Rum & Coke")) {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
      if (arr.includes("Bourbon Highball") && arr.includes("Rum & Coke")) {
        let custScore = baseScore - 20;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
      if (!arr.includes("Bourbon Highball") || !arr.includes("Rum & Coke")) {
        let custScore = baseScore - 10;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    }
    }  
    if (cust.name === "Rho") {
      if (!arr.includes("Vodka Martini") && !arr.includes("Hairy Navel") && !arr.includes("Moscow Mule")) {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
      if (arr.includes("Vodka Martini") || arr.includes("Hairy Navel") || arr.includes("Moscow Mule")) {
        if (arr.includes("Vodka Martini") && arr.includes("Hairy Navel") && arr.includes("Moscow Mule")) {
          let custScore = baseScore - 60;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }
        } else if ((arr.includes("Vodka Martini") && arr.includes("Hairy Navel")) || (arr.includes("Vodka Martini") && arr.includes("Moscow Mule")) || (arr.includes("Moscow Mule") && arr.includes("Hairy Navel"))) {
          let custScore = baseScore - 40;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        } else {
          let custScore = baseScore - 20;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        }
    }
    }  
    if (cust.name === "Sigma") {
      if (!arr.includes("Gin Martini") && !arr.includes("Negroni") && !arr.includes("Gimlet")) {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
      if (arr.includes("Gin Martini") || arr.includes("Negroni") || arr.includes("Gimlet")) {
        if (arr.includes("Gin Martini") && arr.includes("Negroni") && arr.includes("Gimlet")) {
          let custScore = baseScore - 60;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }
        } else if ((arr.includes("Gin Martini") && arr.includes("Negroni")) || (arr.includes("Gin Martini") && arr.includes("Gimlet")) || (arr.includes("Negroni") && arr.includes("Gimlet"))) {
          let custScore = baseScore - 40;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        } else {
          let custScore = baseScore - 20;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        }
    }
    } 
    if (cust.name === "Tau") {
      if (!arr.includes("Paloma") && !arr.includes("Teqroni") && !arr.includes("Tequila Sunrise")) {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
      if (arr.includes("Paloma") || arr.includes("Teqroni") || arr.includes("Tequila Sunrise")) {
        if (arr.includes("Paloma") && arr.includes("Teqroni") && arr.includes("Tequila Sunrise")) {
          let custScore = baseScore - 60;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }
        } else if ((arr.includes("Paloma") && arr.includes("Teqroni")) || (arr.includes("Paloma") && arr.includes("Tequila Sunrise")) || (arr.includes("Tequila Sunrise") && arr.includes("Teqroni"))) {
          let custScore = baseScore - 40;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        } else {
          let custScore = baseScore - 20;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        }
    }
    } 
    if (cust.name === "Upsilon") {
      if (!arr.includes("Rum & Coke") && !arr.includes("Dark & Stormy") && !arr.includes("Daiquiri")) {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
      if (arr.includes("Rum & Coke") || arr.includes("Dark & Stormy") || arr.includes("Daiquiri")) {
        if (arr.includes("Rum & Coke") && arr.includes("Dark & Stormy") && arr.includes("Daiquiri")) {
          let custScore = baseScore - 60;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }
        } else if ((arr.includes("Rum & Coke") && arr.includes("Dark & Stormy")) || (arr.includes("Rum & Coke") && arr.includes("Daiquiri")) || (arr.includes("Daiquiri") && arr.includes("Dark & Stormy"))) {
          let custScore = baseScore - 40;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        } else {
          let custScore = baseScore - 20;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        }
    }
    }
    if (cust.name === "Phi") {
      if (!arr.includes("Bourbon Highball") && !arr.includes("Old Fashioned") && !arr.includes("Manhattan")) {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
      if (arr.includes("Bourbon Highball") || arr.includes("Old Fashioned") || arr.includes("Manhattan")) {
        if (arr.includes("Bourbon Highball") && arr.includes("Old Fashioned") && arr.includes("Manhattan")) {
          let custScore = baseScore - 60;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }
        } else if ((arr.includes("Bourbon Highball") && arr.includes("Old Fashioned")) || (arr.includes("Bourbon Highball") && arr.includes("Manhattan")) || (arr.includes("Manhattan") && arr.includes("Old Fashioned"))) {
          let custScore = baseScore - 40;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        } else {
          let custScore = baseScore - 20;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        }
    }
    } 
    if (cust.name === "Chi") {
      if (arr.includes("Trio")) {
        let custScore = baseScore - 30;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    } 
    if (cust.name === "Psi") {
      if (arr.includes("Full Band")) {
        let custScore = baseScore - 60;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    } 
    if (cust.name === "Omega") {
      if (arr.includes("Trio")) {
        let custScore = baseScore + 30;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    } 
    if (cust.name === "Alef") {
      if (arr.includes("Trumpet Led Quartet")) {
        let custScore = baseScore + 50;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    }
    if (cust.name === "Beit") {
      if (arr.includes("Saxophone Led Quartet")) {
        let custScore = baseScore + 50;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    } 
    if (cust.name === "Gimel") {
      if (arr.includes("Vocal Led Quartet")) {
        let custScore = baseScore + 50;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    } 
    if (cust.name === "Dalet") {
      if (arr.includes("Full Band")) {
        let custScore = baseScore + 60;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    } 
    if (cust.name === "Hei") {
      if (!arr.includes("Minimalist Vibe")) {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
       } else {
          let custScore = baseScore + 30;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        }
    } 
    if (cust.name === "Vav") {
      if (!arr.includes("Minimalist Vibe")) {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
       } else {
          let custScore = baseScore - 30;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        }
    } 
    if (cust.name === "Zayin") {
      if (!arr.includes("Bohemian Vibe")) {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
       } else {
          let custScore = baseScore + 30;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        }
    } 
    if (cust.name === "Cheit") {
      if (!arr.includes("Bohemian Vibe")) {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
       } else {
          let custScore = baseScore - 30;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        }
    } 
    if (cust.name === "Teit") {
      if (!arr.includes("Zen Vibe")) {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
       } else {
          let custScore = baseScore + 30;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        }
    }  
    if (cust.name === "Yod") {
      if (!arr.includes("Zen Vibe")) {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
       } else {
          let custScore = baseScore - 30;
          if (custScore > diffScore) {
            updateYes(cust);
          } else {
            updateNo(cust);
          }          
        }
    }   
    if (cust.name === "Kaf") {
      if (arr.includes("Daiquiri") && arr.includes("Negroni")) {
        let custScore = baseScore + 50;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    } 
    if (cust.name === "Lamed") {
      if (arr.includes("Dark & Stormy") && arr.includes("Gimlet")) {
        let custScore = baseScore + 50;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    } 
    if (cust.name === "Mem") {
      if (arr.includes("Teqroni") && arr.includes("Old Fashioned")) {
        let custScore = baseScore + 50;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    }  
    if (cust.name === "Nun") {
      if (arr.includes("Tequila Sunrise") && arr.includes("Manhattan")) {
        let custScore = baseScore + 50;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    } 
    if (cust.name === "Samekh") {
      if (arr.includes("Moscow Mule") && arr.includes("Hairy Navel")) {
        let custScore = baseScore + 50;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    }  
    if (cust.name === "Ayin") {
      if (arr.includes("Vodka Martini") && arr.includes("Bourbon Highball") && arr.includes("Paloma")) {
        let custScore = baseScore + 50;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    } 
    if (cust.name === "Pei") {
      if (arr.includes("Gin Martini") && arr.includes("Vodka Martini") && arr.includes("Rum & Coke")) {
        let custScore = baseScore + 50;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    } 
    if (cust.name === "Tzadei") {
      if (arr.includes("Gin Martini") && arr.includes("Bourbon Highball") && arr.includes("Rum & Coke")) {
        let custScore = baseScore + 50;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    }
    if (cust.name === "Qof") {
      if (arr.includes("Minimalist Master")) {
        let custScore = baseScore - 50;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    }
    if (cust.name === "Reish") {
      if (arr.includes("Bohemian Master")) {
        let custScore = baseScore - 50;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    }
    if (cust.name === "Sin") {
      if (arr.includes("Zen Master")) {
        let custScore = baseScore - 50;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    }
    if (cust.name === "Shin") {
      if (arr.includes("Bohemian Master")) {
        let custScore = baseScore + 50;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    }
    if (cust.name === "Tav") {
      if (arr.includes("Zen Master")) {
        let custScore = baseScore + 50;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    }
    if (cust.name === "Zeta") {
      if (arr.includes("Minimalist Master")) {
        let custScore = baseScore + 50;
        if (custScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      } else {
        if (baseScore > diffScore) {
          updateYes(cust);
        } else {
          updateNo(cust);
        }
      }
    }
  };

  function isItEndGame() {
    const body = document.getElementById("cards-in-play");
    const firstCust = document.getElementById("customer-one-decision");
    const secondCust = document.getElementById("customer-two-decision");
    const thirdCust = document.getElementById("customer-three-decision");
    const fourthCust = document.getElementById("customer-four-decision");
    const fifthCust = document.getElementById("customer-five-decision");
    const sixthCust = document.getElementById("customer-six-decision");
    const seventhCust = document.getElementById("customer-seven-decision");
    const eighthCust = document.getElementById("customer-eight-decision");
    const ninthCust = document.getElementById("customer-nine-decision");
    const tenthCust = document.getElementById("customer-ten-decision");
    const eleventhCust = document.getElementById("customer-eleven-decision");
    if (body.contains(firstCust) === false && body.contains(secondCust) === false && body.contains(thirdCust) === false && body.contains(fourthCust) === false && body.contains(fifthCust) === false && body.contains(sixthCust) === false && body.contains(seventhCust) === false && body.contains(eighthCust) === false && body.contains(ninthCust) === false && body.contains(tenthCust) === false && body.contains(eleventhCust) === false) {
      var diffDisplay = document.getElementById("difficulty-display");
        diffDisplay.remove();
      var cardHandle = document.getElementById("card-handling");
        cardHandle.remove();
      var pointsDisplay = document.getElementById("point-display");
        pointsDisplay.remove();
      };
}

  var spawnButton = function(){    
    var button = document.createElement("button");
    button.innerHTML = "You Sure 'Bout That?";
    button.setAttribute('id','confirmation-button');
    button.setAttribute('class','buttons')
    button.onclick = function(){
      arrYes.splice(0, 1);
      arrNo.splice(0, 1);
      var ownerDisplay = document.getElementById("owner-display");
        ownerDisplay.remove();
      var spiritHand = document.getElementById("player-spirits");
        spiritHand.remove();
      var ingredientHand = document.getElementById("player-ingredients");
        ingredientHand.remove();
      var musicHand = document.getElementById("player-musicians");
        musicHand.remove();
      var decorHand = document.getElementById("player-decor");
        decorHand.remove();
      var completedCards = document.getElementById("completed-cards");
        completedCards.remove();
      var endGame = document.getElementById("confirmation-button");
        endGame.remove();
      var dateView = document.getElementById("date-display");
        dateView.remove();
      var openingDay = document.getElementById("opening-day");
        openingDay.remove();
      var custDisplay = document.getElementById("customer-display");
        custDisplay.remove();
      var barHeader = document.getElementById("owner-header");
        barHeader.remove();
      var customerHead = document.getElementById("customer-header");
        customerHead.remove();
      var instructions = document.getElementById("instructive-elements");
        instructions.remove();
      var gameTitle = document.getElementById("game-title");
        gameTitle.remove();
      document.getElementById("decision-day").style.zIndex = 1;
      document.getElementById("difficulty-display").style.marginTop = "-100px";
      document.getElementById("point-display").style.marginTop = "-100px";
      document.getElementById("point-display").style.marginLeft = "40px";
      document.getElementById("left-side").style.backgroundColor = "#363636";
      document.getElementById("left-side").style.border = "none";
      document.getElementById("june").style.border = "none";
      var customerOne = document.createElement("button");
      document.getElementById("difficulty-display").appendChild(customerOne);
      customerOne.innerHTML = "Have you won over the first customer?";
      customerOne.setAttribute('id','customer-one-decision');
      customerOne.setAttribute('class','buttons');
      customerOne.onclick = function(){
        customerSorting(customerArr[0], fullHandNames);
        customerOne.remove();
        isItEndGame();
      };
      var customerTwo = document.createElement("button");
      document.getElementById("difficulty-display").appendChild(customerTwo);
      customerTwo.innerHTML = "Have you won over the second customer?";
      customerTwo.setAttribute('id','customer-two-decision');
      customerTwo.setAttribute('class','buttons');
      customerTwo.onclick = function(){
        customerSorting(customerArr[1], fullHandNames);
        customerTwo.remove();
        isItEndGame();
      };
      var customerThree = document.createElement("button");
      document.getElementById("difficulty-display").appendChild(customerThree);
      customerThree.innerHTML = "Have you won over the third customer?";
      customerThree.setAttribute('id','customer-three-decision');
      customerThree.setAttribute('class','buttons');
      customerThree.onclick = function(){
        customerSorting(customerArr[2], fullHandNames);
        customerThree.remove();
        isItEndGame();
      };
      var customerFour = document.createElement("button");
      document.getElementById("difficulty-display").appendChild(customerFour);
      customerFour.innerHTML = "Have you won over the fourth customer?";
      customerFour.setAttribute('id','customer-four-decision');
      customerFour.setAttribute('class','buttons');
      customerFour.onclick = function(){
        customerSorting(customerArr[3], fullHandNames);
        customerFour.remove();
        isItEndGame();
      };
      var customerFive = document.createElement("button");
      document.getElementById("difficulty-display").appendChild(customerFive);
      customerFive.innerHTML = "Have you won over the fifth customer?";
      customerFive.setAttribute('id','customer-five-decision');
      customerFive.setAttribute('class','buttons');
      customerFive.onclick = function(){
        customerSorting(customerArr[4], fullHandNames);
        customerFive.remove();
        isItEndGame();
      };
      var customerSix = document.createElement("button");
      document.getElementById("difficulty-display").appendChild(customerSix);
      customerSix.innerHTML = "Have you won over the sixth customer?";
      customerSix.setAttribute('id','customer-six-decision');
      customerSix.setAttribute('class','buttons');
      customerSix.onclick = function(){
        customerSorting(customerArr[5], fullHandNames);
        customerSix.remove();
        isItEndGame();
      };
      var customerSeven = document.createElement("button");
      document.getElementById("difficulty-display").appendChild(customerSeven);
      customerSeven.innerHTML = "Have you won over the seventh customer?";
      customerSeven.setAttribute('id','customer-seven-decision');
      customerSeven.setAttribute('class','buttons');
      customerSeven.onclick = function(){
        customerSorting(customerArr[6], fullHandNames);
        customerSeven.remove();
        isItEndGame();
      };
      var customerEight = document.createElement("button");
      document.getElementById("difficulty-display").appendChild(customerEight);
      customerEight.innerHTML = "Have you won over the eighth customer?";
      customerEight.setAttribute('id','customer-eight-decision');
      customerEight.setAttribute('class','buttons');
      customerEight.onclick = function(){
        customerSorting(customerArr[7], fullHandNames);
        customerEight.remove();
        isItEndGame();
      };
      var customerNine = document.createElement("button");
      document.getElementById("difficulty-display").appendChild(customerNine);
      customerNine.innerHTML = "Have you won over the ninth customer?";
      customerNine.setAttribute('id','customer-nine-decision');
      customerNine.setAttribute('class','buttons');
      customerNine.onclick = function(){
        customerSorting(customerArr[8], fullHandNames);
        customerNine.remove();
        isItEndGame();
      };
      var customerTen = document.createElement("button");
      document.getElementById("difficulty-display").appendChild(customerTen);
      customerTen.innerHTML = "Have you won over the tenth customer?";
      customerTen.setAttribute('id','customer-ten-decision');
      customerTen.setAttribute('class','buttons');
      customerTen.onclick = function(){
        customerSorting(customerArr[9], fullHandNames);
        customerTen.remove();
        isItEndGame();
      };
      var customerEleven = document.createElement("button");
      document.getElementById("difficulty-display").appendChild(customerEleven);
      customerEleven.innerHTML = "Have you won over the eleventh customer?";
      customerEleven.setAttribute('id','customer-eleven-decision');
      customerEleven.setAttribute('class','buttons');
      customerEleven.onclick = function(){
        customerSorting(customerArr[10], fullHandNames);
        customerEleven.remove();
        isItEndGame();
      }
    };
    document.getElementById("wrap-up-button").appendChild(button);      
    var wrapUp = document.getElementById("end-game");
      wrapUp.remove();
  };

  const isJune = () => {
    if (/JUNE/.test(dateDisplay) === true) {
        return <div id="june">
          <h2 id="opening-day">Opening Day!</h2>
          <div id="point-display"><h1 id="point-display-header">{playerPoints}</h1></div>
          <div id="completed-cards">
          {completed.map(element => createFinalCard(element, newCardArr))}
          {weirdCompleted.map(element => createWeirdFinalCard(element, newCardArr, fullHandNames))}
          </div>
          <div id="wrap-up-button"><button id="end-game" className="buttons" onClick={() => {
            spawnButton();
          }}>Click to open your bar!</button></div>
          </div>
    }
  };
  
  function finalCardCheck (arr, arr2) {
    if (arr2.every(v => arr.includes(v)) === true) {
      return true;
    }
    if (wildSpiritCheck(arr, arr2) === true) {
      return true;
    }
    if (wildIngredientCheck(arr, arr2) === true) {
      return true;
    }
    if (bothWildCheck(arr, arr2) === true) {
      return true;
    }               
  };

  function weirdFinalCardCheck (arr, item) {
    if (item === "Minimalist Vibe") {
      if ((arr.includes("White Paint") === true && arr.includes("Wood Stools") === true) || (arr.includes("White Paint") === true && arr.includes("Hanging Edison Lights") === true) || (arr.includes("Hanging Edison Lights") === true && arr.includes("Wood Stools") === true)) {
          return true;
        } else {
          return false;
        }
      }
    if (item === "Bohemian Vibe") {
      if ((arr.includes("Hanging Plant") === true && arr.includes("Kaleido scope Mural") === true) || (arr.includes("Hanging Plant") === true && arr.includes("Pillows") === true) || (arr.includes("Pillows") === true && arr.includes("Kaleido scope Mural") === true)) {
        return true;
      } else {
        return false;
      }
    }
    if (item === "Zen Vibe") {
      if ((arr.includes("Bonsai Tree") === true && arr.includes("Sliding Glass Door") === true) || (arr.includes("Bonsai Tree") === true && arr.includes("Old Meditating Scholar Art") === true) || (arr.includes("Old Meditating Scholar Art") === true && arr.includes("Sliding Glass Door") === true)) {
        return true;
      } else {
        return false;
      }
    }
  };

  const fullHandNames = newCardArr.map(element => element.name);

  function createFinalCard(obj, arr) {
    return(
     <div className={obj.category} id={obj.id} key={obj.id}>
      <button className="card-buttons" disabled={finalCardCheck(fullHandNames, obj.requirements) === true ? false : true} onClick={() => {
        updatePlayerChoice(obj);
        updatePlayerPoints(obj.value += playerPoints);
        const requiredPieces = obj.requirements;
        if (requiredPieces.length === 2) {
         if (bothWildCheck(fullHandNames, requiredPieces) === true && !fullHandNames.includes(requiredPieces[0]) && !fullHandNames.includes(requiredPieces[1])) {
          let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
            arr.splice(wildSpiritIndex, 1);
          let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
            arr.splice(wildIngredientIndex, 1);
         } else if (wildSpiritCheck(fullHandNames, requiredPieces) === true) {
          if (!fullHandNames.includes("Vodka")) {
             let vodkaIndex = requiredPieces.findIndex(element => element === "Vodka");
             if (vodkaIndex === 0) {
               let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                 arr.splice(firstIndex, 1);
               let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
                 arr.splice(wildSpiritIndex, 1);
             } if (vodkaIndex === 1) {
               let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                 arr.splice(firstIndex, 1);
               let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
                 arr.splice(wildSpiritIndex, 1);              
             }
          } 
          if (!fullHandNames.includes("Whiskey")) {
            let vodkaIndex = requiredPieces.findIndex(element => element === "Whiskey");
            if (vodkaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
                arr.splice(wildSpiritIndex, 1);
            } if (vodkaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
                arr.splice(wildSpiritIndex, 1);              
            }
          } 
          if (!fullHandNames.includes("Gin")) {
            let vodkaIndex = requiredPieces.findIndex(element => element === "Gin");
            if (vodkaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
                arr.splice(wildSpiritIndex, 1);
            } if (vodkaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
                arr.splice(wildSpiritIndex, 1);              
            }
          } 
          if (!fullHandNames.includes("Tequila")) {
            let vodkaIndex = requiredPieces.findIndex(element => element === "Tequila");
            if (vodkaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
                arr.splice(wildSpiritIndex, 1);
            } if (vodkaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
                arr.splice(wildSpiritIndex, 1);              
            }
          } 
          if (!fullHandNames.includes("Rum")) {
            let vodkaIndex = requiredPieces.findIndex(element => element === "Rum");
            if (vodkaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
                arr.splice(wildSpiritIndex, 1);
            } if (vodkaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
                arr.splice(wildSpiritIndex, 1);              
            }
          }                                       
         } else if (wildIngredientCheck(fullHandNames, requiredPieces) === true) {
          if (!fullHandNames.includes("Soda")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Soda");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            } if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            }
          } 
          if (!fullHandNames.includes("Juice")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Juice");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            } if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            }
          } 
          if (!fullHandNames.includes("Vermouth")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Vermouth");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            } if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            }
          } 
          if (!fullHandNames.includes("Campari")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Campari");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            } if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            }
          } 
          if (!fullHandNames.includes("Ginger Beer")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Ginger Beer");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            } if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            }
          } 
          if (!fullHandNames.includes("Bitters")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Bitters");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            } if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            }
          } 
          if (!fullHandNames.includes("Grenadine")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Grenadine");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            } if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            }
          } 
          if (!fullHandNames.includes("Schnapps")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Schnapps");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            } if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            }
          } 
          if (!fullHandNames.includes("Simple")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Simple");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            } if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            }
          } 
          if (!fullHandNames.includes("Lime")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Lime");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            } if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);
            }
          }                                                                            
         } else {
        let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
          arr.splice(firstIndex, 1);
        let secondIndex = arr.findIndex(element => element.name === requiredPieces[1]);
          arr.splice(secondIndex, 1);  
         }
        } 
        if (requiredPieces.length === 3) {
         if (bothWildCheck(fullHandNames, requiredPieces) === true && !fullHandNames.includes(requiredPieces[0]) && !fullHandNames.includes(requiredPieces[1])) {
           let firstIndex = arr.findIndex(element => element.name === requiredPieces[2]);
             arr.splice(firstIndex, 1);
           let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
             arr.splice(wildSpiritIndex, 1);
           let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
             arr.splice(wildIngredientIndex, 1);
         } else if (bothWildCheck(fullHandNames, requiredPieces) === true && !fullHandNames.includes(requiredPieces[0]) && !fullHandNames.includes(requiredPieces[2])) {
          let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
            arr.splice(firstIndex, 1);
          let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
            arr.splice(wildSpiritIndex, 1);
          let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
            arr.splice(wildIngredientIndex, 1);
         } else if (bothWildCheck(fullHandNames, requiredPieces) === true && !fullHandNames.includes(requiredPieces[1]) && !fullHandNames.includes(requiredPieces[2])) {
          let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
            arr.splice(firstIndex, 1);
          let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
            arr.splice(wildSpiritIndex, 1);
          let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
            arr.splice(wildIngredientIndex, 1);
         } else if (wildSpiritCheck(fullHandNames, requiredPieces) === true) {
          if (!fullHandNames.includes("Vodka")) {
            let vodkaIndex = requiredPieces.findIndex(element => element === "Vodka");
            if (vodkaIndex === 0) {
             let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
               arr.splice(firstIndex, 1);
             let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
               arr.splice(secondIndex, 1);
             let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
               arr.splice(wildSpiritIndex, 1);
            }
            if (vodkaIndex === 1) {
            let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
              arr.splice(secondIndex, 1);
            let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
              arr.splice(wildSpiritIndex, 1);
            }
            if (vodkaIndex === 2) {
            let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === requiredPieces[1]);
              arr.splice(secondIndex, 1);
            let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
              arr.splice(wildSpiritIndex, 1);
            }
          } 
          if (!fullHandNames.includes("Rum")) {
            let vodkaIndex = requiredPieces.findIndex(element => element === "Rum");
            if (vodkaIndex === 0) {
             let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
               arr.splice(firstIndex, 1);
             let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
               arr.splice(secondIndex, 1);
             let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
               arr.splice(wildSpiritIndex, 1);
            }
            if (vodkaIndex === 1) {
            let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
              arr.splice(secondIndex, 1);
            let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
              arr.splice(wildSpiritIndex, 1);
            }
            if (vodkaIndex === 2) {
            let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === requiredPieces[1]);
              arr.splice(secondIndex, 1);
            let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
              arr.splice(wildSpiritIndex, 1);
            }
          } 
          if (!fullHandNames.includes("Tequila")) {
            let vodkaIndex = requiredPieces.findIndex(element => element === "Tequila");
            if (vodkaIndex === 0) {
             let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
               arr.splice(firstIndex, 1);
             let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
               arr.splice(secondIndex, 1);
             let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
               arr.splice(wildSpiritIndex, 1);
            }
            if (vodkaIndex === 1) {
            let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
              arr.splice(secondIndex, 1);
            let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
              arr.splice(wildSpiritIndex, 1);
            }
            if (vodkaIndex === 2) {
            let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === requiredPieces[1]);
              arr.splice(secondIndex, 1);
            let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
              arr.splice(wildSpiritIndex, 1);
            }
          } 
          if (!fullHandNames.includes("Whiskey")) {
            let vodkaIndex = requiredPieces.findIndex(element => element === "Whiskey");
            if (vodkaIndex === 0) {
             let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
               arr.splice(firstIndex, 1);
             let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
               arr.splice(secondIndex, 1);
             let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
               arr.splice(wildSpiritIndex, 1);
            }
            if (vodkaIndex === 1) {
            let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
              arr.splice(secondIndex, 1);
            let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
              arr.splice(wildSpiritIndex, 1);
            }
            if (vodkaIndex === 2) {
            let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === requiredPieces[1]);
              arr.splice(secondIndex, 1);
            let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
              arr.splice(wildSpiritIndex, 1);
            }
          } 
          if (!fullHandNames.includes("Gin")) {
            let vodkaIndex = requiredPieces.findIndex(element => element === "Gin");
            if (vodkaIndex === 0) {
             let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
               arr.splice(firstIndex, 1);
             let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
               arr.splice(secondIndex, 1);
             let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
               arr.splice(wildSpiritIndex, 1);
            }
            if (vodkaIndex === 1) {
            let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
              arr.splice(secondIndex, 1);
            let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
              arr.splice(wildSpiritIndex, 1);
            }
            if (vodkaIndex === 2) {
            let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === requiredPieces[1]);
              arr.splice(secondIndex, 1);
            let wildSpiritIndex = arr.findIndex(element => element.name === "WILD Spirit");
              arr.splice(wildSpiritIndex, 1);
            }
          }                              
         } else if (wildIngredientCheck(fullHandNames, requiredPieces) === true) {
          if (!fullHandNames.includes("Soda")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Soda");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 2) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }                        
          } 
          if (!fullHandNames.includes("Juice")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Juice");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 2) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }                        
          } 
          if (!fullHandNames.includes("Simple")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Simple");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 2) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }                        
          } 
          if (!fullHandNames.includes("Vermouth")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Vermouth");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 2) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }                        
          } 
          if (!fullHandNames.includes("Grenadine")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Grenadine");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 2) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }                        
          } 
          if (!fullHandNames.includes("Ginger Beer")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Ginger Beer");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 2) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }                        
          } 
          if (!fullHandNames.includes("Lime")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Lime");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 2) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }                        
          } 
          if (!fullHandNames.includes("Bitters")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Bitters");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 2) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }                        
          } 
          if (!fullHandNames.includes("Schanpps")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Schnapps");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 2) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }                        
          } 
          if (!fullHandNames.includes("Campari")) {
            let sodaIndex = requiredPieces.findIndex(element => element === "Campari");
            if (sodaIndex === 0) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 1) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[2]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }
            if (sodaIndex === 2) {
              let firstIndex = arr.findIndex(element => element.name === requiredPieces[1]);
                arr.splice(firstIndex, 1);
              let secondIndex = arr.findIndex(element => element.name === requiredPieces[0]);
                arr.splice(secondIndex, 1);
              let wildIngredientIndex = arr.findIndex(element => element.name === "WILD Ingredient");
                arr.splice(wildIngredientIndex, 1);              
            }                        
          }                                                                              
         } else {
        let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
          arr.splice(firstIndex, 1);
        let secondIndex = arr.findIndex(element => element.name === requiredPieces[1]);
          arr.splice(secondIndex, 1);
        let thirdIndex = arr.findIndex(element => element.name === requiredPieces[2]);
          arr.splice(thirdIndex, 1);  
         }
        } 
        if (requiredPieces.length === 4) {
        let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
          arr.splice(firstIndex, 1);
        let secondIndex = arr.findIndex(element => element.name === requiredPieces[1]);
          arr.splice(secondIndex, 1);
        let thirdIndex = arr.findIndex(element => element.name === requiredPieces[2]);
          arr.splice(thirdIndex, 1);
        let fourthIndex = arr.findIndex(element => element.name === requiredPieces[3]);
          arr.splice(fourthIndex, 1);
        } 
        if (requiredPieces.length === 6) {
        let firstIndex = arr.findIndex(element => element.name === requiredPieces[0]);
          arr.splice(firstIndex, 1);
        let secondIndex = arr.findIndex(element => element.name === requiredPieces[1]);
          arr.splice(secondIndex, 1);
        let thirdIndex = arr.findIndex(element => element.name === requiredPieces[2]);
          arr.splice(thirdIndex, 1);
        let fourthIndex = arr.findIndex(element => element.name === requiredPieces[3]);
          arr.splice(fourthIndex, 1);
        let fifthIndex = arr.findIndex(element => element.name === requiredPieces[4]);
          arr.splice(fifthIndex, 1);
        let sixthIndex = arr.findIndex(element => element.name === requiredPieces[5]);
          arr.splice(sixthIndex, 1);
        }
        let goodBye = document.getElementById(obj.id);
        goodBye.remove();
      }}>
       <h3 className="card-header">{obj.name}</h3>
       <img className="card-img" src={obj.img} alt={obj.id}></img>
       <p className="card-description">{obj.text}</p>
       </button>
     </div>
    )
  };

  function createWeirdFinalCard(obj, arr, arr2) {
    return(
     <div className={obj.category} id={obj.id} key={obj.id}>
      <button className="card-buttons" id={obj.id} disabled={weirdFinalCardCheck(fullHandNames, obj.name) ? false : true} onClick={() => {
        updatePlayerChoice(obj);
        updatePlayerPoints(obj.value += playerPoints);
        if (obj.name === "Minimalist Vibe") {
          if (arr2.includes("White Paint") === true && arr2.includes("Wood Stools") === true) {
            let firstIndex = arr.findIndex(element => element.name === "White Paint");
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === "Wood Stools");
              arr.splice(secondIndex, 1);
          }
          if (arr2.includes("White Paint") === true && arr2.includes("Hanging Edison Lights") === true) {
            let firstIndex = arr.findIndex(element => element.name === "White Paint");
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === "Hanging Edison Lights");
              arr.splice(secondIndex, 1);
          }
          if (arr2.includes("Hanging Edison Lights") === true && arr2.includes("Wood Stools") === true) {
            let firstIndex = arr.findIndex(element => element.name === "Hanging Edison Lights");
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === "Wood Stools");
              arr.splice(secondIndex, 1);
          }
        }
        if (obj.name === "Bohemian Vibe") {
          if (arr2.includes("Pillows") === true && arr2.includes("Kaleido scope Mural") === true) {
             let firstIndex = arr.findIndex(element => element.name === "Pillows");
               arr.splice(firstIndex, 1);
             let secondIndex = arr.findIndex(element => element.name === "Kaleido scope Mural");
               arr.splice(secondIndex, 1);
          }
          if (arr2.includes("Hanging Plant") === true && arr2.includes("Kaleido scope Mural") === true) {
            let firstIndex = arr.findIndex(element => element.name === "Hanging Plant");
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === "Kaleido scope Mural");
              arr.splice(secondIndex, 1);
          }
          if (arr2.includes("Pillows") === true && arr2.includes("Hanging Plant") === true) {
            let firstIndex = arr.findIndex(element => element.name === "Pillows");
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === "Hanging Plant");
              arr.splice(secondIndex, 1);
          }
        }
        if (obj.name === "Zen Vibe") {
          if (arr2.includes("Old Meditating Scholar Art") === true && arr2.includes("Bonsai Tree") === true) {
            let firstIndex = arr.findIndex(element => element.name === "Old Meditating Scholar Art");
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === "Bonsai Tree");
              arr.splice(secondIndex, 1);
          }
          if (arr2.includes("Old Meditating Scholar Art") === true && arr2.includes("Sliding Glass Door") === true) {
            let firstIndex = arr.findIndex(element => element.name === "Old Meditating Scholar Art");
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === "Sliding Glass Door");
              arr.splice(secondIndex, 1);
          }    
          if (arr2.includes("Sliding Glass Door") === true && arr2.includes("Bonsai Tree") === true) {
            let firstIndex = arr.findIndex(element => element.name === "Sliding Glass Door");
              arr.splice(firstIndex, 1);
            let secondIndex = arr.findIndex(element => element.name === "Bonsai Tree");
              arr.splice(secondIndex, 1);
          }                
        }
        let goodBye = document.getElementById(obj.id);
        goodBye.remove();
      }}>
       <h3 className="card-header">{obj.name}</h3>
       <img className="card-img" src={obj.img} alt={obj.id}></img>
       <p className="card-description">{obj.text}</p>
       </button>
     </div>
    )
  };

  sameCardCheck(firstCard, firstCard.id, secondCard.id, arrYes, arrNo);

  return (
    <div id="cards-in-play">
      <div id="left-side">
    <div id="date-display"><h3 id="date-display-header">{dateDisplay}</h3></div>  
    <div id="difficulty-display">
      <h3 id="difficulty-heading">{difficultyDisplay}</h3>
      <p id="difficulty-explanation">This is the score that will win a customer to your bar in June</p>
      </div>
      <div id="draw-options">
      <button id="draw-new" className="buttons" onClick={() => {
        if (monthCheck(dateDisplay) !== false) {
          monthCheck(dateDisplay);
        };
        if (playerChoice.name === "Saving for Later") {
          updatePlayerChoice("");
          if (/-1/.test(dateDisplay) === true) {
            if (/FEB/.test(dateDisplay) === true) {
              updateInPlay([...february]);
            } else if (/MAR/.test(dateDisplay) === true) {
              updateInPlay([...march]);
            } else if (/APR/.test(dateDisplay) === true) {
              updateInPlay([...march]);
            } else if (/MAY/.test(dateDisplay) === true) {
              updateInPlay([...march]);
            }
          }
        };
        if (playerChoice.name === "Hoarding the Trash") {
          updatePlayerChoice("");
          if (/-1/.test(dateDisplay) === true) {
            if (/FEB/.test(dateDisplay) === true) {
              updateInPlay([...february]);
            } else if (/MAR/.test(dateDisplay) === true) {
              updateInPlay([...march]);
            } else if (/APR/.test(dateDisplay) === true) {
              updateInPlay([...march]);
            } else if (/MAY/.test(dateDisplay) === true) {
              updateInPlay([...march]);
            }
          }
        };
        console.log(playerChoice.id);
        updateFirstCard(arrayInPlay[randomNumber(arrayInPlay.length)]);
        updateSecondCard(arrayInPlay[randomNumber(arrayInPlay.length)]);
      }} disabled={firstCard !== "" ? true : false || difficultyDisplay === "" ? true : false}>Draw 2 New?</button>
    </div>
    </div>
    <div id="choose-difficulty">
      <h2 id="choose-difficulty-header">Choose your difficulty!</h2>
      <div id="difficulty-options">
      <button id="easy" className="buttons" onClick={() => {
        updateDifficulty(difficulties[0]);
        var difficultyButton = document.getElementById("choose-difficulty");
        difficultyButton.remove();
      }}>Easy</button>
      <button id="medium" className="buttons" onClick={() => {
        updateDifficulty(difficulties[1]);
        var difficultyButton = document.getElementById("choose-difficulty");
        difficultyButton.remove();
      }}>Medium</button>
      <button id="difficult" className="buttons" onClick={() => {
        updateDifficulty(difficulties[2]);
        var difficultyButton = document.getElementById("choose-difficulty");
        difficultyButton.remove();
      }}>Difficult</button>
      <button id="very-difficult" className="buttons" onClick={() => {
        updateDifficulty(difficulties[3]);
        var difficultyButton = document.getElementById("choose-difficulty");
        difficultyButton.remove();
      }}>Very Difficult</button>
      </div>
    </div>
    <div id="card-mat">
    <div id="new-cards">
      <div id="first-card"><button className="card-buttons" onClick={() => {
        updatePlayerChoice(firstCard);
        updatePlayerDiscard(secondCard);
        updateFirstCard("");
        updateSecondCard("");
        updateThirdCard("");
        updateDate(date[date.indexOf(dateDisplay) + 1]);
        if(/MAY-6/.test(dateDisplay) === true) {
         const drawNew = document.getElementById("draw-new");
         const newCards = document.getElementById("new-cards");
         const drawDiscard = document.getElementById("draw-discard");
         const firstCard = document.getElementById("first-card");
         const secondCard = document.getElementById("second-card");
         const thirdCard = document.getElementById("third-card");
         firstCard.remove();
         secondCard.remove();
         thirdCard.remove();
         drawNew.remove(); 
         newCards.remove();
         drawDiscard.remove();
        }         
      }} disabled={(firstCard.name === "Digging thru the Trash" && discardArr.length < 6) || (firstCard.name === "Hoarding the Trash" && discardArr.length < 5 ? true : false) || firstCard === "" ? true : false || difficultyDisplay === "" ? true : false}>{createCard(firstCard)}</button></div>
      <div id="second-card"><button className="card-buttons" onClick={() => {
        updatePlayerChoice(secondCard);
        updatePlayerDiscard(firstCard);
        updateFirstCard("");
        updateSecondCard("");
        updateThirdCard("");
        updateDate(date[date.indexOf(dateDisplay) + 1]);
        if(/MAY-6/.test(dateDisplay) === true) {
          const drawNew = document.getElementById("draw-new");
          const newCards = document.getElementById("new-cards");
          const drawDiscard = document.getElementById("draw-discard");
          const firstCard = document.getElementById("first-card");
          const secondCard = document.getElementById("second-card");
          const thirdCard = document.getElementById("third-card");
          firstCard.remove();
          secondCard.remove();
          thirdCard.remove();
          drawNew.remove(); 
          newCards.remove();
          drawDiscard.remove();
         }  
        }} disabled={(secondCard.name === "Digging thru the Trash" && discardArr.length < 6) || (secondCard.name === "Hoarding the Trash" && discardArr.length < 5 ? true : false) || secondCard === "" ? true : false || difficultyDisplay === "" ? true : false}>{createCard(secondCard)}</button></div>
      <div id="third-card"><button className="card-buttons" onClick={() => {
        updatePlayerChoice(thirdCard);
        updatePlayerDiscard(firstCard);
        updateFirstCard("");
        updateSecondCard("");
        updateThirdCard("");
        updateDate(date[date.indexOf(dateDisplay) + 1]);
        if(/MAY-6/.test(dateDisplay) === true) {
          const drawNew = document.getElementById("draw-new");
          const newCards = document.getElementById("new-cards");
          const drawDiscard = document.getElementById("draw-discard");
          const firstCard = document.getElementById("first-card");
          const secondCard = document.getElementById("second-card");
          const thirdCard = document.getElementById("third-card");
          firstCard.remove();
          secondCard.remove();
          thirdCard.remove();
          drawNew.remove(); 
          newCards.remove();
          drawDiscard.remove();
         }  
      }} disabled={(thirdCard.name === "Digging thru the Trash" && discardArr.length < 6) || (thirdCard.name === "Hoarding the Trash" && discardArr.length < 5 ? true : false) || thirdCard === "" ? true : false || difficultyDisplay === "" ? true : false}>{createCard(thirdCard)}</button></div>
    <div id="discard">
      <div id="discard-header-div"><h3 id="discard-header">DISCARD</h3></div>
      <button id="draw-discard" className="card-buttons" onClick={() => {
      if (monthCheck(dateDisplay) !== false) {
       monthCheck(dateDisplay);
      };
      if (playerChoice.name === "Saving for Later") {
        updatePlayerChoice("");
        if (/-1/.test(dateDisplay) === true) {
          if (/FEB/.test(dateDisplay) === true) {
            updateInPlay([...february]);
          } else if (/MAR/.test(dateDisplay) === true) {
            updateInPlay([...march]);
          } else if (/APR/.test(dateDisplay) === true) {
            updateInPlay([...march]);
          } else if (/MAY/.test(dateDisplay) === true) {
            updateInPlay([...march]);
          }
        }
      };
      if (playerChoice.name === "Hoarding the Trash") {
        updatePlayerChoice("");
        if (/-1/.test(dateDisplay) === true) {
          if (/FEB/.test(dateDisplay) === true) {
            updateInPlay([...february]);
          } else if (/MAR/.test(dateDisplay) === true) {
            updateInPlay([...march]);
          } else if (/APR/.test(dateDisplay) === true) {
            updateInPlay([...march]);
          } else if (/MAY/.test(dateDisplay) === true) {
            updateInPlay([...march]);
          }
        }
      };
      updatePlayerChoice(discardArr[0]);
      discardArr.splice(0, 1);
      updateDate(date[date.indexOf(dateDisplay) + 1]);
      console.log(playerChoice.id);
      if(/MAY-6/.test(dateDisplay) === true) {
        const drawNew = document.getElementById("draw-new");
        const newCards = document.getElementById("new-cards");
        const drawDiscard = document.getElementById("draw-discard");
        const firstCard = document.getElementById("first-card");
        const secondCard = document.getElementById("second-card");
        const thirdCard = document.getElementById("third-card");
        firstCard.remove();
        secondCard.remove();
        thirdCard.remove();
        drawNew.remove(); 
        newCards.remove();
        drawDiscard.remove();
      }
    }} disabled={firstCard !== "" || discardArr.length <= 2 ? true : false || (discardArr[0].name === "Digging thru the Trash" && discardArr.length < 7) || (discardArr[0].name === "Hoarding the Trash" && discardArr.length < 6 ? true : false) || (discardArr[0].name === "Hoarding the Trash" && /MAY-6/.test(dateDisplay) === true ? true : false) || (discardArr[0].name === "Saving for Later" && /MAY-6/.test(dateDisplay) === true ? true : false) || difficultyDisplay === "" ? true : false || (discardArr[0].name === "Digging Thru the Trash" && /MAY-6/.test(dateDisplay) === true ? true : false)}> 
    {isItHi(discardArr)}</button>
    </div>
    </div>
    {isJune()}
    </div>
    <div id="card-handle">
    <HandleCards updatedHand={newCardArr}/>
    </div>
    <div id="decision-day">
      <h2 id="customer-decisions">Customer Decisions</h2>
      <div id="customer-yes">
        <h3 id="yes-header">YES!</h3>
        <div id="customers-for">
        {arrYes.map(element => createCard(element))}
        </div>
        </div>
      <div id="customer-no">
        <h3 id="no-header">NO</h3>
        <div id="customers-against">
        {arrNo.map(element => createCard(element))
        }</div>
        </div>
    </div>
   </div>
  );
};

function HandleCards(props) {

  const playerHand = props.updatedHand;

  const playerSpirits = [];

  const playerIngredients = [];

  const playerMusicians = [];

  const playerDecor = [];

  const playerFinal = [];
  
  function createCard(obj) {
    return(
     <div className={obj.category} id={obj.id} key={obj.id}>
       <h3 className="card-header">{obj.name}</h3>
       <img className="card-img" src={obj.img} alt={obj.id}></img>
       <p className="card-description">{obj.text}</p>
     </div>
    )
  };
  
  function filterCards(arr) {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i].category === "spirit") {
      playerSpirits.push(arr[i]);
      playerSpirits.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } if (b.name < a.name) {
          return 1;
        }
        return 0;
      })
    }
    if (arr[i].category === "ingredient") {
      playerIngredients.push(arr[i]);
      playerIngredients.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } if (b.name < a.name) {
          return 1;
        }
        return 0;
      })
    }
    if (arr[i].category === "musician") {
      playerMusicians.push(arr[i]);
      playerMusicians.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } if (b.name < a.name) {
          return 1;
        }
        return 0;
      })
    }
    if (arr[i].category === "decor") {
      playerDecor.push(arr[i]);
      playerDecor.sort((a, b) => {
        if (a.text < b.text) {
          return -1;
        } if (b.text < a.text) {
          return 1;
        }
        return 0;
      })
    }
    if (arr[i].category === "completed") {
      playerFinal.push(arr[i]);
      playerFinal.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } if (b.name < a.name) {
          return 1;
        }
        return 0;
      })
    }
  }
  };

  filterCards(playerHand);

  return(
    <div id="card-handling">
     <div id="player-hand">
      <div id="player-spirits">
        <h3 id="spirit-header">Spirits</h3>
        <div id="spirit-hand">{playerSpirits.map(element => createCard(element))}</div>
        </div>
      <div id="player-ingredients">
        <h3 id="ingredient-header">Ingredients</h3>
        <div id="ingredient-hand">{playerIngredients.map(element => createCard(element))}</div>
        </div>
      <div id="player-musicians">
        <h3 id="musician-header">Musicians</h3>
        <div id="musician-hand">{playerMusicians.map(element => createCard(element))}</div>
      </div>
      <div id="player-decor">
        <h3 id="decor-header">Decor</h3>
        <div id="decor-hand">{playerDecor.map(element => createCard(element))}</div>
        </div>
      <div id="player-final">
        <h3 id="menu-card-header">Menu Items</h3>
        <div id="menu-card-hand">{playerFinal.map(element => createCard(element))}</div>
        </div>
     </div>
    </div>
  )
};

function BasicRules() {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div id="basic-rules">
      <button id="basic-rules-button" className="buttons" onClick={() => setIsOpen(true)}>Basic Rules</button>
      <ReactModal
        isOpen={isOpen}
        contentLabel="modal-2"
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
           backgroundColor: "#595959",
           zIndex: "5"
          },
          content: {
           backgroundColor: "#595959",
           zIndex:"5"
          }
        }}
      >
      <div id="basic-rules-styling">
      <h2 id="basic-rules-header">Basic Rules of Cocktail Clash</h2>
      <h3 id="basic-rules-sub-header">Objective: Build a bar that will attract picky customers using a variety of drinks, decorative elements, and musical ambiance.</h3>
      <ul id="basic-rules-list">
        <li className="basic-rules-list-item">Game takes place over the course of 6 months.</li>
        <li className="basic-rules-list-item">First five months are composed of 6 rounds. Final month is opening day (final scoring and customer decisions).</li>
        <li className="basic-rules-list-item">Each round consists of either drawing two new cards and selecting one OR selecting the top card from the discard.</li>
        <li className="basic-rules-list-item">Players may possess as many of each type of card as they would like.</li>
        <li className="basic-rules-list-item">Each card itself may only be used once in final scoring (though the same type of card can be used as much as desired).</li>
        <li className="basic-rules-list-item">Each Menu Item card may only be used only once by each player in June (check out possible Menu Items with the button below!).</li>
        <li className="basic-rules-list-item">Total score of Menu Item cards in June composes the player's BASE SCORE.</li>
        <li className="basic-rules-list-item">Customers will go to your bar if after combining the bar's base score AND customer's preference score the total exceeds the difficulty threshold.</li>
        <li className="basic-rules-list-item">Difficulty will be selected at the beginning of the game. This will determine what score threshold must be met to attract Customers to your bar.</li>
        <li className="basic-rules-list-item">If you attract at least 6 of the 11 listed customers, you win!</li>
        <li className="basic-rules-list-item">Have fun and good luck !</li>
      </ul>
      <footer id="basic-rules-footer">Click outside the border to return to game</footer>
      </div>
      </ReactModal>
    </div>
  )
}

function MenuPopUp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="menu-pop-up">
      <button id="menu-button" className="buttons" onClick={() => setIsOpen(true)}>Potential Menu Items</button>
      <ReactModal
        isOpen={isOpen}
        contentLabel="modal-1"
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
           backgroundColor: "#595959",
           zIndex: "5"
          },
          content: {
           backgroundColor: "#595959",
           zIndex:"5"
          }
        }}
      >
      <div id="menu-styling">
      <h2 id="menu-header">Potential Items for Your Bar Opening in June [Required Items] (Points)</h2>
      <h3 id="cocktail-header" className="menu-sub-header">Cocktails</h3>
      <ul id="cocktail-list" className="menu-list">
        <li className="cocktail-list-item">Vodka Martini [Vodka, Vermouth] (10)</li>
        <li className="cocktail-list-item">Gin Martini [Gin, Vermouth] (10)</li>
        <li className="cocktail-list-item">Bourbon Highball [Whiskey, Soda] (11)</li>
        <li className="cocktail-list-item">Rum & Coke [Rum, Soda] (11)</li>
        <li className="cocktail-list-item">Paloma [Tequila, Juice] (12)</li>
        <li className="cocktail-list-item">Daiquiri [Rum, Lime, Simple] (17)</li>
        <li className="cocktail-list-item">Gimlet [Gin, Lime, Simple] (17)</li>
        <li className="cocktail-list-item">Manhattan [Whiskey, Bitters, Vermouth] (18)</li>
        <li className="cocktail-list-item">Moscow Mule [Vodka, Lime, Ginger Beer] (19)</li>
        <li className="cocktail-list-item">Dark & Stormy [Rum, Lime, Ginger Beer] (19)</li>
        <li className="cocktail-list-item">Old Fashioned [Whiskey, Bitters, Simple] (20)</li>
        <li className="cocktail-list-item">Negroni [Gin, Vermouth, Capari] (21)</li>
        <li className="cocktail-list-item">Teqroni [Tequila, Vermouth, Capari] (21)</li>
        <li className="cocktail-list-item">Hairy Navel [Vodka, Juice, Schnapps] (22)</li>
        <li className="cocktail-list-item">Tequila Sunrise [Tequila, Juice, Grenadine] (22)</li>
      </ul>
      <h3 id="musical-header" className="menu-sub-header">Musical Combos</h3>
      <ul id="musical-list" className="menu-list">
        <li className="menu-list-item">Trio [Pianist, Drummer, Bassist] (20)</li>
        <li className="menu-list-item">Trumpet-Led Quartet [Trumpeter, Pianist, Drummer, Bassist] (26)</li>
        <li className="menu-list-item">Saxophone-Led Quartet [Saxophonist, Pianist, Drummer, Bassist] (26)</li>
        <li className="menu-list-item">Vocal-Led Quartet [Vocalist, Pianist, Drummer, Bassist] (26)</li>
        <li className="menu-list-item">Full Band [Trumpeter, Saxophonist, Vocalist, Pianist, Drummer, Bassist] (40)</li>
      </ul>
      <h3 id="decorative-header" className="menu-sub-header">Decor Combos</h3>
      <ul id="decorative-list" className="menu-list">
        <li className="menu-list-item">Minimalist Vibe [2 Minimalist Decor Cards] (15)</li>
        <li className="menu-list-item">Bohemian Vibe [2 Bohemian Decor Cards] (15)</li>
        <li className="menu-list-item">Zen Vibe [2 Zen Decor Cards] (18)</li>
        <li className="menu-list-item">Minimalist Master [3 Minimalist Decor Cards] (22)</li>
        <li className="menu-list-item">Bohemian Master [3 Bohemian Decor Cards] (22)</li>
        <li className="menu-list-item">Zen Master [3 Zen Decor Cards] (30)</li>
      </ul>
      <footer id="menu-footer">Click outside the border to return to game</footer>
      </div>
      </ReactModal>
    </div>
  )
};

function App() {

  const owner = [
    {
      category: "owner",
      name: "Irina",
      text: "Rum, Gin, & Juice",
      id: "irina",
      img: "https://drive.google.com/uc?export=view&id=1sInOsa0vsFmzZT5oYbT9TDv9q49F4_Sa",
      ability: "",
      value: 0,
     },
     {
      category: "owner",
      name: "Ilya",
      text: "Vodka, Tequila, & Soda",
      id: "ilya",
      img: "https://drive.google.com/uc?export=view&id=1sInOsa0vsFmzZT5oYbT9TDv9q49F4_Sa",
      ability: "",
      value: 1,
     },
     {
      category: "owner",
      name: "Osweald",
      text: "Whiskey, Rum, & Vermouth",
      id: "osweald",
      img: "https://drive.google.com/uc?export=view&id=1fiCikn5R0v-eyLpaYGriuGckGeUqPGO1",
      ability: "",
      value: 2,
     },
     {
      category: "owner",
      name: "Lionel",
      text: "Gin, Vodka, & Soda",
      id: "lionel",
      img: "https://drive.google.com/uc?export=view&id=1fiCikn5R0v-eyLpaYGriuGckGeUqPGO1",
      ability: "",
      value: 3,
     },
     {
      category: "owner",
      name: "José",
      text: "Tequila, Whiskey, & Vermouth",
      id: "jose",
      img: "https://drive.google.com/uc?export=view&id=1fiCikn5R0v-eyLpaYGriuGckGeUqPGO1",
      ability: "",
      value: 4,
     },
     {
      category: "owner",
      name: "Kilian",
      text: "Rum, Juice, & Vermouth",
      id: "kilian",
      img: "https://drive.google.com/uc?export=view&id=1fiCikn5R0v-eyLpaYGriuGckGeUqPGO1",
      ability: "",
      value: 5,
     },
     {
      category: "owner",
      name: "Rian",
      text: "Gin, Soda, & Juice",
      id: "rian",
      img: "https://drive.google.com/uc?export=view&id=1sInOsa0vsFmzZT5oYbT9TDv9q49F4_Sa",
      ability: "",
      value: 6,
     },
     {
      category: "owner",
      name: "Shivani",
      text: "Vodka, Soda, & Juice",
      id: "shivani",
      img: "https://drive.google.com/uc?export=view&id=1sInOsa0vsFmzZT5oYbT9TDv9q49F4_Sa",
      ability: "",
      value: 7,
     },
     {
      category: "owner",
      name: "Matilde",
      text: "Tequila, Soda, & Vermouth",
      id: "matilde",
      img: "https://drive.google.com/uc?export=view&id=1sInOsa0vsFmzZT5oYbT9TDv9q49F4_Sa",
      ability: "",
      value: 8,
     },
     {
      category: "owner",
      name: "Tao",
      text: "Whiskey, Juice, & Vermouth",
      id: "tao",
      img: "https://drive.google.com/uc?export=view&id=1fiCikn5R0v-eyLpaYGriuGckGeUqPGO1",
      ability: "",
      value: 9,
     }
  ];

  const ownerCards = [
    {
      category: "spirit",
      name: "Rum",
      text: "",
      id: "irina-rum",
      ownerName: "irina",
      img: "https://drive.google.com/uc?export=view&id=1Er-Q6kFh84uCkP5KvMhh0iYnbVd-OIL1",
      ability: "",
     },
     {
      category: "spirit",
      name: "Gin",
      text: "",
      id: "irina-gin",
      ownerName: "irina",
      img: "https://drive.google.com/uc?export=view&id=14VvM6xvOawikf1nC-5mklxCqngnCAjc6",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Juice",
      text: "",
      id: "irina-juice",
      ownerName: "irina",
      img: "https://drive.google.com/uc?export=view&id=1n9POf9dNoM31ftHTIN0lVcpGAe3BOpBA",
      ability: "",
     },
     {
      category: "spirit",
      name: "Vodka",
      text: "",
      id: "ilya-vodka",
      ownerName: "ilya",
      img: "https://drive.google.com/uc?export=view&id=1I1h1oPZGwk0ylWmN_NAp0TLww0_YfeME",
      ability: "",
     },
     {
      category: "spirit",
      name: "Tequila",
      text: "",
      id: "ilya-tequila",
      ownerName: "ilya",
      img: "https://drive.google.com/uc?export=view&id=14VUMUE_LpyFzjs-H0wKfUIqnqL7axNJ9",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Soda",
      text: "",
      id: "ilya-soda",
      ownerName: "ilya",
      img: "https://drive.google.com/uc?export=view&id=17GpMOEYvL5_ZNLIkrUTqWmzGl2YcShy2",
      ability: "",
     },
     {
      category: "spirit",
      name: "Whiskey",
      text: "",
      id: "osweald-whiskey",
      ownerName: "osweald",
      img: "https://drive.google.com/uc?export=view&id=19sh9gzsz9jJ1omqvHEkH17hzedq7y6kc",
      ability: "",
     },
     {
      category: "spirit",
      name: "Rum",
      text: "",
      id: "osweald-rum",
      ownerName: "osweald",
      img: "https://drive.google.com/uc?export=view&id=1Er-Q6kFh84uCkP5KvMhh0iYnbVd-OIL1",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Vermouth",
      text: "",
      id: "osweald-vermouth",
      ownerName: "osweald",
      img: "https://drive.google.com/uc?export=view&id=1HqI8X7SEQ1r4QbtHFaDdE6XYqsj1y84z",
      ability: "",
     },
     {
      category: "spirit",
      name: "Gin",
      text: "",
      id: "lionel-gin",
      ownerName: "lionel",
      img: "https://drive.google.com/uc?export=view&id=14VvM6xvOawikf1nC-5mklxCqngnCAjc6",
      ability: "",
     },
     {
      category: "spirit",
      name: "Vodka",
      text: "",
      id: "lionel-vodka",
      ownerName: "lionel",
      img: "https://drive.google.com/uc?export=view&id=1I1h1oPZGwk0ylWmN_NAp0TLww0_YfeME",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Soda",
      text: "",
      id: "lionel-soda",
      ownerName: "lionel",
      img: "https://drive.google.com/uc?export=view&id=17GpMOEYvL5_ZNLIkrUTqWmzGl2YcShy2",
      ability: "",
     },
     {
      category: "spirit",
      name: "Tequila",
      text: "",
      id: "jose-tequila",
      ownerName: "jose",
      img: "https://drive.google.com/uc?export=view&id=14VUMUE_LpyFzjs-H0wKfUIqnqL7axNJ9",
      ability: "",
     },
     {
      category: "spirit",
      name: "Whiskey",
      text: "",
      id: "jose-whiskey",
      ownerName: "jose",
      img: "https://drive.google.com/uc?export=view&id=19sh9gzsz9jJ1omqvHEkH17hzedq7y6kc",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Vermouth",
      text: "",
      id: "jose-vermouth",
      ownerName: "jose",
      img: "https://drive.google.com/uc?export=view&id=1HqI8X7SEQ1r4QbtHFaDdE6XYqsj1y84z",
      ability: "",
     },
     {
      category: "spirit",
      name: "Rum",
      text: "",
      id: "kilian-rum",
      ownerName: "kilian",
      img: "https://drive.google.com/uc?export=view&id=1Er-Q6kFh84uCkP5KvMhh0iYnbVd-OIL1",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Juice",
      text: "",
      id: "kilian-juice",
      ownerName: "kilian",
      img: "https://drive.google.com/uc?export=view&id=1n9POf9dNoM31ftHTIN0lVcpGAe3BOpBA",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Vermouth",
      text: "",
      id: "kilian-vermouth",
      ownerName: "kilian",
      img: "https://drive.google.com/uc?export=view&id=1HqI8X7SEQ1r4QbtHFaDdE6XYqsj1y84z",
      ability: "",
     },
     {
      category: "spirit",
      name: "Gin",
      text: "",
      id: "rian-gin",
      ownerName: "rian",
      img: "https://drive.google.com/uc?export=view&id=14VvM6xvOawikf1nC-5mklxCqngnCAjc6",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Soda",
      text: "",
      id: "rian-soda",
      ownerName: "rian",
      img: "https://drive.google.com/uc?export=view&id=17GpMOEYvL5_ZNLIkrUTqWmzGl2YcShy2",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Juice",
      text: "",
      id: "rian-juice",
      ownerName: "rian",
      img: "https://drive.google.com/uc?export=view&id=1n9POf9dNoM31ftHTIN0lVcpGAe3BOpBA",
      ability: "",
     },
     {
      category: "spirit",
      name: "Vodka",
      text: "",
      id: "shivani-vodka",
      ownerName: "shivani",
      img: "https://drive.google.com/uc?export=view&id=1I1h1oPZGwk0ylWmN_NAp0TLww0_YfeME",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Juice",
      text: "",
      id: "shivani-juice",
      ownerName: "shivani",
      img: "https://drive.google.com/uc?export=view&id=1n9POf9dNoM31ftHTIN0lVcpGAe3BOpBA",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Soda",
      text: "",
      id: "shivani-soda",
      ownerName: "shivani",
      img: "https://drive.google.com/uc?export=view&id=17GpMOEYvL5_ZNLIkrUTqWmzGl2YcShy2",
      ability: "",
     },
     {
      category: "spirit",
      name: "Tequila",
      text: "",
      id: "matilde-tequila",
      ownerName: "matilde",
      img: "https://drive.google.com/uc?export=view&id=14VUMUE_LpyFzjs-H0wKfUIqnqL7axNJ9",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Soda",
      text: "",
      id: "matilde-soda",
      ownerName: "matilde",
      img: "https://drive.google.com/uc?export=view&id=17GpMOEYvL5_ZNLIkrUTqWmzGl2YcShy2",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Vermouth",
      text: "",
      id: "matilde-vermouth",
      ownerName: "matilde",
      img: "https://drive.google.com/uc?export=view&id=1HqI8X7SEQ1r4QbtHFaDdE6XYqsj1y84z",
      ability: "",
     },
     {
      category: "spirit",
      name: "Whiskey",
      text: "",
      id: "tao-whiskey",
      ownerName: "tao",
      img: "https://drive.google.com/uc?export=view&id=19sh9gzsz9jJ1omqvHEkH17hzedq7y6kc",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Juice",
      text: "",
      id: "tao-juice",
      ownerName: "tao",
      img: "https://drive.google.com/uc?export=view&id=1n9POf9dNoM31ftHTIN0lVcpGAe3BOpBA",
      ability: "",
     },
     {
      category: "ingredient",
      name: "Vermouth",
      text: "",
      id: "tao-vermouth",
      ownerName: "tao",
      img: "https://drive.google.com/uc?export=view&id=1HqI8X7SEQ1r4QbtHFaDdE6XYqsj1y84z",
      ability: ""
     }
  ];

  function randomNumber(max) {
    return Math.floor(Math.random() * max);
  };

  function createCard(obj) {
    return(
     <div className={obj.category} id={obj.id} key={obj.id}>
       <h3 className="card-header">{obj.name}</h3>
       <img className="card-img" src={obj.img} alt={obj.id}></img>
       <p className="card-description">{obj.text}</p>
     </div>
    )
  };

  const playerOwner = owner[randomNumber(10)];

  const ownerDisplay = createCard(playerOwner);

  const ownerHand = [];

  function retrievePlayerOwnerCards(arr, x, arr2) {
    for (let i = 0; i < arr.length; i++) {
      if (x.id === arr[i].ownerName) {
        arr2.push(arr[i])
      }
    }
  };

  const customers = [
    {
      category: "customer",
      name: "Alpha",
      text: "+20 for each vodka-based cocktail",
      id: "alpha",
      img: "https://drive.google.com/uc?export=view&id=1__xSCKT_IpBpk7o_sot08GkDhWNozWuJ",
      ability: "",
      value: 0,
      points: 20,
      requirements: "Vodka"
     },
     {
      category: "customer",
      name: "Beta",
      text: "+20 for each gin-based cocktail",
      id: "beta",
      img: "https://drive.google.com/uc?export=view&id=1E79R-H-Pa244u55Ca5uk4e4MbVQc8BvB",
      ability: "",
      value: 1,
      points: 20,
      requirements: "Gin"
     },
     {
      category: "customer",
      name: "Gamma",
      text: "+20 for each tequila-based cocktail",
      id: "gamma",
      img: "https://drive.google.com/uc?export=view&id=1__xSCKT_IpBpk7o_sot08GkDhWNozWuJ",
      ability: "",
      value: 2,
      points: 20,
      requirements: "Tequila"
     },
     {
      category: "customer",
      name: "Delta",
      text: "+20 for each rum-based cocktail",
      id: "delta",
      img: "https://drive.google.com/uc?export=view&id=1E79R-H-Pa244u55Ca5uk4e4MbVQc8BvB",
      ability: "",
      value: 3,
      points: 20,
      requirements: "Rum"
     },
     {
      category: "customer",
      name: "Epsilon",
      text: "+20 for each whiskey-based cocktail",
      id: "epsilon",
      img: "https://drive.google.com/uc?export=view&id=1__xSCKT_IpBpk7o_sot08GkDhWNozWuJ",
      ability: "",
      value: 4,
      points: 20,
      requirements: "Whiskey"
     },
     {
      category: "customer",
      name: "Eta",
      text: "+10 for each cocktail w/juice",
      id: "eta",
      img: "https://drive.google.com/uc?export=view&id=1E79R-H-Pa244u55Ca5uk4e4MbVQc8BvB",
      ability: "",
      value: 6,
      points: 10,
      requirements: "Juice"
     },
     {
      category: "customer",
      name: "Theta",
      text: "+10 for each cocktail w/soda",
      id: "theta",
      img: "https://drive.google.com/uc?export=view&id=1__xSCKT_IpBpk7o_sot08GkDhWNozWuJ",
      ability: "",
      value: 7,
      points: 10,
      requirements: "Soda"
     },
     {
      category: "customer",
      name: "Iota",
      text: "+30 for vodka martini",
      id: "iota",
      img: "https://drive.google.com/uc?export=view&id=1E79R-H-Pa244u55Ca5uk4e4MbVQc8BvB",
      ability: "",
      value: 8,
      points: 30,
      requirements: "Vodka Martini"
     },
     {
      category: "customer",
      name: "Kappa",
      text: "+30 for bourbon highball",
      id: "kappa",
      img: "https://drive.google.com/uc?export=view&id=1__xSCKT_IpBpk7o_sot08GkDhWNozWuJ",
      ability: "",
      value: 9,
      points: 30,
      requirements: "Bourbon Highball"
     },
     {
      category: "customer",
      name: "Lambda",
      text: "+30 for paloma",
      id: "lambda",
      img: "https://drive.google.com/uc?export=view&id=1E79R-H-Pa244u55Ca5uk4e4MbVQc8BvB",
      ability: "",
      value: 10,
      points: 30,
      requirements: "Paloma"
     },
     {
      category: "customer",
      name: "Mu",
      text: "+30 for gin martini",
      id: "mu",
      img: "https://drive.google.com/uc?export=view&id=1__xSCKT_IpBpk7o_sot08GkDhWNozWuJ",
      ability: "",
      value: 45,
      points: 30,
      requirements: "Gin Martini"
     },
     {
      category: "customer",
      name: "Nu",
      text: "+30 for rum & coke",
      id: "nu",
      img: "https://drive.google.com/uc?export=view&id=1E79R-H-Pa244u55Ca5uk4e4MbVQc8BvB",
      ability: "",
      value: 46,
      points: 30,
      requirements: "Rum & Coke"
     },
     {
      category: "customer",
      name: "Omicron",
      text: "-10 for each cocktail w/juice",
      id: "omicron",
      img: "https://drive.google.com/uc?export=view&id=1zHRc352vx_P-rgpOC3Wq-GkEznnB6pc_",
      ability: "",
      value: 12,
      points: -10,
      requirements: "Juice"
     },
     {
      category: "customer",
      name: "Pi",
      text: "-10 for each cocktail w/soda",
      id: "pi",
      img: "https://drive.google.com/uc?export=view&id=17kpY41DOSwtC9amhDpebIn_0UmUdAX_Z",
      ability: "",
      value: 13,
      points: -10,
      requirements: "Soda"
     },
     {
      category: "customer",
      name: "Rho",
      text: "-20 for each vodka-based cocktail",
      id: "rho",
      img: "https://drive.google.com/uc?export=view&id=1zHRc352vx_P-rgpOC3Wq-GkEznnB6pc_",
      ability: "",
      value: 14,
      points: -20,
      requirements: "Vodka"
     },
     {
      category: "customer",
      name: "Sigma",
      text: "-20 for each gin-based cocktail",
      id: "sigma",
      img: "https://drive.google.com/uc?export=view&id=17kpY41DOSwtC9amhDpebIn_0UmUdAX_Z",
      ability: "",
      value: 15,
      points: -20,
      requirements: "Gin"
     },
     {
      category: "customer",
      name: "Tau",
      text: "-20 for each tequila-based cocktail",
      id: "tau",
      img: "https://drive.google.com/uc?export=view&id=1zHRc352vx_P-rgpOC3Wq-GkEznnB6pc_",
      ability: "",
      value: 16,
      points: -20,
      requirements: "Tequila"
     },
     {
      category: "customer",
      name: "Upsilon",
      text: "-20 for each rum-based cocktail",
      id: "upsilon",
      img: "https://drive.google.com/uc?export=view&id=17kpY41DOSwtC9amhDpebIn_0UmUdAX_Z",
      ability: "",
      value: 17,
      points: -20,
      requirements: "Rum"
     },
     {
      category: "customer",
      name: "Phi",
      text: "-20 for each whiskey-based cocktail",
      id: "phi",
      img: "https://drive.google.com/uc?export=view&id=1zHRc352vx_P-rgpOC3Wq-GkEznnB6pc_",
      ability: "",
      value: 18,
      points: -20,
      requirements: "Whiskey"
     },
     {
      category: "customer",
      name: "Chi",
      text: "-30 for trio",
      id: "chi",
      img: "https://drive.google.com/uc?export=view&id=17kpY41DOSwtC9amhDpebIn_0UmUdAX_Z",
      ability: "",
      value: 19,
      points: -30,
      requirements: "Trio"
     },
     {
      category: "customer",
      name: "Psi",
      text: "-60 for full band",
      id: "psi",
      img: "https://drive.google.com/uc?export=view&id=1zHRc352vx_P-rgpOC3Wq-GkEznnB6pc_",
      ability: "",
      value: 20,
      points: -60,
      requirements: "Full Band"
     },
     {
      category: "customer",
      name: "Omega",
      text: "+30 for trio",
      id: "omega",
      img: "https://drive.google.com/uc?export=view&id=1__xSCKT_IpBpk7o_sot08GkDhWNozWuJ",
      ability: "",
      value: 21,
      points: 30,
      requirements: "Trio"
     },
     {
      category: "customer",
      name: "Alef",
      text: "+50 for trumpet-led quartet",
      id: "alef",
      img: "https://drive.google.com/uc?export=view&id=1E79R-H-Pa244u55Ca5uk4e4MbVQc8BvB",
      ability: "",
      value: 22,
      points: 50,
      requirements: "Trumpet Led Quartet"
     },
     {
      category: "customer",
      name: "Beit",
      text: "+50 for saxophone-led quartet",
      id: "beit",
      img: "https://drive.google.com/uc?export=view&id=1__xSCKT_IpBpk7o_sot08GkDhWNozWuJ",
      ability: "",
      value: 23,
      points: 50,
      requirements: "Saxophone Led Quartet"
     },
     {
      category: "customer",
      name: "Gimel",
      text: "+50 for vocal-led quartet",
      id: "gimel",
      img: "https://drive.google.com/uc?export=view&id=1E79R-H-Pa244u55Ca5uk4e4MbVQc8BvB",
      ability: "",
      value: 24,
      points: 50,
      requirements: "Vocal Led Quartet"
     },
     {
      category: "customer",
      name: "Dalet",
      text: "+60 for full band",
      id: "dalet",
      img: "https://drive.google.com/uc?export=view&id=1__xSCKT_IpBpk7o_sot08GkDhWNozWuJ",
      ability: "",
      value: 25,
      points: 60,
      requirements: "Full Band"
     },
     {
      category: "customer",
      name: "Hei",
      text: "+30 for minimalist vibe",
      id: "hei",
      img: "https://drive.google.com/uc?export=view&id=1E79R-H-Pa244u55Ca5uk4e4MbVQc8BvB",
      ability: "",
      value: 26,
      points: 30,
      requirements: "Minimalist"
     },
     {
      category: "customer",
      name: "Vav",
      text: "-30 for minimalist vibe",
      id: "vav",
      img: "https://drive.google.com/uc?export=view&id=17kpY41DOSwtC9amhDpebIn_0UmUdAX_Z",
      ability: "",
      value: 27,
      points: -30,
      requirements: "Minimalist"
     },
     {
      category: "customer",
      name: "Zayin",
      text: "+30 for bohemian vibe",
      id: "zayin",
      img: "https://drive.google.com/uc?export=view&id=1__xSCKT_IpBpk7o_sot08GkDhWNozWuJ",
      ability: "",
      value: 28,
      points: 30,
      requirements: "Bohemian"
     },
     {
      category: "customer",
      name: "Cheit",
      text: "-30 for bohemian vibe",
      id: "cheit",
      img: "https://drive.google.com/uc?export=view&id=1zHRc352vx_P-rgpOC3Wq-GkEznnB6pc_",
      ability: "",
      value: 29,
      points: -30,
      requirements: "Bohemian"
     },
     {
      category: "customer",
      name: "Teit",
      text: "+30 for zen vibe",
      id: "teit",
      img: "https://drive.google.com/uc?export=view&id=1E79R-H-Pa244u55Ca5uk4e4MbVQc8BvB",
      ability: "",
      value: 30,
      points: 30,
      requirements: "Zen"
     },
     {
      category: "customer",
      name: "Yod",
      text: "-30 for zen vibe",
      id: "yod",
      img: "https://drive.google.com/uc?export=view&id=17kpY41DOSwtC9amhDpebIn_0UmUdAX_Z",
      ability: "",
      value: 31,
      points: -30,
      requirements: "Zen"
     },
     {
      category: "customer",
      name: "Kaf",
      text: "+50 for BOTH negroni & daiquiri",
      id: "kaf",
      img: "https://drive.google.com/uc?export=view&id=1__xSCKT_IpBpk7o_sot08GkDhWNozWuJ",
      ability: "",
      value: 32,
      points: 50,
      requirements: "Negroni,Daiquiri"
     },
     {
      category: "customer",
      name: "Lamed",
      text: "+50 for BOTH dark & stormy & gimlet",
      id: "lamed",
      img: "https://drive.google.com/uc?export=view&id=1E79R-H-Pa244u55Ca5uk4e4MbVQc8BvB",
      ability: "",
      value: 33,
      points: 50,
      requirements: "Dark & Stormy,Gimlet"
     },
     {
      category: "customer",
      name: "Mem",
      text: "+50 for BOTH teqroni & old fashioned",
      id: "mem",
      img: "https://drive.google.com/uc?export=view&id=1__xSCKT_IpBpk7o_sot08GkDhWNozWuJ",
      ability: "",
      value: 34,
      points: 50,
      requirements: "Teqroni,Old Fashioned"
     },
     {
      category: "customer",
      name: "Nun",
      text: "+50 for BOTH tequila sunrise & manhattan",
      id: "nun",
      img: "https://drive.google.com/uc?export=view&id=1E79R-H-Pa244u55Ca5uk4e4MbVQc8BvB",
      ability: "",
      value: 35,
      points: 50,
      requirements: "Tequila Sunrise,Manhattan"
     },
     {
      category: "customer",
      name: "Samekh",
      text: "+50 for BOTH moscow mule & hairy navel",
      id: "samekh",
      img: "https://drive.google.com/uc?export=view&id=1__xSCKT_IpBpk7o_sot08GkDhWNozWuJ",
      ability: "",
      value: 36,
      points: 50,
      requirements: "Moscow Mule,Hairy Navel"
     },
     {
      category: "customer",
      name: "Ayin",
      text: "+50 for ALL THREE: vodka martini, bourbon highball, & paloma",
      id: "ayin",
      img: "https://drive.google.com/uc?export=view&id=1E79R-H-Pa244u55Ca5uk4e4MbVQc8BvB",
      ability: "",
      value: 37,
      points: 50,
      requirements: "Vodka Martini,Bourbon Highball,Paloma"
     },
     {
      category: "customer",
      name: "Ayin",
      text: "+50 for ALL THREE: vodka martini, bourbon highball, & paloma",
      id: "ayin",
      img: "https://drive.google.com/uc?export=view&id=1__xSCKT_IpBpk7o_sot08GkDhWNozWuJ",
      ability: "",
      value: 37,
      points: 50,
      requirements: "Vodka Martini,Bourbon Highball,Paloma"
     },
     {
      category: "customer",
      name: "Pei",
      text: "+50 for ALL THREE: gin martini, vodka martini, & rum & coke",
      id: "pei",
      img: "https://drive.google.com/uc?export=view&id=1E79R-H-Pa244u55Ca5uk4e4MbVQc8BvB",
      ability: "",
      value: 38,
      points: 50,
      requirements: "Gin Martini,Vodka Martini,Rum & Coke"
     },
     {
      category: "customer",
      name: "Tzadei",
      text: "+50 for ALL THREE: gin martini, bourbon highball, & rum & coke",
      id: "tzadei",
      img: "https://drive.google.com/uc?export=view&id=1__xSCKT_IpBpk7o_sot08GkDhWNozWuJ",
      ability: "",
      value: 39,
      points: 50,
      requirements: "Gin Martini,Bourbon Highball,Rum & Coke"
     },
     {
      category: "customer",
      name: "Qof",
      text: "-50 for minimalist master",
      id: "qof",
      img: "https://drive.google.com/uc?export=view&id=1zHRc352vx_P-rgpOC3Wq-GkEznnB6pc_",
      ability: "",
      value: 40,
      points: -50,
      requirements: "Minimalist Master"
     },
     {
      category: "customer",
      name: "Reish",
      text: "-50 for bohemian master",
      id: "reish",
      img: "https://drive.google.com/uc?export=view&id=17kpY41DOSwtC9amhDpebIn_0UmUdAX_Z",
      ability: "",
      value: 41,
      points: -50,
      requirements: "Bohemian Master"
     },
     {
      category: "customer",
      name: "Sin",
      text: "-50 for zen master",
      id: "sin",
      img: "https://drive.google.com/uc?export=view&id=1zHRc352vx_P-rgpOC3Wq-GkEznnB6pc_",
      ability: "",
      value: 42,
      points: -50,
      requirements: "Zen Master"
     },
     {
      category: "customer",
      name: "Shin",
      text: "+50 for bohemian master",
      id: "shin",
      img: "https://drive.google.com/uc?export=view&id=1E79R-H-Pa244u55Ca5uk4e4MbVQc8BvB",
      ability: "",
      value: 43,
      points: 50,
      requirements: "Bohemian Master"
     },
     {
      category: "customer",
      name: "Tav",
      text: "+50 for zen master",
      id: "tav",
      img: "https://drive.google.com/uc?export=view&id=1__xSCKT_IpBpk7o_sot08GkDhWNozWuJ",
      ability: "",
      value: 44,
      points: 50,
      requirements: "Zen Master"
     },
     {
      category: "customer",
      name: "Zeta",
      text: "+50 for minimalist master",
      id: "zeta",
      img: "https://drive.google.com/uc?export=view&id=1E79R-H-Pa244u55Ca5uk4e4MbVQc8BvB",
      ability: "",
      value: 45,
      points: 50,
      requirements: "Minimalist Master"
     },
  ];

  function generateCustomerDisplay(arr) {
    let count = 0;
    let arr2 = [];
    do {
     let possibleCust = arr[randomNumber(arr.length)];
     let custName = possibleCust.name;
     if (arr2.some(e => e.name === custName) === true) {
      count += 0;
     } else {
      arr2.push(possibleCust);
      count += 1;
     }
  } while (count < 11);
    return arr2;
  };

  const playerCustomers = generateCustomerDisplay(customers);

  const customerDisplay = playerCustomers.map(element => createCard(element));

  retrievePlayerOwnerCards(ownerCards, playerOwner, ownerHand);

  return (
    <div id="cocktail-clash">
     <div id="top-display">
      <div id="owner-div">
      <h2 id="owner-header">Bar Owner</h2>
     <div id="owner-display">{ownerDisplay}</div>
     </div>
     <div id="title-div">
      <h1 id="game-title">COCKTAIL CLASH</h1>
      </div>
      <div id="customer-div">
      <h2 id="customer-header">Potential Customers</h2>
     <div id="customer-display">{customerDisplay}</div>
     </div>
     <div id="instructive-elements">
      <BasicRules />
      <MenuPopUp />
      <a href="https://drive.google.com/file/d/1yAHlOgI4MzGEaqkemuT5t3OhtZBdLnxa/view?usp=sharing" target="_blank" rel="noreferrer"><button id="full-rules" className="buttons">Full Rules</button></a>
     </div>
     </div>
     <CardsInPlay initialHand={ownerHand} customerArray={playerCustomers} />
    </div>
  )
}

export default App;
