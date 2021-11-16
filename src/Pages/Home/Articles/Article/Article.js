import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';
import { Box } from '@mui/system';

const Article = (props) => {
    const { _id, img, title, description } = props.article;

    return (
        <>
            <Paper elevation={3} sx={{ m: 3, width: '320px' }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', padding: '10px', borderRadius: '20px' }}
                    image={img}
                    alt="..."
                />
                <Box sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.slice(0, 200)}
                    </Typography>
                    <Link style={{ textDecoration: 'None' }} to={`/articleDetails/${_id}`}><Button style={{ textDecoration: 'none', backgroundColor: 'orange', padding: '8px', borderRadius: '5px' }} sx={{ m: 3, color: 'black' }}>Read More</Button></Link>
                </Box>
            </Paper>
        </>
    );
};

export default Article;