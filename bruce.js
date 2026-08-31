/*
 * bruce.js — The "Bruce Banner Shuffler."
 *
 * This file holds the rendering logic only. It doesn't need to change
 * when your image pools change — those live in pools.js, which should
 * be loaded on the page BEFORE this file:
 *
 *   <script src=".../pools.js"></script>
 *   <script src=".../pubs.js"></script>
 *
 * Each pool passed in is an array of entries shaped like:
 *   [ linkUrl, imageUrl, altText ]
 *
 * Usage
 * -----
 * 1) A single-image banner, in any div:
 *      <div id="ad-pubs"></div>
 *      <script>renderBruce('ad-pubs', pubs);</script>
 *
 * 2) A second banner elsewhere on the page, drawing from a *different*
 *    pool:
 *      <div id="ad-events"></div>
 *      <script>renderBruce('ad-events', events);</script>
 *
 * 3) A multi-image "set" with no duplicates, e.g. 6 covers as 3 rows of 2:
 *      <div id="ad-pubs-grid"></div>
 *      <script>
 *        renderBruce('ad-pubs-grid', pubs, {
 *          count: 6,
 *          columns: 2,
 *          width: 150,
 *          height: 125
 *        });
 *      </script>
 */

// Fisher-Yates shuffle. Shuffles (and returns) the array in place.
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
    return array;
}

// Build the <a><img></a> markup for one pub entry.
function pubLinkHtml(pub, width, height) {
    return '<a href="' + pub[0] + '" target="_blank" rel="nofollow">' +
        '<img src="' + pub[1] + '" width="' + width + '" height="' + height +
        '" alt="' + pub[2] + '" /></a>';
}

/**
 * Render one or more random, non-duplicating images from a pool into a
 * container.
 *
 * @param {string} containerId  id of the element to fill (e.g. "ad-pubs")
 * @param {Array}  pool         array of [linkUrl, imageUrl, altText] entries
 *                              to draw from (e.g. `pubs` or `events`,
 *                              defined in pools.js)
 * @param {object} [options]
 * @param {number} [options.count=1]     how many images to show
 * @param {number} [options.columns]     grid columns (defaults to `count`,
 *                                       i.e. a single row, when count > 1)
 * @param {number} [options.width=300]   image width in px
 * @param {number} [options.height=250]  image height in px
 * @param {number} [options.gap=10]      gap between grid images in px
 */
function renderBruce(containerId, pool, options) {
    options = options || {};
    var count = options.count || 1;
    var columns = options.columns || count;
    var width = options.width || 300;
    var height = options.height || 250;
    var gap = options.gap || 10;

    var el = document.getElementById(containerId);
    if (!el || !pool || !pool.length) {
        return;
    }

    // Shuffle a *copy* of the pool so different banners/calls don't clobber
    // each other's ordering, then take the first `count` — guaranteed
    // unique since we're slicing off a shuffled array, not sampling with
    // replacement.
    var picks = shuffle(pool.slice()).slice(0, Math.min(count, pool.length));

    if (picks.length <= 1) {
        el.innerHTML = pubLinkHtml(picks[0], width, height);
        return;
    }

    var html = '<div style="display:grid; grid-template-columns:repeat(' +
        columns + ', auto); gap:' + gap + 'px;">';
    picks.forEach(function (pub) {
        html += pubLinkHtml(pub, width, height);
    });
    html += '</div>';

    el.innerHTML = html;
}
