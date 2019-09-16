const PexelsAPI = require('pexels-api-wrapper')
const API_KEY = process.env.PEXEL_KEY

var pexelsClient = new PexelsAPI(API_KEY)

module.exports = (req, res) => {

	pexelsClient.getCuratedPhotos(10, 1)
	    .then(function(result){
	        res.json(result);
	    }).
	    catch(function(e){
	        res.json(e);
	    });
}
