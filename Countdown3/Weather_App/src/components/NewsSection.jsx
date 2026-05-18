import { Box, Card, CardActionArea, CardContent, Grid, Link, Typography } from "@mui/material";

const NewsSection = ({ articles }) => {
    if (articles.length === 0) {
        return null;
    }

    return (
        <Box component="section">
            <Typography variant="h5" component="h2" className="sectionTitle">
                Trending News
            </Typography>
            <Grid container spacing={2}>
                {articles.slice(0, 5).map((article) => {
                    const imageUrl = article.media?.[0]?.["media-metadata"]?.[2]?.url;

                    return (
                        <Grid item xs={12} md={6} lg={4} key={article.url}>
                            <Card className="newsCard" elevation={0}>
                                <CardActionArea component="a" href={article.url} target="_blank" rel="noopener noreferrer">
                                    {imageUrl && <img className="newsImage" src={imageUrl} alt={article.title} />}
                                    <CardContent>
                                        <Typography variant="subtitle1" component="h3">
                                            <Link color="inherit" underline="none">
                                                {article.title}
                                            </Link>
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {article.abstract}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default NewsSection;
