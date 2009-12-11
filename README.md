Checking out the project
------------------------
    git clone git@github.com:xiongchiamiov/IMathAS.git
    gits init -s --prefix=origin/ http://imathas.googlecode.com/svn

Making changes
--------------
    git svn fetch
    git svn rebase
    [hack hack hack]
    git add .
    git commit -m 'a super-helpful message'
    git svn dcommit
    git push
