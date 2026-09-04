# Bruce: Banner Shuffle

Bruce is simple  solution to adding a quick, easy and unobtrusive banner
rotation capability to a website using two simple JavaScript files. It was
designed to provide the following capabilities:

* **Single-Image Ad:** Displays a randomly selected banner from a specified pool.

* **Multi-Image Panel:** Displays a panel with a specified number of banner images
  arranged in rows and columns. The original use case for this feature was
  advertising books, where each image was a book cover.

Banners can be organized into distinct pools, or groupings. Thus, multiple
banners can be displayed on a web page, with each pulling from a different pool.
This simplifies the maintenance of banner definitions and ensures there is no
duplication.

# Use Cases

The original use cases were derived from  davidkeener.org, an Author website,
implemented in WordPress. The site promotes David Keener, a professional
SF/Fantasy writer and anthology editor. While there were numerous plugins
available for WordPress, none of them met the needs of the site. 

Specific requirements included:

1. Being able to display a single image banner that randomly advertised upcoming
   events, such as conventions, conferences, webinars, in-person seminars,
   author signings, etc.

2. Being able to display a set of book covers in a panel display, e.g. - six
   images displayed in two columns and three rows.

The pool concept developed because these two types of banners had distinctly
diferent form factors and needed to be separated into different groups.

# How It Works

The capability is dvided into two JavaScript files:

* **pools.js** — Defines one or more available banner pools.
* **bruce.js** — Shuffles the banner pool in place and renders the designated
  number of banners.

pools.js is the file you'll actually edit day-to-day: to add, remove, or
update entries here as adverising banners come and go. The rendering logic
that consumes these pools lives in bruce.js and shouldn't need to change when
this file does.

Each pool is an array of entries shaped like:

```
[ linkUrl, imageUrl, altText ]
```

Load the JavaScript files in the following order, typically within the 
web page header.

```
<script src=".../pools.js"></script>
<script src=".../bruce.js"></script>
```

To use Bruce Banner Shuffle:

1) A single-image banner, in any div:

```
<div id="ad-pubs"></div>
<script>renderPubs('ad-pubs', pubs);</script>
```

Renders a randomly selected banner from the "pubs" pool in a div element with
the id of "ad-pubs."

2) A second banner elsewhere on the page, drawing from a *different* pool:

```
<div id="ad-events"></div>
<script>renderPubs('ad-events', events);</script>
```

3) A multi-image "set" with no duplicates, e.g. 6 book covers as 3 rows of 2:

```
<div id="ad-pubs-grid"></div>
<script>
   renderPubs('ad-pubs-grid', pubs, {
   count: 6,
   columns: 2,
   width: 150,
   height: 125
   });
</script>
```
