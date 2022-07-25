const {
  SlashCommandBuilder,
  SelectMenuBuilder,
  ActionRowBuilder,
  SelectMenuOptionBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("menu")
    .setDescription("Return a select menu."),

  async execute(interaction, client) {
    const menu = new SelectMenuBuilder()
      .setCustomId("sub-menu")
      .setMinValues(1)
      .setMaxValues(1)
      .setOptions(
        new SelectMenuOptionBuilder({
          label: `Option #1`,
          value: process.env.YT_URL,
        }),
        new SelectMenuOptionBuilder({
          label: `Option #2`,
          value: process.env.PATREON_URL,
        })
      );

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)],
    });
  },
};
