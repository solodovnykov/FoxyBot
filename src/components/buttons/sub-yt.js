module.exports = {
  data: {
    name: `sub-yt`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: process.env.YT_URL,
    });
  },
};
