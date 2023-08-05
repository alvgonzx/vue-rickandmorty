import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import Character from "@/components/Character.vue";

describe("Character", () => {
    it("renders correctly", () => {
        const wrapper = mount(Character, {
            props: { name: "Rick Sanchez", status: "Alive", species: "Human", img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg" },
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
});
