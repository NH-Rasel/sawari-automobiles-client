import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Article from './Article/Article';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('https://sawari-automobiles-server.onrender.com/articles')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])
    return (
        <Box>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 4 }} variant="h4" gutter component="div">
                    Articles
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} item xs={12} sm={6} md={4}>
                    {
                        articles.map(article => <Article
                            key={article._id}
                            article={article}
                        ></Article>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Articles;