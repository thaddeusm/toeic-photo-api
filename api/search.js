const { send } = require('micro')
const cors = require('micro-cors')()

const PexelsAPI = require('pexels-api-wrapper')
const API_KEY = process.env.PEXEL_KEY

var pexelsClient = new PexelsAPI(API_KEY)

const handler = (req, res) => {
	pexelsClient.search(req.query.searchTerm, 30, 1)
	    .then(function(result){
	        return res.status(200).json({"photos": result})
	    }).
	    catch(function(e){
	    	return res.status(400).json({"error": e})
	    });
}

module.exports = cors(handler)