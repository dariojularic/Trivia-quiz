const baseUrl = `https://opentdb.com/api.php?`;

const difficultyOptions = [
  { id: 1, value: "easy", label: "Easy" },
  { id: 2, value: "medium", label: "Medium" },
  { id: 3, value: "hard", label: "Hard" },
];

const categoryOptions = [
  { id: 1, value: "21", label: "Sports" },
  { id: 2, value: "20", label: "Mithology" },
  { id: 3, value: "22", label: "Geography" },
  { id: 4, value: "25", label: "Art" },
];

export {baseUrl, categoryOptions, difficultyOptions}
