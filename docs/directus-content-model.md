# Orchard Tech Directus Content Model (Single-Site)

Use this model in `admin.orchardtech.net`.

## Core collections

## `pages`
- `id` (uuid)
- `slug` (string, unique)
- `title` (string)
- `status` (string: draft|published)
- `seo` (json, optional)
- `sections` (M2A to block collections via junction)

## `page_sections` (junction)
- `id` (uuid)
- `pages_id` (M2O -> pages)
- `collection` (string, handled by Directus M2A)
- `item` (alias field from M2A)
- `sort` (integer)

## Block collections (starter set)

## `block_hero`
- `id`
- `heading` (string)
- `subheading` (text)
- `primary_cta_label` (string)
- `primary_cta_href` (string)

## `block_rich_text`
- `id`
- `content` (wysiwyg / text)
- `max_width` (string, optional: 3xl,4xl,5xl)

## `block_cta`
- `id`
- `heading` (string)
- `body` (text)
- `button_label` (string)
- `button_href` (string)

## `block_feature_grid`
- `id`
- `heading` (string)
- `intro` (text)
- `items` (json array of { title, description })

## `block_image`
- `id`
- `image` (M2O -> directus_files)
- `alt` (string)
- `caption` (text)

---

## Frontend mapping used by this repo

The React registry maps:
- `block_hero` -> HeroBlock
- `block_rich_text` -> RichTextBlock
- `block_cta` -> CtaBlock
- `block_feature_grid` -> FeatureGridBlock
- `block_image` -> ImageBlock

So if those collections exist and are included in the M2A `sections` field on `pages`, content will render automatically.

## Optional global collection for nav

## `site_settings`
- `id`
- `navigation` (json array)

Example `navigation` value:
```json
[
  { "label": "Capabilities", "to": "/capabilities", "sort": 1 },
  { "label": "How We Partner", "to": "/how-we-partner", "sort": 2 },
  { "label": "About", "to": "/about", "sort": 3 },
  { "label": "Contact", "to": "/contact", "sort": 4 }
]
```

If present, the frontend uses this to build the header menu (desktop + mobile off-canvas). If absent, it falls back to built-in defaults.

## Required env vars

- `VITE_DIRECTUS_URL=https://admin.orchardtech.net`
- `VITE_DIRECTUS_PUBLIC_TOKEN=...` (optional if public role can read)

## First publish test

1. Create `pages` item with slug `home`, status `published`.
2. Add sections in order: hero, feature grid, rich text, cta.
3. Deploy frontend and confirm `/` renders CMS content.
4. Add `about` page and verify `/about` renders from Directus.
