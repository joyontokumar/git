
<b>Basic Setup</b>
==================================================
<p>git config --global user.name "joyonto"</p>
<p>git config --global user.email "engr.joyontoroy@gmail.com"</p>


<b>Git Helping Command</b>
==================================================
<p>git help</p>
<p>git help config</p>(open  a new window and all git information here)


<b>Git Initalization</b>
====================================================
<p>Create  a project directory and initialize git.(open this directory any command promot) and type</p>
<p>git init<p>
  
  
<b>Local to Server</b>
====================================================
<p>git add . ( this command use to add all of files to your local git repository)</p>
<p>git add index.html (if you want to add a fixed file to your local repository)</p>
<p>git add -A ( Another command add all of files to your local git repository)</p>
<p>git commit -m "message here what you add" ( this command use what you do or what you add your local git repository)</p>
<p>gi remote add origin ( github repository link here) => that means your local repositoy added your server repository</p
<p>git push origin master  (my local file go to the server <p>
 
 
<b>Git Clone</b>
=====================================================
<h6>If you want to add a github project to your local repository then you need to write : </h6>
<p>git clone (github repository link)</p>

<h6>When clone your github repository to your local server . then you can put this clone repository to another github repository see bellow the command : </h6>

<p>git remote set-url origin (your another github respository url)</p>
<p>git push origin master ( push all local file to server)</p>


<b>Git Branch</b>
===================================================

<h6>master is the default branch in github . branch is actually all of my commit but those commit has a unique name. if you
want to go this commit you want to checkout . if you want to create a branch just try to expriment a logic is right or wrong. if my expreiment is true then i push the expriment my master branch . that why another branch is uses.</h6>

<h6>if you want to create a branch. then type this commnd : </h6>
<p>git branch develop(then type branch name -> here is the branch name -> develop)</p>

<h6>if you want to go the develop branch then type :</h6>
<p>git checkout develop</p>


<h6>If you want to  create branch and checkout branch in one command then type :</h6>
<p>git checkout -b  develop</p>


<b>Develop Branch Work to Master Branch Passing</b>
================================================================
<h6>when i work on develop branch and try to do something my expriment .suppose my expriment is right and i want to pass this expriment my master branch then type the command :</h6>

<p>git checkout master</p>

<h6>when you type this command noting happend . because you only jump develop to master. but you can to passing develop branch expriment to master branch. so if you want to passing this then type : </h6>

<p>git merge develop</p>
<p>then you can see develop branch expriment pass the master branch</p>

<h6>If you want to see all commit in master branch and develop branch then type</h6>
<p>git log --oneline</p>

<h6>If you want to delete any branch</h6>
<p>git branch -D develop (here develop is the branch name)</p>


<b>Git Pull</p>
========================================================
<h6>when many developer are working in one project then need to git pull command .  when any developer are pushing his work in server, it's not automatically go to another local developer repository. what why we need to git pull. </h6>
<p>git pull origin master</p>
<p>Be carefull when you pull before you need to add , commit your work</p>


<b>Git Important Command</b>
=============================================================

<p>git log ( if you want to check your commit)</p>
<p>git log --oneline (if you want to check your commit in nicelly )</p>
<p>git checkout 567567 (if you want to go a fixed commit ) (567567 => this is the unique commit number)</p>
<p>be carefull : when you go to fixed commit then you can not see after those commit . those commit are delete</p>
<p>git status ( tracked and untracked file)</p>
<p>git rm index.html (delete file in working directory)</p>
<p>git tag (show all commit id)</p>
<p>git remote  (conenct local to server)</p>



























  




