## SSR - Server Side Rendering
This is the default behaivour

## SSG - Static Site Generation

Any content which doesn't have the network calls is a static page by default

## ISG or ISR
fetch in nextjs caches the response 
However there are no expections fetch requests are nt catched when 
- used inside a server actiontah
- used inside a Router Handler that use post method