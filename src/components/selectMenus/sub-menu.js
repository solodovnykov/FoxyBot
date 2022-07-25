module.exports = {
  data: {
    name: "sub-menu",
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `To select: ${interaction.values[0]}`,
      ephemeral: true,
    });
  },
};
