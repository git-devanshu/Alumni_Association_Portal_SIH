import React, { useState } from 'react';
import '../styles/AlumniPage.css';
import { Stack, Spacer, Image, Text, Heading, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Avatar, useStatStyles } from '@chakra-ui/react';
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import AlumniDirectory from '../components/AlumniDirectory';
import ImageComponent from '../components/ImageComponent';

export default function AlumniPage() {
    const name = 'Tony Stark';
    const [selected, setSelected] = useState(1);

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
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>New Window</MenuItem>
                            <MenuDivider />
                            <MenuItem>Open...</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'250px auto'}}>
                <div className="sidebar-ap">
                    <div onClick={()=>setSelected(1)} className={selected === 1 ? 'sidebar-ap-option-selected' : 'sidebar-ap-option'}>
                        <ImageComponent imageId={'vmttk1xtp9g6lzkukas6'} alt='menu-item-icon'/>
                        <h2>Events and Reunions</h2>
                    </div>
                    <div onClick={()=>setSelected(2)} className={selected === 2 ? 'sidebar-ap-option-selected' : 'sidebar-ap-option'}>
                        <ImageComponent imageId={'rxbl0bdov8jvilshx1eb'} alt='menu-item-icon'/>
                        <h2>Job Portal</h2>
                    </div>
                    <div onClick={()=>setSelected(3)} className={selected === 3 ? 'sidebar-ap-option-selected' : 'sidebar-ap-option'}>
                        <ImageComponent imageId={'xhqt1hybrmqx4fockuyd'} alt='menu-item-icon'/>
                        <h2>Alumni Directory</h2>
                    </div>
                    <div onClick={()=>setSelected(4)} className={selected === 4 ? 'sidebar-ap-option-selected' : 'sidebar-ap-option'}>
                        <ImageComponent imageId={'hntea7wkeknrnyafs4am'} alt='menu-item-icon'/>
                        <h2>Donation Portal</h2>
                    </div>
                    <div onClick={()=>setSelected(5)} className={selected === 5 ? 'sidebar-ap-option-selected' : 'sidebar-ap-option'}>
                        <ImageComponent imageId={'fmgqay3cwzdchceyotnr'} alt='menu-item-icon'/>
                        <h2>Interest Groups</h2>
                    </div>
                    <div onClick={()=>setSelected(6)} className={selected === 6 ? 'sidebar-ap-option-selected' : 'sidebar-ap-option'}>
                        <ImageComponent imageId={'nwspr1cn1ltjjsoudwby'} alt='menu-item-icon'/>
                        <h2>Success Stories</h2>
                    </div>
                    <div onClick={()=>setSelected(7)} className={selected === 7 ? 'sidebar-ap-option-selected' : 'sidebar-ap-option'}>
                        <ImageComponent imageId={'l8yajschd2h71htceu9u'} alt='menu-item-icon'/>
                        <h2>Projects and Startups</h2>
                    </div>
                    <div onClick={()=>setSelected(8)} className={selected === 8 ? 'sidebar-ap-option-selected' : 'sidebar-ap-option'}>
                        <ImageComponent imageId={'bgcvktaspfkbduxfd0rg'} alt='menu-item-icon'/>
                        <h2>Competitions</h2>
                    </div>
                </div>
                <div className="display-ap">
                    {/* {selected === 1 && </>} */}
                    {/* {selected === 2 && </>} */}
                    {selected === 3 && <AlumniDirectory/>}
                    {/* {selected === 4 && </>} */}
                    {/* {selected === 5 && </>} */}
                    {/* {selected === 6 && </>} */}
                    {/* {selected === 7 && </>} */}
                    {/* {selected === 8 && </>} */}
                </div>
            </div>
        </div>
    );
}
