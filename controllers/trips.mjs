// db is an argument to this function so
// that we can make db queries inside
export default function initTripsController(db) {
  const index = (request, response) => {
    db.Trip.findAll()
      .then((trips) => {
        console.log(trips);
        response.send({ trips });
      })
      .catch((error) => console.log(error));
  };

  const submitTrip = async (request, response) => {
    console.log('printing request.body received from front end...');
    console.log(request.body);

    try {
      const {
        name,
      } = request.body;

      const newTripObject = {
        name,
      };

      console.log('printing newTripObject:');
      console.log(newTripObject);

      const newTrip = await db.Trip.create(newTripObject);

      const { id } = newTrip;
      console.log(`submitted trip id: ${id}`);

      response.sendStatus(200);
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    index,
    submitTrip,
  };
}
