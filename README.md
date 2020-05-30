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
