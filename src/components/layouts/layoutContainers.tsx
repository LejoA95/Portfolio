"use client";
import { Box } from "@mui/material";
import styled from "styled-components";

const ContainerCard = styled(Box)`
    background-color: #3b3b3b66;
    border: 1.5px solid #505050;
    overflow: hidden;
    padding: 3em 1em 1em;
    position: relative;
    border-radius: 8px;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 10);
    width: 100%;
    margin: 0 auto;
`;

export function LayoutCard({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ContainerCard>
            {children}
        </ContainerCard>
    );
}


const ContainerDoingCard = styled(Box)`
    width: 100%;
    height: 100px;
    perspective: 1000px;
`;

export function LayoutDoingCard({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ContainerDoingCard>
            {children}
        </ContainerDoingCard>
    );
}

