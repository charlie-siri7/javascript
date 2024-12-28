// Imports from react, chakra, store/item, components folder
import React from 'react'
import { Box, HStack, IconButton, Image, Text, Heading, useDisclosure, VStack, Input, Button } from "@chakra-ui/react";
import { LuPencil, LuTrash } from "react-icons/lu"
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useStore } from '@/store/item';
import { useState } from 'react';
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTrigger,
  DialogActionTrigger
} from "@/components/ui/dialog"
// Function to make ItemCard
const ItemCard = ({item}) => {
  // State variable updatedItem made from item
  const [updatedItem, setUpdatedItem] = useState(item);
  // Get update and delete functions from useStore()
  const { deleteItem, updateItem } = useStore();
  // constants from useDisclosure to determine if dialog is open or closed
  const { isOpen, onClose } = useDisclosure();
  // Function to handle delete item calls
  const handleDeleteItem = async(itemID) => {
    // Call deleteItem and store success state in variable
    const { success, message } = await deleteItem(itemID);
    if (success) {
      // Toast for successful deletion
      toast.success("Item deleted successfully.", {
        position: 'bottom-center',
      });
    } else {
      // Toast for failed deletion
      toast.error("Error deleting item.", {
        position: 'bottom-center',
      });
    }
  }
  // Function to handle updating an item
  const handleUpdateItem = async (itemID, updatedItem) => {
    // Call updateItem and store success state in variable
    const { success, message } = await updateItem(itemID, updatedItem);
    if (success) {
      // Toast if update successful
      toast.success("Item updated successfully.", {
        position: 'bottom-center',
      });
    } else {
      // Toast if update unsuccessful
      toast.error("Error updating item.", {
        position: 'bottom-center',
      });
    }
  }
  // ItemCard to return
  return (
    // Box with effects such as rounded corners, shadows
    <Box shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl"}}
      bg={'gray.800'}>
      {/* Image on the ItemCard */}
      <Image src={item.image} alt={item.name} h={48} w='full' objectFit='cover'/>
      {/* Box containing everything except the image on the card */}
      <Box p={4}>
        {/* Item name and price */}
        <Heading as='h3' size='md' mb={2}>
          {item.name}
        </Heading>
        <Text fontWeight='bold' fontSize='xl' color={'gray.200'} mb={4}>
          ${item.price}
        </Text>
        {/* Horizontal stack for the edit and delete buttons */}
        <HStack spacing={2}>
          {/* Edit button and dialog resulting from it */}
          <DialogRoot isOpen={isOpen} onClose={onClose}>
            {/* Edit button is an icon button that triggers the dialog to appear */}
            <DialogTrigger asChild>
              <IconButton colorPalette='blue'>
                <LuPencil/>
              </IconButton>
            </DialogTrigger>
            {/* The content of the dialog */}
            <DialogContent>
              <DialogHeader>Update Item</DialogHeader>
              <DialogBody>
                {/* Body is a stack with inputs for name, price, image URL */}
                <VStack spacing={4}>
                  {/* Format of each input: placeholder, name, value is set to current value, changing
                      value causes setUpdatedItem call to set the new value */}
                  <Input placeholder="Name:"
                    name="name"
                    value={updatedItem.name}
                    onChange= {(e) => setUpdatedItem({ ...updatedItem, name: e.target.value })}/>
                  <Input placeholder="Price:"
                    name="price" type="number"
                    value={updatedItem.price}
                    onChange= {(e) => setUpdatedItem({ ...updatedItem, price: e.target.value })}/>
                  <Input placeholder="Image URL:"
                    name="image"
                    value={updatedItem.image}
                    onChange= {(e) => setUpdatedItem({ ...updatedItem, image: e.target.value })}/>
                </VStack>
              </DialogBody>
              {/* Footer - contains update and cancel buttons */}
              <DialogFooter>
                {/* Update button calls handleUpdateItem() and closes dialog */}
                <DialogActionTrigger asChild>
                  <Button colorPalette='blue' mr={3} onClick={() => handleUpdateItem(item._id, updatedItem)}>Update</Button>
                </DialogActionTrigger>
                {/* Cancel button closes dialog without saving content */}
                <DialogActionTrigger asChild>
                  <Button>Cancel</Button>
                </DialogActionTrigger>
              </DialogFooter>
              <DialogCloseTrigger />
            </DialogContent>
          </DialogRoot>
          {/* Delete button is red icon button with trash icon, clicking it calls handleDeleteItem() */}
          <IconButton colorPalette='red' onClick={() => handleDeleteItem(item._id)}>
            <LuTrash/>
          </IconButton>
        </HStack>
      </Box>
    </Box>
  );
};
// Export the itemCard
export default ItemCard;