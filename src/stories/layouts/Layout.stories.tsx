/*
TENER EN CUENTA:

En types.message.ts
export type MessageType = {
    username: string;
    name: string;
    message: string;
  };


  Y en Message.ts
  type MessageProps = {
  message: MessageType;
};

const Message = ({ message }: MessageProps) => {
  
*/

//Importado desde el ejemplo Button.stories.ts que se genera al instalar storybook
//DESDE AQUI
import type { Meta, StoryObj } from "@storybook/react";
import UsersLayout from "@/app/(main)/layout";

const meta = {
  title: "Layout/Users",
  component: UsersLayout,

  tags: ["autodocs"],
} satisfies Meta<typeof UsersLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <>Esto es un contenido</>,
  },
};
