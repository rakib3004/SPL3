import { Ollama } from "langchain/llms/ollama";
const ollama = new Ollama({
baseUrl: "http://localhost: 11434",
model: "llama2",
})
const res = await (await ollama.stream(`Translate "I love programming" into German.`)).toString();
console.log(res);