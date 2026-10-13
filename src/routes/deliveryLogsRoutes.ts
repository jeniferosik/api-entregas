import { DeliveryLogsController } from "@/controllers/deliveryLogsController";
import { Router } from "express";

import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";

const deliveryLogsRoutes = Router();
const deliveryLogsController = new DeliveryLogsController();

deliveryLogsRoutes.post(
	"/",
	ensureAuthenticated,
	verifyUserAuthorization(["sale"]),
	deliveryLogsController.create,
);

deliveryLogsRoutes.get(
	"/:delivery_id/show",
	ensureAuthenticated,
	verifyUserAuthorization(["sale", "customer"]),
	deliveryLogsController.show,
);

export { deliveryLogsRoutes };
