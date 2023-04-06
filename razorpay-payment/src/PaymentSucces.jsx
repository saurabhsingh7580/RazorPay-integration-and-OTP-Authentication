import { Box, Heading, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import {useSearchParams} from 'react-router-dom'

const PaymentSucces = () => {
    const searchQuery = useSearchParams()[0]
    const referenceNo = searchQuery.get("reference")
  return (
   <Box>
    <VStack h="100vh" justifyContent={"center"}>
<Heading textTransform={"uppercase"}>
    orader successfull

</Heading>
<Text>
    Reference No.{referenceNo}
</Text>


    </VStack>

   </Box>

  )
}

export default PaymentSucces
