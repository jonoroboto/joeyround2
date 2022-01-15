import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alt Text — `string`
     *
     *
     */
    alt?: string;
  };

  /**
   * Page builder — `pageBuilder`
   *
   *
   */
  pageBuilder?: PageBuilder;
}

/**
 * Article
 *
 *
 */
export interface Article extends SanityDocument {
  _type: "article";

  /**
   * slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Date — `date`
   *
   *
   */
  date?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alt Text — `string`
     *
     *
     */
    alt?: string;
  };

  /**
   * Rich Text — `richText`
   *
   *
   */
  richText?: RichText;
}

/**
 * Home Page
 *
 *
 */
export interface HomePage extends SanityDocument {
  _type: "homePage";

  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alt Text — `string`
     *
     *
     */
    alt?: string;
  };

  /**
   * Page builder — `pageBuilder`
   *
   *
   */
  pageBuilder?: PageBuilder;
}

export type PageBuilder = Array<SanityKeyed<RichTextBlock> | SanityKeyed<Hero>>;

export type Hero = {
  _type: "hero";
  /**
   * Eyebrow Title — `string`
   *
   *
   */
  eyebrow?: string;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Rich Text — `richText`
   *
   *
   */
  richText?: RichText;
};

export type RichText = Array<SanityKeyed<SanityBlock>>;

export type RichTextBlock = {
  _type: "richTextBlock";
  /**
   * Rich Text — `richText`
   *
   *
   */
  richText?: RichText;
};

export type Documents = Page | Article | HomePage;
