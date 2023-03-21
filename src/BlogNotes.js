// Steps followed during project
//*// Kontahi Content dakhavala ki tyala className dyayacha karan, Tyala style karaych asat.
// Same function tar same className (Ex - sidebarTitles, .sidebarItem), karan sarkhi style apply karayachi asate.
//*// Sop aahe yaar, aapan nemak kay target kartoy te pahayach mag tya nusar tyachya container, className pakadayach aani styling karayachi.
//*// Page var mi different component render karat asto like (Home var Header, Posts ani Sidebar AND Single var Singlepost ani Sidebar)
//*// Garjenusar aaplyala class deta aala pahije, wrapper takta ala pahije ani tyanusar tyancha use zala pahije.
//*// Pages banvatana, page banvun App.js var te import karayach ani tithe te build karayach aani mag tithun hatvayachani routing la dyayach.
//*// Terminal la aapan tyachi working baghu shakato i.e localhost or console var jya error distat tya terminal la pan bghu shakato.

// TopBar.js - Left, Right, Center (Overall div, content sathi div and class, each content sathi class). Image access
// Header.js - content chi position absolute kelyamule, Image background la geli.
// Home.js (pages) - Eka component madhe Header, Posts, Sidebar show kela. (Praent i.e home cha display:flex, karun child- Posts and Sidebar chi size dili flex = 9 and 3 res.)
// Sidebar.js - Overall Container(.sidebar), Individual section sathi container(.sidebarItem), title sathi same className(.sidebarTitles) . Category madhe lists na grid vaparnyapekshya, inline-block karun width deun 2D madhe dakhavle aahe.
// Posts.js - madhe Post.js import kela (Sagalya post target karayachya asel tar Posts.js component)
// Post.js madhe code - parat container, class he sagal same aahe. (Individual post la target karayach asel tar ha component)
// Page (single) and component(Singlepost) - single ya page var Singlepost component and Sidebar component dakhvayacha aahe.
// Singlepost.js - Title chi font dilyavar italic aahe ki nahi yasathi index.html madhe copy keleli link check keli. Icons sathi float property vaparli. "PSEDUO CLASSES" vaparale aahet. .singlePostInfo la margin detana fakt bottom kadun margin dil aahe karan top, right, ani left ch margin already applicable aahe due to other elements. Na
// Write.js - madhe various css properties like , :focus, outline etc property vapralya aahet. Clickable(Plus) file Icon la size deta yet navhati so ti inline styleing ne dili. (Same applied in Settings.js chya clickable file icon la)
// Settings.js - <input/> gheun tyacha id label la pass kela ani <input/> hide kela so label madhil content(here Icon) clickble zala jo file open kartoy.
// Login.js - login form chya height sathi calc(100vh - 50px) kel, to not to overflow. Form middling sathi, display:flex, flex-direction: column; justify-content: center; kela
// Register.js - Login page sarakhach aahe jaudt minor change
// Routing keli with dummy user
// Link ji dili aahe tayala universal styling apply karnyasathi className deun index.html madhe styling apply keli.
// { user && "LOGOUT"} => both present asel tarach logout disel nahitar nahi disnar. Like pretected routing aahe he.
//*// Conditional Rendering - user chi true/false state maintain karun, Routing madhe components maintain kele aahet. Topbar.js madhe - LOGOUT, LOGIN, REGISTER components maintain kele aahe. Ki jar User Login asel tar kay Dakhvayach ani User jar login nasel tar kay dakhavayach.

//*// Revision / Revisit
// Topbar
// la position:sticky and z-index - 999, dilyamule to eka gajevar ani kayam varati rahil. Parent cha display-flex karun aapan child la flex - n, ashi size deu shakato.
// Post.js
// .postDescription madhe extra css lavli aahe ti content chya khali ... yenari
// Write.js
// Form banvala, label and input feild, input cha id label la, clickable icon,

//*// Note - Wrapper div, Classes and Style.
//*// Ya Property Use - Wrapper div, same element sathi common classes, display: flex; flex-direction: column; align-items: center; position: absolute, relative, font-weight, image sathi object-fit, flex-wrap, margin, pseudo classes and element, Form sathi - form, label, input

//*// Kharach sop aahe.
