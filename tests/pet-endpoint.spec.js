import { test, expect } from "@playwright/test";

const pet = require("../data/pet.json");
const petUpdated = require("../data/petUpdated.json");

test.beforeAll("Add new available pet", async ({ request }) => {
  const res = await request.post("pet", {
    data: pet,
  });

  expect(res.status()).toBe(200);
});

test("Check new available pet", async ({ request }) => {
  const res = await request.get(`pet/${pet.id}`);
  const json = await res.json();

  expect(pet.category.name).toBe(json.category.name);
});

test("Update new availible pet", async ({ request }) => {
  const res = await request.put("pet", {
    data: petUpdated,
  });

  expect(res.status()).toBe(200);
});

test("Check updated new available pet", async ({ request }) => {
  const res = await request.get(`pet/${petUpdated.id}`);
  const json = await res.json();

  expect(petUpdated.category.name).toBe(json.category.name);
});
