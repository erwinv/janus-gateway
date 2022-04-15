import Janus, { VideoroomPluginHandle } from '../janus.es'

// 1. Create session
const session = new Janus({
	server: [
		'wss://janus.domain.tld',
		'https://janus.domain.tld/janus',
	],
})

let publisherHandle: VideoroomPluginHandle;
let subscriberHandle: VideoroomPluginHandle;

// 2. Attach Videoroom publisher handle
session.attach({
	plugin: 'janus.plugin.videoroom',
	success: (handle) => {
		publisherHandle = handle
	},
	error: () => {

	},
	onmessage: (message, jsep) => {

	},
})

// 3. Join videoroom as publisher
publisherHandle.send({
	message: {
		request: 'join',
	},
	success: (res) => {

	},
})

// 4. Attach videoroom subscriber handle
session.attach({
	plugin: 'janus.plugin.videoroom',
	success: (handle) => {
		subscriberHandle = handle
	},
	error: () => {

	},
	onmessage: (message, jsep) => {

	},
})

// 5. Join videoroom as subscriber
subscriberHandle.send({
	message: {
		request: 'join',
	},
	success: (res) => {

	},
})
