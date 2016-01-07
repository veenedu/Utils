files info (do not rename any file)
----
bower.json -> this file is used by bower
package.json -> this file is used by gulp
gulpfile.js -> in this file I have written gulp codes, to compile .ts file, merge and minify js files.


Index.html and Index.js
-----
You can write anything you want in these files, 
they are not send to bower distribution 
however they are send to github


github
----
Github is set, from terminal type
"git push origin master"
this will push master branch 
You only need to update github, 
bower install will automatically use updated file


gulp (compiles tsc file, merges multiple tsc file and generate one js and js.min file)
-----
gulp is configured in gulpfile.js
To run gulp, in terminal type "gulp watch"


bower
---
bower install veen.utils -g
Bower is set, need to do nothing
When you will push commits to github, it will result in updated files being served in "bower install" 