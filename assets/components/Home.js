import React from "react";
import { Heading } from "@gluestack-ui/themed";
import { VStack, Box } from '@gluestack-ui/themed';
import { Card } from 'react-native-paper'
import Button from '@mui/material/Button';

const Home = () => {
    return (
        <Card>
            <Card.Content>
            <VStack space="md">
                <Box w='$20' h='$20' bg='$blue300'>
                    <Heading>NexBet</Heading>
                    <Button variant="outllined">Yes</Button>
                </Box>
            </VStack>
            </Card.Content>
        </Card>
          
    );
}
export default Home;