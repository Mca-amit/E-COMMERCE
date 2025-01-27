//it means jab user interface load ho jayega tab window.onload kaam karega
window.onload = () => {
    const accountMenu = document.getElementById('account');
    accountMenu.onmouseover = ()=>{
        const dropdown = document.getElementById('account-menu');
        dropdown.style.display = "flex";
    }
    accountMenu.onmouseout = ()=>{
        const dropdown = document.getElementById('account-menu');
        dropdown.style.display = "none";
    }


    //open carts
    const cartBtn = document.getElementById("cart");
    cartBtn.onclick = () =>{
        const overlay = document.getElementById("cart-overlay");
        const cartList = document.getElementById("cart-list");
        overlay.classList.add('animate__animated', 'animate__fadeIn');
        overlay.style.display="block";
        cartList.style.animation = "cartlist 0.4s linear forwards";
    }

    const closeCart = document.getElementById('close-cart');
    closeCart.onclick = () => {
        const cartList = document.getElementById("cart-list");
        cartList.style.animation = "close 0.4s linear forwards";
        const overlay = document.getElementById("cart-overlay");
        // overlay.classList.add('animate__animated', 'animate__fadeOut');
        setTimeout(()=>{
            overlay.style.display = "none";
        },500);
    }


    //increase and decrease quantity
    const increaseQnt = document.getElementsByClassName('increase-qnt');
    for (let btn of increaseQnt){
        btn.onclick = () =>{
            const div=btn.parentElement;//parentElement will get selected
            const label=div.getElementsByClassName('qnt')[0]
            const text = Number(label.innerHTML);
            label.innerHTML = text+1;
        }
    }

    const decreaseQnt = document.getElementsByClassName('decrease-qnt');
    for (let btn of decreaseQnt){
        btn.onclick = () =>{
            const div=btn.parentElement;//parentElement will get selected
            const label=div.getElementsByClassName('qnt')[0]
            const text = Number(label.innerHTML);
            if(text > 1) label.innerHTML = text-1;
        }
    }

    //this code will execute in each 1 second
    setInterval(()=>{
        const time = new Date().toLocaleTimeString().split(":");//Date fn will give both the date and time but this fn toLocaleTimeString() will give the only time in string
        //in time variable there is a variable
        const hour = document.getElementById("hour");
        const min = document.getElementById("min");
        const sec = document.getElementById("sec");
        hour.innerHTML = time[0];
        min.innerHTML = time[1];
        sec.innerHTML = time[2];
    },1000);
    

}