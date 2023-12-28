import { test, expect } from "@playwright/test";

const order = require("../data/store/order.json");

test("Get inventory", async ({ request }) => {
  const res = await request.get("store/inventory");

  expect(res.status()).toBe(200);
});

test("Add new pet order", async ({ request }) => {
  const res = await request.post(`store/order`, {
    data: order,
  });

  expect(res.status()).toBe(200);
});

test("Get new order", async ({ request }) => {
  const res = await request.get(`store/order/${order.id}`);

  expect(res.status()).toBe(200);
});

test("Delete new order", async ({ request }) => {
  const res = await request.delete(`store/order/${order.id}`);

  expect(res.status()).toBe(200);
});

test("Check order deleted", async ({ request }) => {
  const res = await request.get(`store/order/${order.id}`);

  expect(res.status()).toBe(404);
});
