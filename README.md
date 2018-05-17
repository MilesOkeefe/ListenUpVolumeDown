# 🔇 ListenUpVolumeDown
Simple service which temporarily lowers your volume at the request of coworkers.


## Installation

1. `git clone https://github.com/MilesOkeefe/ListenUpVolumeDown`

2. `cd ListenUpVolumeDown`

3. `yarn`

## Running

1. First start the server:

    `yarn start` or `node server.js`

2. Then tell your coworkers to visit this link when they want your attention: `http://$YOUR_LOCAL_IP/`


## Details

The default port is 5009, specify a different one like this:

`node server.js 6009`

You can get your local IP with this command:

`ipconfig getifaddr en0`

Coworkers will need to be on the same local network as you for this to work as described.