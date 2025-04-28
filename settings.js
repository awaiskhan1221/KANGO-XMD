/*
  project_name : 𝙆𝘼𝙉𝙂𝙊-𝙓𝙈𝘿 Bot
  Version : 2.4.0
  Owner : Hector Manuel
  Do Not Clone 


*/

//----------------------[ 𝙆𝘼𝙉𝙂𝙊-𝙓𝙈𝘿]----------------------//

const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || '' 
//Enter your 𝙆𝘼𝙉𝙂𝙊-𝙓𝙈𝘿 session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || '𝗙𝗞 𝗜𝟱𝗥𝟰𝗟 𝗕𝗬  𝗡𝟭𝗟' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '923190969425' 

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || ' 𝗙𝗞 𝗜𝟱𝗥𝟰𝗟 𝗕𝗬  𝗡𝟭𝗟' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "𝗙𝗞 𝗜𝟱𝗥𝟰𝗟 𝗕𝗬  𝗡𝟭𝗟" 

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "𝗙𝗞 𝗜𝟱𝗥𝟰𝗟 𝗕𝗬  𝗡𝟭𝗟" 

//----------------------[ TIMEZONE ]--------------------//

global.timezones = process.env.TIMEZONE || "Africa/Accra" 
//Don't edit this if you don't know!

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";
// Not really necessary on panels/vps/termux, just put it when bot settings reset when bot restarts.

//Go to https://github.com/settings/tokens, select 'Tokens (classic)', then tap 'Generate new token' and select 'Generate new token (classic)'. Enter any note, choose 'No expiration', and under 'Select scopes', tick 'repo'. Scroll down, generate the token, and copy it. Paste it here. If using a single token for multiple bots, change the owner number to avoid settings mixups.


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> 𝗙𝗞 𝗜𝟱𝗥𝟰𝗟 𝗕𝗬  𝗡𝟭𝗟"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '𝗗𝗢𝗡𝟯 𝗕𝗔𝗕𝗬 𝗙𝗞 𝗜𝟱𝗥𝟰𝗟 𝗕𝗬  𝗡𝟭𝗟  ', 
  success: '> 𝗙𝗞 𝗜𝟱𝗥𝟰𝗟 𝗕𝗬  𝗡𝟭𝗟', 
  owner: `𝗧𝗨𝗝𝗛𝗘 𝗞𝟯𝗦 𝗡𝟯 𝗕𝗢𝗟𝗔 𝗬𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗨𝗦𝗘 𝗞𝗥𝗡𝗘 𝗞𝗘 𝗕𝗖!*`, 
  group: '*𝗬𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗦𝗘𝟰𝗙 𝗚𝗖 𝗠𝗘 𝗪𝗢𝗥𝗞 𝗞𝗥𝗘𝗚𝗔 𝗕𝗛𝗔𝗜𝗜𝗬𝗔𝗔𝗔!*', 
  admin: '*𝗔𝗕𝗛𝗘𝟯 𝗣𝗘𝗛𝗟𝗘 𝗔𝗗𝗠𝟭𝗡 𝗣𝗛𝗘𝗡𝗡𝗞𝗞 𝗠𝗘𝗥𝟭 𝗞𝗢!*', 
  notadmin: '*𝗔𝗕𝗛𝗘𝗘 𝗕𝗖 𝗬𝗘 𝗦𝗘𝗥𝗙 𝗔𝗗𝗠𝗜𝗡 𝗞𝗘𝗟𝗬𝗛 𝗪𝗢𝗥𝗞 𝗞𝗥𝗧𝗔 𝗛𝗘!*' 
}

//--------------[ DEVELOPER SETTINGS ]---------------//
/* Do not change anything here!!! */

//😞 

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ 𝙆𝘼𝙉𝙂𝙊-𝙓𝙈𝘿 ]----------------------//
