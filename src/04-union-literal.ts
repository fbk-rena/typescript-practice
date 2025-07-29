// Union and Literal Types
type Direction = "left" | "right" | "up" | "down";

function move(dir: Direction) {
  console.log("Moving " + dir);
}

move("up");

function printId(id: number | string) {
  console.log("ID:", id);
}
