function getData() {
    let container = document.querySelector(".product .container")
    axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            let data = res.data;
            data.forEach((item) => {
                container.innerHTML += `
                    <div class="card">
                    <div class="image">
                        <img src="${item.image}" alt="">
                        </div>
                        <div class="txt">
                        <p><span>${item.title}</span></p>
                        <div class="rating">
                        <span class="rate">4.6</span>
                        <div class="icons">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star-half-stroke"></i>
                            </div>
    
                            </div>
                            <div class="price">
                            <i class="fa-solid fa-arrow-trend-down"></i>
                            <span> Son 30 Giriş En Düşük Fiyatı!</span>
                            </div>
                            <div class="tl">
                            <span>${item.price} TL</span>
                            </div>
                            <div class="cupon">
                            <div class="cupons item">
                            <img src="https://cdn.dsmcdn.com/web/production/campaign-coupon-icon.svg" alt="">
                            <span>Kupon Fırsatı</span>
                            </div>
                            <div class="promotions item">
                            <img src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg" alt="">
                            <span>Çok Al Az Öde</span>
                            </div>
                            </div>
                            </div>
                            </div>
                            `
                let searchBtn = document.querySelector(".search input");
                let btn = document.querySelector(".search i")
                let search;
                searchBtn.addEventListener("input", (e) => {
                    search = e.target.value;
                    container.innerHTML = ""
                });
                btn.addEventListener("click", () => {
                    console.log(search);
                    if (item.title.toLowerCase().includes(search.toLowerCase())) {

                        container.innerHTML += `
                    <div class="card">
                    <div class="image">
                        <img src="${item.image}" alt="">
                        </div>
                        <div class="txt">
                        <p><span>${item.title}</span></p>
                        <div class="rating">
                        <span class="rate">4.6</span>
                        <div class="icons">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star-half-stroke"></i>
                            </div>
    
                            </div>
                            <div class="price">
                            <i class="fa-solid fa-arrow-trend-down"></i>
                            <span> Son 30 Giriş En Düşük Fiyatı!</span>
                            </div>
                            <div class="tl">
                            <span>${item.price} TL</span>
                            </div>
                            <div class="cupon">
                            <div class="cupons item">
                            <img src="https://cdn.dsmcdn.com/web/production/campaign-coupon-icon.svg" alt="">
                            <span>Kupon Fırsatı</span>
                            </div>
                            <div class="promotions item">
                            <img src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg" alt="">
                            <span>Çok Al Az Öde</span>
                            </div>
                            </div>
                            </div>
                            </div>
                            `
                    }
                })
            })

        })
}
getData()
