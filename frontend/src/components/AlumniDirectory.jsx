import React, {useState} from 'react';
import { Heading, Stack, Avatar, Text, Button, Badge, Input, InputGroup, Spacer, InputRightElement, Card, CardBody, CardHeader, CardFooter } from '@chakra-ui/react';
import {Search2Icon} from '@chakra-ui/icons';

export default function AlumniDirectory() {
    const initialData = [
        { name: 'John Doe', about: 'Software Engineer at TechCorp', connectionCount: 300, field: 'IT', location: 'New York', batch: 2015 },
        { name: 'Jane Smith', about: 'Marketing Specialist at BrandCo', connectionCount: 450, field: 'Marketing', location: 'San Francisco', batch: 2013 },
        { name: 'Michael Johnson', about: 'Data Analyst at DataSense', connectionCount: 200, field: 'Data Science', location: 'Chicago', batch: 2016 },
        { name: 'Emily Davis', about: 'Product Manager at Innovatech', connectionCount: 600, field: 'Management', location: 'Boston', batch: 2012 },
        { name: 'David Lee', about: 'UI/UX Designer at Creatify', connectionCount: 350, field: 'Design', location: 'Los Angeles', batch: 2018 },
        { name: 'Sarah Miller', about: 'Content Writer at MediaBuzz', connectionCount: 150, field: 'Content Creation', location: 'Seattle', batch: 2019 },
        { name: 'Robert Brown', about: 'Full Stack Developer at Webify', connectionCount: 500, field: 'IT', location: 'Austin', batch: 2014 },
        { name: 'Linda Taylor', about: 'HR Manager at PeoplePro', connectionCount: 300, field: 'Human Resources', location: 'Denver', batch: 2011 },
        { name: 'James Anderson', about: 'Cybersecurity Expert at SafeNet', connectionCount: 250, field: 'Cybersecurity', location: 'Miami', batch: 2017 },
        { name: 'Jessica Wilson', about: 'Operations Manager at GlobalCorp', connectionCount: 400, field: 'Operations', location: 'Dallas', batch: 2010 },
        { name: 'Thomas Clark', about: 'Machine Learning Engineer at AI Labs', connectionCount: 500, field: 'Artificial Intelligence', location: 'Pittsburgh', batch: 2015 },
        { name: 'Karen Martinez', about: 'Financial Analyst at FinancePro', connectionCount: 550, field: 'Finance', location: 'Philadelphia', batch: 2013 },
        { name: 'William Rodriguez', about: 'Network Engineer at NetTech', connectionCount: 300, field: 'Networking', location: 'Houston', batch: 2014 },
        { name: 'Patricia Lewis', about: 'Consultant at ConsultX', connectionCount: 600, field: 'Consulting', location: 'Phoenix', batch: 2012 },
        { name: 'Charles Walker', about: 'DevOps Engineer at CloudNet', connectionCount: 320, field: 'IT', location: 'Atlanta', batch: 2016 }
    ];    

    const [data, setData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredData = data.filter((item) => 
        item.name.toLowerCase().includes(searchTerm) ||
        item.about.toLowerCase().includes(searchTerm) ||
        item.field.toLowerCase().includes(searchTerm) ||
        item.batch.toString().includes(searchTerm)
    );

    return (
        <div>
            <div style={{display:'flex', alignItems:'center'}}>
                <div style={{margin:'10px'}}>
                    <Heading size='lg'>Alumni Directory</Heading>
                    <Text size='lg' fontSize='18px'>Get connected with our Proud Alumni</Text>
                </div>
                <Spacer/>
                <InputGroup size='lg' w='360px' style={{margin:'15px'}}>
                    <Input value={searchTerm} onChange={handleSearchChange} variant='filled' style={{borderRadius:'30px', boxShadow:'0 2px 7px gray'}} size='lg' type='text' placeholder='search name, about, field, batch' />
                    <InputRightElement>
                    <Search2Icon size='lg' color='gray' />
                    </InputRightElement>
                </InputGroup>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, 200px)', width:'90%', justifyContent:'center', margin:'0 auto', gap:'15px', marginTop:'20px'}}>
                {filteredData && filteredData.map((item, index)=>{
                    return(
                        <Card>
                            <CardBody>
                                <Stack spacing={3}>
                                    <Avatar margin='0 auto' size='lg' src={item.src === '' ? 'https://bit.ly/broken-link' : item.src}/>
                                    <Heading size='sm' textAlign='center'>{item.name}</Heading>
                                    <Text align='center' fontSize='14px' textColor='rgb(120, 120, 120'>
                                        {item.about.length > 20 ? item.about.slice(0, 20) + '...' : item.about}
                                    </Text>
                                    <Badge variant='subtle' fontSize='sm' borderRadius='10px' textAlign='center' w='auto' fontWeight={400} bg='#D5E5E8' color='#0195FF'>{item.connectionCount > 100 ? '100+' : item.connectionCount} Connections</Badge>
                                    <Button bg='#0195FF'>View Profile</Button>
                                </Stack>
                            </CardBody>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
