<!DOCTYPE html>
<html>

    <head>
        <title></title>
    </head>

        <body>
            <h1>Find the Latitude and Longitude of your Location.</h1>
            <form action="" method="GET">
                <input type="text" name="location">
                <input type="submit" value="Get Geocode">
            </form>
            <br>

            <?php 
                if (!empty($_GET['location'])) {
                    $API_KEY = 'API KEY'; // need to acquire an API key for this service to work properly
                    $location = $_GET['location'];

                    $maps_url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' . 
                    urlencode($location) . "&key=" . $API_KEY;

                    $maps_json = file_get_contents($maps_url);
                    $maps_array = json_decode($maps_json, true);

                    $lat = $maps_array['results'][0]['geometry']['location']['lat'];
                    $lng = $maps_array['results'][0]['geometry']['location']['lng'];
                    $address = $maps_array['results'][0]['formatted_address'];
                }
            ?>

            <?php 
                if (!empty($_GET['location'])) {
                    echo "latitude: " . $lat . "<br>";
                    echo "longitude: " . $lng . "<br>";
                    echo $address;
                }
            ?>
        </body>

</html>