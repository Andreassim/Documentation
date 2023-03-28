# Server Side Rendering vs Client Side Rendering

The overall difference is about where the computing needed for rendering happens. There is pros and cons for each.

## Server Side Rendering

The server handles the rendering of the pages, which gives sends a single complete page to the client. This allows for fast loading, it is useful for webpages - since we dont may not want a lot of trafic ping ponging agaisnt the server, in cases of slow internet connection this could be preferred. The client doesnt need to spend computing stitching the page together which reduces the hardware requirements though that may be minimal to begin with.


For SEO optimizations we also want to send complete html files as crawlers likely arent going to run javascript to assemble pages before actually reading them. If seo is something we care about for out application SSR is likely the way to go.

The downside here is that we spend more server capacity on rendering, thus request may be slower and cost of running the server may be higher.


## Client Side Rendering

Off loading rendering to the client has the advantage of not spending server resource on rendering. However shifting rendering to the client we rely on their system to be suffenciently fast for a smooth user experience. We may also be ping ponging more with the server to request different data, if the client has a slow internet connection this will also course the experience to be poorer.

In situations where we can rely on a stable connection fast internet connection, suffecient hardware and dont care about SEO this could be the way to go. Webapps like Microsoft Teams, Discord or Spotify likely only cares about SEO on their webpages and not in their app, and may rely more on the client for rendering purposes.

