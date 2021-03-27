import Events from "events"
import CliConfig from "./src/cliConfig.js"
import SocketClient from "./src/socket.js"

const [nodePath, filePath, ...commands] = process.argv
const config = CliConfig.parseArguments(commands)

const socketClient = new SocketClient(config)
await socketClient.initialize()
