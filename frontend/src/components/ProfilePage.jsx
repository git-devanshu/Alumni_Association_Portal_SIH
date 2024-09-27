import React from 'react';
import { Stack, Spacer, Image, Text, Heading, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Avatar, useStatStyles, Input } from '@chakra-ui/react';
import { BellIcon, ChevronDownIcon, ArrowBackIcon, LinkIcon, CalendarIcon, EmailIcon } from '@chakra-ui/icons';
import ImageComponent from '../components/ImageComponent';
import { useNavigate } from 'react-router-dom';
import ProfileSection from '../components/ProfileSection';

export default function ProfilePage() {
    const navigate = useNavigate();
    const name = 'Tony Stark';

    const navigateToHome = () =>{
        navigate('/dashboard/alumni');
    }

    const navigateToProfile = ()=>{
        navigate('/profile/6ed028kdj98w0s452d9sdf');
    }

    return (
        <div>
            <div className="top-bar-ap">
                <Image boxSize={'40px'} bg={'#0195FF'} margin='10px'/>
                <Heading size='md' color='#0195FF'>Alumni Connect</Heading>
                <Spacer/>
                <Button bg='#0195FF' textColor='white' _hover={{bg: '#0195FF'}}>Logout</Button>
                <BellIcon w={'30px'} h={'30px'} color="black" m={'10px'}/>
                <div style={{marginRight:'10px'}}>
                    <Menu>
                        <MenuButton
                            px={4}
                            py={2}
                            transition='all 0.2s'
                            borderRadius='md'
                            borderWidth='1px'
                            _focus={{ boxShadow: 'outline' }}
                        >
                            {name} 
                            <ChevronDownIcon />
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={navigateToProfile}>View Profile</MenuItem>
                            <MenuItem>Help</MenuItem>
                            <MenuDivider />
                            <MenuItem>
                                <ArrowBackIcon/>
                                Back to Home
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'3fr 1fr', backgroundColor:'#D4E6EC', minHeight:'calc(100vh - 60px)', paddingBottom:'20px'}}>
                <div>
                    <div style={{marginTop:'10px', marginLeft:'10px', marginRight:'10px', borderRadius:'16px', border:'1px solid rgb(127,127,127)', backgroundColor:'white', boxShadow:'0 2px 7px rgb(140, 140, 140)', borderTopLeftRadius:'16px', borderTopRightRadius:'16px'}}>
                        <div style={{ backgroundColor:'rgb(220, 220, 220)', borderTopLeftRadius:'15px', borderTopRightRadius:'15px', padding:'15px', paddingLeft:'200px'}}>
                            <Heading size='4xl' color='rgb(240, 240, 240)'>PROFILE</Heading>
                        </div>
                        <Avatar bg='#0195FF' src='https://bit.ly/broken-link' style={{position:'relative', top:'-75px'}} size='2xl' m='10px' ml='30px'/>
                        <div style={{margin:'10px', marginTop:'-80px', paddingLeft:'20px'}}>
                            <Text fontSize='26px' fontWeight={500}>Tony Stark</Text>
                            <Text fontSize='18px'>CEO @Stark Industries</Text>
                            <Text fontSize='16px' color='rgb(150, 150, 150)' style={{marginTop:'5px'}}>Manhattan, NYC, United States</Text>
                            <div style={{display:'flex', alignItems:'center', gap:'20px'}}>
                                <Text fontSize='16px' fontWeight={600} color='#0195FF'>100+ Connections</Text>
                                <button style={{height:'36px', borderRadius:'18px', backgroundColor:'#0195FF', color:'white', padding:'0 20px 0 20px', marginTop:'8px'}}>View Connections</button>
                                <button style={{height:'36px', borderRadius:'18px', backgroundColor:'#0195FF', color:'white', padding:'0 20px 0 20px', marginTop:'8px'}}>Edit Profile</button>
                            </div>
                        </div> 
                    </div>
                    <ProfileSection head='Profile Summary' permit={true} foot='Add Profile Summary'>
                        <p style={{width:'95%', marginLeft:'10px', fontSize:'18px'}}>
                        Genius. Billionaire. Philanthropist. Former CEO of Stark Industries, Tony Stark revolutionized technology with his innovations in clean energy, artificial intelligence, and advanced robotics. A pioneer in the development of cutting-edge defense systems, his work has left an indelible mark on the fields of engineering and business. Tony is a thought leader in tech entrepreneurship and a global advocate for sustainable innovation. When not tinkering in his lab, he's leveraging his influence for social good through various philanthropic initiatives.
                        </p>
                    </ProfileSection>
                    <ProfileSection head='Educational Details' permit={true} foot='Add section'>
                        <div style={{marginLeft:'10px', marginBottom:'10px'}}>
                            <div style={{display:'flex', alignItems:'center', gap:'15px'}}>
                                <Text fontSize='16px' fontWeight={700}>10th Class</Text>
                                <Text fontSize='16px' fontWeight={700}>1993</Text>
                            </div>
                            <Text fontSize='16px' fontWeight={400}>Phillips Academy, Andover</Text>
                            <Text fontSize='16px' fontWeight={400}>GPA : 9.4</Text>
                        </div>
                        <div style={{marginLeft:'10px', marginBottom:'10px'}}>
                            <div style={{display:'flex', alignItems:'center', gap:'15px'}}>
                                <Text fontSize='16px' fontWeight={700}>12th Class</Text>
                                <Text fontSize='16px' fontWeight={700}>1995</Text>
                            </div>
                            <Text fontSize='16px' fontWeight={400}>Phillips Academy, Andover</Text>
                            <Text fontSize='16px' fontWeight={400}>GPA : 9.9</Text>
                        </div>
                        <div style={{marginLeft:'10px', marginBottom:'10px'}}>
                            <div style={{display:'flex', alignItems:'center', gap:'15px'}}>
                                <Text fontSize='16px' fontWeight={700}>Bachelor's Degree in Electrical Engineering & Physics</Text>
                                <Text fontSize='16px' fontWeight={700}>1997</Text>
                            </div>
                            <Text fontSize='16px' fontWeight={400}>Massachusetts Institute of Technology (MIT)</Text>
                            <Text fontSize='16px' fontWeight={400}>GPA : 9.3</Text>
                        </div>
                    </ProfileSection>
                    <ProfileSection head='Profile Links' permit={true} foot='Add Link'>
                        <Text fontSize='18px' ml='10px' fontWeight={400}>LinkedIn</Text>
                        <Text fontSize='16px' color='blue.500' ml='10px'><LinkIcon/> linkedin.com/in/tony-stark</Text>
                        <Text fontSize='18px' ml='10px' fontWeight={400}>Twitter</Text>
                        <Text fontSize='16px' color='blue.500' ml='10px'><LinkIcon/> twitter.com/IronManOfficial</Text>
                    </ProfileSection>
                    <ProfileSection head='Fields of Interest' permit={true} foot='Add a Field'>
                        <div style={{marginLeft:'10px', marginRight:'10px'}}>
                            <Input variant='filled' readOnly placeholder={'Artificial Intelligence'} w={'auto'} ml='10px'/>
                            <Input variant='filled' readOnly placeholder={'Robotics'} w={'auto'} ml='10px'/>
                            <Input variant='filled' readOnly placeholder={'Quantum Mechanics'} w={'auto'} ml='10px'/>
                            <Input variant='filled' readOnly placeholder={'Nanotechnology'} w={'auto'} ml='10px'/>
                        </div>
                    </ProfileSection>
                    <ProfileSection head='Other Details' permit={true} foot='Update Info'>
                        <Text fontSize='18px' ml='10px' fontWeight={400}>Date of Birth</Text>
                        <Text fontSize='16px' ml='10px'><CalendarIcon/> 29 May, 1970</Text>
                        <Text fontSize='18px' ml='10px' fontWeight={400}>Email</Text>
                        <Text fontSize='16px' ml='10px'><EmailIcon/> tony.stark@starkindustries.com</Text>
                    </ProfileSection>
                </div>
                <div style={{height:'400px', marginTop:'10px', marginLeft:'10px', marginRight:'10px', borderRadius:'16px', border:'1px solid rgb(127,127,127)', backgroundColor:'white', boxShadow:'0 2px 7px rgb(140, 140, 140)', borderTopLeftRadius:'16px', borderTopRightRadius:'16px'}}>
                </div>
            </div>
        </div>
    )
}
