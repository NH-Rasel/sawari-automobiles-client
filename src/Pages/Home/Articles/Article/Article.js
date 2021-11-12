import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';
import { Box } from '@mui/system';

const Article = (props) => {
    const { img, title, description } = props.article;

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
                    <Link to="/carDetails"><Button>Read More</Button></Link>
                </Box>
            </Paper>
        </>
    );
};

export default Article;