![Untitled(1)](https://user-images.githubusercontent.com/101154856/192133389-426dc3b0-2de7-4218-a17a-facabba6449e.png)


# Discord-Nuke-Bot
A Discord Nuking bot, made for educational Purposes.
Do NOT use this for terrible and malicious tensions
This is AGAISNT Discord/Terms Of Service/Terms Of Use

# Source Code:
[SourceCode](https://replit.com/@MarinoKunstman1/Discord-Nuke-Bot?v=1)
Source code is in replit.

# Setup:
To setup make a secret/token
call the secret token not Token
token.
For the value get your bot token,
if you do not know how you can search it up on google or youtube.

install discord.js
Make sure this is in the console.
```npm
npm i discord.js
```

if you do not have node installed download it here:
[node](https://nodejs.org/en/)

after installing require it:
```js
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js')
```

Token code:
```js
// Discord bot token to sign in.
const token = process.env['token']
```

Make sure you have the correct Intents:
```js
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ]
})
```

If you want to remove slash commands (Weird)
Remove this code:
```js
// Slash commands
client.on('ready', () => {
  const GuildId = '1019701490186715157'
   const Guild = false
    let commands

    if (Guild) {
      commands = Guild.commands
    } else {
      commands = client.application.commands
    }

  commands?.create({
    name: 'help',
    description: "Gives you a list of commands"
  })
})


// Slash command supporter
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) {
    return
  }
  
  const { commandName, options } = interaction
  if (commandName === 'help') {
    const HelpEMBED = new EmbedBuilder().setTitle("help").setDescription("List of commands to use for nuking..").addFields(
      {
        name: 'delete-channel',
        value: '``Deletes the channel you typed in.``'
      },
      {
        name: 'spam-ping',
        value: '``Spam pings everybody in the channel you typed in.``'
      },
      {
        name: 'spam-dm',
        value: '``Spam dms everybody in the server.``'
      },
      {
        name: 'delete-messages',
        value: '``Deletes every message in the channel you typed in.``'
      },
      {
        name: 'More severe actions.',
        value: "``warning more severe actions to the server.``"
      },
      {
        name: 'delete-channels',
        value: '``Deletes Every single channel``'
      },
      {
        name: 'spam-channels',
        value: '``spams every single channel, while spam pinging everybody.``'
      },
      {
        name: 'Prefix',
        value: '``.``'
      },
      {
        name: 'Credits',
        value: '``Reno, Reno and Reno``'
      }
    ).setFooter( { text: 'TopBang', iconURL: interaction.member.avatar }).setColor("Random")
    interaction.reply({
      content: '',
      ephemeral: true,
      embeds: [HelpEMBED]
    })
  }
})
```
