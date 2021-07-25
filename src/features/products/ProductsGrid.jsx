import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import { fetchProducts } from './productsSlice';
import { useDispatch } from 'react-redux';


function ProductsGrid() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const productsStatus = useSelector(state => state.products.status);
  const productsError = useSelector(state => state.products.error);

  useEffect(() => {

    if (productsStatus === 'idle') {
      dispatch(fetchProducts())
    }
  }, [productsStatus, dispatch])
  const productsRend = products.map(product => <Grid align="center"  item xs={12} md={4} lg={4} xl={3}>
    <Card sx={{ maxWidth: 400, height: 350 }} variant="outlined">
      <CardActionArea>
        <CardMedia
          sx={{ height: 175 }}
          image={product.image}
          title="Contemplative Reptile"
        />
        <CardContent style={{ height: 75 }}>
          <Typography gutterBottom variant="h6" component="div">
           <a href={`/product/${product.id}`}>{product.title}</a> 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read more
        </Button>
      </CardActions>
    </Card>
  </Grid>)
  return (
    productsStatus === "loading" ? <div> Loading... </div> :
      productsStatus === "succeeded" ?


          <Grid container 
             display="flex"
             spacing={3}
             alignItems="center"
             justify="center"
             alignItems="flex-start"
            
           

          >
            {productsRend}
          </Grid>
        :
        productsStatus === "failed" ? <div>{productsError}</div> : null
  )
}

export default ProductsGrid
