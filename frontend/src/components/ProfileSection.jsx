import { Divider, Heading, Text, Button, Box } from '@chakra-ui/react';
import React, { Children } from 'react'
import {ArrowForwardIcon} from '@chakra-ui/icons';

export default function ProfileSection({head, body, foot, permit, children}) {
    return (
        <div style={{marginTop:'10px', marginLeft:'10px', marginRight:'10px', borderRadius:'16px', border:'1px solid rgb(127,127,127)', backgroundColor:'white', boxShadow:'0 2px 7px rgb(140, 140, 140)'}}>
            <div style={{ borderTopLeftRadius:'16px', borderTopRightRadius:'16px'}}>
                <div style={{}}>
                    <Text fontSize='20px' ml='20px' mt='5px' mb='5px' fontWeight={500}>{head}</Text>
                </div>
                <div style={{margin:'10px'}}>
                    {children}
                </div>
                {permit && 
                    <Box style={{display:'flex', borderTop:'1px solid rgb(127,127,127)', justifyContent:'center', alignItems:'center', cursor:'pointer', marginTop:'5px'}} _hover={{backgroundColor: 'rgb(240, 240, 240)', borderBottomLeftRadius:'16px', borderBottomRightRadius:'16px'}}>
                        <Text fontSize='16px' ml='20px' mt='5px' mb='5px' fontWeight={400}>{foot}</Text>
                        <ArrowForwardIcon w={4} h={4}/>
                    </Box>
                }
            </div>
        </div>
    );
}