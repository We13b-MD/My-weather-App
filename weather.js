<script>


	let weather ={

apikey:"c40413a78ecb2a1519fc25f9b934dd0b",
Getweather:function(city){
fetch("https://api.openweathermap.org/data/2.5/weather?q="
	+city
	+"&units=metric&appid="
    +this.apikey
    )
.then((response)=>response.json())
.then((data) => this.Displayweather(data))

	
},
// display function is the function that represents the data values
Displayweather:function(data){
//Extracting the data from the Api docs 
const {name} = data;
const {icon,description}  = data.weather[0];
const {pressure,temp,humidity} = data.main;
const {speed} = data.wind


// creating variables for the weather components
const mycity = document.getElementById("city")
const mytemp = document.getElementById("temp")
const  mydescription = document.getElementById("description");
const myicon  = document.getElementById("icon");
const myhumidity = document.getElementById("humidity")
const mypressure = document.getElementById("pressure")
const mywindspeed = document.getElementById("windspeed")
const myweather = document.getElementById("weather")




mycity.innerText = "Weather in" + " " + name;
mytemp.innerText = temp + "°C";
mydescription.innerText = "Description:"
myicon.src  = "http://openweathermap.org/img/wn/" + icon + ".png";
myhumidity.innerText = "Humidity:" + humidity + "%"
mypressure.innerText = "Pressure:" + pressure + "Pa"
mywindspeed.innerText = "Windspeed:" + speed + "Km/hr"
myweather.classList.remove("loading")
document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"

},
// the function enables us to search for the weather for different countries
search: function(){
this.Getweather(document.getElementById("myinput").value)

},
};

const loading = document.querySelector(".Loading")
	let timer;
// adding an eventlistener to the search bar
const mysearchbutton = document.getElementById("searchbutton")
	mysearchbutton.addEventListener("click", searchevent)


	function searchevent(){
	weather.search();
	clearInterval(timer)
	timer = setInterval(()=>{
		loading.style.visibility = "visible";
		},500)
	setTimeout(()=>{
		loading.innerHTML = " ";
},10000)
	

}
	
	

const inputevent = document.getElementById("myinput")
inputevent.addEventListener("keyup",pressenterkey)



	function pressenterkey(event){
if(event.key === "Enter"){
	weather.search()

	clearInterval(timer)
	timer = setInterval(()=>{
		loading.style.visibility = "visible";
		},2000)
	setTimeout(()=>{
		loading.innerHTML = " ";
},10000)
	}

}






</script>