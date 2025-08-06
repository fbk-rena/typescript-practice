function setTheme(theme: "light" | "dark") {
    console.log(`Theme set to ${theme}`);
  }

function setLevel(level: "low" | "medium" | "high") {
    console.log(`Selected level: ${level}`);
  }

function gradeStatus(score: 0 | 1): string {
    return score === 1 ? "Passed" : "Failed";
  }
  
  