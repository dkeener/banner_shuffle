/*
 * pools.js — ad image pools for davidkeener.org
 *
 * This is the file you'll actually edit day-to-day: add, remove, or
 * update entries here as books/events come and go. The rendering logic
 * that consumes these pools lives in pubs.js and shouldn't need to
 * change when this file does.
 *
 * Each pool is an array of entries shaped like:
 *   [ linkUrl, imageUrl, altText ]
 *
 * Load this file BEFORE pubs.js on the page, e.g.:
 *   <script src=".../pools.js"></script>
 *   <script src=".../pubs.js"></script>
 */

// Book covers.
var pubs = [
    ["https://www.amazon.com/dp/B0C43RDGHN/?tag=keenertech-20",
        "https://www.davidkeener.org/wp-content/uploads/2022/10/bitter_days_th.png",
        "Bitter Days"],
    ["https://www.amazon.com/dp/B09PF8JLV7/?tag=keenertech-20",
        "https://www.davidkeener.org/wp-content/uploads/2020/03/clash_by_night.png",
        "Clash by Night"],
    ["https://www.amazon.com/dp/B0DGWM1T79/?tag=keenertech-20",
        "https://www.davidkeener.org/wp-content/uploads/2023/11/dustbowl_detective_th.png",
        "Dustbowl Detective"],
    ["https://worldsenough.square.site/product/jakarta-breach-exclusive-edition-/59",
        "https://www.davidkeener.org/wp-content/uploads/2023/04/jakarta_breach_th.jpg",
        "The Jakarta Breach"],
    ["https://www.amazon.com/dp/B0CTNNZSW4/?tag=keenertech-20",
        "https://www.davidkeener.org/wp-content/uploads/2023/08/jonelle_crosse_th.png",
        "Jonelle Crosse"],
    ["https://www.amazon.com/dp/B09P841FTS/?tag=keenertech-20",
        "https://www.davidkeener.org/wp-content/uploads/2021/12/road_trip.jpg",
        "Road Trip"],
    ["https://www.amazon.com/dp/B07JHTFKJY?tag=keenertech-20",
        "https://www.davidkeener.org/wp-content/uploads/2020/03/rooftop_game-2.jpg",
        "The Rooftop Game"],
    ["https://www.amazon.com/dp/B08XBYV993?tag=keenertech-20",
        "https://www.davidkeener.org/wp-content/uploads/2021/02/an_unlikely_hero_th.png",
        "An Unlikely Hero"],
    ["https://www.amazon.com/dp/B0825F2FC1?tag=keenertech-20",
        "https://www.davidkeener.org/wp-content/uploads/2020/03/whispering_voice2.png",
        "The Whispering Voice"]
];

// Conventions, conferences, webinars, etc. Same [ linkUrl, imageUrl, altText ]
// shape as `pubs`, kept as a separate pool so it can be rendered into its
// own widget independently.
var events = [
    // ["https://example.com/some-con", "https://www.davidkeener.org/wp-content/uploads/...png", "Some Con 2026"],
];
