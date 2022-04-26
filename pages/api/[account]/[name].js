import fs from "fs";
import { Provider } from 'starknet';
import { stringToFelt } from "../../../utils/felt";
import { json } from "starknet";

export default function handler(req, res) {

  const { account, name } = req.query;
  const readContract = (name) => json.parse(fs.readFileSync(`./${name}.json`).toString('ascii'));

  const provider = new Provider({
    baseUrl: 'https://hackathon-2.starknet.io',
    feederGatewayUrl: 'feeder_gateway',
    gatewayUrl: 'gateway',
  })

  const callData = ["0x1", "0x770E07EBD9F9661344F2EC9267E3ECD1505BC1D20DFB4B12D61CB5CA37B168C", "0x0", "0x0", account, stringToFelt(name)];
  provider.deployContract({
    contract: readContract("contracts/Guilds"),
    constructorCalldata: callData
  }).then(
    function (value) {
      res.status(200).json(value)
    },
    function (error) { res.status(200).json(error) }
  );

}
