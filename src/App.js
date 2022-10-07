import './App.css';
import { AppBar, Card, CardContent, CardMedia, Chip, FormControl, Grid, MenuItem, OutlinedInput, Select, TextField, ToggleButton, ToggleButtonGroup, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';



function App() {

  const [listData, setlistData] = useState([
    {
      id: 1,
      pic: "https://images.olx.com.pk/thumbnails/261948246-400x300.webp",
      title: "Apple Iphone 14pro",
      desc: "Rs 129,999",
      location: "Mirpur khas",
      category: "Electonics"
    },
    {
      id: 2,
      pic: "https://images.olx.com.pk/thumbnails/289416607-400x300.webp",
      title: "Bike 125cc",
      desc: "Rs 200,000",
      location: "Karachi", category: "Engine"
    },
    {
      id: 3,
      pic: "https://images.olx.com.pk/thumbnails/289416607-400x300.webp",
      title: "Dell workstation",
      desc: "Rs 120,000",
      location: "Lahore",
      category: "Electonics"
    },
    {
      id: 4,
      pic: "https://images.olx.com.pk/thumbnails/289416607-400x300.webp",
      title: "Treadmill Machine",
      desc: "Rs 135,000",
      location: "Mirpur khas",
      category: "Electonics"
    },
    {
      id: 5,
      pic: "https://images.olx.com.pk/thumbnails/289416607-400x300.webp",
      title: "S 20 lite",
      desc: "Rs 15,000",
      location: "Mirpur khas",
      category: "Electonics"
    },
    {
      id: 6,
      pic: "https://images.olx.com.pk/thumbnails/289416607-400x300.webp",
      title: "Oval Chopper",
      desc: "Rs 950",
      location: "Mirpur khas",
      category: "Machine"
    },
    {
      id: 7,
      pic: "https://images.olx.com.pk/thumbnails/289416607-400x300.webp",
      title: "Vivo c21e",
      desc: "Rs 43,000",
      location: "Mirpur khas",
      category: "Electonics"
    },
    {
      id: 8,
      pic: "https://images.olx.com.pk/thumbnails/289416607-400x300.webp",
      title: "Nikon D3200 lens",
      desc: "Rs 18,500",
      location: "Mirpur khas",
      category: "Electonics"
    },
    {
      id: 9,
      pic: "https://images.olx.com.pk/thumbnails/289416607-400x300.webp",
      title: "Ps5",
      desc: "Rs 100,000",
      location: "Mirpur khas",
      category: "Games"
    },
    {
      id: 10,
      pic: "https://images.olx.com.pk/thumbnails/289416607-400x300.webp",
      title: "Cd playes",
      desc: "Rs 3,000",
      location: "Mirpur khas",
      category: "Electonics"
    },
    {
      id: 11,
      pic: "https://images.olx.com.pk/thumbnails/289416607-400x300.webp",
      title: "Hp laptop",
      desc: "Rs 50,000",
      location: "Mirpur khas",
      category: "Electonics"
    },
    {
      id: 12,
      pic: "https://images.olx.com.pk/thumbnails/289416607-400x300.webp",
      title: "S21 Ultra",
      desc: "Rs 185,000",
      location: "Mirpur khas",
      category: "Electonics"
    },
    {
      id: 13,
      pic: "https://images.olx.com.pk/thumbnails/289416607-400x300.webp",
      title: "Note 10",
      desc: "Rs 30,000",
      location: "Mirpur khas",
      category: "Electonics"
    },
    {
      id: 14,
      pic: "https://images.olx.com.pk/thumbnails/289416607-400x300.webp",
      title: "Nikon Camera",
      desc: "Rs 30,000",
      location: "Mirpur khas",
      category: "Electonics"
    },

    {
      id: 15,
      pic: "https://images.olx.com.pk/thumbnails/289416607-400x300.webp",
      title: "GTa 5 Online",
      desc: "Rs 2,000",
      location: "Mirpur khas",
      category: "Games"
    },
    {
      id: 16,
      pic: "https://images.olx.com.pk/thumbnails/289416607-400x300.webp",
      title: "Oval Chopper",
      desc: "Rs 950",
      location: "Mirpur khas",
      category: "Machine"
    },
    {
      id: 17,
      pic: "https://images.olx.com.pk/thumbnails/289416607-400x300.webp",
      title: "Oval Chopper",
      desc: "Rs 950",
      location: "Mirpur khas",
      category: "Machine"
    },
    {
      id: 18,
      pic: "https://images.olx.com.pk/thumbnails/289416607-400x300.webp",
      title: "Oval Chopper",
      desc: "Rs 950",
      location: "Mirpur khas",
      category: "Machine"
    },
    {
      id: 19,
      pic: "https://images.olx.com.pk/thumbnails/289416607-400x300.webp",
      title: "Oval Chopper",
      desc: "Rs 950",
      location: "Mirpur khas", category: "Machine"
    },
    {
      id: 20,
      pic: "https://images.olx.com.pk/thumbnails/289416607-400x300.webp",
      title: "Oval Chopper",
      desc: "Rs 950",
      location: "Mirpur khas", category: "Machine"
    },
  ])
  const [allCategories, setAllCategories] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  let [selectedCategoryArr, setSelectedCategoryArr] = useState([]);

  const [filterList, setFilterList] = useState([]);

  // extracting all categories from main product Array
  let getCategories = () => {
    let li = listData.map((x) => x.category);
    li = [...new Set([...li])];
    setAllCategories([...li]);
  };

  // Render Item By DropDown
  let searchCategoryItem = (val) => {
    let filteredList = [];
    selectedCategoryArr.forEach((y) => {
      filteredList = [
        ...filteredList,
        ...listData.filter(
          (x) =>
            x.category == y && x.title.toLowerCase().includes(val.toLowerCase())
        ),
      ];
    });

    setFilterList([...filteredList]);
  };

  // search Item By DropDown and Input

  let selectChip = (val) => {
    let arr = [...selectedCategoryArr];
    arr.push(val);
    arr = [...new Set([...arr])];

    let arr2 = [];

    arr.forEach((y) => {
      arr2 = [...arr2, ...listData.filter((x) => x.category == y)];
    });

    setFilterList([...arr2]);
    setSelectedCategoryArr([...arr]);
  };
  let removeCategory = (ind) => {
    selectedCategoryArr.splice(ind, 1);
    setSelectedCategoryArr([...selectedCategoryArr]);

    let arr2 = [];

    selectedCategoryArr.forEach((y) => {
      arr2 = [...arr2, ...listData.filter((x) => x.category == y)];
    });

    setFilterList([...arr2]);
  };

  // it will run when component initialize ...
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div>
      <div>
        <AppBar sx={{ backgroundColor: "white", color: "black", }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant='h5' align='center' sx={{ textDecoration: "underline", fontWeight: "bold", marginX: "15px", marginY: "20px" }}>Products</Typography>
            <Typography variant='h5' align='center' sx={{ fontWeight: "bold", marginX: "15px", marginY: "20px" }}>Manufacture</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-evenly", marginX: "90px" }}>
            <img width="150px" src='https://queenschamber.glueup.com/resources/public/images/logo/400x200/5c72c188-a33d-4872-8e0d-f7587caf4277.png' />
            {/* <TextField  /> */}
            <TextField color='warning' className='inp' variant='outlined' fullWidth placeholder="Serach" sx={{ marginLeft: "30px" }}
              onChange={(e) => searchCategoryItem(e.target.value)} />

          </Box>
          <Grid container>
            <Grid item md={12}>
              <Box sx={{ padding: 2 }}>
                {selectedCategoryArr && selectedCategoryArr.length > 0
                  ? selectedCategoryArr.map((x, i) => (
                    <Chip
                      key={i}
                      onDelete={() => removeCategory(i)}
                      color="primary"
                      label={x}
                    />
                  ))
                  : null}

                {allCategories && allCategories.length > 0
                  ? allCategories.map((x, i) => (
                    <Chip key={i} onClick={() => selectChip(x)} label={x} />
                  ))
                  : null}
              </Box>
            </Grid>
            </Grid>


        </AppBar>
      </div>


      <div>
      <Grid container sx={{marginTop:"500px"}}>
        {filterList.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={item.pic}
              alt="green iguana"
            />
            <CardContent>
              <Tooltip title={item.title}>
                <Typography gutterBottom variant="h5" component="div" sx={{ overflow: "hidden" }}>
                  {item.title.slice(0, 30) + (item.title.length > 30 ? "..." : "")}
                </Typography>
              </Tooltip>

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
      <hr />
        <Box sx={{ flexGrow: 1, padding: "30px", }}>
          <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }}>

            {listData.map((item, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.pic}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Tooltip title={item.title}>
                      <Typography gutterBottom variant="h5" component="div" sx={{ overflow: "hidden" }}>
                        {item.title.slice(0, 30) + (item.title.length > 30 ? "..." : "")}
                      </Typography>
                    </Tooltip>

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
    </div >
  );
}

export default App;
