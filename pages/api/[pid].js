import fs from "fs";
import { Provider } from 'starknet';
import { stringToFelt } from "../../utils/felt";

export default function handler(req, res) {

  const { pid } = req.query;
  const readContract = (name) => JSON.parse(fs.readFileSync(`./${name}.json`).toString('ascii'));

  const provider = new Provider({
    baseUrl: 'https://hackathon-2.starknet.io',
    feederGatewayUrl: 'feeder_gateway',
    gatewayUrl: 'gateway',
  })

  const callData = ["0x1", "0x770E07EBD9F9661344F2EC9267E3ECD1505BC1D20DFB4B12D61CB5CA37B168C", "0x0", "0x0", "0x119D1E6B289769E51750BBB83731D5CBBB284E927549436CF5D8E86484E079", stringToFelt(pid)];
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
