import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import InfiniteSlide from "../../../src/components/base/InfiniteSlide";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof InfiniteSlide> = {
  title: "Base/InfiniteSlide",
  component: InfiniteSlide,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
