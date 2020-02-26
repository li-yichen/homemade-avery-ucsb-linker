## <img src="../master/icon.png" alt="alt text: icon of extension, white on dark gray emoticon of santa hat" width="48" height="48"> Howdy!
as you can see from the format of this document, the owner(s) of this repository are not affiliated with ucsb libary, nor with the avery index.<br></br>
if anyone is interested in using or contributing to this humble, weirdly specific (\*which is why firefox add-on store refused to publish it) function, please read the first 3 sections.<br></br>

## table of contents  
* [what it does, and license \*<|:-)](#what-it-does-and-license--)
* [FLAWS (PLEASE READ) \*<|:-|](#flaws-please-read--)
* [installation (PLEASE READ THIS TOO) \*<|:-)](#installation--)
* [this will not work with: \*<|:-(](#this-will-not-work-with--)
* [customization ~~\*<|:-)~~](#customization--)
* [updates and contribution \*<|:-)](#updates-and-contribution--)
* [privacy \*<|:-)](#privacy--)
* [dependencies \*<|:-) ](#dependencies--)
* [thank you for visiting this page \*<|:-3](#thank-you-for-visiting-this-page--3)

##  what it does, and license \*<|:-)
it does this:  
<img src="../master/screenshots/screenshot_webpage.png" alt="alt text: Screenshot showing the extension working" width="800" height="474">
license(/user agreement?):

    <Part of an avery index / ucsb link browser extension that adds ucsb library links to search  
    results on the proquest page of the avery index of architectural periodicals.
    To limit time waste and thumb pain from repeatedly copy-pasting titles from the
    avery index into UCSB library search. I am not affiliated with UCSB Library, nor with
    the Avery Index, I do not own the original .pdf list of journals 
    file or the content in the .json or .js formats of list of journals, it came from 
    https://library.columbia.edu/libraries/avery/avery-index/current_periodicals.html
    since the link is quite old, please read the 'FLAWS' section in README.txt or 
    README.md. this project's github page is: https://github.com/li-yichen/homemade-avery-ucsb-linker>
    Copyright (C) <2020>  <Yichen Li> 
	
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

<sup>the reason for the lack of upper case letters in this file is that they could look aggressive, **Especially WHEN BOLDED**.</sup></br>

## FLAWS (PLEASE READ) \*<|:-|
while the code will hopefully work on your browser,
### **the tool would label some journals as "ucsb-try-to-find" if the journal is not in the lists of available or unavailable Avery-indexed journals**, which are based on the *vintage* ["avery index current journals 6-21-18.pdf"](https://library.columbia.edu/libraries/avery/avery-index/current_periodicals.html).  **however, you can help improve them while using the tool** (please see [updates and contribution \*<|:-)](#updates-and-contribution--))  
### given the nonuniformity of the publication names on Proquest (often multiple written forms of same publication), the resulting searches (e.g."A V monografías = A V monographs") from "ucsb-try-to-find" sometimes lead to no results, even if the journal (e.g. "A&V") is actually available at UCSB. If it looks wrong, please double check whether it is available by searching the ISSN of the journal instead.
### if you encounter more problems or inaccuracies, please post in the "Issues" tab :0

## installation \*<|:-)
a) ***easiest way***: to install this on firefox with the .xpi file, **please download only the [.xpi file](https://github.com/li-yichen/homemade-avery-ucsb-linker/raw/master/homemade_ucsb_avery_linker_version_1.8.xpi)** and follow the direction here (in gray box): https://support.mozilla.org/en-US/kb/find-and-install-add-ons-add-features-to-firefox#w_how-do-i-find-and-install-add-ons, it should work straight away.  
on click, the toolbar button(see below) shows links to the spreadsheets of available and unavailable journals, you are welcome to contribute to them.  
<img src="../master/screenshots/screenshot_button.png" alt="alt text: Screenshot showing the extension button" width="140" height="156">  
</br>
------------------------***feel free to stop reading now***-------------------------------------- 
</br>
</br>
</br>
</br>
</br>
</br>
</br>

b) if you are installing this as a developer on firefox or chrome: then, you do not need any information that can be provided by the owner of this repo, please consider reading the [updates and contribution \*<|:-)](#updates-and-contribution--) section for how you can help ~~rewrite~~improve this tool.

## this will not work with: \*<|:-(
safari

## it is not tested on: \*<|:-|
chrome (please reach out if you know how to do it

## customization ~~\*<|:-)~~
To modify anything, please install this by making a new folder on your computer, containing:  
* [content_script/](https://github.com/li-yichen/homemade-avery-ucsb-linker/tree/master/content_script?raw=true)
* [popup/](https://github.com/li-yichen/homemade-avery-ucsb-linker/tree/master/popup?raw=true)
* [icon.png](https://github.com/li-yichen/homemade-avery-ucsb-linker/blob/master/icon.png?raw=true)
* [manifest.json](https://github.com/li-yichen/homemade-avery-ucsb-linker/blob/master/manifest.json?raw=true)</br>
and see the section "Loading a temporary extension" of https://developer.mozilla.org/en-US/docs/Tools/about:debugging.</br>
to modify background color, color, and font family for links, please go to beep.js and change the respective variables from line 1554 to 1579 (see below) <sup>If you do not like the santa/fuzzy ball hat emoticon " *<|:-) " in the links or the " (′▽\`〃) " emoticon on your browser console log, please edit lines 1571, 1595 of the beep.js file and delete them from the respective variables to which they rightfully belong. </sup>
```
    // code excerpt starts here -->
    // all colors here are written in hexadecimal color codes, but you don't have to
    // text colors for new links
    // all link text colors are now white
    a.style.color = "#ffffff";
    // make links open in new tab
    a.setAttribute('target','_blank')
    // font family and fallback generic font family (typeface depends on your browser), i.e. "Times New Roman,serif"
    a.style.fontFamily = "Andale Mono,monospace"; 
    // link will later be added to list item, make left and right margins 10px for the text
    listItem.style.padding = "0px 10px"; 
    // if ucsb certainly has it, add link to the journal's entry on ucsb library website
	if (pub in journals){
        //background color for new links to available journals
        listItem.style.backgroundColor = "#444444";
        a.setAttribute('href', journals[pub]["url"]);
		a.textContent = " ucsb-library-link *<|:-) ";
        listItem.appendChild(a);
        contentLink.appendChild(listItem);
    // if ucsb certainly does not have it, link will say "unavailable at ucsb" and only refresh page when clicked
	} else if (pub in journalsNo){
        // background color is white
        listItem.style.backgroundColor = "#ffffff";
        a.setAttribute('href', '');
        a.textContent = " unavailable-at-ucsb ";
        // text color is black
        a.style.color = "#000000";
        listItem.appendChild(a);
        contentLink.appendChild(listItem);
    // if unsure about whether ucsb have it, link will say "ucsb-try-to-find", and direct to a ucsb library search result page using the publication name as keyword
    } else {
        //background color for new links
        listItem.style.backgroundColor = "#888888";
    //<---code excerpt stops here
```

## updates and contribution \*<|:-)
0. **to help this work better by expanding the list of journals:** **if you are interested and you have clicked on one of the 'try-ucsb-library' links, please contribute to the two lists of [confirmed available](https://docs.google.com/spreadsheets/d/1Ui3_NSFEeomenLZzjY2R-3TsAMa2yHGYy0s_OIwgjOQ/edit#gid=1343837595) and [unavailable](https://docs.google.com/spreadsheets/d/1Ui3_NSFEeomenLZzjY2R-3TsAMa2yHGYy0s_OIwgjOQ/edit#gid=1171591075) journals at UCSB**: https://docs.google.com/spreadsheets/d/1Ui3_NSFEeomenLZzjY2R-3TsAMa2yHGYy0s_OIwgjOQ/edit#gid=1682625286 thank you.  
^ to potential contributors of the extension itself: please add the list of contributors of above document into the beginning of every source code file, before/after<sup>(not sure)</sup> the copyright statement.  
1. **to use the most up-to-date version of the lists:** please download them in .tsv format in the link above, rename as "journals.tsv" and "journals-unavailable.tsv", put them in the journal_info folder AND:  
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run jsonmaker.py if you have python, pandas, json, and os.  
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OR  
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;make your own copy of jsonmaker.ipynb from [here](https://colab.research.google.com/drive/1tqVI8Kgyd9M1I7tfXODn21li-ADxnBgg), then open it on your google colab (comes with google drive)  
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;click "run all"  
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;then upload the two tsv files when asked  
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;download of .json files should automatically start  
THEN copy their contents into the variables 'journals' and 'journalsNo' in the beep.js file (it's the very long dictionary variable.)  
2. **if you would like to ~~rewrite~~iMprOvE the code:** any help is appreciated. to contribute to this repository, please email the owner(s) of this repository about what you plan on changing, and *so that they could add you as an owner on the firefox add-on project page* to facilitate updates.
3. **contact info**: https://github.com/li-yichen, yichenli@ucsb.edu

## privacy \*<|:-)
<sup>first, the current developer is not skilled enough to steal your data</sup>This extension will ask for your permission to access the data on your search.proquest.com/avery/... visits, however, it will not save your data, as they are only used for finding out whether a journal in the search results is available, and for displaying links.

## dependencies \*<|:-) 
  none for beep.js.  
  if you'd like to generate a new list of journals with python, jsonmaker.py requires: pandas, json, os.

# thank you for visiting this page \*<|:-3
<img src="../master/large.png" alt="alt text: icon of extension as large photo, white on dark gray emoticon of santa hat">
