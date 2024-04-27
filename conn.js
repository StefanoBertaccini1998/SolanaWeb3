const web3 = require("@solana/web3.js");

let connection = new web3.Connection(web3.clusterApiUrl("devnet"), "confirmed");

let slot = await connection.getSlot();
console.log(slot);

let blockTime = await connection.getBlockTime(slot);
console.log(blockTime);

let block = await connection.getBlock(slot);
console.log(blockTime);
