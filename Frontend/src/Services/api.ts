import axios from "axios";

const backend =
  import.meta.env.VITE_NODE_ENV === "prod"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:3000";

export const handleSummarizeContent = async (
  content = "",
  set: (val: string) => void,
  idx = -1
) => {
  try {
    if (!content) return;

    const response = await axios.post(backend + "/api/summarize", {
      content,
      idx,
    });

    if (response.status !== 200)
      throw new Error(response.data?.error ?? "Couldn't summarize content");

    set(response.data.content);
  } catch (error: any) {
    console.error(error);
  }
};

export const handleURLParsing = async (
  url = "",
  set: (val: string) => void,
  idx = -1
) => {
  try {
    if (!url) throw new Error("Missing url");

    const response = await axios.post(backend + "/api/parse", {
      url,
    });

    if (response.status !== 200)
      throw new Error(response.data?.error ?? "Cannot parse the url");

    handleSummarizeContent(response.data.data, set, idx);
  } catch (error: any) {
    console.error(error);
  }
};
