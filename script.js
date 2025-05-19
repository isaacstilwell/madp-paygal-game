document.addEventListener("DOMContentLoaded", () => {
  let ticks = 0;
  const interval = 1000;
  const startTimer = () => {
    const timer = setInterval(function () {
      ticks++;
      console.log(`Tick: ${ticks}`);
    }, interval);
  };

  const balance = document.getElementById("pg-balance-value");
  const wheelsAction = document.getElementById("buy-wheels-action");
  const wheelsCounter = document.getElementById("tire-cnt");

  const big_rig = "./big-rig.svg";
  const bike = "./bike.svg";
  const car = "./car.svg";
  const truck = "./truck.svg";
  const engine = "./engine.svg";
  const body = "./sedan.svg";
  const tire = "./tire-wheel.svg";



  wheelsAction.addEventListener("click", () => {
    balance.innerText = `$${(parseFloat(
      balance.innerText.replace(
        /[^\d.-]/g, ""
      )
    ) - 750).toLocaleString('en-US', )}`;
    wheelsCounter.innerText = `${(parseFloat(
      wheelsCounter.innerText
    ) + 1)}`
  });
});
