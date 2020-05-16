import resolveShopFromShopId from "@reactioncommerce/api-utils/graphql/resolveShopFromShopId.js";
import { encodeProductOpaqueId } from "../../xforms/id.js";
import getFieldForLanguage from "../../utils/getFieldForLanguage.js";
import getVariants from "../../utils/getVariants.js";
import getProductMedia from "../../utils/getProductMedia.js";
import socialMetadata from "./socialMetadata.js";
import tagIds from "./tagIds.js";
import tags from "./tags.js";

export default {
  _id: (node) => encodeProductOpaqueId(node._id),
  description: (node, { language }) => getFieldForLanguage(node, language, "description"),
  media: (node, args, context) => getProductMedia(node, args, context),
  metaDescription: (node, { language }) => getFieldForLanguage(node, language, "metaDescription"),
  metafields: (node) => node.metafields || [],
  pageTitle: (node, { language }) => getFieldForLanguage(node, language, "pageTitle"),
  shop: resolveShopFromShopId,
  slug: (node) => node.handle,
  socialMetadata,
  tagIds,
  tags,
  title: (node, { language }) => getFieldForLanguage(node, language, "title"),
  variants: (node, args, context) => getVariants(context, node._id, true, args)
};
