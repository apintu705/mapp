import React from 'react'
import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import { categories } from '../../const/data';
import { Link , useSearchParams} from 'react-router-dom';

export const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
  return (
    <>
        <Link to={`/create?category=${category || ""}`} style={{textDecoration:"none"}}>
            <StyledButton variant="contained">Create Blog</StyledButton>
        </Link>

        <StyledTable >
            <TableHead>
                <TableRow>
                    <TableCell><Link to="/">All Categories</Link></TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {categories.map((categorie)=>(
                    <TableRow key={categorie.id}>
                    <TableCell>
                        <Link to={`/?category=${categorie.type}`} style={{textDecoration: 'none',color:"black"}}>
                        {categorie.type}
                        </Link>
                    </TableCell>
                    </TableRow>
                ))}
                
            </TableBody>
        </StyledTable >
    </>
  )
}

const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #6495ED;
    color: #fff;
    text-decoration: none;
`;



