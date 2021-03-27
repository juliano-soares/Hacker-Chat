import Events from "events";
import TermialController from "./src/terminalController.js";

const componentEmitter = new Events();

const controller = new TermialController();
await controller.initializeTable(componentEmitter);
