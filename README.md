# IMathAS

Version: 1.8. Released November 9, 2009

See [Change Log][1] for detailed change history. The
most recent version of the code is available via SVN at [Google Code][2]

   [1]: changelog.md
   [2]: http://code.google.com/p/imathas/

### What is IMathAS

IMathAS is an Internet Mathematics Assessment System. It is primarily a web-
based math assessment tool for delivery and automatic grading of math homework
and tests. Questions are algorithmically generated and numerical and math
expression answers can be computer graded. Beyond that, IMathAS includes
learning management tools, including posting of announcements, text files, and
attachments, as well as discussion forums and a full gradebook. In postings
and assessments, IMathAS allows accurate display of math and graphs, with
simple calculator-style math entry and point-and-click graph creation. It is
most similar to (and inspired by) [WebWork][2] and [WIMS][3], and similar to
commercial and publisher-produced systems like iLrn, MathXL, WebAssign, etc.

   [2]: http://webwork.math.rochester.edu/

   [3]: http://wims.unice.fr/

IMathAS was written by [David Lippman][4] (c) 2006-2009, with with partial
support from the [WA State E-Learning Council][5], the [Transition Math
Project][6], and [Pierce College][7]. It is distributed under the [GPL][8].
See the [license.txt][9] file distributed with IMathAS for more details and
credits for components attributed to others.

   [4]: http://www.pierce.ctc.edu/dlippman

   [5]: http://www.sbctc.ctc.edu/College/_g-elchome.aspx

   [6]: http://www.transitionmathproject.org/

   [7]: http://www.pierce.ctc.edu

   [8]: http://www.gnu.org/copyleft/gpl.html

   [9]: license.txt

### Features

#### IMathAS was built on three primary philosophies:

  * **Math**: The system was designed for Math assessment; no effort was made
for the system to be multi-purpose.

  * **Sharing**: The system was setup to encourage sharing of questions within
a system and outside. Questions are grouped into question libraries, and are
not tied directly to a specific assessment. Unless marked Private, questions
can be used by anyone on the system, or used as a template for writing new
questions. Assessments and course setups can be copied between users with
permission. Export and Import allows the sharing of question sets between
systems. Also, macro libraries allow for the expansion of IMathAS's question
language. Users with expertise in a field can develop macro extensions, and
share them with other users.

  * **Ease of Install**: The system uses standard PHP and MySQL. It requires
no special compilation options or installation of external programs.

#### Core Features include:

  * Display:

    * Rich Math and Graph display, using standards-based MathML and SVG,
powered by Peter Jipsen's [ASCIIsvg][10] and [ASCIIMathML][11], or using image
fallbacks

    * Rich Text Editor with built-in Math and Graph support for text items
displayed in a course and forum posts

    * Alternate display options for screenreaders and browsers without needed
support

   [10]: http://www1.chapman.edu/~jipsen/svg/asciisvg.html

   [11]: http://www1.chapman.edu/~jipsen/mathml/asciimath.html

  * Assessment:

    * Question types including:

      * Functions, with answers like "sin(x)"

      * Numbers, compared to a given tolerance

      * Calculated Numbers, like 5/3 or 2^5

      * Multiple-Choice

      * Multiple-Answer

      * Matching

      * String

      * Essay (not computer graded)

      * Numerical Matrix

      * Calculated Matrix

      * Interval

      * Calculated Interval

      * N-tuples

      * Drawing / Graphing

      * File Upload

      * Multipart

    * Multiple display options and assessment settings, including an option
for practice sets, and due date exceptions for individual students

    * Algorithmically generated questions, with a relatively simple-to-use
question language (loosely based on PHP) with many built-in randomizers and
display macros

    * Group assessments

    * Expandable question language, by installing additional macros

  * Other Course Management Features:

    * Post text items, uploaded files, or web links to the classroom

    * Discussion Forums, optionally gradable

    * Full gradebook with support for online and offline grades and flexible
grading schemes

  * Administration:

    * Flexible administration: IMathAS can be centrally administered, or
teachers can be given rights to create their own courses

    * Teachers can be grouped by school or other division, with one or more
group administrators

    * Courses can have one or more teachers

  * Mash-ups:

    * Experimental support for [BasicLTI][12], both as a consumer and producer

    * Google gadget for listing messages and forum posts

   [12]: http://www.imsglobal.org/community/forum/categories.cfm?catid=44

#### Details

For details on how the system works, look over the [Help File][13] or view
[training and support][14] resources.

   [13]: help.html

   [14]: http://www.imathas.com/support.html

### Why a new system

You may be wondering why another system, when excellent systems already exist.

For my purposes, WebWork and WIMS were too difficult to install (since I don't
have direct access to my school's webserver). I didn't want to use commercial
or publisher produced systems because I don't want students with used books to
incur additional cost.

### Installation

  1. Download IMathAS, extract it, and copy the files to your webserver.

  2. Alternatively, if you have shell access to your server, enter the
directory you want IMathAS in, and checkout the code from SVN: _svn checkout
http://imathas.googlecode.com/svn/trunk/_. Using SVN greatly simplifies
upgrading.

  3. If your web host requires that you create databases through the web
panel, create a database and database user for IMathAS now. If you have a
username/password with database creation priviledges, you can wait and use it
later in the install process.

  4. Open a browser and access install.php. This script will write the
config.php file, change directory permissions, copy distribution files, and
set up the database. At the end of the install you will be given the
opportunity to install a small set of example questions. _Note_: If you are
running on a Windows server, you may need to set directory permissions
manually.

  5. Log into IMathAS. If you didn't change the initial imathas user settings
when running install.php, log in as 'root' with password 'root'. If you did
not change the inital imathas user settings, click the "Change Password" link
now to change the password to something substantial. Alternatively, you can go
into the Admin page, create a new user with Admin rights, then delete the
'root' admin.

  6. Edit loginpage.php and infoheader.php if desired. If you plan to use the
new instructor account request page, edit newinstructor.php

### Installation Issues/Troubleshooting

  * If you receive an 500 access error trying to access install.php, try
deleting the .htaccess file in the IMathAS root directory. This file is used
to give some advice to the web server about file compression and file types,
but could potentially cause problems depending on the server configuration

### Upgrading

If you are upgrading from IMathAS 1.6 or later, access update.php to install
any new database changes and learn about any other changes necessary. If you
are upgrading from a version earlier than 1.6, you'll need to manually apply
changes from the upgrade.txt file.

### System Requirements

#### Versions

PHP 5 and MySQL 4+ are recommended, and required from some features. Most of
the system will work with PHP 4.2+ and MySQL 3.23, but future compatibility is
not guaranteed.

PHP with GD2 and Freetype are recommended for best image-based graph support

#### Server Requirements

An installation serving 3500+ students with 100+ concurrent users has operated
well on a commercial shared web server.

#### Security

IMathAS uses a standard databased-stored sessions-based system. If a user does
not log out, the session is cleared from database after 24 hours.

Questions (written by teachers) are passed through an interpreter that only
allows authorized functions to be used. Student answers are evaluated client-
side using JavaScript, and are never evaled server-side.

### Install Notes

The install.php script automatically handles the following install steps.
They're listed here in case anything goes wrong:

  * Change permissions (chmod) of the following directories to allow the
webserver process to write to the directories:

    * assessment/libs

    * assessment/qimages

    * admin/import

    * course/files

    * filter/graph/imgs


> <i>Note<i>: If you are running on a Windows server, you may need to set
directory permissions manually.

> <i>Note<i>: For security, the admin/import directory should not be web-
readable. A .htaccess file is included to prevent access. If your server
doesn't obey .htaccess files, you may need to do additional tweaking.

  * Rename (in the main directory):

    * config.php.dist to config.php

    * infoheader.php.dist to infoheader.php

    * loginpage.php.dist to loginpage.php

    * newinstructor.php.dist to newinstructor.php

  * Edit config.php. Change these options to your liking:

    * $dbserver: The address of your database server. Probably
www.yoursite.edu or localhost

    * $dbname: The name of the IMathAS database

    * $dbusername: The username of the IMathAS database user.

    * $dbpassword: The password for the IMathAS database user. Choose
something really complicated

    * $installname: The name of your installation, for personalization.

    * $longloginprompt: How you want to prompt new students for a username

    * $loginprompt: How you want to prompt students for a username

    * $loginformat: Enforce a format requirement on the username

    * $emailconfirmation: If set to true, new users will have to respond to an
email sent by the system before being able to enroll in any classes

    * $sendfrom: An email address to send confirmation and notification emails
from.

    * $imasroot: The web root of the imathas install (ie, http://yoursite.edu
$imasroot)

    * $mathimgurl: An absolute path or full url to a Mimetex CGI installation,
for math image fallback

    * $colorshift: Whether icons should change colors as due date approaches.
I thought this was cute, but others might find it annoying

    * $smallheaderlogo: Text or an HTML image tag for a small (120 x 80) logo
to display at the top right of course pages

    * $allownongrouplibs: Whether non-admins should be allowed to create non-
group libraries. On a single-school install, set to true; for larger installs
that plan to use the Groups features, set to false

    * $allowcourseimport: Whether anyone should be able to import/export
questions and libraries from the course page. Intended for easy sharing
between systems, but the course page is cleaner if turned off.

    * $allowmacroinstall: Whether admins should be able to install macro
files. Macros files hold a large security risk, and should only be installed
from trusted sources. For a single-admin system, it is recommended that you
leave this as false, and change it when you need to install a macro

    * $sessionpath: change the session file path different than the default.
This is usually not necessary unless your site is on a server farm, or you're
on a shared server and want more security of session data

    * $mathchaturl: a URL to the live chat server. Leave unchanged to use the
local install's server. Comment out to disable the chat server. You can also
use a different install to offload chat on a different server

    * $enablebasiclti: Set to true to enable use of IMathAS as a BasicLTI
producer.

    * $AWSkey,$AWSsecret,$AWSbucket: To allow students and teachers to upload
files through the text editor, and to enable file upload questions, this
specifies an Amazon S3 key, secret, and bucket to use for file storage. Local
storage is not yet implemented.

  * Run the dbsetup.php script (access http://yoursite.edu
$imasroot/dbsetup.php), or send it to your system administrator and ask them
to run it, if you don't have creation access to the database server.
Alternatively, have your system administrator create a database and database
user, and use these names in the config.php file before running dbsetup.php.
This script sets up the necessary database user, database, and tables for
IMathAS.
