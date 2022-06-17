// db is an argument to this function so
// that we can make db queries inside
export default function initRoutesController(db) {
  const index = (request, response) => {
    db.Route.findAll()
      .then((routes) => {
        response.send({ routes });
      })
      .catch((error) => console.log(error));
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used

  const getRoutesForOneTrip = async (request, response) => {
    console.log(request.params.id);
    try {
      const routesForThisTrip = await db.Route.findAll({
        where: {
          tripId: request.params.id,
        },
      });
      console.log('did this controller work?');
      console.log(routesForThisTrip);
      response.send(routesForThisTrip);
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  };

  return {
    index,
    getRoutesForOneTrip,
  };
}
