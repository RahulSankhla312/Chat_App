import { Box } from '@chakra-ui/react'
import React from 'react'
import { ChatState } from '../../Context/ChatProvider'
import SingleChat from '../SingleChat'

export default function ChatBox({ fetchAgain, setFetchAgain }) {

  const { selectedChat } = ChatState()

  return (
    <Box
      display={{ base: selectedChat ? 'flex' : 'none', md: 'flex' }}
      alignItems='center'
      flexDir={'column'}
      p={3}
      bg='white'
      w={{ base: '100%', md: '68%' }}
      borderWidth='1px'
      ml={2}
      borderRadius='lg'
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain = {setFetchAgain}  />
    </Box>
  )
}
