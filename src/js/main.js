$(() => {
  const tlAnimation = new TimelineMax();
  tlAnimation
    .to($(".circle"), 1, { x: 150 })
    .to($(".square"), 1, { x: 150 })
    .to($(".rectangle"), 1, { x: 150 });
});
