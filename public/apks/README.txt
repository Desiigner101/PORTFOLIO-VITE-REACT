Place your Android APK files in this folder.

The portfolio's project cards link to these exact filenames:

  quickinvoice.apk   ->  Quick Invoice Mobile (project id 8)
  akai.apk           ->  AkAI (project id 10)

How it works:
- Files in /public are served at the site root, so "public/apks/quickinvoice.apk"
  is reachable at the URL "/apks/quickinvoice.apk" (this is the apkUrl in
  src/components/ProjectsSection.jsx).
- The card's "Download APK" button uses the HTML download attribute, so clicking
  it downloads the file instead of navigating to it.

To add another project's APK:
1. Drop the .apk here (e.g. genbuild.apk).
2. In ProjectsSection.jsx, add to that project:  apkUrl: "/apks/genbuild.apk",

Note: APKs are large binaries. Committing them bloats the repo and the Vercel
deploy. If they get big, consider hosting on GitHub Releases instead and setting
apkUrl to the release-asset URL (the button works the same either way).
