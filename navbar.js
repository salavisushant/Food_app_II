function navbar() {
    return `
    <img style="width:140px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHX7RC9H4VzY8cfbPQQRTnEgcHyKM6fUNGow&usqp=CAU"/>
    <input style="width:300px;height:30px;margin-top:20px;" oninput="debounce(main,1000)" type="text" id="name" placeholder="Search Your Receipe Here"/>
    <input style="width:60px;height:33px;margin-top:20px;margin-right:190px;" onclick="searchFood()" type="button" value="Search"/>
    <div id="options">

        <h3><a href="latestrecepe.html">Receipe Of the Day</a></h3>
    </div>
`
}

export default navbar
