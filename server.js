const express = require('express');
const app = express();
const loudness = require('loudness');

const port = Boolean(process.argv[2])
	? process.argv[2]
	: 5009;

const config = {
	min: 5, //percentage
	duration: 1000 //ms 
};

app.get('/', (req, res) => {
  res.send('Turning the volume down now 🔇');
  loudness.getVolume((err, initialVolume)=>{
    loudness.setVolume(config.min, err=>{
			setTimeout(
				function(initialVolume){
					loudness.setVolume(initialVolume, err=>{})
				},
				config.duration,
				initialVolume
			)
		})
	})
})

app.listen(port, () => console.log(`Listening on port ${port}...`))
