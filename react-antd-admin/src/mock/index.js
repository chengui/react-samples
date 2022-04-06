import Mock from "mockjs";

const apiMap = [
  //["/api/test", "get", testAPI.test],
];

Mock.setup({
  timeout: "100-500",
});

for (let api of apiMap) {
  Mock.mock(new RegExp(api[0]), api[1], api[2]);
}

export default Mock;
