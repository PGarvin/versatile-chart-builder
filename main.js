'use strict';
(function() {
	// global variables
	
var counties = [{"Name":"Barnstable","Value":-1592},
{"Name":"Berkshire","Value":-4369},
{"Name":"Bristol","Value":10064},
{"Name":"Dukes","Value":711},
{"Name":"Essex","Value":35847},
{"Name":"Franklin","Value":-990},
{"Name":"Hampden","Value":4842},
{"Name":"Hampshire","Value":3736},
{"Name":"Middlesex","Value":86717},
{"Name":"Nantucket","Value":836},
{"Name":"Norfolk","Value":26196},
{"Name":"Plymouth","Value":18616},
{"Name":"Suffolk","Value":62151},
{"Name":"Worcester","Value":21201}];;


var penalties = [{"Date":2006,"Total penalties":6.69705316,"Attorney General cases":7.69384400},
{"Date":2007,"Total penalties":5.52618254,"Attorney General cases":6.69518300},
{"Date":2008,"Total penalties":3.23798524,"Attorney General cases":5.51498500},
{"Date":2009,"Total penalties":3.90882647,"Attorney General cases":7.09782600},
{"Date":2010,"Total penalties":3.96493514,"Attorney General cases":7.67293500},
{"Date":2011,"Total penalties":3.49908716,"Attorney General cases":6.50858700},
{"Date":2012,"Total penalties":2.25577520,"Attorney General cases":4.56642000},
{"Date":2013,"Total penalties":2.50254600,"Attorney General cases":6.66971400},
{"Date":2014,"Total penalties":2.18502550,"Attorney General cases":5.00674600},
{"Date":2015,"Total penalties":2.87952163,"Attorney General cases":2.95452200},
{"Date":2016,"Total penalties":1.80062825,"Attorney General cases":3.74062800}];


var employees = [{"Date":2000,"XFiles":1173},
{"Date":2001,"XFiles":1158},
{"Date":2002,"XFiles":1175},
{"Date":2003,"XFiles":1043},
{"Date":2004,"XFiles":901},
{"Date":2005,"XFiles":857},
{"Date":2006,"XFiles":885},
{"Date":2007,"XFiles":948},
{"Date":2008,"XFiles":941},
{"Date":2009,"XFiles":962},
{"Date":2010,"XFiles":896},
{"Date":2011,"XFiles":788},
{"Date":2012,"XFiles":783},
{"Date":2013,"XFiles":759},
{"Date":2014,"XFiles":-856},
{"Date":2015,"XFiles":737},
{"Date":2016,"XFiles":655}];

var feverData = [{"Name":2000,"Awesome column":25,"Another awesome column":36},
{"Name":2001,"Awesome column":24,"Another awesome column":32},
{"Name":2002,"Awesome column":16,"Another awesome column":18},
{"Name":2003,"Awesome column":14,"Another awesome column":23},
{"Name":2004,"Awesome column":18,"Another awesome column":28},
{"Name":2005,"Awesome column":18,"Another awesome column":38},
{"Name":2006,"Awesome column":16,"Another awesome column":12},
{"Name":2007,"Awesome column":20,"Another awesome column":10},
{"Name":2008,"Awesome column":26,"Another awesome column":23},
{"Name":2009,"Awesome column":37,"Another awesome column":40},
{"Name":2010,"Awesome column":35,"Another awesome column":21},
{"Name":2011,"Awesome column":15,"Another awesome column":26},
{"Name":2012,"Awesome column":37,"Another awesome column":18},
{"Name":2013,"Awesome column":37,"Another awesome column":30},
{"Name":2014,"Awesome column":28,"Another awesome column":21},
{"Name":2015,"Awesome column":23,"Another awesome column":28}];

var horiz = 
	[{"Name":"Central Boston","value2015":2545000,"Value":3006000,"Perc":18.10},
{"Name":"Charlestown","value2015":887000,"Value":1150000,"Perc":29.70},
{"Name":"Jamaica Plain","value2015":784750,"Value":750000,"Perc":-4.40},
{"Name":"Allston","value2015":0,"Value":693806,"Perc":null},
{"Name":"South Boston","value2015":580000,"Value":680000,"Perc":17.20},
{"Name":"Brighton","value2015":600000,"Value":654500,"Perc":9.10},
{"Name":"West Roxbury","value2015":475000,"Value":529000,"Perc":11.40},
{"Name":"Roslindale","value2015":450000,"Value":500500,"Perc":11.20},
{"Name":"Roxbury","value2015":400550,"Value":472330,"Perc":17.90},
{"Name":"Dorchester","value2015":400000,"Value":419500,"Perc":4.90},
{"Name":"East Boston","value2015":363000,"Value":415000,"Perc":14.30},
{"Name":"Hyde Park","value2015":358500,"Value":370000,"Perc":3.20},
{"Name":"Mattapan","value2015":300000,"Value":338000,"Perc":12.70}];

var dots = [{"Name":"Boston","Value":13},
{"Name":"St. Louis","Value":3}];

var coolTownData = [{"Zip":"Boston","Name":"Boston","Value":-12},
{"Zip":"Worcester","Name":"Worcester","Value":2},
{"Zip":"Springfield","Name":"Springfield","Value":19},
{"Zip":"Lowell","Name":"Lowell","Value":-2},
{"Zip":"Cambridge","Name":"Cambridge","Value":0},
{"Zip":"NewBedford","Name":"New Bedford","Value":-22},
{"Zip":"Brockton","Name":"Brockton","Value":43},
{"Zip":"Quincy","Name":"Quincy","Value":95},
{"Zip":"Lynn","Name":"Lynn","Value":-7},
{"Zip":"FallRiver","Name":"Fall River","Value":-26},
{"Zip":"Newton","Name":"Newton","Value":92},
{"Zip":"Somerville","Name":"Somerville","Value":-15},
{"Zip":"Lawrence","Name":"Lawrence","Value":-17},
{"Zip":"Framingham","Name":"Framingham","Value":315},
{"Zip":"Waltham","Name":"Waltham","Value":104},
{"Zip":"Haverhill","Name":"Haverhill","Value":16},
{"Zip":"Malden","Name":"Malden","Value":24},
{"Zip":"Brookline","Name":"Brookline","Value":57},
{"Zip":"Plymouth","Name":"Plymouth","Value":347},
{"Zip":"Medford","Name":"Medford","Value":47},
{"Zip":"Taunton","Name":"Taunton","Value":52},
{"Zip":"Chicopee","Name":"Chicopee","Value":54},
{"Zip":"Weymouth","Name":"Weymouth","Value":270},
{"Zip":"Revere","Name":"Revere","Value":88},
{"Zip":"Peabody","Name":"Peabody","Value":168},
{"Zip":"Methuen","Name":"Methuen","Value":223},
{"Zip":"Barnstable","Name":"Barnstable","Value":821},
{"Zip":"Arlington","Name":"Arlington","Value":138},
{"Zip":"Everett","Name":"Everett","Value":10},
{"Zip":"Attleboro","Name":"Attleboro","Value":123},
{"Zip":"Pittsfield","Name":"Pittsfield","Value":5},
{"Zip":"Salem","Name":"Salem","Value":1},
{"Zip":"Billerica","Name":"Billerica","Value":1059},
{"Zip":"Westfield","Name":"Westfield","Value":124},
{"Zip":"Leominster","Name":"Leominster","Value":108},
{"Zip":"Beverly","Name":"Beverly","Value":82},
{"Zip":"Fitchburg","Name":"Fitchburg","Value":-1},
{"Zip":"Holyoke","Name":"Holyoke","Value":-33},
{"Zip":"Amherst","Name":"Amherst","Value":617},
{"Zip":"Marlborough","Name":"Marlborough","Value":164},
{"Zip":"Woburn","Name":"Woburn","Value":137},
{"Zip":"Chelsea","Name":"Chelsea","Value":-10},
{"Zip":"Braintree","Name":"Braintree","Value":253},
{"Zip":"Shrewsbury","Name":"Shrewsbury","Value":887},
{"Zip":"Natick","Name":"Natick","Value":226},
{"Zip":"Andover","Name":"Andover","Value":324},
{"Zip":"Chelmsford","Name":"Chelmsford","Value":515},
{"Zip":"Dartmouth","Name":"Dartmouth","Value":430},
{"Zip":"Watertown","Name":"Watertown","Value":59},
{"Zip":"Randolph","Name":"Randolph","Value":607},
{"Zip":"Lexington","Name":"Lexington","Value":421},
{"Zip":"Franklin","Name":"Franklin","Value":405},
{"Zip":"Falmouth","Name":"Falmouth","Value":804},
{"Zip":"Dracut","Name":"Dracut","Value":489},
{"Zip":"Tewksbury","Name":"Tewksbury","Value":580},
{"Zip":"Needham","Name":"Needham","Value":331},
{"Zip":"Gloucester","Name":"Gloucester","Value":29},
{"Zip":"NorthAndover","Name":"North Andover","Value":371},
{"Zip":"Wellesley","Name":"Wellesley","Value":372},
{"Zip":"Norwood","Name":"Norwood","Value":130},
{"Zip":"NorthAttleborough","Name":"North Attleborough","Value":213},
{"Zip":"Agawam","Name":"Agawam","Value":473},
{"Zip":"WestSpringfield","Name":"West Springfield","Value":113},
{"Zip":"Northampton","Name":"Northampton","Value":30},
{"Zip":"Milford","Name":"Milford","Value":111},
{"Zip":"Stoughton","Name":"Stoughton","Value":314},
{"Zip":"Melrose","Name":"Melrose","Value":54},
{"Zip":"Saugus","Name":"Saugus","Value":157},
{"Zip":"Bridgewater","Name":"Bridgewater","Value":226},
{"Zip":"Danvers","Name":"Danvers","Value":147},
{"Zip":"Milton","Name":"Milton","Value":192},
{"Zip":"Wakefield","Name":"Wakefield","Value":106},
{"Zip":"Burlington","Name":"Burlington","Value":2802},
{"Zip":"Marshfield","Name":"Marshfield","Value":1759},
{"Zip":"Reading","Name":"Reading","Value":243},
{"Zip":"Belmont","Name":"Belmont","Value":137},
{"Zip":"Dedham","Name":"Dedham","Value":136},
{"Zip":"Walpole","Name":"Walpole","Value":358},
{"Zip":"Middleborough","Name":"Middleborough","Value":185},
{"Zip":"Easton","Name":"Easton","Value":374},
{"Zip":"Westford","Name":"Westford","Value":647},
{"Zip":"Mansfield","Name":"Mansfield","Value":277},
{"Zip":"Yarmouth","Name":"Yarmouth","Value":1820},
{"Zip":"Wilmington","Name":"Wilmington","Value":805},
{"Zip":"Acton","Name":"Acton","Value":975},
{"Zip":"Hingham","Name":"Hingham","Value":310},
{"Zip":"Canton","Name":"Canton","Value":279},
{"Zip":"Wareham","Name":"Wareham","Value":409},
{"Zip":"Winchester","Name":"Winchester","Value":112},
{"Zip":"Stoneham","Name":"Stoneham","Value":178},
{"Zip":"Ludlow","Name":"Ludlow","Value":187},
{"Zip":"Sandwich","Name":"Sandwich","Value":1309},
{"Zip":"Marblehead","Name":"Marblehead","Value":179},
{"Zip":"Gardner","Name":"Gardner","Value":20},
{"Zip":"Hudson","Name":"Hudson","Value":160},
{"Zip":"Bourne","Name":"Bourne","Value":679},
{"Zip":"Concord","Name":"Concord","Value":202},
{"Zip":"Norton","Name":"Norton","Value":717},
{"Zip":"Sudbury","Name":"Sudbury","Value":1574},
{"Zip":"Westborough","Name":"Westborough","Value":224},
{"Zip":"Holden","Name":"Holden","Value":522},
{"Zip":"Scituate","Name":"Scituate","Value":627},
{"Zip":"Grafton","Name":"Grafton","Value":167},
{"Zip":"Winthrop","Name":"Winthrop","Value":19},
{"Zip":"Somerset","Name":"Somerset","Value":419},
{"Zip":"Pembroke","Name":"Pembroke","Value":1240},
{"Zip":"Sharon","Name":"Sharon","Value":635},
{"Zip":"Newburyport","Name":"Newburyport","Value":15},
{"Zip":"Rockland","Name":"Rockland","Value":135},
{"Zip":"SouthHadley","Name":"South Hadley","Value":220},
{"Zip":"Foxborough","Name":"Foxborough","Value":320},
{"Zip":"Greenfield","Name":"Greenfield","Value":12},
{"Zip":"Ashland","Name":"Ashland","Value":657},
{"Zip":"Webster","Name":"Webster","Value":27},
{"Zip":"Southbridge","Name":"Southbridge","Value":18},
{"Zip":"Amesbury","Name":"Amesbury","Value":67},
{"Zip":"Bellingham","Name":"Bellingham","Value":698},
{"Zip":"Northbridge","Name":"Northbridge","Value":61},
{"Zip":"Auburn","Name":"Auburn","Value":321},
{"Zip":"Hopkinton","Name":"Hopkinton","Value":613},
{"Zip":"Abington","Name":"Abington","Value":180},
{"Zip":"Swansea","Name":"Swansea","Value":592},
{"Zip":"EastLongmeadow","Name":"East Longmeadow","Value":586},
{"Zip":"Easthampton","Name":"Easthampton","Value":42},
{"Zip":"Fairhaven","Name":"Fairhaven","Value":120},
{"Zip":"Longmeadow","Name":"Longmeadow","Value":507},
{"Zip":"Westport","Name":"Westport","Value":405},
{"Zip":"NorthReading","Name":"North Reading","Value":1106},
{"Zip":"Duxbury","Name":"Duxbury","Value":891},
{"Zip":"Westwood","Name":"Westwood","Value":1003},
{"Zip":"Belchertown","Name":"Belchertown","Value":621},
{"Zip":"Northborough","Name":"Northborough","Value":746},
{"Zip":"Whitman","Name":"Whitman","Value":107},
{"Zip":"Seekonk","Name":"Seekonk","Value":407},
{"Zip":"Wilbraham","Name":"Wilbraham","Value":422},
{"Zip":"Holliston","Name":"Holliston","Value":432},
{"Zip":"Hanover","Name":"Hanover","Value":458},
{"Zip":"EastBridgewater","Name":"East Bridgewater","Value":309},
{"Zip":"Bedford","Name":"Bedford","Value":943},
{"Zip":"Mashpee","Name":"Mashpee","Value":5705},
{"Zip":"Dennis","Name":"Dennis","Value":814},
{"Zip":"Swampscott","Name":"Swampscott","Value":73},
{"Zip":"Oxford","Name":"Oxford","Value":263},
{"Zip":"Uxbridge","Name":"Uxbridge","Value":156},
{"Zip":"Clinton","Name":"Clinton","Value":6},
{"Zip":"Raynham","Name":"Raynham","Value":708},
{"Zip":"Ipswich","Name":"Ipswich","Value":120},
{"Zip":"Wayland","Name":"Wayland","Value":600},
{"Zip":"Millbury","Name":"Millbury","Value":138},
{"Zip":"NorthAdams","Name":"North Adams","Value":-40},
{"Zip":"Charlton","Name":"Charlton","Value":567},
{"Zip":"Medway","Name":"Medway","Value":346},
{"Zip":"Kingston","Name":"Kingston","Value":425},
{"Zip":"Lynnfield","Name":"Lynnfield","Value":987},
{"Zip":"Medfield","Name":"Medfield","Value":245},
{"Zip":"Harwich","Name":"Harwich","Value":560},
{"Zip":"Palmer","Name":"Palmer","Value":23},
{"Zip":"Tyngsborough","Name":"Tyngsborough","Value":1064},
{"Zip":"Weston","Name":"Weston","Value":426},
{"Zip":"Pepperell","Name":"Pepperell","Value":385},
{"Zip":"Rehoboth","Name":"Rehoboth","Value":478},
{"Zip":"Dudley","Name":"Dudley","Value":219},
{"Zip":"Spencer","Name":"Spencer","Value":99},
{"Zip":"Norfolk","Name":"Norfolk","Value":918},
{"Zip":"Athol","Name":"Athol","Value":19},
{"Zip":"Carver","Name":"Carver","Value":1200},
{"Zip":"Wrentham","Name":"Wrentham","Value":307},
{"Zip":"Leicester","Name":"Leicester","Value":210},
{"Zip":"Groton","Name":"Groton","Value":414},
{"Zip":"Lakeville","Name":"Lakeville","Value":690},
{"Zip":"Lunenburg","Name":"Lunenburg","Value":580},
{"Zip":"Holbrook","Name":"Holbrook","Value":249},
{"Zip":"Nantucket","Name":"Nantucket","Value":288},
{"Zip":"Norwell","Name":"Norwell","Value":702},
{"Zip":"Winchendon","Name":"Winchendon","Value":80},
{"Zip":"Maynard","Name":"Maynard","Value":48},
{"Zip":"Hanson","Name":"Hanson","Value":447},
{"Zip":"Acushnet","Name":"Acushnet","Value":239},
{"Zip":"Hull","Name":"Hull","Value":485},
{"Zip":"Brewster","Name":"Brewster","Value":1347},
{"Zip":"Southborough","Name":"Southborough","Value":441},
{"Zip":"Ware","Name":"Ware","Value":16},
{"Zip":"Southwick","Name":"Southwick","Value":711},
{"Zip":"Middleton","Name":"Middleton","Value":702},
{"Zip":"Sturbridge","Name":"Sturbridge","Value":502},
{"Zip":"Townsend","Name":"Townsend","Value":497},
{"Zip":"Littleton","Name":"Littleton","Value":636},
{"Zip":"Sutton","Name":"Sutton","Value":257},
{"Zip":"Freetown","Name":"Freetown","Value":494},
{"Zip":"Blackstone","Name":"Blackstone","Value":111},
{"Zip":"Plainville","Name":"Plainville","Value":553},
{"Zip":"Monson","Name":"Monson","Value":81},
{"Zip":"Salisbury","Name":"Salisbury","Value":412},
{"Zip":"Douglas","Name":"Douglas","Value":298},
{"Zip":"Georgetown","Name":"Georgetown","Value":326},
{"Zip":"Rutland","Name":"Rutland","Value":379},
{"Zip":"Cohasset","Name":"Cohasset","Value":216},
{"Zip":"Montague","Name":"Montague","Value":8},
{"Zip":"Adams","Name":"Adams","Value":-36},
{"Zip":"Boxford","Name":"Boxford","Value":1297},
{"Zip":"Hamilton","Name":"Hamilton","Value":402},
{"Zip":"Templeton","Name":"Templeton","Value":103},
{"Zip":"Lancaster","Name":"Lancaster","Value":230},
{"Zip":"Millis","Name":"Millis","Value":445},
{"Zip":"Ayer","Name":"Ayer","Value":161},
{"Zip":"Sterling","Name":"Sterling","Value":508},
{"Zip":"WestBoylston","Name":"West Boylston","Value":385},
{"Zip":"Halifax","Name":"Halifax","Value":1280},
{"Zip":"Orange","Name":"Orange","Value":43},
{"Zip":"Upton","Name":"Upton","Value":355},
{"Zip":"Williamstown","Name":"Williamstown","Value":105},
{"Zip":"Westminster","Name":"Westminster","Value":456},
{"Zip":"Shirley","Name":"Shirley","Value":226},
{"Zip":"Dighton","Name":"Dighton","Value":184},
{"Zip":"Lincoln","Name":"Lincoln","Value":600},
{"Zip":"Rockport","Name":"Rockport","Value":85},
{"Zip":"WestBridgewater","Name":"West Bridgewater","Value":143},
{"Zip":"Groveland","Name":"Groveland","Value":166},
{"Zip":"Stow","Name":"Stow","Value":539},
{"Zip":"GreatBarrington","Name":"Great Barrington","Value":10},
{"Zip":"Newbury","Name":"Newbury","Value":432},
{"Zip":"Merrimac","Name":"Merrimac","Value":209},
{"Zip":"Dalton","Name":"Dalton","Value":78},
{"Zip":"Berkley","Name":"Berkley","Value":604},
{"Zip":"Harvard","Name":"Harvard","Value":158},
{"Zip":"Topsfield","Name":"Topsfield","Value":623},
{"Zip":"Granby","Name":"Granby","Value":713},
{"Zip":"Mattapoisett","Name":"Mattapoisett","Value":387},
{"Zip":"Rowley","Name":"Rowley","Value":397},
{"Zip":"Ashburnham","Name":"Ashburnham","Value":207},
{"Zip":"Chatham","Name":"Chatham","Value":254},
{"Zip":"Southampton","Name":"Southampton","Value":647},
{"Zip":"Mendon","Name":"Mendon","Value":520},
{"Zip":"Hopedale","Name":"Hopedale","Value":114},
{"Zip":"Dover","Name":"Dover","Value":578},
{"Zip":"Orleans","Name":"Orleans","Value":479},
{"Zip":"Lee","Name":"Lee","Value":43},
{"Zip":"Brookfield","Name":"Brookfield","Value":152},
{"Zip":"Barre","Name":"Barre","Value":63},
{"Zip":"Rochester","Name":"Rochester","Value":420},
{"Zip":"Manchester","Name":"Manchester","Value":116},
{"Zip":"Hadley","Name":"Hadley","Value":90},
{"Zip":"Hampden","Name":"Hampden","Value":733},
{"Zip":"Warren","Name":"Warren","Value":49},
{"Zip":"Boxborough","Name":"Boxborough","Value":1635},
{"Zip":"Wenham","Name":"Wenham","Value":374},
{"Zip":"Bolton","Name":"Bolton","Value":625},
{"Zip":"Carlisle","Name":"Carlisle","Value":995},
{"Zip":"Deerfield","Name":"Deerfield","Value":80},
{"Zip":"Marion","Name":"Marion","Value":292},
{"Zip":"Lenox","Name":"Lenox","Value":86},
{"Zip":"Eastham","Name":"Eastham","Value":1046},
{"Zip":"Paxton","Name":"Paxton","Value":893},
{"Zip":"NorthBrookfield","Name":"North Brookfield","Value":82},
{"Zip":"OakBluffs","Name":"Oak Bluffs","Value":349},
{"Zip":"Hubbardston","Name":"Hubbardston","Value":333},
{"Zip":"WestNewbury","Name":"West Newbury","Value":201},
{"Zip":"Boylston","Name":"Boylston","Value":464},
{"Zip":"Avon","Name":"Avon","Value":105},
{"Zip":"Edgartown","Name":"Edgartown","Value":262},
{"Zip":"Sherborn","Name":"Sherborn","Value":175},
{"Zip":"Tisbury","Name":"Tisbury","Value":224},
{"Zip":"WestBrookfield","Name":"West Brookfield","Value":194},
{"Zip":"Brimfield","Name":"Brimfield","Value":379},
{"Zip":"Sunderland","Name":"Sunderland","Value":185},
{"Zip":"Essex","Name":"Essex","Value":146},
{"Zip":"Nahant","Name":"Nahant","Value":164},
{"Zip":"Princeton","Name":"Princeton","Value":405},
{"Zip":"Dunstable","Name":"Dunstable","Value":860},
{"Zip":"Hatfield","Name":"Hatfield","Value":24},
{"Zip":"Millville","Name":"Millville","Value":45},
{"Zip":"Ashby","Name":"Ashby","Value":285},
{"Zip":"Sheffield","Name":"Sheffield","Value":124},
{"Zip":"Cheshire","Name":"Cheshire","Value":116},
{"Zip":"Lanesborough","Name":"Lanesborough","Value":186},
{"Zip":"Northfield","Name":"Northfield","Value":70},
{"Zip":"Hardwick","Name":"Hardwick","Value":-2},
{"Zip":"Provincetown","Name":"Provincetown","Value":-30},
{"Zip":"Berlin","Name":"Berlin","Value":243},
{"Zip":"WestTisbury","Name":"West Tisbury","Value":741},
{"Zip":"Plympton","Name":"Plympton","Value":513},
{"Zip":"Wellfleet","Name":"Wellfleet","Value":233},
{"Zip":"Holland","Name":"Holland","Value":1535},
{"Zip":"Williamsburg","Name":"Williamsburg","Value":32},
{"Zip":"Huntington","Name":"Huntington","Value":53},
{"Zip":"Bernardston","Name":"Bernardston","Value":175},
{"Zip":"Truro","Name":"Truro","Value":263},
{"Zip":"Hinsdale","Name":"Hinsdale","Value":86},
{"Zip":"Stockbridge","Name":"Stockbridge","Value":11},
{"Zip":"Oakham","Name":"Oakham","Value":303},
{"Zip":"Conway","Name":"Conway","Value":96},
{"Zip":"Shelburne","Name":"Shelburne","Value":31},
{"Zip":"Wales","Name":"Wales","Value":348},
{"Zip":"Buckland","Name":"Buckland","Value":31},
{"Zip":"Leverett","Name":"Leverett","Value":167},
{"Zip":"Erving","Name":"Erving","Value":38},
{"Zip":"Russell","Name":"Russell","Value":44},
{"Zip":"Becket","Name":"Becket","Value":164},
{"Zip":"Shutesbury","Name":"Shutesbury","Value":631},
{"Zip":"Ashfield","Name":"Ashfield","Value":99},
{"Zip":"Phillipston","Name":"Phillipston","Value":384},
{"Zip":"Clarksburg","Name":"Clarksburg","Value":47},
{"Zip":"Colrain","Name":"Colrain","Value":3},
{"Zip":"Westhampton","Name":"Westhampton","Value":436},
{"Zip":"Granville","Name":"Granville","Value":147},
{"Zip":"Otis","Name":"Otis","Value":339},
{"Zip":"Whately","Name":"Whately","Value":23},
{"Zip":"Gill","Name":"Gill","Value":70},
{"Zip":"NewMarlborough","Name":"New Marlborough","Value":48},
{"Zip":"Richmond","Name":"Richmond","Value":157},
{"Zip":"Chester","Name":"Chester","Value":5},
{"Zip":"Pelham","Name":"Pelham","Value":164},
{"Zip":"WestStockbridge","Name":"West Stockbridge","Value":21},
{"Zip":"Royalston","Name":"Royalston","Value":55},
{"Zip":"Blandford","Name":"Blandford","Value":162},
{"Zip":"Chesterfield","Name":"Chesterfield","Value":183},
{"Zip":"Petersham","Name":"Petersham","Value":94},
{"Zip":"Charlemont","Name":"Charlemont","Value":54},
{"Zip":"Egremont","Name":"Egremont","Value":176},
{"Zip":"Worthington","Name":"Worthington","Value":188},
{"Zip":"Goshen","Name":"Goshen","Value":377},
{"Zip":"NewBraintree","Name":"New Braintree","Value":159},
{"Zip":"NewSalem","Name":"New Salem","Value":95},
{"Zip":"Monterey","Name":"Monterey","Value":238},
{"Zip":"Chilmark","Name":"Chilmark","Value":284},
{"Zip":"Sandisfield","Name":"Sandisfield","Value":100},
{"Zip":"Windsor","Name":"Windsor","Value":123},
{"Zip":"Cummington","Name":"Cummington","Value":78},
{"Zip":"Wendell","Name":"Wendell","Value":152},
{"Zip":"Montgomery","Name":"Montgomery","Value":276},
{"Zip":"Peru","Name":"Peru","Value":468},
{"Zip":"Warwick","Name":"Warwick","Value":135},
{"Zip":"Florida","Name":"Florida","Value":148},
{"Zip":"Leyden","Name":"Leyden","Value":118},
{"Zip":"Hancock","Name":"Hancock","Value":54},
{"Zip":"Heath","Name":"Heath","Value":115},
{"Zip":"Savoy","Name":"Savoy","Value":56},
{"Zip":"Plainfield","Name":"Plainfield","Value":96},
{"Zip":"Washington","Name":"Washington","Value":123},
{"Zip":"Middlefield","Name":"Middlefield","Value":89},
{"Zip":"Tolland","Name":"Tolland","Value":156},
{"Zip":"Alford","Name":"Alford","Value":98},
{"Zip":"Rowe","Name":"Rowe","Value":16},
{"Zip":"Hawley","Name":"Hawley","Value":-15},
{"Zip":"Tyringham","Name":"Tyringham","Value":21},
{"Zip":"Aquinnah","Name":"Aquinnah","Value":124},
{"Zip":"NewAshford","Name":"New Ashford","Value":93},
{"Zip":"MountWashington","Name":"Mount Washington","Value":125},
{"Zip":"Monroe","Name":"Monroe","Value":-31},
{"Zip":"Gosnold","Name":"Gosnold","Value":-41}];

var stackData = [{"Concept":"Rubio","December_spending":1.67,"January_spending":1.81,"Projected_February_spending":4.12},
{"Concept":"Bush","December_spending":1.15,"January_spending":1.86,"Projected_February_spending":3.52},
{"Concept":"Christie","December_spending":0.86,"January_spending":1.09,"Projected_February_spending":2.43},
{"Concept":"Sanders","December_spending":0.44,"January_spending":1.06,"Projected_February_spending":1.95},
{"Concept":"Kasich","December_spending":0.41,"January_spending":0.98,"Projected_February_spending":1.52},
{"Concept":"Clinton","December_spending":0.44,"January_spending":0.78,"Projected_February_spending":1.33},
{"Concept":"Trump","December_spending":0.00,"January_spending":0.26,"Projected_February_spending":0.42},
{"Concept":"Cruz","December_spending":0.00,"January_spending":0.11,"Projected_February_spending":0.25}]

var USmapData = [{"Zip":"IA","Name":"Iowa","Value":34},
{"Zip":"NH","Name":"New Hampshire","Value":1},
{"Zip":"NV","Name":"Nevada","Value":19},
{"Zip":"SC","Name":"South Carolina","Value":17},
{"Zip":"TX","Name":"Texas","Value":9},
{"Zip":"GA","Name":"Georgia","Value":29},
{"Zip":"AK","Name":"Alaska","Value":9},
{"Zip":"VA","Name":"Virginia","Value":11},
{"Zip":"AL","Name":"Alabama","Value":11},
{"Zip":"OK","Name":"Oklahoma","Value":33},
{"Zip":"TN","Name":"Tennessee","Value":30},
{"Zip":"AR","Name":"Arkansas","Value":22},
{"Zip":"CO","Name":"Colorado","Value":32},
{"Zip":"MA","Name":"Massachusetts","Value":22},
{"Zip":"MN","Name":"Minnesota","Value":37},
{"Zip":"WY","Name":"Wyoming","Value":38},
{"Zip":"ND","Name":"North Dakota","Value":38},
{"Zip":"VT","Name":"Vermont","Value":26},
{"Zip":"LA","Name":"Louisiana","Value":20},
{"Zip":"KS","Name":"Kansas","Value":36},
{"Zip":"NE","Name":"Nebraska","Value":19},
{"Zip":"KY","Name":"Kentucky","Value":7},
{"Zip":"ME","Name":"Maine","Value":39},
{"Zip":"HI","Name":"Hawaii","Value":11},
{"Zip":"MS","Name":"Mississippi","Value":26},
{"Zip":"MI","Name":"Michigan","Value":14},
{"Zip":"ID","Name":"Idaho","Value":39},
{"Zip":"DC","Name":"District of Columbia","Value":33},
{"Zip":"FL","Name":"Florida","Value":13},
{"Zip":"IL","Name":"Illinois","Value":23},
{"Zip":"NC","Name":"North Carolina","Value":9},
{"Zip":"OH","Name":"Ohio","Value":29},
{"Zip":"MO","Name":"Missouri","Value":36},
{"Zip":"AZ","Name":"Arizona","Value":27},
{"Zip":"UT","Name":"Utah","Value":8},
{"Zip":"WA","Name":"Washington","Value":16},
{"Zip":"WI","Name":"Wisconsin","Value":6},
{"Zip":"NY","Name":"New York","Value":0},
{"Zip":"MD","Name":"Maryland","Value":19},
{"Zip":"DE","Name":"Delaware","Value":30},
{"Zip":"CT","Name":"Connecticut","Value":23},
{"Zip":"PA","Name":"Pennsylvania","Value":38},
{"Zip":"RI","Name":"Rhode Island","Value":3},
{"Zip":"IN","Name":"Indiana","Value":34},
{"Zip":"WV","Name":"West Virginia","Value":18},
{"Zip":"OR","Name":"Oregon","Value":1},
{"Zip":"NM","Name":"New Mexico","Value":26},
{"Zip":"CA","Name":"California","Value":3},
{"Zip":"NJ","Name":"New Jersey","Value":39},
{"Zip":"SD","Name":"South Datkota","Value":20},
{"Zip":"MT","Name":"Montana","Value":32}];

var spiffyData = [{"Name":"Illegal use of a pogo stick","First":42,"Second":39},
{"Name":"Unlicensed slap bracelets","First":198,"Second":11},
{"Name":"Incorrect use of the word 'literally'","First":223,"Second":409},
{"Name":"Slowing down the line at Dunkin' Donuts","First":93,"Second":164},
{"Name":"Using an apostrophe when pluralizing","First":382,"Second":457}];

var polls = [{"Question":"If the election were held tomorrow, who would you vote for?","Name":"Missy Elliott","Value":31},
{"Question":"If the election were held tomorrow, who would you vote for?","Name":"Liz Lemon","Value":27},
{"Question":"If the election were held tomorrow, who would you vote for?","Name":"Obi-Wan Kenobi","Value":21},
{"Question":"If the election were held tomorrow, who would you vote for?","Name":"Keytar Bear","Value":14},
{"Question":"Which topics are important to your voting decisions?","Name":"Education","Value":83},
{"Question":"Which topics are important to your voting decisions?","Name":"Jobs","Value":78},
{"Question":"Which topics are important to your voting decisions?","Name":"Star Wars sequels","Value":44},
{"Question":"Would you approve of a tax-funded water slide in Boston Common?","Name":"Yes","Value":39},
{"Question":"Would you approve of a tax-funded water slide in Boston Common?","Name":"No","Value":50},
{"Question":"Would you approve of a tax-funded water slide in Boston Common?","Name":"Not sure","Value":11}];

var boston = [{"Zip":"allston","Name":"Allston/Brighton","Residential":11,"Commercial":2,"Mixed-Use":2,"Industrial":0,"Exempt":2,"Value":17,"Percent":5},
{"Zip":"backbay","Name":"Back Bay/Beacon Hill","Residential":2,"Commercial":0,"Mixed-Use":0,"Industrial":0,"Exempt":0,"Value":2,"Percent":1},
{"Zip":"central","Name":"Central","Residential":1,"Commercial":6,"Mixed-Use":2,"Industrial":0,"Exempt":0,"Value":9,"Percent":2},
{"Zip":"charlestown","Name":"Charlestown","Residential":4,"Commercial":0,"Mixed-Use":0,"Industrial":0,"Exempt":3,"Value":7,"Percent":2},
{"Zip":"dorchester","Name":"Dorchester","Residential":68,"Commercial":14,"Mixed-Use":3,"Industrial":4,"Exempt":3,"Value":92,"Percent":25},
{"Zip":"eastboston","Name":"East Boston","Residential":15,"Commercial":3,"Mixed-Use":2,"Industrial":0,"Exempt":0,"Value":20,"Percent":5},
{"Zip":"fenway","Name":"Fenway","Residential":1,"Commercial":1,"Mixed-Use":0,"Industrial":0,"Exempt":0,"Value":2,"Percent":1},
{"Zip":"hydepark","Name":"Hyde Park","Residential":26,"Commercial":6,"Mixed-Use":0,"Industrial":1,"Exempt":0,"Value":33,"Percent":9},
{"Zip":"jp","Name":"Jamaica Plain","Residential":11,"Commercial":5,"Mixed-Use":1,"Industrial":2,"Exempt":1,"Value":20,"Percent":5},
{"Zip":"mattapan","Name":"Mattapan","Residential":28,"Commercial":8,"Mixed-Use":1,"Industrial":0,"Exempt":6,"Value":43,"Percent":12},
{"Zip":"roslindale","Name":"Roslindale","Residential":11,"Commercial":2,"Mixed-Use":0,"Industrial":0,"Exempt":1,"Value":14,"Percent":4},
{"Zip":"roxbury","Name":"Roxbury","Residential":62,"Commercial":10,"Mixed-Use":6,"Industrial":0,"Exempt":8,"Value":86,"Percent":23},
{"Zip":"southboston","Name":"South Boston","Residential":6,"Commercial":5,"Mixed-Use":0,"Industrial":4,"Exempt":0,"Value":15,"Percent":4},
{"Zip":"southend","Name":"South End","Residential":4,"Commercial":0,"Mixed-Use":1,"Industrial":0,"Exempt":1,"Value":6,"Percent":2},
{"Zip":"westroxbury","Name":"West Roxbury","Residential":4,"Commercial":0,"Mixed-Use":0,"Industrial":0,"Exempt":1,"Value":5,"Percent":1}]




map("masstowns", "towns",coolTownData, "", "", 5, "-600 to 0", "1 to 500", "501 to 700", "701 to 1000", "1000 to 7000");

map("us", "states", USmapData, "", "", 5, "0 to 10", "11 to 20", "21 to 30", "31 to 40", "41 to 50");

map("boston15", "boston", boston, "", "", 5, "0 to 10", "11 to 20", "21 to 30", "31 to 40", "41 to 50");




for (var i=0; i<counties.length; i++) {
	var zip = counties[i].Name;
	counties[i].Zip = zip.toLowerCase();
}

map("masscounties", "counties",counties, "", "", 5, "-600 to 0", "1 to 500", "501 to 700", "701 to 1000", "1000 to 7000");

verticalBarChart("penalties",penalties,2,"$","m");

verticalBarChart("employees",employees,200,"","");

horizontalBarChart("horiz", horiz, "", "");

pollSurvey("pollChart", polls, "", "%");

feverChart("myFever", feverData, "", "", 0, 3);




stackedBarChart("stackosaurus", stackData, "", "");

stackedBarChart("stackosaurus2", stackData, "", "");

horizontalBarChartTwoValues("superCoolChart", spiffyData, "","","2010","2017");



circleSquare("dotty", dots, "", "","square");	



})();