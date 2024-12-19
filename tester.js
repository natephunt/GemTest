console.log("goon mode");

const API_KEY = "";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Write a story about a dog";

const result = await model.generateContent(prompt);
console.log(result.response.text());