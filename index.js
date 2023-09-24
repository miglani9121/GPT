const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: "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",
});
// const response = await openai.listEngines();  

async function main() {
  const completion = await openai.completions.create({
    model: "text-davinci-003",
    prompt: "Say this is a test.",
    max_tokens: 7,
    temperature: 0,
  });

  console.log(completion);
}
main();