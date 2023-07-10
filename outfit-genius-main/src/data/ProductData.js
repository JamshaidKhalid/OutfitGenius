const productData =[
  {
    id: 1,
    name: "Nike Shirt",
    brand: "nike",
    price: 90,
    size: "medium",
    type: "shirt",
    image: "https://cdna.lystit.com/photos/macys/2359949-Black-0f5a1a0a-.jpeg",
    link :"https://nike.com"
  },
  {
    id: 2,
    name: "Nike Pants",
    brand: "nike",
    price: 130,
    size: "large",
    type: "pants",
    image:"https://th.bing.com/th/id/R.d38ee14a17bf343848227755197b48be?rik=mf9ibmTG%2f1FXNA&riu=http%3a%2f%2fwww.wigglestatic.com%2fproduct-media%2f5360099603%2fNike-Shield-Pant-HO14-Trousers-Run-Black-Silver-Q4-14-620155-010-2.jpg%3fw%3d2000%26h%3d2000%26a%3d7&ehk=0AUaWvC0CqLRhtBzkie7M2Ym0U0XbAWueLsBiIbN108%3d&risl=&pid=ImgRaw&r=0",
    link :"https://nike.com"
  },
  {
    id: 3,
    name: "Nike Shorts",
    brand: "nike",
    price: 70,
    size: "large",
    type: "shorts",
    image: "https://th.bing.com/th/id/R.70bffb26b01dab588b63267349893d00?rik=ay3QrvHY%2b%2fTRXw&pid=ImgRaw&r=0",
    link :"https://nike.com"
  },
  {
    id: 4,
    name: "Puma Shirt",
    brand: "puma",
    price: 90,
    size: "medium",
    type: "shirt",
    image:"https://th.bing.com/th/id/R.8284a5d5a9cb8297d795e7966a801cc9?rik=vOOk8jLi1utXLA&riu=http%3a%2f%2fimages.sportsdirect.com%2fimages%2fimgzoom%2f59%2f59701340_xxl.jpg&ehk=w3SXTid4vBxRpJtlAF3PRR45%2bvv35K4j%2b%2fWC%2fQWIST8%3d&risl=&pid=ImgRaw&r=0",
    link :"https://puma.com"
  },
  {
    id: 5,
    name: "Puma Pants",
    brand: "puma",
    price: 110,
    size: "large",
    type: "pants",
    image:"https://th.bing.com/th/id/R.77d6d1643225b6a9dbf4a143f8067248?rik=iU76bzzQE7nl%2fw&pid=ImgRaw&r=0",
    link :"https://puma.com"
  },
  {
    id: 6,
    name: "Puma Shorts",
    brand: "puma",
    price: 50,
    size: "small",
    type: "shorts",
    image:"https://th.bing.com/th/id/R.254a867e2a2aa533364aaf5858ad7a51?rik=%2bAus4B8MtpvcLg&riu=http%3a%2f%2fwww.wigglestatic.com%2fproduct-media%2f6360119304%2fPuma-Women-s-Blast-3-Short-SS17-Running-Shorts-Puma-Black-SS17-51507101-8.jpg%3fw%3d1600%26h%3d1600%26a%3d7&ehk=EWP2tNa4RiKALortixjy43NnVLJR9Q7O2fuPHZzUsog%3d&risl=&pid=ImgRaw&r=0",
    link :"https://puma.com"
  },
  {
    id: 7,
    name: "Reebook Shirt",
    brand: "reebook",
    price: 90,
    size: "small",
    type: "shirt",
    image:"https://th.bing.com/th/id/R.1e14dba09c2e2ae9cdf4103c510bf969?rik=M97w2tZ9ZfrgXg&pid=ImgRaw&r=0",
    link :"https://reebook.com"
  },
  {
    id: 8,
    name: "Reebook Pants",
    brand: "reebook",
    price: 70,
    size: "medium",
    type: "pants",
    image:"https://th.bing.com/th/id/OIP.ckUJTCPVXfhFhqb_AscfawHaHa?pid=ImgDet&rs=1",
    link :"https://reebook.com"

  },
  {
    id: 9,
    name: "Reebook Shorts",
    brand: "reebook",
    price: 60,
    size: "medium",
    type: "shorts",
    image:"https://th.bing.com/th/id/R.dbc37593923d52c42719a705a52eeda3?rik=%2fGi8cOH1xGD2LQ&pid=ImgRaw&r=0",
    link :"https://reebook.com"

  },
  {
    id: 10,
    name: "Reebook Shorts",
    brand: "reebook",
    price: 65,
    size: "medium",
    type: "shorts",
    image:"https://th.bing.com/th/id/R.dbc37593923d52c42719a705a52eeda3?rik=%2fGi8cOH1xGD2LQ&pid=ImgRaw&r=0",
    link :"https://reebook.com"

  },
  {
    id: 11,
    name: "Adidas Shirt",
    brand: "adidas",
    price: 85,
    size: "medium",
    type: "shirt",
    image:"https://th.bing.com/th/id/OIP.nH5B-MWJ7NSxqchvGIqHLAHaHa?pid=ImgDet&rs=1",
    link:"https://adidas.com"
  },
  {
    id: 12,
    name: "Adidas Pants",
    brand: "adidas",
    price: 75,
    size: "small",
    type: "pants",
    image:"https://th.bing.com/th/id/OIP.rfrbm8d24LZZ3R1-NhIJsgHaLH?pid=ImgDet&rs=1",
    link:"https://adidas.com"
  },
  {
    id: 13,
    name: "Adidas Shorts",
    brand: "adidas",
    price: 55,
    size: "large",
    type: "shorts",
    image:"https://www.tennisnuts.com/images/product/full/g_AA0671_APP_photo_front.jpg",
    link:"https://adidas.com"
  },
  {
    id: 14,
    name:"Allbirds Shirt",
    brand: "allbirds",
    price: 45,
    size: "medium",
    type: "shirt",
    image:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
    link:"https://allbirds.com"
  },
  {
    id: 15,
    name:"Allbirds Shorts",
    brand: "allbirds",
    price: 35,
    size: "large",
    type: "shorts",
    image:"https://th.bing.com/th/id/OIP.UM5tIu0_QlZ8PXHfA6jWEAHaHa?pid=ImgDet&rs=1",
    link:"https://allbrids.com"
  },
  {
    id: 16,
    name:"Allbirds Pants",
    brand: "allbirds",
    price: 55,
    size: "small",
    type: "pants",
    image:"https://m.media-amazon.com/images/I/61YhDYiGlJL._AC_UX342_.jpg",
    link:"https://allbirds.com"
  }

]

export default productData;