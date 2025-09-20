//your JS code here. If required.
let output=document.getElementById("output");
let array=[1,2,3,4];

function getarray(array){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(array)
		},3000);
	})
}



getarray(array)
	.then((numbers)=>{
		let even=numbers.filter(num=>num%2===0);
		//return even;
	//.then((even)=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				output.textContent=`[${even}]`;
				resolve(even);
			},1000);
		})
	})
	.then((evenNumbers)=>{
		let twomultiple=evenNumbers.map(evenNumber=>evenNumber*2);
			//return twomultiple;
		//.then((twomultiple)=>{
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					output.textContent=`[${twomultiple}]`;
					resolve(twomultiple);
				},2000);
			})
		})
.catch((err)=>{
	console.log(err);
})