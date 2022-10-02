import './App.css';
import { AppBar, Card, CardContent, CardMedia, Chip, Grid, TextField, ToggleButtonGroup, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import Data from './carddata';


function App() {

  const [Txt, setTxt] = useState("");
  const searchtxt = (e) => {
    setTxt(e.taget.value);
  }
  console.warn(Txt)
  let datasearch = Data.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(Txt.toString().toLowerCase())
    )
  })
  

  return (
    <div>
      <div>
        <AppBar sx={{ backgroundColor: "white", color: "black", }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant='h5' align='center' sx={{ textDecoration: "underline", fontWeight: "bold", paddingX: "15px", paddingY: "20px" }}>Products</Typography>
            <Typography variant='h5' align='center' sx={{ fontWeight: "bold", paddingX: "15px", paddingY: "20px" }}>Manufacture</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-evenly", paddingX: "90px" }}>
            <img width="150px" src='https://queenschamber.glueup.com/resources/public/images/logo/400x200/5c72c188-a33d-4872-8e0d-f7587caf4277.png' />
            {/* <TextField  /> */}
            <TextField color='warning' variant='outlined' fullWidth placeholder="Serach" sx={{ marginLeft: "30px" }} value={Txt} onChange={(e) => {
              setTxt(e.target.value)
            }} />

          </Box>
          <Box>
            {datasearch.map((item,id)=>(
              <Chip key={id} label={[...new Set(item.category)]} />
            ))}
          </Box>
        </AppBar>
      </div>


      <div>
        <Box sx={{ flexGrow: 1, padding: "30px",marginTop:"200px"}}>
          <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }}>

            {datasearch.map((item, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.pic}
                    alt="green iguana"
                  />
                  <CardContent>

                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.desc}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.location}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default App;
