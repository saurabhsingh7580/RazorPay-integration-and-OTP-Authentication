import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card'
import axios from 'axios'

const Home = () => {
  const checkOutHandler = async (amount) => {
    const {data:{key}} = await axios.get("http://localhost:4000/api/getkey")
    const {data:{order}} = await axios.post("http://localhost:4000/api/checkout",{
      amount
    })
    var options = {
      key:key, 
      amount:order.amount,
      currency: "INR",
      name: "Saurabh singh",
      description: "Test Transaction Razorpay",
      image: "https://cdn.dribbble.com/users/419466/screenshots/7187243/media/993dc71269f5ab2a9faff9fe9db69a60.gif",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentverifiction",
      prefill: {
          name :"Ankit Singh",
          email: "singhsaurabh758082@gmail.com",
          contact: "9302687403"
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          "color": "#3399cc"
      }
  };
  const  razor = new window.Razorpay(options);

  razor.open();
   
  }
  return (
    <Box>
      <Stack direction={["column","row"]}>
        <Card amount={5000} img={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MP6V3ref_VW_34FR+watch-41-stainless-silver-cell-8s_VW_34FR_WF_CO_GEO_IN?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660779457078%2C1661890809756"} checkOutHandler={checkOutHandler} />
        <Card amount={3000} img={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MP6Y3ref_VW_34FR+watch-41-alum-red-nc-8s_VW_34FR_WF_CO_GEO_IN?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660779463765%2C1661975955661"} checkOutHandler={checkOutHandler} />
        <Card amount={6000} img={"https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MKJQ3HN_A_1.png?v=1633758350"} checkOutHandler={checkOutHandler} />
        <Card amount={7000} img={"https://imgeng.jagran.com/images/2022/nov/11669294783191.jpg"} checkOutHandler={checkOutHandler} />

      </Stack>
    </Box>)
}

export default Home
