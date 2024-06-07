import React, { useState } from 'react';
import styled from 'styled-components';
import { Booking } from '../Booking';

const Container = styled.div`
    font-family: Arial, sans-serif;
    margin: 20px;
`;

const Title = styled.h1`
    margin-bottom: 20px;
`;

export const HotelForm = ({onSearch}) => {

    return (
        <Container>
            <Booking onSearch={onSearch}/>
        </Container>
    );
}