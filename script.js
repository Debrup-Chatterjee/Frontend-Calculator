function result()
{
var s=document.getElementById("screen").value;
var n=eval(s);
document.getElementById("screen").value=n;
if((n.toString())!="undefined" && n!=s)
document.getElementById("history").value=s+" =";
document.getElementById("screen").focus();
}
function clr()
{
document.getElementById("history").value="";
document.getElementById("screen").value="";
document.getElementById("screen").focus();
}
function display(obj)
{
document.getElementById("history").value="";
var s=document.getElementById("screen").value;
s=s+obj.value;
document.getElementById("screen").value=s;
document.getElementById("screen").focus();
}
function backspace()
{
document.getElementById("history").value="";
var s=document.getElementById("screen").value;
var l=s.length;
document.getElementById("screen").value=s.substring(0,l-1);
document.getElementById("screen").focus();
}
function percent()
{
var s=document.getElementById("screen").value;
var l=s.length;
var s2="";
for(i=l-1;i>=0;i--)
{
var c=s.charAt(i);
if(c=='('||c==')'||c=='+'||c=='-'||c=='*'||c=='/')
break;
else
s2=c+s2;
}
s=s.substring(0,i+1)+eval(s2/100);
document.getElementById("screen").value=s;
document.getElementById("screen").focus();
}