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
import Menu from "@/components/menu/Menu";

const meta = {
  title: "Menu/Menu", //Antes "Example/Button",
  component: Menu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;
//HASTA AQUI

export const Primary: Story = {
  args: {
    links: [
      { title: "Inicio", href: "/" },
      { title: "Explorar", href: "/explorar" },
      { title: "Perfil", href: "/mi-perfil" },
    ],
  },
};
