//your JS code here. If required.
const ulE1=document.getElementById('band');
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let res=[]
const map=new Map()
for(let i=0;i<bands.length;i++){
    let str=bands[i];
    str=str.split(" ");
    let res2=[];
    for(let i=0;i<str.length;i++){
       if(str[i]==="The" || str[i]==="An" || str[i]==="A"){
           continue
       }else{
           res2.push(str[i])
       } 
    }
    map.set(res2.join(' '),bands[i])
    res.push(res2.join(' '));
}
res.sort();
let mainResult=[]
for(let i=0;i<res.length;i++){
    mainResult.push(map.get(res[i]))
}
for(let i=0;i<mainResult.length;i++){
	let li=document.createElement('li');
	li.textContent=mainResult[i]
	ulE1.appendChild(li);
}
