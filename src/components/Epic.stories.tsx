import { Story } from "@storybook/react";
import { EpicUnwrapped as Epic, EpicProps } from "./Epic";

export default {
  title: "Epic",
  component: Epic,
};

const Template: Story<EpicProps> = (args) => <Epic {...args} />;

export const Default = Template.bind({});

Default.args = {
  articleCount: 42,
};
