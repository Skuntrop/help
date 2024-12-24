import {Card, CardActionArea, CardContent, CardMedia, Grid2, Typography} from "@mui/material";

function Cards({cards, navigating}) {
    return (
        <div className="Cards">
            <Grid2
                container
                spacing={4}
                columns={{xs: 4, sm: 8, md: 12}}
                sx={{justifyContent: 'space-around'}}
            >
                {cards.map(card => (
                    <Card key={card.id} sx={{width: 245}}>
                        <CardActionArea onClick={() => navigating(card.title)}>
                            <CardMedia
                                sx={{height: 140}}
                                image='/public/logo512.png'
                                title={card.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    {card.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Grid2>
        </div>
    );
}

export default Cards;