## IMathAS Change History

### Known Issues

  * SVG not printing in IE (resolved?)
  * SVG printing problems in FireFox (resolved in FF2.0?)
  * Mac FF SVG text not showing (resolved in FF2.0?)
  * Might be problems if server is set for GMT (no DST)

### Version 1.8

  * Major bug fix: session id length in newer PHP versions
  * Major bug fix for PHP 5.2.10 array_rand issue
  * A ton of bug fixes
  * Change calendar to display past due items
  * Add checkbox grouping by block to copyitems
  * Add break all students from stu groups
  * Add "allornothing" score method to multans
  * Add support for _dark themes
  * Add score bars and checkmarks in score
  * Added Calculus macro library
  * Add avail to mass chg assessments
  * Add time limit multiplier
  * Add 2column display for choices, multans. 2columnselect for matching
  * Add importcodefrom language construct
  * Full rewrite of serverside math parsing engine
  * Allow review of question in SkipAround unless forbidden
  * Add gradebook newflag
  * Add automatic calculated fraction show answers
  * Add upload multiple grades page
  * Add aid export for exporting assessment results
  * Add "or" support to multiple choice questions
  * Add enroll stu from other course
  * Added addfractionaxislabels macro
  * Add partial_credit string answer flag
  * Add html entity support to asciisvgimg
  * Added functioneval and Solvers macro libraries
  * Moved to minified javascript files
  * Add equation helper
  * Change forum names to link to messages rather than email
  * Add links to gradebook from messages/posts
  * Populate string answers to $stuanswers
  * Changed forum posts to allow decimal scores
  * Number of mathchatters shows on course page
  * Added BasicLTI consumer and producer support
  * Upgraded TinyMCE to 3.2.5
  * Added fixed-height blocks
  * Added cut-and-paste print layout
  * Update mathchat to allow multiple windows
  * Added arc support to asciisvg
  * Add open linked text in new window option
  * Add per-question regen settings
  * Add no-login-needed postreader
  * Add mass change question userights
  * Add move thread to different forum / post to different thread
  * Add "as extra credit" option for forums
  * Added GraphTheory macro library
  * Fixed lost post on session expiration
  * Enable add/remove teacher for all LimitedCourseCreators
  * Improved date picking
  * Add student picture upload
  * Add one-time passwords for diagnostics
  * Added more calculated answerformats for mixed numbers
  * Allow reattempt even if won't improve score
  * Add new message list
  * Fix tablescroller issues for huge courses
  * Improve unenroll efficiency

### Version 1.7.1
_Released March 25, 2009_. This is primarily a bug fix release.

  * Add calendar items to course items copy
  * Bug fix timezone for Google postreader
  * Bug fix files on copy inline text items
  * Add mass swap to mass change dates
  * Add theme support to assessments
  * Bug fix extra credit only category
  * Add group admin course access, edit questions
  * Add "Act as student" option in gradebook detail
  * Bug fix "never" showanswer
  * Added force regen option to massexception
  * Bug fix NaN student answers in numfunc
  * Add HTML export of gradebook
  * Add super password to diagnostic, overrides testing window limit

### Version 1.7
_Released March 10, 2009_

  * Added jump to answer option
  * Added Exclude added option to addquestions
  * Add sort alpha and use same selector to diagnostic setup
  * Bug fix dollar sign in image-based display
  * Revise tutor system. Add tutor limits to section. Add tutor edit ability
options
  * Revise diagnostics to be individual owned. Can use tutors to restrict to
level-2 selectors
  * Improve library assignment page
  * Add answerformat checkers to calcmatrix, calcinterval, calcntuple,
calccomplex
  * Added quickpick to home menu (switch menu)
  * Added student access block
  * Bug fix closed libraries
  * Added complex number answer type
  * Added primes library
  * New question language interpreter! Allows code blocks for "for","if", and
"where"
  * Added Diagnostic Creator rights to admin
  * Create public access page, and public access setting for blocks
  * Bug fixes for Math to TeX and editor symbol issues
  * Bug fix filenames in editor filemanager
  * Added latepass to calendar
  * Bug fix grades shown on reattempt
  * Add hide gradebook category
  * Bug fix anonymous posts
  * Add end of assessment messages
  * Bug fix noprint hiding end scores
  * Added fillarray macro
  * Added charmap to editor
  * Added submatrix to matrix macro lib
  * Added no totals over arbitrary percent in gb
  * Added marking assessments with exceptions/latepass
  * Added sort by last post date to forums
  * Added better forum new post tracking
  * Bug fix dropping IP scores
  * Bug fix calconarrayif
  * Added upgrade.php for web-based upgrades
  * Added gzip support to importlib
  * Added install script and installexamples
  * Added sorting of student detail gradebook
  * Bug fix editor file browser
  * Added Angel-ish themes
  * Bug fix ignore commas in function answers
  * Bug fix whitespace in macro libs
  * Added check that same assessment is being submitted
  * Fix browser not being able to save login password
  * Added qimages to import/export - still need to export actual images
  * Fixed trackback from stu groups to gb-viewasid

### Version 1.6
_Released November 4, 2008_

  * Added message history viewer
  * Added course filter for sent messages
  * Improved decimal points handling multipart
  * Added mass change library rights
  * Improved handling of extra credit in gradebook
  * Bug fix equation answer types
  * Added live chat
  * Added Word paste cleaner in editor
  * Added numtoroman macro
  * Added file upload question type using Amazon S3
  * Added text editor file browser using Amazon S3
  * Added kick student out at timelimit option
  * Bug fix editor htmlentities
  * Bug fix message settings for reply
  * Added access restrictions for lti producer
  * Bug fix interpreter with "(!($a==$b))" type where conditions
  * Bug fix interpreter mix of strings and calculations in function arguments
  * Bug fix exportitems dropping first item
  * Updated managestugrps, gradeallq, and gb-viewasid's clearq for reattempt
change
  * Change multipart reattempts so penalty only taken on missed parts
  * Added multipart points breakdown to gradebook view assessment page
  * Bug fix interpret on "where" with math
  * Added manage offline grades
  * Added experimental google gadget reader
  * Updated mass change assessments
  * Replaced editor with TinyMCE
  * Added filter for SimpleLTI consumer (experimental)
  * Added md5 hash challenge-response login
  * Added matrix brackets to sized matrix input
  * Revived forums page - show list of all forums from course page
  * Next/Prev to walk through forums
  * forum postby and replyby dates on course page
  * Bug fix calendar showing assessments from later years
  * Bug fix markallread
  * Added lost username lookup
  * Added scinot answerformat to calculated
  * Added makescinot
  * Add HTML filtering to forum posts, essay q, add___, msgs
  * Added edit-in-place to quickview
  * Mark drops in gradebook
  * Allow * and / in add offline grades
  * Add filter by section to listusers
  * Separate calendar page, with link for stu and teacher
  * Bug fix forums posts delete
  * Added settings for gradebook export
  * Added forum name to posts display
  * Bug fixes printtest/printlayout
  * Put add-an-item pulldown at top and bottom of blocks for adding items
  * Changed exception links in gb/listusers to massexception page
  * Added exception link on gb-viewasid
  * Added textonimage macro
  * Added plot border, vertical text macros
  * Added meta tags to ensure compatibility with IE 8
  * Added graphical icons
  * Added Calendar
  * Added quick view

### Version 1.5
_Released Feb 21, 2008_

  * Added instructor notes
  * Added quick-switch drop-down over smallicon
  * Added quick copy link
  * Instructions on student print version
  * Allow change student id on change info page
  * Strip spaces on imported student ids
  * Bug fix, quotes in forum/msg titles
  * Added special_or strflag to string
  * Bug fixes, gradebook, gradeallq, +oo
  * Changed last access to last course page access
  * Added whiteout to question preview
  * New macros: stringappend/prepend, makereducedfraction
  * Bug fix images and choices in printlayout
  * Mark courses as hidden on Admin page
  * Revamp of gradebook
  * Added extensionlats penalty
  * Added filter by section to gradebook
  * Added polygon drawing answertype
  * Added isolate grade for one online assess
  * Added group #s to group forums listing
  * Added requiretimes to calcntuple and calcinterval
  * Added horiz and inline displayformat to multans
  * Added late pass
  * Added question id templating history
  * Made offline grade page live-sortable
  * Added user sort order option to GB
  * Added toall to gradebook comments
  * Bug fix gradebook export
  * Added default description add-on for templates
  * Fixed item Analysis item order
  * Added limit number of group members
  * Added print version for student by instr
  * Added function notation to variable options for numfunc
  * Added definefunc, evalfunc
  * Bug fix addinlinetext, deleteassessment
  * Added themes
  * Added student count to listusers
  * Added option for stu to stu msgs only
  * Bug fix index.php
  * Added Withdraw question
  * Bug fix addassessments
  * Bug Fix copyitems
  * Added unenroll to gradebook
  * Added show/hide/date option to course items

### Version 1.4
_Released October 30, 2007_

  * Added fracordec answerformat to Calculated
  * Bug fix interval types
  * Added custom default library
  * Added numtowords,randname,prettytime macros
  * Bug fix vars in numfunc (r84)
  * Added points to navbar
  * Changed block expand/collapse
  * Added flag to discussion forums
  * Bug fix diag, review with setseed
  * Bug fix grouped questions in gradebook
  * Bug fix colorpicker preventing selecting text in addblock
  * Added displayformat select for matching
  * Rework mass change dates to handle always/never dates
  * Bug fix sent messages
  * Added course preview to copy course items
  * Bug fix matrix in asciimath2tex
  * Bug fix empty username importstu
  * Made discussions gradeable - addforum,thread,post,postbyname,gradebook
  * Fixed divide by zero on item analysis (r79)
  * Added due date listing to gradebook detail page
  * Added points possible remaining in assessment
  * Added long division style to assessment stylesheet
  * Added group filter to user list on admin page
  * Added arrayfindindex and array_flip to macros
  * Added hide text boxes to printest
  * Fixed scaling in Draw answer type (r75)
  * Fixed quotes in item titles bug
  * Switched matching to use pull-downs
  * Added n-tuple question types
  * Fixed parens problem with matrix/calcmatrix answers
  * Fixed quot bug in image-based display
  * Added "clear existing per-question settings" to copy settings in
assessment settings (r71)
  * Added "delete gradebook items" in student unenroll
  * Added grid change assessment settings
  * Added mozilla font check to login
  * Rewrote addquestions page to background save reordering
  * Added support for "select N from group" in assessments
  * Extended Number and Calculated types with orderedlist format for point and
vector input

### Version 1.3
_Released August 21, 2007_

  * Added separate reviewscores so can switch back to regular
  * Added for loop structure to question language
  * Made all assessment questions modifyable through instant template in-
place.
  * default question rights to private (overridable by user setting) (r51)
  * Mark private questions
  * Reorganized left bar items
  * Added copy dates to mass change assessment
  * Added an option on Add Questions to specify points and copies in grid
  * 0 default on upload grades (for comments) (r49)
  * Keep submit button at top on upload grades
  * Question input box sizes to contents
  * Send message link at top
  * New posts: links to forums, and mark all as read
  * Posts by name: mark all as read
  * Include poster name on forum subscription email
  * Added button that clears all student groups
  * Mod question settings page updated to warn on student attempts (r46)
  * Bug Fix: Fixed br in gradebook export
  * Added separate "Don't count and hide from students" option
  * Fixed dropping lowest dropping EC items
  * Fixed errors on Grades for untaken assessment
  * Changed review mode to honor "same seed" settings
  * Bug Fix: copy show answers on feedback change in mass chg assessment
  * Bug Fix: error on empty forum
  * Added chi-squared distribution to stats library (r44)
  * Fixed inverse t distribution in stats library
  * Added arraystodots macros
  * Added subarray and showdataarray macros (r43)
  * Added limit to new posts, links to new posts lists
  * Added links to modify, reply, etc, in posts by name
  * Fixed ge error in image-based disp
  * Fixed ascii-math.js keypress bug with numpad 0
  * Added Drawing answer entry (r42)
  * edit GB comments on GB page
  * Don't show hints if question answer is correct (on later views)
  * link to grades for assessments on course page
  * link to student's grade page from internal message
  * Added "or" to Interval type
  * Added new posts on home page (r41)
  * Rewrote assessment engine
  * Per-part show answers after last policy
  * Per-question new version on reattempt
  * Bug fix: hints showing on non-active questions (r40)
  * Added editor support to essay type answer.
  * Added grade one question, all students, page (r39)
  * Bug fix: unlimited attempts on seq mode
  * when adding more copies of a question, insert after existing rather than
at end (r38)
  * hide "dont count in gb" option for practice tests
  * list of names on unenroll
  * toggle for showing/hiding "dont count in gb" items
  * percentages on student gradebook page
  * Added name, link to email/msg, exception, info to gradebook view of one
student (r37)
  * Added hide correct questions to assessment grade edit, hid tips
  * Added requiretimes to Calculated type
  * Added interval and calcinterval answer types
  * Added interval macro library
  * Bug fix: shouldn't link to email/msg when anonymous
  * custom $previewloc
  * Changed totals on left (gradebook setting) to list Total and % first (r36)
  * Timelimit changed to allow partial minutes
  * Added "show after score of __ obtained on another assessment" option to
assessments
  * Rewrote stats histograms to allow specifying where to start axis labeling
and allow bar gaps (r35)
  * Bug Fix: Mac end-of-lines not recognized on uploaded CSV files
  * Reqdecimals added, tips for number and calculated (may be extended later)
  * Added link to settings in gradebook
  * Bug Fix: Offline grades for students in multiple courses, feedback on new
grades

### Version 1.2
_Released April 4, 2007_

  * Changed site configuration for general release (r30)
  * Added checkbox remove from assessment (r24)
  * Added list forum posts by name page
  * Added polymakepretty (r23)
  * Added mass exceptions
  * Feedback next to grade in student gb
  * Added comments to offline grades
  * Added copy instructions from ___ to mass chg assessments
  * Forum links to internal messaging when allowed (for students) (r19)
  * Added gradebook and per-assessment comments
  * Added course avaialability and lock for assessment (r18)
  * Reworked showtest to be more efficient (r17)
  * Added icons in Skip Around and Sequential modes
  * Redesign Gradebook settings layout
  * Group forums
  * Check file upload type (no php)
  * Reworked group assessments
  * Student-view style list, using averages
  * no show current grade in gb on noshow setting (r17)
  * Added hints toggle (r16)
  * Bug fix: groups (r16)
  * Forum search (r16)
  * List libraries in question preview (r16)
  * Improved mass changes dates (r15)
  * Bug fix: setting dates from outside server's timezone (r15)
  * Bug fix: defaults not being used in image-based display (r15)
  * Added list type answers to number and calculated (r14)
  * Bug Fix: fixed if conditions not being interpreted (r14)
  * Added $displayformat="inline" for multiple choice (r14)
  * Changed color picker (r13)
  * Added Full Test, Submit one at time display method (r11)
  * Added AHAH (lazy AJAX) for course page collapsed blocks (r11)
  * Show answers after last attempt option (skip around only) (r10)
  * Added support for hints in assessments (r9)
  * Added ability to being missed attempt penalty after N free attempts (r9)
  * Added $installname to config.php
  * Bug Fix: a couple display issues with image display with ansprompt and ne
  * Per assessment groups
  * Copy gradebook scheme and course settings in copy items
  * Alpha order: Copy options from
  * Clear attempts on single problem (on Add Questions page?)
  * sort/limit messages by course; show message counts on home page
  * Added ignore_commas flag in String type
  * Added new array functions
  * Restricted Modify Questions page when taken, show on course page
  * Search term, libraries searched now associated with course
  * Library counts all users
  * Order exceptions by alpha
  * Bug Fix: fixed for acceptance where student error = tolerance
  * New feedback option: Show no scores
  * Order items by alpha in gradebbook, and ordering when grouped by category
fixed
  * Order question listing by id (~added to system date)
  * Preview selected questions
  * Add keep all on drops, add two textboxes
  * Question settings, when already added, allow add extra copies
  * Add copy instructions and copy dates on "copy options from"
  * Show question category in assessments
  * Manage Question set layout updated
  * Help for text editor

### Version 1.1
_Released Feb 4, 2007_

  * Blocks in blocks, blocks as folders
  * Students kicked out after due date
  * Select questions from preview
  * Gradebook:Added offline grades
  * Gradebook:Added assign assessments/grades to categories
  * Gradebook:Added grading scheme
  * Checkboxs with Email/Msg buttons
  * Use vertical view for student gradebook
  * Allow click on "-" in gradebook to insert scores when student hasn't
started assessment
  * put category header color coding
  * Item analysis: avg number of attempts, preview question button
  * filter gradebook by category/totals only
  * Add do not include in grade total option (also "count as extra credit"?)
  * Click on student's name to just show that student's scores
  * Option for totals on left
  * Added show current in gradebook
  * Link to grades from List Users page
  * Email gradebook as attachment
  * Retain user default gbmode settings
  * List "my" questions only
  * Require assessment score is over some value to submit / receive credit
  * List all assessments on a page, allow date changes, settings, etc
  * Include name (form-letter style) in mass email
  * Prevent Average row in gradebook from sorting
  * put "this question is being used" warning in modify question
  * Added optional section and code number for students
  * Added section/code in import students
  * Internal messaging system added (student to/from teacher)
  * Message from gradebook view of assessment
  * Replaced reset pw link in List users with change info link
  * Mass chg assessments: allow selection of options to change
  * Turn messaging in course off
  * bar at top - customizable
  * Forums: Restrict student viewing of thread responses
  * Forums: Condensed thread view, expand/collapse all
  * Forums: link to email for teachers
  * Forum: show collapsed by default option
  * Forum: disallow modify
  * Forum: disallow delete (set up, but not implemented)
  * Forum: reply by dates for replies, post by dates new threads
  * Forum: Email notification
  * Manage qset link on home page
  * Improve search - add search all and handle multiple search terms
  * set color of blocks
  * Convert math/graph to images when sending email
  * allow multiple answerformat for calculated type
  * check for 10^-5, 314E-3 on nodecimal type for calculated
  * add makeprettydisp as default showanswer for numfunc
  * Added mark question for use box in question preview
  * Added Show message you're replying to in forum response
  * Fixed quotes in block titles problem
  * Add assessment description to testquestion page
  * Add __ attempts of ___ remaining
  * Added Assessment password option
  * Added reattempts different versions option
  * Extended student view
  * Added uncheck all in library selection (libtree2)
  * Listing multiple libraries - put library names as headers
  * Confirmation popup on remove from assessment
  * $variable as alias for $variables
  * Add multiple copies of question to assessment
  * copy block color from other
  * Added unmatched parens notice to calculated and numfunc
  * Added password reset
  * Show points on add question page
  * Bug Fix: problems with sorting of gradebook
  * Bug fix: Strip &nbsp; out on gb export
  * Bug Fix: disappearing linked text files
  * Bug Fix: delete forum views on course delete
  * Bug Fix: Multiple Answer Lastanswer problem
  * Bug Fix: Unassigned showing everyone's questions on Add Questions page

### Version 1.0
_Released Dec 6, 2006_

  * Added nodecimals answerformat to calculated type
  * Added file attachement to inline text items
  * Added per-course icon settings
  * Improved delete linkedtext files on remove
  * Changed upload limit to 3MB
  * Added available always/ available now options
  * Added toggle to student view w/ time adjustment
  * Added hide title/icon to inlinetext
  * Added submit without regen button to preview question
  * Added percent total to gradebook
  * Added static image support to question writing
  * Changed wording for practice tests from "due" to "available until"
  * Added Expanded/Collapsed option for blocks
  * Added better syntax error warnings
  * Added allowuneroll and course copyrights options
  * New option: delete all items in block on delete
  * Added all students same first version option
  * Bug Fix: assessment total with grouped questions
  * Bug Fix: delete linkedtext files on course delete
  * Bug Fix: added catch-it for empty assessment
  * Bug Fix: fixed problem with categorization showing blank categories

### 1.0RC1
_Released Nov 5, 2006_

Upgrade notes: See upgrade.txt

  * Changed breadcrumbs to show course name
  * Changed Practice Test behavior to not regenerate on entry
  * Improved CSS
  * Reduced file size by 75% for popup library selector
  * Updated date/time handling for instructor timezone
  * Added penalty on last attempt only option
  * Added "keep best score", and allow homework to remain open for review
after due date
  * Added force image-based display options
  * Improved messages when test reaccessed after partial completion
  * Similar problem added to full test at once, and now working in One at a
Time mode.
  * Added Create assessment using questions from other assessments
  * Improved admin page for full and group admins
  * Added Mass change assessment settings
  * Added append to title and Add to block in copy course items
  * Time input relaxed to allow 4pm instead of requiring 4:00pm
  * Changed add assessment to settings are hidden when "copy settings from" is
selected
  * Updated gradebook to order by due date, and hide not yet available
assessments from student's gradebook
  * Added question categorization to course item export/import
  * Slopefield and start/end marker to ASplot support added to image backup
  * Added inequalities graphing macro library
  * Added header lock for IE in gradebook
  * Bug Fix: DST handling
  * Bug Fix: Math filter failing when newlines inside backticks
  * Bug Fix: Some browsers (ie Safari) not correctly sniffed
  * Bug Fix: Clarified Regen option when current attempts used
  * Bug Fix: Regen problems with One at a time mode
  * Bug Fix: New threads and replies no longer appear unread by poster
  * Bug Fix: Fixed square brackets being not recognized in student answer
(still not allowed in instructor answer)
  * Bug Fix: fixed NaN recognition. negative^(decimal power) now always
returns NaN and is skipped, unless power is 1/[3-49]
  * Bug Fix: Problem with multipart questions in "Show full test" mode
  * Bug Fix: Rights setting not showing on template
  * Bug Fix: Parens in calcmatrix problem resolved clientside
  * Bug Fix: Error with two variables entered side-by-side without explicit
multiplication clientside
  * Bug Fix: Control panels floats drifting
  * Bug Fix: Consecutive not hitting last value in some cases
  * Bug Fix: Fixed handling of single quotes inside showasciisvg string
  * Bug Fix: showplot not hitting right endpoint of domain
  * Bug Fix: e problem in showplot
  * Bug Fix: Unenroll problem

### 1.0beta16
_Released Sept 28, 2006_

Upgrade notes: See upgrade.txt

  * Added printtest - print version
  * Added diagnostic setup for group admins and admins
  * Security Fix: lastanswer not properly slashed
  * Bug Fix: Fixed issues with initPicture(2+3,5) in fallback
  * Bug Fix: graph fallback not showing dots on early GD versions
  * Bug Fix: DNE now case insensitive
  * Bug Fix: Gradebook no longer shows IP for past-due assessments
  * Bug Fix: - sign issues in math tex filter
  * Bug Fix: Linked text item attaching file giving header error

### 1.0beta15
_Released Sept 12, 2006_

Upgrade notes: See upgrade.txt

  * Added math and graph image fallback support!
  * Added mixed number answertype to calculated
  * Added essay type questions
  * Added point exclusions in showplot
  * Improved login with browser setting warning
  * Added print layout for generating hard copies
  * All question attempts are logged and displayed in instructor's gradebook
detail view
  * Fixed group admin functions to be MySQL 3.23 compatible
  * Added preview library off manage libraries page
  * Bug Fix: Template not maintaining library list for non-owner questions
  * Bug Fix: If domain in numfunc isn't a subset of actual domain, answer
evals as incorrect
  * Ignore commas in number and calculated types

### 1.0beta14
_Released Aug 05, 2006_

Upgrade notes: See upgrade.txt

  * Added Shift Course Dates
  * Added checkboxes in List Students page for unenroll and mass email
  * Added Copy Course Items
  * Added categorization to assessments, allowing categorical score breakdown.
  * Added item analysis to gradebook
  * Removed CourseCreator rights level
  * Implemented Group admins
  * Implemented Group library rights
  * Simplified dbsetup.php install
  * Bug Fix: Updated "assessment taken" warning to only warn if students have
taken the assessment
  * Bug Fix: 2-box entry mode not retaining after save and test
  * Bug Fix: questions not graded correctly in preview mode
  * Bug Fix: $a,$b=... causing problems when $a,$b shows up later in line
  * Bug Fix: import course items causing error when no assessments in import
  * Bug Fix: inlinetext graphs not displaying

### 1.0beta13
_Released July 8, 2006_

Upgrade notes: See upgrade.txt

  * Moved all session data into the database, eliminating the need for the
session save path fix for server farms, and resolving the PHP 24 minute
inactivity garbage collection default without requiring a separate session
save path
  * Added javascript confirm when submitting incomplete question (may have
accessibility issues)
  * Added 2-box entry option in question writing; added resize widgets to
entry boxes
  * Added mass email tool off List Students
  * Bug Fix: showanswer after duedate not looking for due date exceptions
  * Bug Fix: dbsetup not updated in last release
  * Bug Fix: import and importlib not assigning library item owners

### 1.0beta12
_Released June 14, 2006_

Upgrade notes: See upgrade.txt

  * Added multipart grade updating to gradebook
  * Added addlabel macro for adding a label to a plot
  * Added separate xgrid/ygrid option to showplot
  * Added sec,csc,cot
  * Allow add to library for nonowners, to allow reclassification of
questions, with added ownerid to limit removal
  * Added view source (and set libraries) option in question set management
and add questions
  * Added Spacecurve to plot3d library - needs rework into java class
  * Improvements to makepretty
  * Removed $q, $k, and $qn from disallowed variables
  * Automatic run of $answer in numfunc type through makepretty
  * Added "notrig" answerformat option to calculated type
  * Improved handling of nonowner adding questions to a library
  * Fixed handling of EndScore tests - gradebook detail access now controlled
by showanswer setting
  * Added password setting to import students
  * Bug fix: arctrig functions now display correctly in preview
  * Bug fix: $a1^2 now working OK
  * Bug fix: 4^.5 now working OK
  * Bug fix: 1* handling in makepretty interfering with eval of sin^-1. Still
causing problems with display of sin^-1, so 1* in makepretty has been
temporary disabled until a better resolution can be found.
  * Bug Fix: problems with variables that show up in expressions (like
variable r with sqrt). Mostly fixed
  * Bug Fix: multiletter vars returning syntax error by AMhelpers
  * Bug Fix: private libs not showing up in library selector
  * Bug Fix: assessments showing IP even after finalizing
  * Bug Fix: importstu for teachers not enrolling students
  * Bug Fix: save and test question error for nonadmins
  * Bug Fix: error in interpreter allowing while () { } statements
  * Bug Fix: $e misinterpreted as exponential
  * Bug Fix: Tablesorter not working
  * Bug Fix: multipart containing numfunc types problem
  * Bug Fix: showanswer problems
  * Bug Fix: template allowed placement into closed/private libraries
  * Bug Fix: question settings not importing on importitems

### 1.0beta11
_Released April 17, 2006_

Upgrade notes: See upgrade.txt. No changes.  
New/Fixed in 1.0beta11:

  * Added Course Item export/import
  * Added "Homework" assessment type, similar to practice tests, but graded
and doesn't regen on entry.
  * Added "Try similar question" option in Skip-around practice tests. Resets
attempts on that question
  * Added $answerformat = "equation" to numfunc type
  * Added "Copy Options from existing" option to assessment settings
  * Bug Fix: svg axes labels not showing in Mac FireFox
  * Bug Fix: forum giving error on MySQL 4, and not counting pages correctly
  * Bug Fix: time limit showing huge, wrong numbers
  * Bug Fix: variable interpolation problem in matrix type
  * Bug Fix: showasciisvg not working (semicolon problem) - need better fix
  * Bug Fix: matrix type losing negative signs
  * Bug Fix: multipart not adding to 100% possible
  * Bug Fix: error in import
  * Bug Fix: scoremethod in multans type
  * Bug Fix: gcd errors
  * Bug Fix: am/pm error on 12:xx
  * Bug Fix: scientific notation problems

### 1.0beta10
_Released March 29, 2006_

Upgrade notes: See upgrade.txt  
New/Fixed in 1.0beta10:

  * Added Accessibility options
  * Cleaned up front page layout
  * Added support for guest accounts
  * Added Unique questionset and library ids, allowing updating of
question/libraries on import
  * Added AddDate and LastModDate to questionset and libraries for enhanced
update control
  * Added Group Question option in assessments
  * Added Import Students from File option off admin page and List Users page
  * Added lastaccess field to users database, with Delete Old Users admin
option
  * Added $noshuffle option to matching, multiple-choice, and multiple-answer
types
  * Fixed forum cleanup on course delete/unenroll all students
  * Bug Fix: rrand not stepping. rrand(-5,5,2) now correctly will return
-5,-3,-1,1,3,or 5
  * Bug Fix: disappearing + signs in question text
  * Bug Fix: remove from assessment was removing from libraries
  * Bug Fix: items not deleting properly
  * Bug Fix: fixed inefficient diffrands
  * Misc other bug fixes

### 1.0beta9
_Released March 5, 2006_

Upgrade notes: See upgrade.txt  
New/Fixed in 1.0beta9:

  * Security Fix: SQL attack was possible with malformed id numbers. All
numbers are now quoted.
  * Added simple discussion forums
  * Added String question type
  * Changed from server-based timezone settings to autodetecting user's local
timezone. Dates are still absolute-time-fixed; if you set a due date to be 9pm
EST, someone in PST would see it being due at 6pm PST.
  * Added full show answer support
  * Added CSV export to gradebook
  * Added display of multipart correct answer points (pts per part). Reattempt
penalty still affects all parts
  * Added: choices: $displayformat = "select" option (won't render MathML)
  * Added: number/calc number: $answer = "4 or 5", $answer = "[3,5) or (6,8]"
  * Improved matching type to allow one-to-many matching
  * Improved clear assessment handling/notification
  * Improved blocks so they don't close on reorder
  * Improved HTML editor loading behavior
  * Bug Fix: problems with editing/displaying with html entities
  * Bug Fix: export lib when child is checked problem
  * Bug Fix: Add/Template allowing adding into closed libraries
  * Bug Fix: Students couldn't reenter test when more attempts allowed if all
questions answered
  * Bug Fix: Error (student page) on empty block
  * Bug Fix: calcmatrix w/ answersize not showing pre-calculated matrix
  * Bug Fix: oo and DNE not evaluating correctly in calculated

### 1.0beta8
_Released Feb 16, 2006_

Upgrade notes: Moved to upgrade.txt file  
New/Fixed in 1.0beta8:

  * Major revamp of library system - now tree structured.
  * Added blocks in course page (cookie on rearrange needs more elegant
solution)
  * Added library tree import/export; needs polishing (selection system)
  * Added author field to questions (autofills)
  * Added super-basic "show correct answer" support for practice tests - needs
rework
  * Added tutor/ta/proctor user rights
  * Included work on alternative front-end for placement testing (not
documented yet)
  * Added Use as Template option to manageqset
  * Added calconarray macro
  * Bug Fix: answers evaluating wrong when randomizer in question control
  * Bug Fix: make exception not working
  * Bug Fix: fraction/reduced fraction not accepting integers. Changed box tip
for fraction/reducedfraction formats
  * Bug Fix: showplot not returning to defaults
  * Bug Fix: requiretimes not working
  * Bug Fix: Showplots causing errors. Caused by error in interpreter
  * Bug Fix: Errors when clicking "do to selected" buttons when nothing
selected
  * Bug Fix: variables not defaulting to "x"
  * Bug Fix: Less than and greater than signs not displaying right in question
descriptions
  * Bug Partial Fix: less than / greater than not displaying right in question
text. System can now usually identify what is not part of an HTML tag, but
something like: "x<4 and x>3" is still misinterpreted. Use of &lt; and &gt;
recommended in these cases
  * Bug Fix: Gradebook including practice test in grade
  * Bug Fix: Gradebook showing grades for people who haven't taken the test

### 1.0beta7
_Released Feb 2, 2006_

Upgrade notes:

  * No Database or config.php changes.

New in 1.0beta7:

  * Added jointrandfrom macro
  * Added student gradebook
  * Bug Fix: pm dates changing to am dates
  * Bug Fix: assessment summary not saved on new assessment
  * Bug Fix: math not parsed when using a extension macro functions
  * Bug Fix: students could enroll in a course twice
  * Bug Fix: gradebook severely broken

### 1.0beta6b
_Released Jan 22, 2006_

Bug fix update to 1.0beta6. Fixes major error where sin,cos,etc. were not
being allowed in calculations.

### 1.0beta6
_Released Jan 21, 2006_

Upgrade notes:

  * Database setup has not changed.
  * Config.php has changed - added $TZ option and code to set Timezone

New in 1.0beta6:

  * Added horizshowarrays macro
  * Added DOCTYPE headers. Adjusted CSS for assessments.
  * Added setting for server timezone (to adjust for servers set for GMT or
hosted in a different timezone)
  * Bug fix: Couldn't edit SVG graphs in text items using FireFox.
  * Bug fix: Path of config.php not determined properly on some servers
  * Bug fix: Added type="image/svg+xml" to ASCIIsvg embeds
  * Bug fix: calcmatrix preview not showing in FireFox
  * Bug fix: width/height on showasciisvg
  * Bug fix: table sorting in FireFox
  * Bug fix: add item in FireFox

### New in 1.0beta5
_Released Jan 16, 2006_

  * Name change! Expanded name from IMAS to IMathAS for clarity
  * Added newuser email confirmation option
  * Add brief ASCIIMath description to help file
  * $answeights on multipart type
  * Added $answerboxsize option
  * Added $hidepreview option
  * Added arbitrary precision (real number) randomizers
  * Changed diffrand to diffrands and randFrom to randfrom to standardize
randomizers
  * Added calclisttoarray and listtoarray macros
  * Added $answerformat = "fraction", "reducedfraction" to calculated type
  * Added support for DNE and Infinity to number and calculated types
  * Added sortarray and consecutive macros
  * Made makepretty array capable
  * Cleaned up top half of addquestions
  * Added width and height to showplot
  * Moved CalendarPopup into javascript dir
  * Login format regex
  * Updated help documentation
  * misc bug fixes

### New in 1.0beta4
_Released Jan 11, 2006_

  * Question numbering starts at 1 for display
  * Current question is highlighted in Skip Around
  * allow positioning of answer prompt in qtext
  * multipart questions - point values, correct/wrong for parts
  * replace $choice with $questions
  * transfer course ownership option
  * misc bug fixes

### New in 1.0beta3
_Released Jan 8, 2006_

  * Added question library system
  * Help file
  * Added owner and userights to questionset:
0-private, 1-use/noderive/nomodify(notImplemented)
,2-use/derive/nomodify(Def), 3-use/modify
  * abstolerance option for number/calc/numfunc/matrix types
  * $answer="[2,5)" range option for number/calc types
  * Clear attempt link in GB detail
  * Auto-create new macro help on install
  * manageqset setup for teacher use or admin use
  * Added group transfer/remove to manageqset
  * Fixed quotes handling on search
  * import/export for all teachers
  * Added Limited Course Creator rights

### New in 1.0beta2
_Released Jan 3, 2006_

  * new matrix and calcmatrix types
  * new multiple-answer type
  * display of ansprompt fixed
  * deladmin improved
  * newadmin check for existing (chg rights)
  * change user settings (email, etc)
  * if conditional fixed
  * Separated macros into separate file
  * new macros: showarrays, showasciisvg
  * removed requireformat - expanded requiretimes
  * x variable fixed to not mess with exp
  * macro libraries can be loaded in questions
  * mathphp/mathjs standardized to use arctrig rather than atrig
  * Added macro installer
  * Expanded showplot macro
  * Added in progress designator to gradebook
  * Misc bug fixes

### New in 1.0beta1
_Released Jan 1, 2006_

  * Add summary to assessment
  * implement penalty
  * add inlinetext type
  * add "use as template" to addquestions
  * delete assessment
  * change time entry
  * deep course delete
  * retain search param in addquestions
  * Add itemorder to assessment
  * Add shuffle option to assessment
  * adjust itemorder in course and assessment
  * Add unenroll for students
  * add linkedtext types
  * check slashes on newuser POST
  * use safepow
  * write problem interpreter
  * completed time for assessment sessions
  * config file with username requirement
  * breadcrumbs
  * Add teacher controls - list users
  * implement timelimit in grades - override timelimit
  * exceptions for due dates
  * record given answers
  * save option on assessments - fulltest only (not needed on others)
  * gradebook - detailed view override grades
  * delete/mod from dataset for admins
  * use calendar popup
  * form validation
  * if to interpret
  * have addassessment send you to addquestions on new
  * new/modify headings in add..
  * button confirm on delete item
  * fix $points
  * multiletter variables - don't quote single letter variables
  * dataset export/import
  * add use htmlarea
  * add email to newadmin
