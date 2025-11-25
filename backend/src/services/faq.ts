import faqs from "../data/faq";

const FAQService = {
  list(): Promise<typeof faqs> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(faqs), 500);
    });
  },
};

export default FAQService;