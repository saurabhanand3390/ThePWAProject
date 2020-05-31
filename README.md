# How to build an Pwa App

## Important Links

> ### Lesson 1
> Create a sample web app which you want to convert to PWA with html - css - js<br>

> ### Lesson 2
> Add a manifest file with all the details [Find the details in link given billow]<br>
> [Manifest Docx](https://web.dev/add-manifest/)<br>

> ### Lesson 3
> How can we see the progress on different devices<br>
> - Using Android studio Amulator<br>
>   - [Download Link](https://developer.android.com/studio)<br>
> - Using Npm package http-server - Installation<br>
>   - Open terminal<br>
>   - Run `npm install http-server -g`<br>
>   - Go to folder in the PWA project resides using terminal [cd commonds]<br>
>   - Run `http-server` common inside your project <br>

> ### Lesson 4
> Some of the manifest are not supported in ios ex.<br>
> - Icon<br>
>   - Solution: Add this head - `<link rel="apple-touch-icon" href="relative file path for the icon">`<br>
> - theme_color<br>
>   - Solution: Add this head - `<meta name="apple-mobile-web-app-status-bar" content="color code for the status bar">`<br>

> ### Lesson 5
> *Intro to Service Workers.* <br> They donot have direct access to the dom unlike normal js file which are tightly coupled with the dom and are the runs on main linear thread instead sw.js file works on seperate thread and works in background based on what is happening/ what event is happening on the browser/PWA App. It should be in root file. It allows us perform:-<br>
> - Background sync<br>
> - Load content offline<br>
> - Use push notification<br>

> ### Lesson 6
> *Service Worker Life-cycle.* <br>
> [Tutorial link](https://youtu.be/NhQfvZoRb2Q?list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7)

> ### Lesson 7
> *Registering a Service Worker.* <br> Register sw.js using a different app.js file, remoember sw.js file must be and root folder of the project.

> ### Lesson 8
> *The Install Event.*

> ### Lesson 9
> *The 'Activate' Event*<br> Observe the changes on browser application section

> ### Lesson 10
> *Lighthouse Audit*<br> And try fixing issue releated to the Audit

> ### Lesson 11
> *Fetch Events*<br>

> ### Lesson 12
> *Install Banner*<br> You should see install banner when you open it on browser with PWA Support [chrome safari edge and firefox]

> ### Lesson 13/14/15
> *Offline mode Pre-Caching Assets*<br> Caching all things does not get change and are static

> ### Lesson 16
> *Offline mode Pre-Caching Assets*<br> Return the assets from cache

> ### Lesson 17/18
> *Cache Versioning and dynamic cache*<br> Return the assets from cache
