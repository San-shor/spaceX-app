export function calculateSuccessRate(data) {
  return data.map((element) =>
    element.attempted_landings
      ? Number(
          (
            (element.successful_landings / element.attempted_landings) *
            100
          ).toFixed(0)
        )
      : 0
  );
}
