import {
  useSanityClient,
  portableTextToHtml,
  createImageBuilder,
} from "astro-sanity";

const customComponents = {
  /* your custom components here */
};

export function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, customComponents);
}

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source) {
  return imageBuilder.image(source);
}
