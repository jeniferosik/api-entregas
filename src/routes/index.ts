import { Router } from "express";
import { deliveriesRoutes } from "./deliveriesRoutes";
import { deliveryLogsRoutes } from "./deliveryLogsRoutes";
import { sessionsRoutes } from "./sessionsRoutes";
import { userRoutes } from "./userRoutes";

const routes = Router();
routes.use("/users", userRoutes);
routes.use("/sessions", sessionsRoutes);
routes.use("/deliveries", deliveriesRoutes);
routes.use("/delivery-logs", deliveryLogsRoutes);

export { routes };
