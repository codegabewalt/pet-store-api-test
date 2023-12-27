import { test, expect } from "@playwright/test";

const pet = require("../data/pet.json");

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
