"use client"
import { LayoutCard } from "@/components/layouts/layoutContainers";
import Grid from '@mui/material/Grid2';
import "../globals.css";
import NavBar from "@/components/navbar/navbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutCard>
      <Grid>
        <Grid>
          <NavBar />
          {children}
        </Grid>
      </Grid>
    </LayoutCard>
  );
}
