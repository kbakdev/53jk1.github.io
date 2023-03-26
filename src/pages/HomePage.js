import React from 'react';
import styled from 'styled-components';
import profilePic from '../images/profile.jpg';

const HomePage = () => {
    return (
        <HomeContainer>
            <ProfilePic src={profilePic} alt="Profile" />
            <Name>Kacper Bąk</Name>
            <JobTitle>Software Engineer & Backend Developer</JobTitle>
        </HomeContainer>
    );
};

const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
  
`;

const ProfilePic = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 20px;
`;


const Name = styled.h1`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const JobTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;


export default HomePage;
