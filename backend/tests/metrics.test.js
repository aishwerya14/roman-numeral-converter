const { register } = require("../services/metrics");

describe("Metrics Module", () => {
  test("Registry should be defined", () => {
    expect(register).toBeDefined();
  });

  test("Registry returns default metrics", async () => {
    const metrics = await register.metrics();
    expect(metrics).toMatch(/process_cpu_user_seconds_total/);
  });
});
