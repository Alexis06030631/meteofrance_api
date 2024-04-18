import {emitWarning} from "process"
import axios from "axios"
// @ts-ignore
import * as package_Dt from "../package.json"
const url = "https://registry.npmjs.org/meteofrance_api";

const colors = {
	"reset": "\x1b[0m",
	"bright": "\x1b[1m",
	"dim": "\x1b[2m",
	"underscore": "\x1b[4m",
	"blink": "\x1b[5m",
	"reverse": "\x1b[7m",
	"hidden": "\x1b[8m",
	"black": "\x1b[30m",
	"red": "\x1b[31m",
	"green": "\x1b[32m",
	"yellow": "\x1b[33m",
	"blue": "\x1b[34m",
	"magenta": "\x1b[35m",
	"cyan": "\x1b[36m",
	"white": "\x1b[37m",
	"orange": "\x1b[38;5;208m",
	"lightblue": "\x1b[38;5;39m",
	"lightgreen": "\x1b[38;5;120m",
	"lightred": "\x1b[38;5;196m",
	"gray": "\x1b[38;5;240m",
}

function addColor(text: string, color:string) {
	// @ts-ignore
	return `${colors[color]} ${text} ${colors.reset}`;
}

axios.get(url).then((response) => {
	if(response.data["dist-tags"].latest > package_Dt.version) {
		// check if is a minor update
		const UpdateMsg = `A new version of ${addColor(response.data["name"], 'orange')} is available! (${addColor('v'+package_Dt.version, 'gray')} -> ${addColor('v'+response.data["dist-tags"].latest, 'cyan')})`;
		const TutoMsg = `Run ${addColor('npm i '+response.data["name"]+'@latest', 'lightblue')} to update it!`;
		const WarningMsg = (response.data["dist-tags"].latest.split('.')[0] > package_Dt.version.split('.')[0] || response.data["dist-tags"].latest.split('.')[1] > package_Dt.version.split('.')[1])? `This new version may render your code ${addColor('obsolete', 'lightred')} and cause ${addColor('errors', 'lightred')}. Please refer to the documentation in case of problems.`: ''

		const UpdateMsgLength = UpdateMsg.replace(/\x1b\[[0-9;]*m/g, '').length;
		const TutoMsgLength = TutoMsg.replace(/\x1b\[[0-9;]*m/g, '').length;
		const WarningMsgLength = WarningMsg.replace(/\x1b\[[0-9;]*m/g, '').length;
		const MaxLength = Math.max(UpdateMsgLength, TutoMsgLength, WarningMsgLength);

		emitWarning(
			addColor('\n┌'+'─'.repeat(MaxLength+2)+'┐', 'gray')+
			addColor('\n│ '+' '.repeat(MaxLength+1)+'│', 'gray')+
			addColor('\n│ '+' '.repeat(Math.floor((MaxLength-UpdateMsgLength)/2))+UpdateMsg+' '.repeat(Math.ceil((MaxLength-UpdateMsgLength)/2))+ addColor('│','gray'), 'gray')+
			addColor('\n│ '+' '.repeat(Math.floor((MaxLength-TutoMsgLength)/2))+TutoMsg+' '.repeat(Math.ceil((MaxLength-TutoMsgLength)/2))+addColor('│','gray'), 'gray')+
			((response.data["dist-tags"].latest.split('.')[0] > package_Dt.version.split('.')[0] || response.data["dist-tags"].latest.split('.')[1] > package_Dt.version.split('.')[1])?addColor('\n│ '+' '.repeat(Math.floor((MaxLength-WarningMsgLength)/2))+WarningMsg+' '.repeat(Math.ceil((MaxLength-WarningMsgLength)/2))+addColor('│','gray'), 'gray') : '') +
			addColor('\n│ '+' '.repeat(MaxLength+1)+'│', 'gray')+
			addColor('\n└'+'─'.repeat(MaxLength+2)+'┘', 'gray')
		,'DeprecationWarning')
	}
}).catch(()=>{})