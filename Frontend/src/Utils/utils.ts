import React, { useContext } from "react";

export const getExampleBlog = () => {
  return `How AI is Revolutionizing Content Summarization 
  In a world where information is growing at an overwhelming pace, 
  staying updated is becoming increasingly difficult. 
  From long-form articles to complex research papers, 
  readers often struggle to digest the sheer volume of content available. 
  This is where AI-based summarization tools step in, 
  offering a faster and smarter way to consume information. 
  AI summarization uses natural language processing (NLP) and 
  machine learning to automatically generate concise summaries of larger texts. 
  There are two main types: extractive summarization, 
  which pulls out key sentences directly from the content, 
  and abstractive summarization, which rewrites the main ideas 
  in a new form using natural language generation. 
  While extractive models are more common and simpler to implement, 
  abstractive models offer more flexibility and human-like summaries. 
  Popular platforms like Google News, LinkedIn, and even 
  academic databases have started integrating AI summarization 
  tools to help users grasp key points instantly. 
  Tools like OpenAI’s ChatGPT and Meta’s LLaMA models can be 
  fine-tuned to summarize everything from news stories to 
  scientific papers and legal documents. However, AI summarization isn’t perfect. 
  It can sometimes omit important nuances or misinterpret context, 
  especially in opinion-heavy or technical content. 
  That's why many tools offer options for users to tweak or validate the summaries manually. 
  In conclusion, AI summarization is not just a productivity booster—it’s a 
  game-changer for how we interact with information. 
  As the technology continues to improve, 
  expect more personalized and accurate summaries tailored to your preferences.`;
};


export const useAppContext = (context: React.Context<any>) => {
 try {
  const con = useContext(context); 

  if (!con) throw new Error("Missing context"); 

  return con;
 } catch (error: any) {
  console.error(error);
 }
}; 

export const getLimitedInput = (prev: string, newStr: string, limit = 50000) => {
  if (newStr.length <= limit) return newStr; 

  const c = []; 
  for (let i = prev.length; i < limit; i++) {
    c.push(newStr[i]);
  }; 
  return prev + c.join('');
}