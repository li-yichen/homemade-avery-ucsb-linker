// #     <Part of an avery index / ucsb link browser extension that adds ucsb library links to search  
// #     results on the proquest page of the avery index of architectural periodicals.
// #     To limit time waste and thumb pain from repeatedly copy-pasting titles from the
// #     avery index into UCSB library search. I am not affiliated with UCSB Library, nor with
// #     the Avery Index, I do not own the original .pdf list of journals 
// #     file or the content in the .json or .js formats of list of journals, it came from 
// #     https://library.columbia.edu/libraries/avery/avery-index/current_periodicals.html
// #     since the link is quite old, please read the 'FLAWS' section in README.txt or 
// #     README.md. this project's github page is: https://github.com/li-yichen/homemade-avery-ucsb-linker>
// #     Copyright (C) <2020>  <Yichen Li>

// #     This program is free software: you can redistribute it and/or modify
// #     it under the terms of the GNU General Public License as published by
// #     the Free Software Foundation, either version 3 of the License, or
// #     (at your option) any later version.

// #     This program is distributed in the hope that it will be useful,
// #     but WITHOUT ANY WARRANTY; without even the implied warranty of
// #     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// #     GNU General Public License for more details.

// #     You should have received a copy of the GNU General Public License
// #     along with this program.  If not, see <https://www.gnu.org/licenses/>.

//find all results and return as list
var contentDivList = document.getElementsByClassName("contentArea");

//list of available journals
var journals = {
    "A+BE: Architecture and the Built Environment": {
        "issn": "2212-3202",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=01UCSB_SCP_SERIALS825099983&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=default_tab&query=any,contains,2212-3202"
    },
    "AA files": {
        "issn": "0261-6823",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS607455921&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,AA%20files&offset=0&journals=any,0621-8623"
    },
    "Abitare": {
        "issn": "0001-3218",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21161210520003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0001-3218&offset=0&journals=any,0001-3218"
    },
    "ACE: Architecture, city and environment (Spain)": {
        "issn": "1886-4805",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS502637984&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1886-4805&journals=any,1886-4805"
    },
    "AGC: architectural glass concepts magazine": {
        "issn": "1947-8070",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS184842468&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1947-8070&offset=0&journals=any,1947-8070"
    },
    "American journal of archaeology": {
        "issn": "0002-9114",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21209586120003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0002-9114&offset=0&journals=any,0002-9114\""
    },
    "Angulo recto": {
        "issn": "1989-4015",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS535943877&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,Angulo%20recto&offset=0&journals=any,Angulo%20recto"
    },
    "Apollo (London)": {
        "issn": "0003-6536",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0003-6536&tab=jsearch_slot&vid=UCSB&offset=0&journals=0003-6536\","
    },
    "APT bulletin": {
        "issn": "0848-8525",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS61236541&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0848-8525&offset=0&journals=any,0848-8525"
    },
    "Architect (Washington D.C.)": {
        "issn": "1935-7001",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS123911100&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1935-7001&offset=0&journals=any,1935-7001"
    },
    "Architects' journal": {
        "issn": "0003-8466",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS680544440&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0003-8466&offset=0&journals=any,0003-8466"
    },
    "Architectura: Zeitschrift fur Geschichte der Baukunst": {
        "issn": "0044-863x",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21243307910003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0044-863x&offset=0&journals=any,0044-863x\""
    },
    "Architectural design (London)": {
        "issn": "0003-8504",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0003-8504&tab=jsearch_slot&vid=UCSB&offset=0&journals=any,0003-8504"
    },
    "Architectural digest": {
        "issn": "0003-8520",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0003-8520&tab=jsearch_slot&vid=UCSB&offset=0&journals=any,0003-8520\""
    },
    "Architectural Glass concepts": {
        "issn": "1947-8070",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS184842468&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1947-8070&offset=0&journals=any,1947-8070"
    },
    "Architectural histories": {
        "issn": "2050-5833",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS859520091&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2050-5833&offset=0&journals=any,2050-5833\""
    },
    "Architectural history": {
        "issn": "0066-622X",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS1481858&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0066-622X&offset=0&journals=any,0066-622X\""
    },
    "Architectural record": {
        "issn": "0003-858X",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS61313193&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0003-858X&offset=0&journals=any,0003-858X"
    },
    "Architectural review": {
        "issn": "0003-861X",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS38435978&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0003-861X&offset=0&journals=any,0003-861X"
    },
    "Architectural theory review": {
        "issn": "1326-4826",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS226377211&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1326-4826&offset=0&journals=any,1326-4826"
    },
    "Architecture + design (India)": {
        "issn": "0970-2369",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS12175258&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0970-2369&offset=0&journals=any,0970-2369"
    },
    "Architecture Australia": {
        "issn": "0003-8725",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS223324509&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0003-8725&offset=0&journals=any,0003-8725"
    },
    "Architecture Boston": {
        "issn": "1099-6346",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS39178110&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&isFrbr=true&tab=jsearch_slot&query=any,contains,1099-6346&offset=0&journals=any,1099-6346"
    },
    "Architecture d'aujourd'hui": {
        "issn": "0003-8695",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21243018370003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0003-8695&offset=0&journals=any,0003-8695"
    },
    "Architecture_MPS (Media Politics Society)": {
        "issn": "2050-9006",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS836888007&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2050-9006&offset=0&journals=any,2050-9006"
    },
    "Architecture of Israel": {
        "issn": "0792-1268",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS20347816&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0792-1268&offset=0&journals=any,0792-1268"
    },
    "Archivos de arquitectura antillana": {
        "issn": "1028-3072",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS657834225&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1028-3072&offset=0&journals=any,1028-3072"
    },
    "Archnet - IJAR: International journal of architectural research": {
        "issn": "1994-6961",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS145980807&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1994-6961&offset=0&journals=any,1994-6961"
    },
    "Arkitektur: the Swedish review of architecture": {
        "issn": "0004-2021",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS570324067&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0004-2021&offset=0&journals=any,0004-2021"
    },
    "ARQ (Chile)": {
        "issn": "0716-0852",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS506495715&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,ARQ%20(Chile)&offset=0&journals=any,ARQ%20(Chile)"
    },
    "ARQ: architectural research quarterly": {
        "issn": "1359-1355",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21163559460003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1359-1355&offset=0&journals=any,1359-1355"
    },
    "Arquitecturas del Sur": {
        "issn": "0716-2677",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS30042555&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0716-2677&offset=0&journals=any,0716-2677"
    },
    "Arris": {
        "issn": "1048-5945",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS988875952&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1048-5945&offset=0&journals=any,1048-5945"
    },
    "Art bulletin": {
        "issn": "0004-3079",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0004-3079&tab=jsearch_slot&vid=UCSB&offset=0&journals=any,0004-3079"
    },
    "Arte Lombarda": {
        "issn": "0004-3443",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS564070415&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0004-3443&offset=0&journals=any,0004-3443"
    },
    "Arte y ciudad": {
        "issn": "2254-7673",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS899365718&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2254-7673&offset=0&journals=any,2254-7673"
    },
    "Artes de Mexico": {
        "issn": "0300-4953",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0300-4953&tab=jsearch_slot&vid=UCSB&offset=0&journals=any,0300-4953"
    },
    "Australian planner": {
        "issn": "0729-3682",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS224487118&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0729-3682&offset=0&journals=any,0729-3682"
    },
    "Baumeister": {
        "issn": "0005-674X",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS565143636&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0005-674X&offset=0&journals=any,0005-674X"
    },
    "Berkeley Planning Journal": {
        "issn": "1047-5192",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS11336832&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1047-5192&offset=0&journals=any,1047-5192"
    },
    "Blueprint (London, England)": {
        "issn": "0268-4926",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS10768478&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0268-4926&offset=0&journals=any,0268-4926"
    },
    "Bollettino d'arte": {
        "issn": "0394-4573",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21265059510003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0394-4573&offset=0&journals=any,0394-4573"
    },
    "Buildings": {
        "issn": "2075-5309",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS823191594&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2075-5309&offset=0&journals=any,2075-5309"
    },
    "Built environment": {
        "issn": "0263-7960",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS565613641&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0263-7960&offset=0&journals=any,0263-7960"
    },
    "Burlington magazine": {
        "issn": "0007-6287",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0007-6287&tab=jsearch_slot&vid=UCSB&offset=0&journals=any,0007-6287"
    },
    "Canadian architect": {
        "issn": "0008-2872",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS1553038&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0008-2872&offset=0&journals=any,0008-2872"
    },
    "Canadian interiors": {
        "issn": "0008-3887",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS60622922&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0008-3887&offset=0&journals=any,0008-3887"
    },
    "Casabella": {
        "issn": "0008-7181",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21177465690003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0008-7181&offset=0&journals=any,0008-7181"
    },
    "Cities": {
        "issn": "0264-2751",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0264-2751&tab=jsearch_slot&vid=UCSB&lang=en_US&offset=0&journals=any,0264-2751"
    },
    "Classicist": {
        "issn": "1076-2922",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS682391073&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1076-2922&offset=0&journals=any,1076-2922"
    },
    "Conservation science in cultural heritage": {
        "issn": "1973-9494",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS335442439&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1973-9494&offset=0&journals=any,1973-9494"
    },
    "Crit": {
        "issn": "0277-6863",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS607366812&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0277-6863&offset=0&journals=any,0277-6863"
    },
    "Cuaderno de notas": {
        "issn": "1138-1590",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS821533416&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1138-1590&offset=0&journals=any,1138-1590"
    },
    "DC (Spain)": {
        "issn": "1139-5559",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS163879496&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1139-5559&offset=0&journals=any,1139-5559"
    },
    "Dearq (Colombia)": {
        "issn": "2215-969X",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS670494432&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2215-969X&offset=0&journals=any,2215-969X"
    },
    "Design issues": {
        "issn": "0747-9360",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0747-9360&tab=jsearch_slot&vid=UCSB&lang=en_US&offset=0&journals=any,0747-9360"
    },
    "The Architect's Journal": {
        "issn": "",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS680544440&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0003-8466&offset=0&journals=any,0003-8466"
    },
    "DoCoMoMo journal": {
        "issn": "1380-3204",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS609715398&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1380-3204&offset=0&journals=any,1380-3204"
    },
    "Domus": {
        "issn": "0012-5377",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21175950480003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0012-5377&offset=0&journals=any,0012-5377"
    },
    "Dumbarton Oaks papers": {
        "issn": "0070-7546",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0070-7546&tab=jsearch_slot&vid=UCSB&lang=en_US&offset=0&journals=any,0070-7546"
    },
    "EdA: Esempi di architettura": {
        "issn": "2035-7982",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS905958405&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2035-7982&offset=0&journals=any,2035-7982"
    },
    "Enquiry: journal of architectural research": {
        "issn": "2329-9339",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS852256523&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2329-9339&offset=0&journals=any,2329-9339"
    },
    "Environment and planning A": {
        "issn": "0308-518X",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0308-518X&tab=jsearch_slot&vid=UCSB&lang=en_US&offset=0&journals=any,0308-518X"
    },
    "Environment and planning B: planning & design": {
        "issn": "0265-8135",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0265-8135&tab=jsearch_slot&vid=UCSB&lang=en_US&offset=0&journals=any,0265-8135"
    },
    "Environment and planning D: society & space": {
        "issn": "0263-7758",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21177242670003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0263-7758&offset=0&journals=any,0263-7758"
    },
    "Estoa: Revista de la facultad\u2026 Cuenca": {
        "issn": "1390-9274",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS945924652&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1390-9274&offset=0&journals=any,1390-9274"
    },
    "Fabrications": {
        "issn": "1033-1867",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS269013831&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1033-1867&offset=0&journals=any,1033-1867"
    },
    "Form: pioneering design": {
        "issn": "0885-7377",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0885-7377&tab=jsearch_slot&vid=UCSB&lang=en_US&offset=0&journals=any,0885-7377"
    },
    "Frank Lloyd Wright quarterly": {
        "issn": "no ISSN",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21246858530003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,Frank%20Lloyd%20Wright%20quarterly&offset=0&journals=any,Frank%20Lloyd%20Wright%20quarterly"
    },
    "Furniture history": {
        "issn": "0016-3058",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS693138956&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,Furniture%20history&offset=0&journals=any,Furniture%20history"
    },
    "Future anterior": {
        "issn": "1549-9715",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21206845790003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1132-6409&offset=0&journals=any,1549-9715"
    },
    "GA document": {
        "issn": "0389-0066",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21251519010003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0389-0066&offset=0&journals=any,0389-0066"
    },
    "GA houses": {
        "issn": "no ISSN",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21224983400003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,GA%20houses&offset=0&journals=any,GA%20houses"
    },
    "GA Japan: environmental design": {
        "issn": "no ISSN",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21179092770003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,GA%20Japan:%20environmental%20design&offset=0&journals=any,GA%20Japan:%20environmental%20design"
    },
    "Garden history": {
        "issn": "0307-1243",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS62483247&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0307-1243&offset=0&journals=any,0307-1243"
    },
    "Gesta": {
        "issn": "0016-920X",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0016-920X&tab=jsearch_slot&vid=UCSB&offset=0&journals=any,0016-920X"
    },
    "Grey room": {
        "issn": "1526-3819",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21169532310003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1526-3819&offset=0&journals=any,1526-3819"
    },
    "Habitat sustenable": {
        "issn": "0719-0700",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS870993478&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0719-0700&offset=0&journals=any,0719-0700"
    },
    "Heritage New Zealand": {
        "issn": "1175-9615",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS67767448&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1175-9615&offset=0&journals=any,1175-9615"
    },
    "House beautiful": {
        "issn": "0018-6422",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS39031236&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0018-6422&offset=0&journals=any,0018-6422"
    },
    "i2: Innovacion e investigacion en arquitectura y urbanismo": {
        "issn": "2341-0515",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS958677539&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2341-0515&offset=0&journals=any,2341-0515"
    },
    "Interior design": {
        "issn": "0020-5508",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0020-5508&tab=jsearch_slot&vid=UCSB&offset=0&journals=any,0020-5508"
    },
    "International journal of sustainable building technology and": {
        "issn": "2093-761X",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS904503342&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2093-761X&offset=0&journals=any,2093-761X"
    },
    "Interventions/adaptive reuse : Int/AR (US)": {
        "issn": "2154-8498",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS750374593&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2154-8498&offset=0&journals=any,2154-8498"
    },
    "Irish architectural and decorative studies": {
        "issn": "no ISSN",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,Irish%20architectural%20and%20decorative%20studies&tab=jsearch_slot&vid=UCSB&offset=0&journals=any,Irish%20architectural%20and%20decorative%20studies"
    },
    "Italian journal of planning practice": {
        "issn": "2239-267X",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS823697071&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2239-267X&offset=0&journals=any,2239-267X"
    },
    "JAPA: Journal of the American Planning Association": {
        "issn": "0194-4363",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,JAPA:%20Journal%20of%20the%20American%20Planning%20Association&tab=jsearch_slot&sortby=date&vid=UCSB&facet=frbrgroupid,include,1070819522&offset=0&journals=any,JAPA:%20Journal%20of%20the%20American%20Planning%20Association"
    },
    "Japan architect": {
        "issn": "0448-8512",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21223233950003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0448-8512&offset=0&journals=any,0448-8512"
    },
    "Jian zhu xue hao = Journal of Architecture (China)": {
        "issn": "1016-3212",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS24231333&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1016-3212&offset=0&journals=any,1016-3212"
    },
    "Journal of architectural and planning research": {
        "issn": "0738-0895",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS60616154&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0738-0895&offset=0&journals=any,0738-0895"
    },
    "Journal of architectural conservation": {
        "issn": "1355-6207",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS609716315&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1355-6207&offset=0&journals=any,1355-6207"
    },
    "Journal of architectural education: JAE": {
        "issn": "1046-4883",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,1046-4883&tab=jsearch_slot&vid=UCSB&offset=0&journals=any,1046-4883"
    },
    "Journal of architecture (RIBA)": {
        "issn": "1360-2365",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21162309590003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1046-4883&offset=0&journals=any,1360-2365"
    },
    "Jian zhu xue bao=Journal of architecture (Taipei)": {
        "issn": "1016-3212",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS24231333&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1016-3212&offset=0&journals=any,1016-3212"
    },
    "Journal of daylighting": {
        "issn": "2383-8701",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS914216388&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2383-8701&offset=0&journals=any,2383-8701"
    },
    "Journal of landscape architecture: JoLA (Netherlands)": {
        "issn": "1862-6033",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,1862-6033&tab=jsearch_slot&vid=UCSB&offset=0&journals=any,1862-6033"
    },
    "Journal of the American Institute for Conservation": {
        "issn": "0197-1360",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21230033340003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0197-1360&offset=0&journals=any,0197-1360"
    },
    "Journal of the Society for the Study of Architecture in Canada": {
        "issn": "1486-0872",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS759374618&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1486-0872&offset=0&journals=any,1486-0872"
    },
    "Journal of the Society of Architectural Historians": {
        "issn": "0037-9808",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21183223370003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0037-9808&offset=0&journals=any,0037-9808"
    },
    "Journal of the Warburg and Courtauld Institutes": {
        "issn": "0075-4390",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0075-4390&tab=jsearch_slot&sortby=date&vid=UCSB&facet=frbrgroupid,include,153875561&offset=0&journals=any,0075-4390"
    },
    "Landscape architecture Australia": {
        "issn": "1833-4814",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS989013116&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1833-4814&offset=0&journals=any,1833-4814"
    },
    "Landscape architecture magazine": {
        "issn": "0023-8031",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21163706550003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0023-8031&offset=0&journals=any,0023-8031"
    },
    "Landscape review": {
        "issn": "2253-1440",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS402811848&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2253-1440&offset=0&journals=any,2253-1440"
    },
    "Landscapes / Paysages": {
        "issn": "1492-9600",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS398233046&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1492-9600&offset=0&journals=any,1492-9600"
    },
    "Livraisons d\u2019histoire de l\u2019architecture": {
        "issn": "1627-4970",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS50501836&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,Livraisons%20d%E2%80%99histoire%20de%20l%E2%80%99architecture&offset=0&journals=any,Livraisons%20d%E2%80%99histoire%20de%20l%E2%80%99architecture"
    },
    "Log": {
        "issn": "1547-4690",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS608244641&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1547-4690&offset=0&journals=any,1547-4690"
    },
    "London journal": {
        "issn": "0305-8034",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS4300546&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0305-8034&offset=0&journals=any,0305-8034"
    },
    "Lotus international": {
        "issn": "1124-9064",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21241834210003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,Lotus%20international&offset=0&journals=any,Lotus%20international"
    },
    "Macram\u00e9": {
        "issn": "1971-6230",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS405747086&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1971-6230&offset=0&journals=any,1971-6230"
    },
    "Magazine antiques": {
        "issn": "0161-9284",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0161-9284&tab=jsearch_slot&vid=UCSB&offset=0&journals=any,0161-9284"
    },
    "Marquee": {
        "issn": "0025-3928",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21332641710003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0025-3928&offset=0&journals=any,0025-3928"
    },
    "Megaron (Turkey)": {
        "issn": "1309-6915",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS653458028&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1309-6915&offset=0&journals=any,1309-6915"
    },
    "Memoirs of the American Academy in Rome": {
        "issn": "0065-6801",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS263448427&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0065-6801&offset=0&journals=any,0065-6801"
    },
    "Middle East Technical University. Journal": {
        "issn": "0258-5316",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0258-5316&tab=jsearch_slot&vid=UCSB&offset=0&journals=any,0258-5316"
    },
    "Mimarlik  (Turkey)": {
        "issn": "1300-4212",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS458296057&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1300-4212&offset=0&journals=any,1300-4212"
    },
    "Multi: The RIT journal of plurality\u2026": {
        "issn": "1942-3527",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS227036028&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1942-3527&offset=0&journals=any,1942-3527"
    },
    "Muqarnas": {
        "issn": "0732-2992",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0732-2992&tab=jsearch_slot&vid=UCSB&offset=0&journals=any,0732-2992"
    },
    "Nexus network journal": {
        "issn": "1590-5896",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS40194482&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1590-5896&offset=0&journals=any,1590-5896"
    },
    "October": {
        "issn": "0162-2870",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS47273509&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0162-2870&offset=0&journals=any,0162-2870"
    },
    "On the W@terfront": {
        "issn": "1139-7365",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS823698017&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1139-7365&offset=0&journals=any,1139-7365"
    },
    "On-site": {
        "issn": "no issn",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21246950810003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,On-site&offset=0&journals=any,On-site"
    },
    "Palimpsesto": {
        "issn": "2014-1505",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS878192917&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2014-1505&offset=0&journals=any,2014-1505"
    },
    "Palladio": {
        "issn": "0031-0379",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21198095940003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0031-0379&offset=0&journals=any,0031-0379"
    },
    "Perspecta": {
        "issn": "0079-0958",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0079-0958&tab=jsearch_slot&vid=UCSB&offset=0&journals=any,0079-0958"
    },
    "Piranesi": {
        "issn": "1318-007X",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21253801210003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,Piranesi&offset=0&journals=any,Piranesi"
    },
    "Plan Canada": {
        "issn": "0032-0544",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21188947630003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0032-0544&offset=0&journals=any,0032-0544"
    },
    "PLAN Journal : research in architecture and urbanism": {
        "issn": "no ISSN",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS969773600&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,PLAN%20Journal%20:%20research%20in%20architecture%20and%20urbanism&offset=0&journals=any,PLAN%20Journal%20:%20research%20in%20architecture%20and%20urbanism"
    },
    "Planning (American Planning Association)": {
        "issn": "0001-2610",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,Planning%20(American%20Planning%20Association)&tab=jsearch_slot&sortby=date&vid=UCSB&facet=frbrgroupid,include,1070819522&offset=0&journals=any,Planning%20(American%20Planning%20Association)"
    },
    "Planning perspectives:  PP": {
        "issn": "0266-5433",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21235114080003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0266-5433&offset=0&journals=any,0266-5433"
    },
    "Preservation: the magazine of the National Trust for Historic": {
        "issn": "1090-9931",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21225393150003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1090-9931&offset=0&journals=any,1090-9931"
    },
    "RACAR: revue d'art canadienne.  Canadian art review": {
        "issn": "0315-9906",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS741482961&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0315-9906&offset=0&journals=any,0315-9906"
    },
    "Revista de arquitectura (Chile)": {
        "issn": "0716-8772",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS26019142&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0716-8772&offset=0&journals=any,0716-8772"
    },
    "Revista indexada de textos\u2026": {
        "issn": "2340-9711",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS904028451&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2340-9711&offset=0&journals=any,2340-9711"
    },
    "RIBA journal": {
        "issn": "1463-9505",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,1463-9505&tab=jsearch_slot&vid=UCSB&offset=0&journals=any,1463-9505"
    },
    "Rita_ revista indexada de textos acad\u00e9micps": {
        "issn": "2340-9711",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS904028451&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2340-9711&offset=0&journals=any,2340-9711"
    },
    "Ri-vista: Ricerche per la Progettazione del Paesaggio": {
        "issn": "1724-6768",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS243566523&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1724-6768&offset=0&journals=any,1724-6768"
    },
    "SAH News": {
        "issn": "0049-1195",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21182909090003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0049-1195&offset=0&journals=any,0049-1195"
    },
    "San Rocco": {
        "issn": "2038-4912",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS967618172&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2038-4912&offset=0&journals=any,2038-4912"
    },
    "SOM journal": {
        "issn": "no ISSN",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21180184660003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,SOM%20journal&offset=0&journals=any,SOM%20journal"
    },
    "Spatium": {
        "issn": "1450-69X",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS701805969&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,Spatium&offset=0&journals=any,Spatium"
    },
    "Studies in the history of gardens and designed landscapes": {
        "issn": "1460-1176",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS61314013&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,Studies%20in%20the%20history%20of%20gardens%20and%20designed%20landscapes&offset=0&journals=any,Studies%20in%20the%20history%20of%20gardens%20and%20designed%20landscapes"
    },
    "Techne": {
        "issn": "2239-0243",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS805895073&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2239-0243&offset=0&journals=any,2239-0243"
    },
    "TeMA: journal of land use\u2026": {
        "issn": "1970-9870",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS405962491&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1970-9870&offset=0&journals=any,1970-9870"
    },
    "Territorios en Formaci\u00f3n": {
        "issn": "2174-8659",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS827174554&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2174-8659&offset=0&journals=any,2174-8659"
    },
    "Thresholds": {
        "issn": "1091-711X",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS606242963&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1091-711X&offset=0&journals=any,1091-711X"
    },
    "Town planning and architecture": {
        "issn": "1648-3537",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS607517178&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1648-3537&offset=0&journals=any,1648-3537"
    },
    "Twentieth century architecture": {
        "issn": "1353-1964",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS502284025&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1353-1964&offset=0&journals=any,1353-1964"
    },
    "Umeni = The Art": {
        "issn": "0049-5123",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS566119245&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0049-5123&offset=0&journals=any,0049-5123"
    },
    "Urban Land": {
        "issn": "0042-0891",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21191209620003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0042-0891&offset=0&journals=any,0042-0891"
    },
    "Urbani izziv": {
        "issn": "1855-8399",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS780081000&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1855-8399&offset=0&journals=any,1855-8399"
    },
    "Urbano": {
        "issn": "0718-3607",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS244483171&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0718-3607&offset=0&journals=any,0718-3607"
    },
    "Vernacular architecture": {
        "issn": "0305-5477",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS619384401&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0305-5477&offset=0&journals=any,0305-5477"
    },
    "Vestnik Volgogradskogo\u2026Stroitelstvo I Arhitektura": {
        "issn": "2078-1954",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS701805718&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2078-1954&offset=0&journals=any,2078-1954"
    },
    "Virtual archaeology review": {
        "issn": "1989-9947",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS762030601&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,1989-9947&offset=0&journals=any,1989-9947"
    },
    "VLC arquitectura": {
        "issn": "2341-2747",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS905958384&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,2341-2747&offset=0&journals=any,2341-2747"
    },
    "Werk Bauen + Wohnen": {
        "issn": "0257-9332",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS6301281&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0257-9332&offset=0&journals=any,0257-9332"
    },
    "West 86th (US)": {
        "issn": "2153-5531",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,2153-5531&tab=jsearch_slot&vid=UCSB&lang=en_US&offset=0&journals=any,2153-5531"
    },
    "Winterthur portfolio": {
        "issn": "0084-0416",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21191186770003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0084-0416&offset=0&journals=any,0084-0416"
    },
    "World of interiors": {
        "issn": "0264-083X",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21184857850003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0264-083X&offset=0&journals=any,0264-083X"
    },
    "Zeitschrift fur Kunstgeschichte": {
        "issn": "0044-2992",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0044-2992&tab=jsearch_slot&vid=UCSB&lang=en_US&offset=0&journals=any,0044-2992"
    },
    "A & V": {
        "issn": "",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21214710210003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,A%20&%20V&%20V&offset=0&journals=any,A%20"
    },
    "Access by Design": {
        "issn": "",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS502282636&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,Access%20by%20design&offset=0&journals=any,Access%20by%20design\","
    },
    "California arts and architecture": {
        "issn": "",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21177524200003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,California%20arts%20and%20architecture&offset=0&journals=any,California%20arts%20and%20architecture"
    },
    "Architettura": {
        "issn": "0003-8830",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0003-8830&tab=jsearch_slot&vid=UCSB&lang=en_US&offset=0&journals=any,0003-8830"
    },
    "Ottagono": {
        "issn": "",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0003-8830&tab=jsearch_slot&vid=UCSB&lang=en_US&offset=0&journals=any,Ottagono"
    },
    "Building design": {
        "issn": "",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS60619270&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0007-3423&offset=0&journals=any,0007-3423"
    },
    "Inland architect": {
        "issn": "",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_SCP_SERIALS565102571&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0003-8830&offset=0&journals=any,Inland%20architect"
    },
    "Architectural design": {
        "issn": "",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0003-8504&tab=jsearch_slot&vid=UCSB&lang=en_US&offset=0&journals=any,0003-8504"
    },
    "Planning": {
        "issn": "",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0001-2610&tab=jsearch_slot&vid=UCSB&lang=en_US&offset=0&journals=any,0001-2610"
    },
    "Architektur, Innenarchitektur, Technischer Ausbau": {
        "issn": "",
        "url": "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jfulldisplay?docid=01UCSB_ALMA21201053520003776&context=L&vid=UCSB&lang=en_US&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=jsearch_slot&query=any,contains,0003-8830&offset=0&journals=any,Architektur,%20Innenarchitektur,%20Technischer%20Ausbau"
    }
};

//list of unavailable journals
var journalsNo = {
    "A + T": {
        "issn": "1132-6409",
        "url": ""
    },
    "A + U:  architecture and urbanism": {
        "issn": "0389-9160",
        "url": ""
    },
    "A.mag: international architecture technical magazine": {
        "issn": "2182-472X",
        "url": ""
    },
    "A V monograf\u00edas": {
        "issn": "0213-487X",
        "url": ""
    },
    "AV proyectos (Spain)": {
        "issn": "1697-493X",
        "url": ""
    },
    "A10: new European architecture": {
        "issn": "1573-3815",
        "url": ""
    },
    "Actas del congreso internacional de arquitectura religiosa\u2026": {
        "issn": "2340-5503",
        "url": ""
    },
    "AMC:  Moniteur architecture": {
        "issn": "0998-4194",
        "url": ""
    },
    "Anales de Edificacion": {
        "issn": "2444-1309",
        "url": ""
    },
    "Anfione zeto": {
        "issn": "no ISSN",
        "url": ""
    },
    "Annali di architettura": {
        "issn": "no ISSN",
        "url": ""
    },
    "AOA: Asociacion de Oficinas de Arquitectos (Chile)": {
        "issn": "0718-3186",
        "url": ""
    },
    "Apuntes: Revista de Estudios sobre patrimonio cultural": {
        "issn": "2011-9003",
        "url": ""
    },
    "AR: Arhitektura, Raziskave": {
        "issn": "1581-6974",
        "url": ""
    },
    "Arca International": {
        "issn": "1027-460X",
        "url": ""
    },
    "Arcade": {
        "issn": "1095-4775",
        "url": ""
    },
    "Arch +": {
        "issn": "0587-3452",
        "url": ""
    },
    "Archeologie medievale": {
        "issn": "0163-9337",
        "url": ""
    },
    "Architect & builder (South Africa)": {
        "issn": "0003-8407",
        "url": ""
    },
    "Architect (Netherlands)": {
        "issn": "0925-8630",
        "url": ""
    },
    "Architect: the journal of the Sri Lanka Institute of Architects": {
        "issn": "no ISSN",
        "url": ""
    },
    "Architectura: arkitekturhistorisk arsskrift": {
        "issn": "0106-3030",
        "url": ""
    },
    "Architectural heritage journal (Bhutan)": {
        "issn": "no ISSN",
        "url": ""
    },
    "Architectural science review": {
        "issn": "0003-8628",
        "url": ""
    },
    "Architecture and ideas": {
        "issn": "1205-7592",
        "url": ""
    },
    "Architecture Ireland": {
        "issn": "1649-5152",
        "url": ""
    },
    "Architecture Minnesota": {
        "issn": "0149-9106",
        "url": ""
    },
    "Architecture New Zealand": {
        "issn": "0113-4566",
        "url": ""
    },
    "Architecture South Africa": {
        "issn": "1682-9387",
        "url": ""
    },
    "Architecture today": {
        "issn": "0958-6407",
        "url": ""
    },
    "Architektur, Innenarchitektur, Technischer Ausbau: AIT": {
        "issn": "0173-8046",
        "url": ""
    },
    "Architext = Arkhit\u0323ek\u0323st\u0323 : ketav \u02bbet le-arkhit\u0323ek\u0323t\u0323urah": {
        "issn": "no ISSN",
        "url": ""
    },
    "Archithese": {
        "issn": "1010-3600",
        "url": ""
    },
    "Arkinka": {
        "issn": "1815-9273",
        "url": ""
    },
    "Arkitektur N": {
        "issn": "1504-7628",
        "url": ""
    },
    "Arkkitehti": {
        "issn": "0783-3660",
        "url": ""
    },
    "Arkkitehtuurikilpailuja = Architectural competitions in Finland": {
        "issn": "0006-7676",
        "url": ""
    },
    "ARPA Journal": {
        "issn": "",
        "url": ""
    },
    "ARQ : Architecture/Quebec": {
        "issn": "1203-1488",
        "url": ""
    },
    "Arquine": {
        "issn": "1405-6151",
        "url": ""
    },
    "ArquiSur Revista": {
        "issn": "1815-5898",
        "url": ""
    },
    "Arquitectos: informacion del Consejo Superior de los Colegios": {
        "issn": "0214-1124",
        "url": ""
    },
    "Arquitectura viva": {
        "issn": "0214-1256",
        "url": ""
    },
    "Arquitectura y Urbanismo": {
        "issn": "1815-5898",
        "url": ""
    },
    "Art4D (Bangkok)": {
        "issn": "0859-161X",
        "url": ""
    },
    "A/Z: ITU journal of Faculty of Architecture [Turkey]": {
        "issn": "1320-8324",
        "url": ""
    },
    "Azure": {
        "issn": "0829-982X",
        "url": ""
    },
    "BAC: Boletin Academico": {
        "issn": "2173-6723",
        "url": ""
    },
    "Bauwelt": {
        "issn": "0005-6855",
        "url": ""
    },
    "Bitacora arquitectura (Mexico)": {
        "issn": "1405-8901",
        "url": ""
    },
    "Bitacora Urbano-Territorial": {
        "issn": "2027-145X",
        "url": ""
    },
    "Boletin academico: revista de investigacion y arquitectura": {
        "issn": "2173-6723",
        "url": ""
    },
    "Bulletin monumental": {
        "issn": "0007-473X",
        "url": ""
    },
    "C:20: the magazine of the Twentieth Century Society": {
        "issn": "no ISSN",
        "url": ""
    },
    "C3 Korea": {
        "issn": "1227-6111",
        "url": ""
    },
    "CA: revista oficial (Ciudad / arquitectura)": {
        "issn": "0716-3622",
        "url": ""
    },
    "Cahiers de la recherche architecturale et urbaine": {
        "issn": "1296-4077",
        "url": ""
    },
    "Cahiers thematiques": {
        "issn": "varies",
        "url": ""
    },
    "Ci[ur]: Cuadernos de investigacion urbanistica": {
        "issn": "2174-5099",
        "url": ""
    },
    "Cite:  the architecture and design review of Houston": {
        "issn": "8755-0415",
        "url": ""
    },
    "Ciudad y territorio - Estudios territoriales": {
        "issn": "1133-4762",
        "url": ""
    },
    "Clara: recherche architecture": {
        "issn": "2295-3671",
        "url": ""
    },
    "Clem Labine's traditional building": {
        "issn": "0898-0284",
        "url": ""
    },
    "CLOG": {
        "issn": "2164-9782",
        "url": ""
    },
    "Colonnes. Hors serie": {
        "issn": "no ISSN",
        "url": ""
    },
    "Competitions annual": {
        "issn": "no ISSN",
        "url": ""
    },
    "Connecticut preservation news": {
        "issn": "1084-189X",
        "url": ""
    },
    "Constelaciones : revista de arquitectura de la Universidad CEU": {
        "issn": "2340-177X",
        "url": ""
    },
    "Construction history": {
        "issn": "0267-7768",
        "url": ""
    },
    "Context: built, living and natural (India)": {
        "issn": "0973-502X",
        "url": ""
    },
    "Country life": {
        "issn": "0045-8856",
        "url": ""
    },
    "Criticat (France)": {
        "issn": "1961-5981",
        "url": ""
    },
    "Croquis": {
        "issn": "0212-5683",
        "url": ""
    },
    "CTBUH journal: tall buildings, design, construction and operation": {
        "issn": "1946-1186",
        "url": ""
    },
    "Cuadernos de arquitectura y fortificacion": {
        "issn": "2255-1085",
        "url": ""
    },
    "Cuadernos de investigacion urbanistica": {
        "issn": "2174-5099",
        "url": ""
    },
    "Cuadernos de proyectos arquitectonicos": {
        "issn": "2174-1131",
        "url": ""
    },
    "Cuadernos de vivienda y urbanismo": {
        "issn": "2145-0226",
        "url": ""
    },
    "D[e]signed (India)": {
        "issn": "no issn",
        "url": ""
    },
    "Detail": {
        "issn": "0011-9571",
        "url": ""
    },
    "Detail: Inside": {
        "issn": "no issn",
        "url": ""
    },
    "Detail: Structure": {
        "issn": "no issn",
        "url": ""
    },
    "Deutsche Bauzeitung": {
        "issn": "0721-1902",
        "url": ""
    },
    "Digest of South African architecture": {
        "issn": "1027-3468",
        "url": ""
    },
    "Dimensions": {
        "issn": "1074-6336",
        "url": ""
    },
    "Disegno di architettura": {
        "issn": "1121-8770",
        "url": ""
    },
    "Dlle (South Korea)": {
        "issn": "0003-8466",
        "url": ""
    },
    "D'ur : actualidad en urbanismo, arquitectura y ciudad = urbanism, architecture and cities now (Spain)": {
        "issn": "2013-9209",
        "url": ""
    },
    "Dwell (US)": {
        "issn": "1530-5309",
        "url": ""
    },
    "EAR: Edinburgh Architecture Review": {
        "issn": "0140-5039",
        "url": ""
    },
    "EGA: Revista de expresi\u00f3n gr\u00e1fica arquitect\u00f3nica": {
        "issn": "2254-6103",
        "url": ""
    },
    "En blanco : revista de arquitectura": {
        "issn": "1888-5616",
        "url": ""
    },
    "Ensayos sobre arquitectura y ceramic = Essays on architecture and ceramics (Spain)": {
        "issn": "no ISSN",
        "url": ""
    },
    "Entre Rayas": {
        "issn": "1316-0257",
        "url": ""
    },
    "Environment and behavior": {
        "issn": "0013-9165",
        "url": ""
    },
    "Escala": {
        "issn": "0120-6702",
        "url": ""
    },
    "Estudios del Habitat": {
        "issn": "2422-6483",
        "url": ""
    },
    "Field: a Free Journal for Architecture": {
        "issn": "1755-0069",
        "url": ""
    },
    "Fine homebuilding": {
        "issn": "1096-360X",
        "url": ""
    },
    "Firenze architettura": {
        "issn": "1826-9772",
        "url": ""
    },
    "Florida Caribbean architect": {
        "issn": "0015-3907",
        "url": ""
    },
    "Follies journal": {
        "issn": "1474-7669",
        "url": ""
    },
    "Footprint: Delft architecture theory journal": {
        "issn": "1875-1505",
        "url": ""
    },
    "Fulcrum (AA school)": {
        "issn": "no ISSN",
        "url": ""
    },
    "Future arquitectura": {
        "issn": "1885-8228",
        "url": ""
    },
    "Garten + Landschaft": {
        "issn": "0016-4720",
        "url": ""
    },
    "Gartenkunst": {
        "issn": "0935-0519",
        "url": ""
    },
    "Georgian Group journal": {
        "issn": "0963-1070",
        "url": ""
    },
    "Glazed expressions": {
        "issn": "0261-0329",
        "url": ""
    },
    "GSD Platform": {
        "issn": "no ISSN",
        "url": ""
    },
    "Harvard design magazine": {
        "issn": "1093-4421",
        "url": ""
    },
    "Heritage & Society": {
        "issn": "2159-032X",
        "url": ""
    },
    "Industria delle costruzioni": {
        "issn": "0579-4900",
        "url": ""
    },
    "Inform (Virginia)": {
        "issn": "1047-8353",
        "url": ""
    },
    "Informes de la construccion": {
        "issn": "1099-3234",
        "url": ""
    },
    "Interiors: design, architecture, culture (UK)": {
        "issn": "2041-9112",
        "url": ""
    },
    "International journal of heritage architecture": {
        "issn": "2058-833X",
        "url": ""
    },
    "International journal of Islamic architecture": {
        "issn": "2045-5895",
        "url": ""
    },
    "International refereed journal of architecture and design": {
        "issn": "2148-4880",
        "url": ""
    },
    "Intersight": {
        "issn": "1049-6564",
        "url": ""
    },
    "Iowa architect": {
        "issn": "0021-0439",
        "url": ""
    },
    "Irish architecture : the RIAI annual review": {
        "issn": "no ISSN",
        "url": ""
    },
    "Jian zhu xue bao = Architectural journal (China)": {
        "issn": "0529-1399",
        "url": ""
    },
    "Journal of green building": {
        "issn": "1552-6100",
        "url": ""
    },
    "Journal of interior design": {
        "issn": "1071-7641",
        "url": ""
    },
    "Journal of landscape architecture (India)": {
        "issn": "0975-0177",
        "url": ""
    },
    "Journal of planning history": {
        "issn": "1538-5132",
        "url": ""
    },
    "Journal of planning education and research": {
        "issn": "0739-456X",
        "url": ""
    },
    "Journal of Southeast Asian Architecture": {
        "issn": "0218-9593",
        "url": ""
    },
    "Journal of Sustainable Real Estate": {
        "issn": "no issn",
        "url": ""
    },
    "Journal of the Taliesin Fellows": {
        "issn": "1059-473X",
        "url": ""
    },
    "Journal of urban technology": {
        "issn": "1063-0732",
        "url": ""
    },
    "Landscape journal": {
        "issn": "0277-2426",
        "url": ""
    },
    "Landskab": {
        "issn": "0023-8066",
        "url": ""
    },
    "Leading architecture and design": {
        "issn": "no ISSN",
        "url": ""
    },
    "Marg": {
        "issn": "0023-2913",
        "url": ""
    },
    "MAS: medio, arquitectura, sociedad (Peru)": {
        "issn": "no ISSN",
        "url": ""
    },
    "Materia arquitectura  (Chile)": {
        "issn": "0718-7032",
        "url": ""
    },
    "Metropolis": {
        "issn": "0279-4977",
        "url": ""
    },
    "Monograph.it (Spain)": {
        "issn": "no ISSN",
        "url": ""
    },
    "Montreal architectural review": {
        "issn": "2368-6952",
        "url": ""
    },
    "Monu : magazine on urbanism": {
        "issn": "1860-3211",
        "url": ""
    },
    "Monumental": {
        "issn": "1168-4534",
        "url": ""
    },
    "New geographies": {
        "issn": "2152-047X",
        "url": ""
    },
    "North Carolina architecture": {
        "issn": "1045-3253",
        "url": ""
    },
    "OA&D: journal of organic architecture + design": {
        "issn": "no issn",
        "url": ""
    },
    "OASE": {
        "issn": "0169-6238",
        "url": ""
    },
    "Oculus": {
        "issn": "0885-5927",
        "url": ""
    },
    "Old-house journal": {
        "issn": "0094-0178",
        "url": ""
    },
    "ON dise\u00f1o": {
        "issn": "0210-2080",
        "url": ""
    },
    "Oris": {
        "issn": "1331-7571",
        "url": ""
    },
    "Oz / College of Architecture and Design Kansas State University": {
        "issn": "0888-7802",
        "url": ""
    },
    "Pasajes arquitectura y critica": {
        "issn": "1575-1937",
        "url": ""
    },
    "Perspectivas de arquitectura y diseno (Guatamala)": {
        "issn": "no ISSN",
        "url": ""
    },
    "Perspectives: the journal of the Ontario Assoc. of Architects": {
        "issn": "1192-8018",
        "url": ""
    },
    "Plan: architecture & technologies in detail (Italy)": {
        "issn": "1720-6553",
        "url": ""
    },
    "Planlama (Turkey)": {
        "issn": "1300-7319",
        "url": ""
    },
    "Polimorfo  (Puerto Rico)": {
        "issn": "2151-0695",
        "url": ""
    },
    "Praxis": {
        "issn": "1526-2065",
        "url": ""
    },
    "Preservation education and research": {
        "issn": "1946-5904",
        "url": ""
    },
    "Project Baikal": {
        "issn": "2307-4485",
        "url": ""
    },
    "Projections: MIT student journal of planning": {
        "issn": "1535-6191",
        "url": ""
    },
    "Projeto/Design": {
        "issn": "1808-6586",
        "url": ""
    },
    "Prostor / Arhitektonski fakultet Sveucilista u Zagrebu": {
        "issn": "1330-0652",
        "url": ""
    },
    "Proyecto, Progreso, Arquitectura (Sevilla)": {
        "issn": "2171-6897",
        "url": ""
    },
    "Quaderns d'arquitectura i urbanisme": {
        "issn": "1886-1989",
        "url": ""
    },
    "Rassegna di architettura e urbanistica": {
        "issn": "0392-8608",
        "url": ""
    },
    "RDA (Argentina)": {
        "issn": "2313-9633",
        "url": ""
    },
    "REIA (Revista Europea de Investigacion en arquitecture)": {
        "issn": "2340-9851",
        "url": ""
    },
    "Restauracion & rehabilitacion: R & R (Spain)": {
        "issn": "1134-4571",
        "url": ""
    },
    "Revista do Patrimonio Historico e Artistico Nacional": {
        "issn": "0102-2751",
        "url": ""
    },
    "Revista proyecto, progreso, arquitectura (Spain)": {
        "issn": "2171-6897",
        "url": ""
    },
    "Rivista dell'Istituto per la storia dell'arte lombarda": {
        "issn": "2039-4187",
        "url": ""
    },
    "SAC journal": {
        "issn": "2198-3216",
        "url": ""
    },
    "SaveWright": {
        "issn": "no ISSN",
        "url": ""
    },
    "scape": {
        "issn": "1389-742X",
        "url": ""
    },
    "Serbian architectural journal: SAJ": {
        "issn": "1821-3952",
        "url": ""
    },
    "Shi dai jian zhu = Time + architecture": {
        "issn": "1005-684X",
        "url": ""
    },
    "Shi jie jian zhu = World Architecture (China)": {
        "issn": "1002-4832",
        "url": ""
    },
    "Space (Korea)": {
        "issn": "1228-2472",
        "url": ""
    },
    "Spade India": {
        "issn": "no ISSN",
        "url": ""
    },
    "Spandrel: journal of SPA  (Bhopal, India)": {
        "issn": "2231-4601",
        "url": ""
    },
    "Storia urbana": {
        "issn": "0327-9022",
        "url": ""
    },
    "Summa+": {
        "issn": "0327-9022",
        "url": ""
    },
    "Tekton": {
        "issn": "2349-6282",
        "url": ""
    },
    "Texas architect": {
        "issn": "0040-4179",
        "url": ""
    },
    "Tile heritage": {
        "issn": "1078-5655",
        "url": ""
    },
    "Topos: the international review of landscape architecture and": {
        "issn": "0942-752X",
        "url": ""
    },
    "Trace (Chile)": {
        "issn": "0718-7710",
        "url": ""
    },
    "Traditional dwellings and settlements review": {
        "issn": "1050-5092",
        "url": ""
    },
    "Transactions of the Ancient Monuments Society": {
        "issn": "0951-001X",
        "url": ""
    },
    "True Principles: The journal of the Pugin Society": {
        "issn": "",
        "url": ""
    },
    "Twentyfirst  (Denmark)": {
        "issn": "2246-1612",
        "url": ""
    },
    "Versalia": {
        "issn": "1285-8412",
        "url": ""
    },
    "Vestnik of Tomsk State University of Architecture\u2026": {
        "issn": "1607-1859",
        "url": ""
    },
    "Vieilles maisons francaises": {
        "issn": "no ISSN",
        "url": ""
    },
    "Visiteur": {
        "issn": "1265-7034",
        "url": ""
    },
    "Volume": {
        "issn": "",
        "url": ""
    },
    "Wallpaper": {
        "issn": "1364-4475",
        "url": ""
    },
    "Western planner (US)": {
        "issn": "0279-0602",
        "url": ""
    },
    "World heritage": {
        "issn": "1020-4202",
        "url": ""
    },
    "Wright angles": {
        "issn": "1059-4396",
        "url": ""
    },
    "Xia international": {
        "issn": "0949-2356",
        "url": ""
    },
    "Zarch": {
        "issn": "2387-0346",
        "url": ""
    },
    "Architect [Netherlands]": {
        "issn": "",
        "url": ""
    },
    "Archis": {
        "issn": "",
        "url": ""
    },
    "Canadian building": {
        "issn": "",
        "url": ""
    }
};

//for each result in list
for (var i = 0; i < contentDivList.length; i++){
	// find the publisher name
	var pub = contentDivList[i].getElementsByTagName("strong")[0].innerHTML;
	// finds the place for links
    var contentLink = contentDivList[i].getElementsByClassName("horizontal pull-left no-margin content-item-links")[0];
    var a =  document.createElement('a');
    var listItem = document.createElement('li');
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
        var pubNoSpace = encodeURI(pub);
        a.setAttribute('href', "https://ucsb-primo.hosted.exlibrisgroup.com/primo-explore/jsearch?query=any,contains,0003-8830&tab=jsearch_slot&vid=UCSB&lang=en_US&offset=0&journals=any,"+pubNoSpace);
        a.textContent = " ucsb-try-to-find ";
        listItem.appendChild(a);
        contentLink.appendChild(listItem);
    }
    
	console.log("appended! (′▽`〃)",i+1,"th/st/nd/rd result");
}