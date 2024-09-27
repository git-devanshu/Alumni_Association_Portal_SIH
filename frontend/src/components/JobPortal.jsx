import React, {useState} from 'react';
import { Heading, Stack, Avatar, Text, Button, Badge, Input, InputGroup, Spacer, InputRightElement, Card, CardBody, CardHeader, CardFooter } from '@chakra-ui/react';
import {Search2Icon, AddIcon} from '@chakra-ui/icons';

export default function JobPortal() {
    const initialData = [
        {
            driveType: "Internship",
            companyName: "Stark Industries",
            location: "New York, NY",
            role: "AI Research Intern",
            skills: "Artificial Intelligence, Machine Learning, Python, Data Analysis",
            uploadDate: "12 September, 2024"
        },
        {
            driveType: "Job",
            companyName: "Wayne Enterprises",
            location: "Gotham City",
            role: "Software Engineer",
            skills: "Java, Spring Boot, Microservices, Cloud Computing",
            uploadDate: "08 August, 2024"
        },
        {
            driveType: "Internship",
            companyName: "Pym Technologies",
            location: "San Francisco, CA",
            role: "Quantum Computing Intern",
            skills: "Quantum Computing, C++, Physics, Algorithm Design",
            uploadDate: "01 July, 2024"
        },
        {
            driveType: "Job",
            companyName: "Oscorp Industries",
            location: "New York, NY",
            role: "Biotech Engineer",
            skills: "Biotechnology, Genetics, CRISPR, Lab Research",
            uploadDate: "15 June, 2024"
        },
        {
            driveType: "Internship",
            companyName: "Hammer Tech",
            location: "Miami, FL",
            role: "Robotics Intern",
            skills: "Robotics, Mechanical Engineering, C#, Embedded Systems",
            uploadDate: "20 May, 2024"
        }
    ];    

    const [data, setData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredData = data.filter((item) => 
        item.driveType.toLowerCase().includes(searchTerm) ||
        item.companyName.toLowerCase().includes(searchTerm) ||
        item.location.toLowerCase().includes(searchTerm) ||
        item.role.toLowerCase().includes(searchTerm)
    );

    return (
        <div>
            <div style={{display:'flex', alignItems:'center'}}>
                <div style={{margin:'10px'}}>
                    <Heading size='lg'>Job Portal</Heading>
                    <Text size='lg' fontSize='18px'>Upload and view Job opportunities</Text>
                </div>
                <Spacer/>
                <InputGroup size='lg' w='360px' style={{margin:'15px'}}>
                    <Input value={searchTerm} onChange={handleSearchChange} variant='filled' style={{borderRadius:'30px', boxShadow:'0 2px 7px gray'}} size='lg' type='text' placeholder='search by role, company, location' />
                    <InputRightElement>
                    <Search2Icon size='lg' color='gray' />
                    </InputRightElement>
                </InputGroup>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'3fr 1fr'}}>
                <div style={{display:'grid', margin:'15px', gap:'10px'}}>
                    {filteredData && filteredData.map((item, index)=>{
                        return(
                            <Card>
                                <CardBody>
                                    <Text size='md'>{item.driveType.toUpperCase()}</Text>
                                    <p style={{fontSize:'14px', color:'rgb(140, 140, 140)'}}>{item.uploadDate}</p>
                                    <Text size='md'>Company : {item.companyName}</Text>
                                    <Text size='md'>Location : {item.location}</Text>
                                    <Text size='md'>Job Area : {item.role}</Text>
                                    <Text size='md'>Skills : {item.skills}</Text>
                                </CardBody>
                            </Card>
                        );
                    })}
                </div>
                <div style={{margin:'15px 15px 15px 0'}}>
                    <Button bg='#0195FF' w={'100%'} color='white' mb='10px' rightIcon={<AddIcon/>}>Post Jobs</Button>
                    <Button bg='#0195FF' w={'100%'} color='white' mb='10px' rightIcon={<AddIcon/>}>Post Internships</Button>
                    <Button bg='#0195FF' w={'100%'} color='white' mb='10px' rightIcon={<AddIcon/>}>Upload Resume</Button>
                </div>
            </div>
            {/* <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, 200px)', width:'90%', justifyContent:'center', margin:'0 auto', gap:'15px', marginTop:'20px'}}>
                
            </div> */}
        </div>
    );
}
