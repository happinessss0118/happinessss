const gameCastEl = document.querySelector(".game_cast");

const createBLockEl = () => {
  let count = 1;
  for (let i = 1; i <= 10; i++) {
    const newLineDiv = document.createElement("div");
    newLineDiv.classList.add("line");
    newLineDiv.classList.add(`line_${i}`);
    gameCastEl.appendChild(newLineDiv);
    for (let l = 1; l <= 10; l++) {
      const newBlockEl = document.createElement("div");
      newBlockEl.classList.add("block");
      newBlockEl.innerHTML = count;
      count++;
      newLineDiv.appendChild(newBlockEl);
    }
  }
}; //this adds 100 blocks

createBLockEl();
const blockEls = document.querySelectorAll(`.block`);

const wantingindexlist = (arr, ...index) => {
  return index.map((index) => arr[index - 1]);
};

const insertColorEl = (color, ...index) => {
  const insertingblock = wantingindexlist(blockEls, ...index);
  // insertingBlock = [BlockEl1, BlockEl2, BlockEl5]
  insertingblock.forEach((el) => {
    el.classList.add(color);
  });
};

insertColorEl(
  "black",
  13,
  14,
  15,
  16,
  17,
  22,
  28,
  29,
  38,
  40,
  48,
  50,
  58,
  60,
  68,
  70,
  78,
  79,
  88,
  98,
  52,
  62,
  72,
  82,
  92,
  93,
  94,
  95,
  85,
  75,
  74,
  96,
  97
);
insertColorEl(
  "red",
  24,
  25,
  35,
  36,
  37,
  47,
  46,
  45,
  55,
  56,
  57,
  66,
  65,
  64,
  63,
  39,
  26,
  27,
  53,
  54,
  23
);
insertColorEl("crimson", 67, 77, 87, 76, 74, 73, 84, 49, 59, 69, 83, 86);
insertColorEl("lightblue", 31, 32);
insertColorEl("blue", 33, 34, 41, 42);
insertColorEl("darkblue", 43, 44);
insertColorEl(
  "yellow",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  12,
  11,
  18,
  19,
  20,
  21,
  30,
  31,
  32,
  51,
  61,
  71,
  80,
  81,
  89,
  90,
  91,
  100,
  99
);
