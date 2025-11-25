import FAQService from "../services/faq";
import { Request, Response, NextFunction } from "express";

export const listFAQs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const faqs = await FAQService.list();
    res.status(200).json(faqs);
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    res.status(500).json(error);
  }
  next();
};