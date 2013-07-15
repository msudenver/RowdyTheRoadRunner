var stringArr= new Array();
var totString;
var originalString;
var a=0;
var i;
var run;
i=0;
var txtFile;

function lookup()
{
var setval;
var search;
var text;
i=0;
stringArr=new Array();
totString=null;
search=document.a.text.value;
if(a==0)
{
text=document.getElementById("results").innerHTML;

i=text.indexOf('&');

while(i>-1)
{
text=text.replace('&','~`');
i=text.indexOf('&');
}

i=text.indexOf(' ');

while(i>-1)
{
text=text.replace(' ','~)');
i=text.indexOf(' ');
}

i=0;

originalString=text;
}
else
{
text=originalString;
}
a=1;
dep(search, text);
}
 
function dep(insearch, intext)
{
var txt;
var upper;
txt=intext;
var find;
find=insearch;

if(find== '>' || find=='&' || find=='<' || find == '~`' || find =='`' || find =='~)' || find ==')' || find =='~')
{
return;
}

var index; 
var pstag;
var petag;
var substring;
var potent;
var tlength=txt.length;
var flength=find.length;

var endnum; 
endnum=0;

upper=txt;
txt=txt.toLowerCase(txt);
find=find.toLowerCase(find);


index=txt.indexOf(find);

while( index > -1)
{
//checks for possible ampersand tags -- tags used for accents, special characters, & etc.
pstag=txt.indexOf('&',(index-6));
petag=txt.indexOf(';',(index+6));

index=endnum+(index); 
endnum=index+flength;
potent=tagchecker(index,txt);

if(potent==0)
{
enque(index, endnum);
}

substring=txt.substr(endnum);
index=substring.indexOf(find);
}

var boxarr=new Array();

boxarr=write(upper,find);
searchbox(boxarr);
}

//code for jump box
function searchbox(inarr)
{
var innerCode;
var search_arr=new Array();
var i;
var szb;
var pone;
var cur;
var form;
var div;
var option;
var element;
var text;
var link;
var remove
var list;

search_arr=inarr;

if(run==1)
{
remove=document.getElementById('searchres');
remove.innerHTML=' ';
}
else
{
run=1;
}

if(search_arr.length>0)
{
i=0;

szb=search_arr.length;

div=document.getElementById("searchres");
form=document.createElement("form");
element=document.createElement("select");
element.name="res_list";
element.id="res_list";
div.appendChild(form);
div.appendChild(element);

option=document.createElement("OPTION");
text=document.createTextNode("Results List");
option.value='null';
option.appendChild(text);
element.appendChild(option);

while(i < szb)
{
pone=i+1;
option=document.createElement("OPTION");
text=document.createTextNode(search_arr[pone]);
option.value=search_arr[i];
option.appendChild(text);
element.appendChild(option);
i=pone+1;
}

element.onchange=achange;
}
}

function achange(){

window.location.assign('#'+document.getElementById('res_list').value);
}

function tagchecker(inindex, intext)
{
var index= inindex;
var txt=intext;
var txtLength=txt.length;

var maxtag=(index+200);
var mintag=(index-200);

if(maxtag > txtLength)
{
maxtag=txtLength;
}

if(mintag<0)
{
mintag=0;
}

var chIndex=index-mintag;
var checkstring=txt.substr(mintag,(maxtag-mintag));
var tag=checkstring.indexOf("<");
var etag;
var lastag=0;
var ptag=0;
var reps=0;

if(tag== -1 || chIndex < tag)
{
ptag=0;
} 
else
{
etag=checkstring.indexOf(">");

while(tag > -1)
{

if(tag > lastag && tag < etag)
{
  ptag=0;
  
  if(chIndex > tag && chIndex<etag)
  {
   ptag=1;
   break;
  }
}
else if(tag > etag && ptag==0 && etag > -1)
{
   etag=checkstring.indexOf(">",tag);
   tag=tag-2;
}
else
{
   ptag=0;
}
lastag=tag;
tag=checkstring.indexOf("<",tag+1);
}
}
return ptag;
}

function enque(inindex, inend)
{
var begin=inindex;
var end=inend;
var inputString;
var result;
inputString=begin+' '+end;
stringArr[i]=inputString;
i++;
}

function write(intext,infind)
{
var k=stringArr.length;
var j=0;
var splitString;
var splitArr;
var beg;
var end;
var txtpos;
var substring;
var manstring;
var txt=intext;
var ctag;
var rpos;
var cetag;
var strings;
var etagpos;
var key;
var addstr
var epos;
var result;
result=infind;
var tagpos
var keystring_arr=new Array();
var total_arr=new Array();
var startstring;
var start;
var keypos;
var endpos;
var checksub;
var checkstart;
var secondsub;

splitString=stringArr[j];
splitArr=splitString.split(' ');
beg=parseInt(splitArr[0]);
substring=txt.substr(0,beg);
txtpos=beg+1;
var y=0;
var position;
var i;

//check for &XXXX; special character cases
var btag;
var betag;
var badfind;
var findstart;
badfind=0;

for(j=0;j<k;j++)
{

splitString=stringArr[j];
splitArr=splitString.split(' ');
beg=parseInt(splitArr[0]);
end=parseInt(splitArr[1]);

//code for internal links
key="detag"+j;

if(j>0)
{
substring=txt.substr(txtpos,(beg-txtpos));
}

if(start<0)
{
start=0;
}

//this loop grabs the nearest begin and end tags within 200 characters of the end
//if there is only an endtag it will be set to the endtag
//if there is a series of tags the last '>' is set to the position
//in the case that the endtag is not found but the '<' tag is, the position of ('<' - 1)is used
//if not found, the else condition is called
findstart=0;

findstart=substring.length-100;


if(findstart<0)
{
findstart=0;
}

//check for tags
findstart=substring.indexOf('<',findstart);
ctag=findstart;

//if found go until last begin tag is found or an anchor tag or a span tag 
if(ctag>-1)
{
while(ctag>-1)
{
  findstart=ctag;
  startstring=substring.substr(ctag,3);
  
  if(startstring=='<a ' || startstring=='< a' || startstring=='<sp' || startstring== '< s')
  {
   break;
  }
  ctag=substring.indexOf('<',ctag+1);
  
}

//recreate the substring with an anchor tag before the last tag. this should be approximate enough (within 100 char)

startstring=substring.substr(0,findstart);
substring=substring.substr(findstart);
substring=startstring+'<a name="'+key+'"></a>'+substring;
}
else
{
//if not found find nearest end tag or just append anchor to substring
findstart=substring.indexOf('>');

if(findstart>-1)
{
//endtag found 
ctag=findstart;

//get the last avaialable end tag
while(ctag>-1)
{
findstart=ctag;
ctag=substring.indexOf('>',ctag+1);
}

startstring=substring.substr(0,findstart);
substring=substring.substr(findstart+1);
substring=startstring+'<a name="'+key+'"></a>'+substring;

}
else
{
//end tag not found so no apparent tag
substring=substring+'<a name="'+key+'"></a>';
}

}



toString(substring);


strings=txt.substr((beg-10),(end-beg+20));

//checks for unusable characters
btag=strings.indexOf('&');
betag=strings.indexOf(';');

if(badfind==0)
{


if(btag>-1 && betag>-1 && betag>btag)
{
badfind =1;
}


tagpos=strings.indexOf('<');
etagpos=strings.indexOf('>');
ctag=strings.indexOf('<');
cetag=strings.indexOf('>');
strings=strings;
rpos=strings.indexOf(result);

//rpos does not set on the first loop despite the fact that strings exists
if(j==0)
{
 rpos=beg;
}

//removal coniditions for tags
while(ctag>-1 || cetag>-1)
{
if(ctag>-1)
{
if(ctag<rpos && cetag<rpos)
{
strings=strings.substr(cetag+1);
}
else if(ctag>rpos)
{
strings=strings.substr(0,ctag);
}

rpos=strings.indexOf(result);
cetag=strings.indexOf('>');
ctag=strings.indexOf('<');
}

if(cetag>-1 && cetag<rpos)
{
strings=strings.substr(cetag+1);
cetag=-1;
}
else
{
ctag=-1;
cetag=-1;
}
}


//checks to ensure that all tags have been removed
ctag=strings.indexOf('<');
cetag=strings.indexOf('>');

//if somehow the string is cut or not all tags are removed, only the result is returned
if(strings.length<(end-beg) || ctag>-1 || cetag >-1)
{
strings=txt.substr(beg,(end-beg));
}

if(ctag==-1 && cetag < rpos)
{
strings=strings.substr(cetag+1);
}

if(strings !='>' && strings != '&' && strings !='<')
{
strings=strings.replace('~`','&');
strings=strings.replace('~)', ' ');
strings='...'+strings+'...';
keystring_arr[y]=key;
y++
keystring_arr[y]=strings;
y++
}

result=txt.substr(beg,(end-beg));
tagpos=result.indexOf("<");

if(tagpos > -1)
{
result=detres(result,txt,beg,(end-beg),result.length,7,7);
}

//if there is an ampersand and the result contains amp afterward, manstring skips or if the manstring is tag related it skips
if(result== '>' || result=='&' || result=='<' || result == '~`' || result=='`' || result=='~)' || result==')' || result=='~')
{
manstring=result;
}
else
{
//contains code for internal links
manstring="<span name='i420a' style='background-color:yellow;'>"+result+'</span>'; 
}

toString(manstring);
}
else
{
badfind=0;
}

txtpos=end;
}

substring=txt.substr(txtpos);

subtag=substring.indexOf('>');

//this loop grabs the nearest begin and end tags with 200 characters
//if there is only an endtag it will be set to the endtag
//if there is a series of tags the last '>' is set to the position
//in the case that the endtag is not found but the '<' tag is, the position of ('<' - 1)is used
//if not found, the else condition is called

toString(substring);
display();

//code for internal links
return keystring_arr;
}

function detres(instring,intext,inbeg,inend,inlen,inendl,inbegl)
{
var tagtemp;
var string=instring;
var text=intext;
var beg=inbeg;
var end=inend;
var tagpos;
var chopstring;
var totlength=inlen;
var length;
var math;
var endl=inendl;
var begl=inbegl;
var btag;
var tag;
var taghold;
var tempstring;
var extra;

tag=0;
//checks for common tags
tagpos=string.indexOf('>');
btag=string.indexOf('<');

//checks for presence of actual tag
if(tagpos>-1 && btag >-1)
{
//check if actual tag or other tags exist

if(btag<tagpos)
{
tag=1;
}
else
{
tagpos=string.indexOf('>',btag);
if(tagpos<btag)
{
//this also covers the presence of no tags as no tags would result in -1
tag=0;
}
else
{
tag=1;
}
}

}
else if(tagpos>-1 && btag<0)
{
//check with presence of > if there is a complimentary < nearby
if(beg-15<0)
{
extra=beg;
tempstring=text.substr(0,beg+string.length);
}
else
{
extra=15;
tempstring=text.substr(beg-15,(15+string.length));
}

taghold=tempstring.indexOf('<');

if(taghold>-1)
{
tag=1;
string=text.substr((beg-extra),extra+string.length);
}
else
{
tag=0;
}

}
else if(btag>-1 && tagpos<0)
{
//check with presence of < if there is a nearby >
if(end+15>text.length)
{
extra=(text.length-end);
tempstring=text.substr(beg,extra+string.length);
}
else
{
extra=15;
tempstring=text.substr(beg,15+string.length);
}

taghold=tempstring.indexOf('<');

if(taghold>-1)
{
tag=1;
string=text.substr(beg,extra+string.length);
}
else
{
tag=0;
}
}
else
{
tag=0;
}


//first checks to see if there are no tags (tag=0)
//if tags are present (tag=1) removes them and then checks for length and lengthens if necessary
//detags if the string was lengthened

if(tag==0)
{

//string is devoid of tags so the method ends
return string;	
}
else
{

//TRIM TAGS HERE
//
//
//

tagpos=string.indexOf('<');
etag=string.indexOf('>');
while(tagpos>-1 && etag > -1)
{
string=string.substr(0,(tagpos-1))+string.substr((etag+1),string.length-(endtag-1));
tagpos=string.indexOf('<');
etag=string.indexOf('>');
}
//
//
//


//lengthens string if necessary
length=string.length;

while(length<15)
{


if((end+7)<= text.length)
{
end=end+7
endl=endl+7;
}
else
{
endl=endl+(text.length-end);
end=end+(text.length-end);


math=beg-(7-(text.length-end));

if(beg-math >= 0)
{
beg=beg-math;
begl=begl+math;
}
else
{
begl=2*beg;
beg=0;
}

}

if(beg-7<0)
{
begl=2*beg;
beg=0;

math=beg+end;
if(math+end <= text.length)
{
end=end+7;
}
else
{

}

}
else
{
begl=beg+7;
beg=beg-7;
}

string=text.substr(beg,begl)+string+text.substr(end,endl);
}
string=detres(string,text,beg,end,totlength,endl,begl);
}
}

function toString(inString)
{
if(totString != null)
{
totString=totString+inString;
}
else
{
totString=inString;
}
}

function display()
{
var j;
j=-1;
j=totString.indexOf('~`');

while(j>-1)
{
totString=totString.replace('~`','&');
j=totString.indexOf('~`');
}

j=totString.indexOf('~)');

while(j>-1)
{
totString=totString.replace('~)',' ');
j=totString.indexOf('~)');
}


document.getElementById("results").innerHTML=totString;
}

function start(e)
{
var keynum;

	if(window.event) // IE8 and earlier
	{
	keynum = e.keyCode;
	}
	else if(e.which) // IE9/Firefox/Chrome/Opera/Safari
	{
	keynum = e.which;
	}
	
	if(keynum==13)
	{
	e.stopPropagation();
	lookup();
	e.preventDefault();
	}
}