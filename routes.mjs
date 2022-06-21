import db from './models/index.mjs';

// import your controllers here
import initRoutesController from './controllers/routes.mjs';
import initTripsController from './controllers/trips.mjs';

export default function bindRoutes(app) {
  // pass in the db for all items callbacks
  const RoutesController = initRoutesController(db);
  const TripsController = initTripsController(db);

  app.get('/routes', RoutesController.index);

  app.get('/trips', TripsController.index);

  app.post('/trip', TripsController.submitTrip);

  app.get('/trip/:id', RoutesController.getRoutesForOneTrip);

  // add new route to trip
  app.post('/addRoute/:id', RoutesController.addNewRoute);
}
