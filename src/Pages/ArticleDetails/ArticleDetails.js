import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Navigation from '../../Shared/Navigation/Navigation';
import { Container } from '@mui/material';

const ArticleDetails = () => {
    const { articleId } = useParams();
    const [articleDetails, setArticleDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/articles/${articleId}`)
            .then(res => res.json())
            .then(data => setArticleDetails(data))
    }, [articleId]);
    return (
        <>
            <Navigation />
            <Container>
                <Card style={{ textAlign: 'center', margin: '20px', padding: '10px' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 'auto', borderRadius: '10px' }}
                        image={articleDetails.img}
                        alt=""
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                {articleDetails.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {articleDetails.description}
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Container>
        </>
    );
};

export default ArticleDetails;