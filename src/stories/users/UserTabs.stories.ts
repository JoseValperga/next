import type { Meta, StoryObj } from "@storybook/react";
import UserTabs from "@/components/Users/UserTabs";

const meta = {
  title: "User/UserTabs",

  component: UserTabs,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof UserTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const message = [
  {
    name: "Anakin Skywalker",
    username: "anakin",
    message: "Segundo mensaje",
    repliesCount: 13,
  },
  {
    name: "Anakin Skywalker",
    username: "anakin",
    message: "Primer mensaje",
    repliesCount: 13,
  },
];

const replies = [
  {
    name: "Han Solo",
    username: "hsolo",
    message: "Tercer mensaje",
    repliesCount: 13,
  },
  {
    name: "Anakin Skywalker",
    username: "anakin",
    message: "Primer mensaje",
    repliesCount: 13,
  },
];

export const MessageTab: Story = {
  args: {
    messages: message,
    replies: replies,
  },
};
