const config = require('../config'); const {cmd, commands} = require('../command'); cmd({ pattern: "dilo", alias: ["owner","developer","bot"], desc: "Check if the bot is online.", category: "main", filename: __filename }, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => { try { const status = `*Name*: Dilan\n*From*: Matara\n*Number*: 94727839446\n*Web*: dilalk.vercel.app`; const imageUrl = 'https://telegra.ph/file/dcd097f9f7a124d47e5b2.jpg'; const audioUrl = 'https://drive.google.com/uc?export=download&id=1YYPnkKWdrxFe8C2kWdwf8qkeE0PO5RjW'; const quotedMessage = mek ? mek : null; await conn.sendMessage(from, { image: { url: imageUrl }, caption: status }, { quoted: quotedMessage }); await conn.sendPresenceUpdate('recording', from); await conn.sendMessage(from, { audio: { url: audioUrl }, mimetype: 'audio/mp4', ptt: true }, { quoted: quotedMessage }); } catch (e) { console.error('Error sending message:', e); reply(`An error occurred: ${e.message}`); } });