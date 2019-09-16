const PexelsAPI = require('pexels-api-wrapper')

var pexelsClient = new PexelsAPI(process.env.PEXEL_KEY);

module.exports = (req, res) => {

	pexelsClient.getCuratedPhotos(10, 1)
	    .then(function(result){
	        res.json(result);
	    }).
	    catch(function(e){
	        res.json(e);
	    });
}
