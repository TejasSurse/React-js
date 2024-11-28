import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox({ info }) {
    const INI_URI = "https://img.freepik.com/premium-photo/sunny-summer-background-with-clear-blue-sky-lush-green-meadow-tranquil-sunny-sunny-weather-field-summer-vibes-vibrant-sunny-day-nature-macro-blue-sky-peaceful-sunlight_1336356-632.jpg";
   
    return (
        <>
            <div className="InfoBox">
                <div className='cardContainer'>
                
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={INI_URI}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <div>Temperature = {info.temp}°C</div>
                                <div>Humidity = {info.humidity}%</div>
                                <div>Min Temp = {info.tempMin}°C</div>
                                <div>Max Temp = {info.tempMax}°C</div>
                                <div>The Weather is Describe as {info.weather} Fells Like {info.feelslike}°C</div>
                            </Typography>
                        </CardContent>

                    </Card>
                </div>
            </div>


        </>
    );
}