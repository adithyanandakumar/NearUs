const Peer = require('../models/Peers')

//return count and peer array
const getPeers = async (req, res, next) => {
    try{
        const peer = await Peer.find();
        return res.status(200).json({
            success: true,
            count: peer.length,
            peers: peer
        })
    }
    catch(error){
        return res.status(500).json({
            error: `Server error: ${error}`
        })
    }
}

const addPeers = async (req, res, next) => {
    try {
        const peer = await Peer.create(req.body);
        res.status(200).json({
            success: true,
            peer: peer
        })
    } catch (error) {
        if(error.code === 11000){
            res.status(400).json({
                error: `Error: Peer already exists!`
            })
        }
        res.status(500).json({
        error: `Server error: ${error}`
        });
    }
}


module.exports = getPeers;
module.exports = addPeers;

