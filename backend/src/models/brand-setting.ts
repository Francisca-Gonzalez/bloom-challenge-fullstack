/** 
* Debes completar este modelo como consideres adecuado
*/
import { BulletSection } from "./bullet-section";

export type BrandSettings = {
  brandId: string;
  shippingArticle: BulletSection;
  payment: string;
  additionalCosts: BulletSection;
  couponAvailability: boolean;
};