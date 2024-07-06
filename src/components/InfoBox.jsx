/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WhatshotIcon from "@mui/icons-material/Whatshot";
const InfoBox = ({ info }) => {
  let rain =
    "https://images.unsplash.com/photo-1618557703025-7ec58c83581a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  let hot =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  let cold =
    "https://images.unsplash.com/photo-1480775661506-541bb9d526b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbGR8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="text-center mt-20 flex flex-col items-center justify-center ">
      <h1 className="text-3xl mb-6">Wheather Info - {info.weather} </h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={info.humidity > 80 ? rain : info.temp > 15 ? hot : cold}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <WhatshotIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="span">
            <div>Temperature = {info.temp} </div>
            <div>Humidity = {info.humidity} </div>
            <div>Min Temperature = {info.tempMin} </div>
            <div>Max Temperature = {info.tempMax} </div>
            <div>
              The Weather can be described as <i> {info.weather} </i> and feels
              like
              {info.feelsLike} &deg;C
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoBox;
