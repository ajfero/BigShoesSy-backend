'use strict';

const { Product } = require('../models/index');
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {

    const arrayProducts = [
      {
        "id": "c116b14f-8f00-454b-915c-f3f51c7a297c",
        "brand": "Nike",
        "colorway": "White/Opti Yellow-Digital Pink-Blue Fury",
        "gender": "child",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Nike-Kyrie-6-90s-GS.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591073011",
          "smallImageUrl": "https://stockx.imgix.net/Nike-Kyrie-6-90s-GS.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591073011",
          "thumbUrl": "https://stockx.imgix.net/Nike-Kyrie-6-90s-GS.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591073011"
        },
        "releaseDate": "2020-06-12 23:59:59",
        "retailPrice": 110,
        "styleId": "BQ5599-101",
        "title": "Nike Kyrie 6 90s (GS)",
        "year": 2020
      },
      {
        "id": "e7b5d463-64d8-4b4f-adca-d6b10a0a9ea8",
        "brand": "Jordan",
        "colorway": "White/Black-Aurora Green",
        "gender": "preschool",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Tie-Dye-PS.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591072618",
          "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Tie-Dye-PS.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591072618",
          "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Tie-Dye-PS.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591072618"
        },
        "releaseDate": "2020-06-11 23:59:59",
        "retailPrice": 80,
        "styleId": "CU0449-100",
        "title": "Jordan 1 Retro High Tie Dye (PS)",
        "year": 2020
      },
      {
        "id": "17c165c3-b1e7-4a10-aa5a-ca763c78cc53",
        "brand": "Jordan",
        "colorway": "White/Black-Aurora Green",
        "gender": "toddler",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Tie-Dye-TD.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591072618",
          "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Tie-Dye-TD.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591072618",
          "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Tie-Dye-TD.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591072618"
        },
        "releaseDate": "2020-06-11 23:59:59",
        "retailPrice": 60,
        "styleId": "CU0450-100",
        "title": "Jordan 1 Retro High Tie Dye (TD)",
        "year": 2020
      },
      {
        "id": "93197f94-54e3-4fd2-9727-c1c5f7e11a1f",
        "brand": "Nike",
        "colorway": "Dark Smoke Grey/Barely Volt-Volt",
        "gender": "women",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Dark-Smoke-Grey-Volt-W.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952683",
          "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Dark-Smoke-Grey-Volt-W.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952683",
          "thumbUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Dark-Smoke-Grey-Volt-W.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952683"
        },
        "releaseDate": "2020-06-10 23:59:59",
        "retailPrice": 120,
        "styleId": "CZ0378-001",
        "title": "Nike Air Max 90 Dark Smoke Grey Volt (W)",
        "year": 2020
      },
      {
        "id": "b98cb757-ad04-442f-9561-ba097b7ab81e",
        "brand": "adidas",
        "colorway": "Core Black/Core Black/Blue Spirit",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/adidas-Ultra-Boost-DNA-Parley-Black-2020.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588214371",
          "smallImageUrl": "https://stockx.imgix.net/adidas-Ultra-Boost-DNA-Parley-Black-2020.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588214371",
          "thumbUrl": "https://stockx.imgix.net/adidas-Ultra-Boost-DNA-Parley-Black-2020.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588214371"
        },
        "releaseDate": "2020-06-08 23:59:59",
        "retailPrice": 180,
        "styleId": "EH1184",
        "title": "adidas Ultra Boost DNA Parley Black (2020)",
        "year": 2020
      },
      {
        "id": "c9598308-be0b-4549-9e6b-736b2c424f44",
        "brand": "adidas",
        "colorway": "Cloud White/Cloud White/Blue Spirit",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/adidas-Ultra-Boost-Uncaged-Parley-2020.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1585905351",
          "smallImageUrl": "https://stockx.imgix.net/adidas-Ultra-Boost-Uncaged-Parley-2020.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1585905351",
          "thumbUrl": "https://stockx.imgix.net/adidas-Ultra-Boost-Uncaged-Parley-2020.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1585905351"
        },
        "releaseDate": "2020-06-08 23:59:59",
        "retailPrice": 180,
        "styleId": "EH1173",
        "title": "adidas Ultra Boost DNA Parley White (2020)",
        "year": 2020
      },
      {
        "id": "af2e6271-0f72-4409-b98b-82f418fc5a7e",
        "brand": "adidas",
        "colorway": "Dash Grey/Signal Coral/Blue Sport",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/adidas-4D-Run-1-Dash-Grey-Signal-Coral.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591073011",
          "smallImageUrl": "https://stockx.imgix.net/adidas-4D-Run-1-Dash-Grey-Signal-Coral.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591073011",
          "thumbUrl": "https://stockx.imgix.net/adidas-4D-Run-1-Dash-Grey-Signal-Coral.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591073011"
        },
        "releaseDate": "2020-06-08 23:59:59",
        "retailPrice": 200,
        "styleId": "FW1230",
        "title": "adidas 4D Run 1.0 Dash Grey Signal Coral",
        "year": 2020
      },
      {
        "id": "4f181050-2f23-4586-a9ef-16f089e5b148",
        "brand": "adidas",
        "colorway": "Core Black/Core Black/Core Black",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/adidas-Nite-Jogger-Triple-Black-2020.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591238783",
          "smallImageUrl": "https://stockx.imgix.net/adidas-Nite-Jogger-Triple-Black-2020.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591238783",
          "thumbUrl": "https://stockx.imgix.net/adidas-Nite-Jogger-Triple-Black-2020.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591238783"
        },
        "releaseDate": "2020-06-07",
        "retailPrice": 130,
        "styleId": "FV1277",
        "title": "adidas Nite Jogger Triple Black (2020)",
        "year": 2020
      },
      {
        "id": "96ab1256-44cb-4282-82e3-c5fc0bbe42fc",
        "brand": "adidas",
        "colorway": "Cloud White/Cloud White/Cloud White",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/adidas-Nite-Jogger-Triple-White-2020.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591238784",
          "smallImageUrl": "https://stockx.imgix.net/adidas-Nite-Jogger-Triple-White-2020.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591238784",
          "thumbUrl": "https://stockx.imgix.net/adidas-Nite-Jogger-Triple-White-2020.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591238784"
        },
        "releaseDate": "2020-06-07",
        "retailPrice": 130,
        "styleId": "FV1267",
        "title": "adidas Nite Jogger Triple White (2020)",
        "year": 2020
      },
      {
        "id": "6fd29cc5-4f9c-4cab-afb9-d8289f5780b7",
        "brand": "Jordan",
        "colorway": "Black/Gym Red-Light Smoke Grey",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Air-Jordan-Delta-SP-Black.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588045708",
          "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Delta-SP-Black.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588045708",
          "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Delta-SP-Black.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588045708"
        },
        "releaseDate": "2020-06-06 23:59:59",
        "retailPrice": 150,
        "styleId": "",
        "title": "Jordan Delta SP Black",
        "year": 2020
      },
      {
        "id": "3d5fc6cd-dc25-470b-81fd-791d5dff69e4",
        "brand": "Nike",
        "colorway": "White/White-Black-White",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Drew-League-2020.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589347861",
          "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Drew-League-2020.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589347861",
          "thumbUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Drew-League-2020.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589347861"
        },
        "releaseDate": "2020-06-06 23:59:59",
        "retailPrice": null,
        "styleId": "CZ4272-100",
        "title": "Nike Air Force 1 Low Drew League (2020)",
        "year": 2020
      },
      {
        "id": "e545c830-5551-4f02-9b46-16526e5bc14e",
        "brand": "adidas",
        "colorway": "Core Black/Gold Metallic/Core Black",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/adidas-Dame-6-Leather-Black-Gold.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589420773",
          "smallImageUrl": "https://stockx.imgix.net/adidas-Dame-6-Leather-Black-Gold.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589420773",
          "thumbUrl": "https://stockx.imgix.net/adidas-Dame-6-Leather-Black-Gold.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589420773"
        },
        "releaseDate": "2020-06-06 23:59:59",
        "retailPrice": null,
        "styleId": "FV8627",
        "title": "adidas Dame 6 Leather Black Gold",
        "year": 2020
      },
      {
        "id": "17e470b0-0720-4756-8512-5e8a0b0ae14f",
        "brand": "Nike",
        "colorway": "Neutral Grey/Varsity Royal-Sail",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Rub-Away-Blue.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590126620",
          "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Rub-Away-Blue.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590126620",
          "thumbUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Rub-Away-Blue.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590126620"
        },
        "releaseDate": "2020-06-06 23:59:59",
        "retailPrice": null,
        "styleId": "",
        "title": "Nike Air Force 1 Low Rub Away Blue",
        "year": 2020
      },
      {
        "id": "879b4294-4ca8-4f54-b229-7098682f40fd",
        "brand": "Nike",
        "colorway": "Neutral Grey/Varsity Red-Sail",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Rub-Away-Black.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590126619",
          "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Rub-Away-Black.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590126619",
          "thumbUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Rub-Away-Black.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590126619"
        },
        "releaseDate": "2020-06-06 23:59:59",
        "retailPrice": null,
        "styleId": "",
        "title": "Nike Air Force 1 Low Rub-Away Black",
        "year": 2020
      },
      {
        "id": "b7346639-e655-4b61-b937-b60182eed5c0",
        "brand": "Nike",
        "colorway": "Black/Blush-Sail",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Rub-Away-Red.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590126621",
          "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Rub-Away-Red.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590126621",
          "thumbUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Rub-Away-Red.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590126621"
        },
        "releaseDate": "2020-06-06 23:59:59",
        "retailPrice": null,
        "styleId": "",
        "title": "Nike Air Force 1 Low Rub Away Red",
        "year": 2020
      },
      {
        "id": "05966f2d-2870-427c-879c-013cec2c6501",
        "brand": "Nike",
        "colorway": "Sail/Safety Orange-Black-Gum Medium Brown",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Home--Away-Orange.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591161432",
          "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Home--Away-Orange.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591161432",
          "thumbUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Home--Away-Orange.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591161432"
        },
        "releaseDate": "2020-06-06 23:59:59",
        "retailPrice": null,
        "styleId": "CJ0611-100",
        "title": "Nike Air Max 90 Rub Away Orange",
        "year": 2020
      },
      {
        "id": "b4366898-2075-4707-a965-2fdd57354e5a",
        "brand": "Nike",
        "colorway": "Sail/Varsity Royal-Midnight-Navy-Gum Medium Brown",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Home--Away-Blue.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591161432",
          "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Home--Away-Blue.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591161432",
          "thumbUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Home--Away-Blue.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591161432"
        },
        "releaseDate": "2020-06-06 23:59:59",
        "retailPrice": null,
        "styleId": "",
        "title": "Nike Air Max 90 Rub Away Blue",
        "year": 2020
      },
      {
        "id": "be59ab39-16e0-43c5-8f42-aa32948c805c",
        "brand": "Nike",
        "colorway": "Sail/University Red-Black-Gum Medium Brown",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Home--Away-Red.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160660",
          "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Home--Away-Red.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160660",
          "thumbUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Home--Away-Red.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160660"
        },
        "releaseDate": "2020-06-06 23:59:59",
        "retailPrice": 130,
        "styleId": "CJ0611-101",
        "title": "Nike Air Max 90 Home & Away Red",
        "year": 2020
      },
      {
        "id": "dee2fd06-271b-4960-9c39-793e40c4898e",
        "brand": "Nike",
        "colorway": "Black/University Red-White",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Nike-KD-13-Bred.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591072775",
          "smallImageUrl": "https://stockx.imgix.net/Nike-KD-13-Bred.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591072775",
          "thumbUrl": "https://stockx.imgix.net/Nike-KD-13-Bred.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591072775"
        },
        "releaseDate": "2020-06-05 23:59:59",
        "retailPrice": 150,
        "styleId": "CI9948-002",
        "title": "Nike KD 13 Bred",
        "year": 2020
      },
      {
        "id": "6bd1a597-eaaa-46d3-9032-73680ff045fd",
        "brand": "adidas",
        "colorway": "Core Black/Core Black/Solar Red",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/adidas-Microbounce-T1-Core-Black-Solar-Red.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590036214",
          "smallImageUrl": "https://stockx.imgix.net/adidas-Microbounce-T1-Core-Black-Solar-Red.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590036214",
          "thumbUrl": "https://stockx.imgix.net/adidas-Microbounce-T1-Core-Black-Solar-Red.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590036214"
        },
        "releaseDate": "2020-06-05 23:59:59",
        "retailPrice": 160,
        "styleId": "EF4881",
        "title": "adidas Microbounce T1 Core Black Solar Red",
        "year": 2020
      },
      {
        "id": "d98c1625-5ad6-414a-a081-9f6224e42be9",
        "brand": "Nike",
        "colorway": "White/University Red-Black",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Nike-LeBron-17-NYC-Graffiti.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588046041",
          "smallImageUrl": "https://stockx.imgix.net/Nike-LeBron-17-NYC-Graffiti.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588046041",
          "thumbUrl": "https://stockx.imgix.net/Nike-LeBron-17-NYC-Graffiti.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588046041"
        },
        "releaseDate": "2020-06-05 23:59:59",
        "retailPrice": 200,
        "styleId": "CT6052-100",
        "title": "Nike LeBron 17 Graffiti",
        "year": 2020
      },
      {
        "id": "53db49cb-bcc7-4dcc-82d6-7efc59bbfa93",
        "brand": "Nike",
        "colorway": "Multi-Color/Black-White",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Nike-Air-Max-2090-Be-True-2020.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591161526",
          "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Max-2090-Be-True-2020.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591161526",
          "thumbUrl": "https://stockx.imgix.net/Nike-Air-Max-2090-Be-True-2020.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591161526"
        },
        "releaseDate": "2020-06-05 23:59:59",
        "retailPrice": 150,
        "styleId": "CZ4090-900",
        "title": "Nike Air Max 2090 Be True (2020)",
        "year": 2020
      },
      {
        "id": "0595cf0f-5ad7-496f-a9a6-1392bf699906",
        "brand": "Nike",
        "colorway": "Black/Summit White-Menta-Orange Trans",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Nike-Air-Zoom-Type-Menta.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590638500",
          "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Zoom-Type-Menta.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590638500",
          "thumbUrl": "https://stockx.imgix.net/Nike-Air-Zoom-Type-Menta.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590638500"
        },
        "releaseDate": "2020-06-05 23:59:59",
        "retailPrice": null,
        "styleId": "CJ2033-010",
        "title": "Nike Air Zoom Type Menta",
        "year": 2020
      },
      {
        "id": "496caf39-1960-41c5-a016-ccafe0204323",
        "brand": "Nike",
        "colorway": "Summit White/Ashen Slate-Summit White-Electric Green",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Nike-Air-Zoom-Type-Summit-White.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590638501",
          "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Zoom-Type-Summit-White.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590638501",
          "thumbUrl": "https://stockx.imgix.net/Nike-Air-Zoom-Type-Summit-White.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590638501"
        },
        "releaseDate": "2020-06-05 23:59:59",
        "retailPrice": null,
        "styleId": "CJ2033-100",
        "title": "Nike Air Zoom Type Summit White",
        "year": 2020
      },
      {
        "id": "62481bfa-cc3d-43cc-b616-568ad60d7d51",
        "brand": "adidas",
        "colorway": "Tech Indigo/Bluebird/Off White",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/adidas-Frankfurt-Bluebird.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591073008",
          "smallImageUrl": "https://stockx.imgix.net/adidas-Frankfurt-Bluebird.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591073008",
          "thumbUrl": "https://stockx.imgix.net/adidas-Frankfurt-Bluebird.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591073008"
        },
        "releaseDate": "2020-06-05 23:59:59",
        "retailPrice": 100,
        "styleId": "EF5787",
        "title": "adidas Frankfurt Bluebird",
        "year": 2020
      },
      {
        "id": "3c307b39-856c-4a36-95c7-96fda11a7c0c",
        "brand": "Puma",
        "colorway": "Puma White/Amazon Green-Vaporous Grey",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "smallImageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "thumbUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0"
        },
        "releaseDate": "2020-06-05",
        "retailPrice": 100,
        "styleId": "374872-01",
        "title": "Puma Ralph Sampson Lo Dassler Legacy Collection",
        "year": 2020
      },
      {
        "id": "4a137709-3482-4c24-8772-4094481b7381",
        "brand": "Puma",
        "colorway": "Puma White/Amazon Green-Vaporous Grey",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "smallImageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "thumbUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0"
        },
        "releaseDate": "2020-06-05",
        "retailPrice": 110,
        "styleId": "374881-01",
        "title": "Puma Roma '68 Dassler Legacy Collection",
        "year": 2020
      },
      {
        "id": "91c01b43-f1c5-497b-b7cd-56d2a4dcee8e",
        "brand": "Puma",
        "colorway": "Puma White/High Risk Red-Vaporous Grey",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "smallImageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "thumbUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0"
        },
        "releaseDate": "2020-06-05",
        "retailPrice": 110,
        "styleId": "374874-01",
        "title": "Puma Ralph Sampson Mid Dassler Legacy Collection",
        "year": 2020
      },
      {
        "id": "9a1a8ee5-1328-450d-9463-58d092c8eb80",
        "brand": "Puma",
        "colorway": "White/Royal-Vaporous Grey",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "smallImageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "thumbUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0"
        },
        "releaseDate": "2020-06-05",
        "retailPrice": 120,
        "styleId": "374875-01",
        "title": "Puma Oslo City Dassler Legacy Collection",
        "year": 2020
      },
      {
        "id": "b4967eed-e883-4972-acbe-8536c5ec9dc8",
        "brand": "Puma",
        "colorway": "White/Royal-Vaporous Grey",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "smallImageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "thumbUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0"
        },
        "releaseDate": "2020-06-05",
        "retailPrice": 0,
        "styleId": "",
        "title": "Puma Mirage Dassler Legacy Collection",
        "year": 2020
      },
      {
        "id": "cd832e23-6b6d-48d9-98de-a2fbb4653f06",
        "brand": "Puma",
        "colorway": "Puma White/High Risk Red-Vaporous Grey",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "smallImageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "thumbUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0"
        },
        "releaseDate": "2020-06-05",
        "retailPrice": 0,
        "styleId": "",
        "title": "Puma Capri Dassler Legacy Collection",
        "year": 2020
      },
      {
        "id": "e1b99ae5-8a00-4fde-a1ae-3c8de6d6402a",
        "brand": "Puma",
        "colorway": "Puma White/High Risk Red-Vaporous Grey",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "smallImageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "thumbUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0"
        },
        "releaseDate": "2020-06-05",
        "retailPrice": 100,
        "styleId": "374877-01",
        "title": "Puma Fast Rider Dassler Legacy Collection",
        "year": 2020
      },
      {
        "id": "ffca91c8-5159-4365-a784-67f0e3b64604",
        "brand": "Puma",
        "colorway": "White/Royal-Vaporous Grey",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "smallImageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "thumbUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0"
        },
        "releaseDate": "2020-06-05",
        "retailPrice": 100,
        "styleId": "374878-01",
        "title": "Puma Sky Lo Dassler Legacy Collection",
        "year": 2020
      },
      {
        "id": "15423daa-9283-4ea6-8596-61a0f3a19f30",
        "brand": "Converse",
        "colorway": "Photon Dust/Amethyst Grey",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Converse-G4-Photon-Dust.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952668",
          "smallImageUrl": "https://stockx.imgix.net/Converse-G4-Photon-Dust.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952668",
          "thumbUrl": "https://stockx.imgix.net/Converse-G4-Photon-Dust.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952668"
        },
        "releaseDate": "2020-06-04 23:59:59",
        "retailPrice": 120,
        "styleId": "167939C",
        "title": "Converse G4 Photon Dust",
        "year": 2020
      },
      {
        "id": "91668cbe-48de-4120-ba23-f5812adc2810",
        "brand": "Converse",
        "colorway": "White/Game Royal-Total Orange",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Converse-All-Star-Pro-BB-Solstice.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952666",
          "smallImageUrl": "https://stockx.imgix.net/Converse-All-Star-Pro-BB-Solstice.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952666",
          "thumbUrl": "https://stockx.imgix.net/Converse-All-Star-Pro-BB-Solstice.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952666"
        },
        "releaseDate": "2020-06-04 23:59:59",
        "retailPrice": 140,
        "styleId": "167936C",
        "title": "Converse All-Star Pro BB Solstice",
        "year": 2020
      },
      {
        "id": "fac111ab-f3f1-48c3-9237-c81958f90cd8",
        "brand": "Converse",
        "colorway": "University Blue/White-White",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Converse-All-Star-Pro-BB-Low-Solstice.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952667",
          "smallImageUrl": "https://stockx.imgix.net/Converse-All-Star-Pro-BB-Low-Solstice.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952667",
          "thumbUrl": "https://stockx.imgix.net/Converse-All-Star-Pro-BB-Low-Solstice.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952667"
        },
        "releaseDate": "2020-06-04 23:59:59",
        "retailPrice": 130,
        "styleId": "167937C",
        "title": "Converse All-Star Pro BB Low Solstice",
        "year": 2020
      },
      {
        "id": "67c01d27-20c3-47df-ae5b-14e3de005f74",
        "brand": "Converse",
        "colorway": "Black/Solar Red-Fresh Mint",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Converse-G4-Black-Solar-Red-Fresh-Mint.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952669",
          "smallImageUrl": "https://stockx.imgix.net/Converse-G4-Black-Solar-Red-Fresh-Mint.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952669",
          "thumbUrl": "https://stockx.imgix.net/Converse-G4-Black-Solar-Red-Fresh-Mint.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952669"
        },
        "releaseDate": "2020-06-04 23:59:59",
        "retailPrice": 120,
        "styleId": "167938C",
        "title": "Converse G4 Black Solar Red Fresh Mint",
        "year": 2020
      },
      {
        "id": "1c8a8c7d-357b-4ec3-a541-4df4a014d286",
        "brand": "Nike",
        "colorway": "Metallic Silver/Fuchsia Glow-Hyper Crimson-Racer Blue",
        "gender": "women",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Shadow-Metallic-Silver-W.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591238783",
          "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Shadow-Metallic-Silver-W.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591238783",
          "thumbUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Shadow-Metallic-Silver-W.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591238783"
        },
        "releaseDate": "2020-06-03 23:59:59",
        "retailPrice": 110,
        "styleId": "CW6030-001",
        "title": "Nike Air Force 1 Shadow Metallic Silver (W)",
        "year": 2020
      },
      {
        "id": "4c19b8de-09a4-4a20-ac64-2d7b2fff5052",
        "brand": "Jordan",
        "colorway": "White/French Blue-Flint Grey",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Air-Jordan-Jumpman-Team-1-Flint.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591238783",
          "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Jumpman-Team-1-Flint.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591238783",
          "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Jumpman-Team-1-Flint.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591238783"
        },
        "releaseDate": "2020-06-03",
        "retailPrice": 140,
        "styleId": "",
        "title": "Jordan Jumpman Team 1 Flint",
        "year": 2020
      },
      {
        "id": "05dfef9f-0823-4f82-990a-fb3244331dde",
        "brand": "Nike",
        "colorway": "Black/Reflect Silver-Green",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Nike-Air-Max-2090-Neymar-Jr-Black.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590556684",
          "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Max-2090-Neymar-Jr-Black.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590556684",
          "thumbUrl": "https://stockx.imgix.net/Nike-Air-Max-2090-Neymar-Jr-Black.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590556684"
        },
        "releaseDate": "2020-06-02 23:59:59",
        "retailPrice": null,
        "styleId": "CU9371-001",
        "title": "Nike Air Max 2090 Neymar Jr. Black",
        "year": 2020
      },
      {
        "id": "f75fce4d-e425-4a19-9788-67ba437aa79d",
        "brand": "Nike",
        "colorway": "Light Orewood Brown/Blue Fury Laser-Light Orewood Brown",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Nike-Air-Max-2090-Neymar-Jr-Brown.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590556684",
          "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Max-2090-Neymar-Jr-Brown.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590556684",
          "thumbUrl": "https://stockx.imgix.net/Nike-Air-Max-2090-Neymar-Jr-Brown.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590556684"
        },
        "releaseDate": "2020-06-02 23:59:59",
        "retailPrice": null,
        "styleId": "CU9371-100",
        "title": "Nike Air Max 2090 Neymar Jr. Brown",
        "year": 2020
      },
      {
        "id": "bc988830-7eab-4a09-b58d-9b62efc4f0d6",
        "brand": "New Balance",
        "colorway": "Incense/Team Teal",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/New-Balance-850-Incense-Team-Teal.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160665",
          "smallImageUrl": "https://stockx.imgix.net/New-Balance-850-Incense-Team-Teal.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160665",
          "thumbUrl": "https://stockx.imgix.net/New-Balance-850-Incense-Team-Teal.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160665"
        },
        "releaseDate": "2020-06-02 23:59:59",
        "retailPrice": 100,
        "styleId": "ML850SBE",
        "title": "New Balance 850 Incense Team Teal",
        "year": 2020
      },
      {
        "id": "15038df0-38b7-4bee-8a8c-28566da8ab7a",
        "brand": "Nike",
        "colorway": "Black/Fossil-Cosmic Fuchsia-White",
        "gender": "women",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Nike-Air-Max-Verona-Black-Cosmic-Fuchsia-W.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160659",
          "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Max-Verona-Black-Cosmic-Fuchsia-W.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160659",
          "thumbUrl": "https://stockx.imgix.net/Nike-Air-Max-Verona-Black-Cosmic-Fuchsia-W.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160659"
        },
        "releaseDate": "2020-06-02 23:59:59",
        "retailPrice": 130,
        "styleId": "CI9842-001",
        "title": "Nike Air Max Verona Black Cosmic Fuchsia (W)",
        "year": 2020
      },
      {
        "id": "90651f19-60e9-41e9-8e3b-7f4b3dd5d759",
        "brand": "New Balance",
        "colorway": "White/Team Teal",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx.imgix.net/New-Balance-850-White-Team-Teal.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160665",
          "smallImageUrl": "https://stockx.imgix.net/New-Balance-850-White-Team-Teal.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160665",
          "thumbUrl": "https://stockx.imgix.net/New-Balance-850-White-Team-Teal.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160665"
        },
        "releaseDate": "2020-06-02 23:59:59",
        "retailPrice": 100,
        "styleId": "ML850SBB",
        "title": "New Balance 850 White Team Teal",
        "year": 2020
      },
      {
        "id": "4f0b32bc-bda3-4bdc-86e3-d2367ddada5d",
        "brand": "Nike",
        "colorway": "Washed Coral/Guava Ice-White",
        "gender": "women",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Nike-Air-Max-Koko-Washed-Coral-W.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160660",
          "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Max-Koko-Washed-Coral-W.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160660",
          "thumbUrl": "https://stockx.imgix.net/Nike-Air-Max-Koko-Washed-Coral-W.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160660"
        },
        "releaseDate": "2020-06-02 23:59:59",
        "retailPrice": 100,
        "styleId": "CW9705-600",
        "title": "Nike Air Max Koko Washed Coral (W)",
        "year": 2020
      },
      {
        "id": "6ce96afa-2349-4e9f-b3d4-1aa7a78c7a40",
        "brand": "Nike",
        "colorway": "White/Black-Metallic Silver-Aurora",
        "gender": "women",
        "media": {
          "imageUrl": "https://stockx.imgix.net/Nike-Air-VaporMax-Flyknit-3-White-Black-Aurora-W.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160660",
          "smallImageUrl": "https://stockx.imgix.net/Nike-Air-VaporMax-Flyknit-3-White-Black-Aurora-W.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160660",
          "thumbUrl": "https://stockx.imgix.net/Nike-Air-VaporMax-Flyknit-3-White-Black-Aurora-W.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160660"
        },
        "releaseDate": "2020-06-02 23:59:59",
        "retailPrice": 200,
        "styleId": "CT1274-100",
        "title": "Nike Air VaporMax Flyknit 3 White Black Aurora (W)",
        "year": 2020
      },
      {
        "id": "121f2f6b-cdac-4760-ae88-952f27977afd",
        "brand": "Converse",
        "colorway": "Natural Ivory/Egret-Red",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "smallImageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "thumbUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0"
        },
        "releaseDate": "2020-06-02",
        "retailPrice": 100,
        "styleId": "170539C",
        "title": "Converse Chuck Taylor All-Star 70s Hi '88 All-Star Game Los Angeles Lakers",
        "year": 2020
      },
      {
        "id": "3d89fbd7-4f87-4950-8c1f-3cc71fb930ab",
        "brand": "Converse",
        "colorway": "Casino/White-Black",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "smallImageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "thumbUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0"
        },
        "releaseDate": "2020-06-02",
        "retailPrice": 100,
        "styleId": "170541C",
        "title": "Converse Chuck Taylor All-Star 70s Hi '88 All-Star Game Chicago Bulls",
        "year": 2020
      },
      {
        "id": "5ca3ba90-c57f-4b48-9fb4-9c44251330bf",
        "brand": "Converse",
        "colorway": "Natural Ivory/White-Black",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "smallImageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "thumbUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0"
        },
        "releaseDate": "2020-06-02",
        "retailPrice": 100,
        "styleId": "170540C",
        "title": "Converse Chuck Taylor All-Star 70s Hi '88 All-Star Game Boston Celtics",
        "year": 2020
      },
      {
        "id": "a218c112-39ab-467b-bacf-aaf93f44a01f",
        "brand": "Converse",
        "colorway": "Natural Ivory/White-Red",
        "gender": "men",
        "media": {
          "imageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "smallImageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
          "thumbUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0"
        },
        "releaseDate": "2020-06-02",
        "retailPrice": 100,
        "styleId": "170538C",
        "title": "Converse Chuck Taylor All-Star 70s Hi '88 All-Star Game Seattle Supersonics",
        "year": 2020
      }
    ]
    // console.log(arrayProducts)

    const productPromises = arrayProducts.map((item) => {
      return Product.create({
        productId: item.id,
        brand: item.brand,
        colorway: item.colorway,
        imageUrl: item.media.imageUrl,
        retailPrice: item.retailPrice,
        styleId: item.styleId,
        title: item.title
      })
    })
    console.log(productPromises)

    return Promise.all(
      productPromises
    )

  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bullDelete('users', null, {})
    ])
  }
};
