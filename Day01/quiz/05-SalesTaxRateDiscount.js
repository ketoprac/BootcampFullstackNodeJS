/**
 * hitung sales discount plus tax rate
 * function getSalesDiscount
 */

function getSalesDiscount(price, tax, discount) {
    if (isNaN(price) === true && isNaN(tax) === true && isNaN(discount) === true) {
        return "Price, Tax & Discount harus dalam angka!";
    } else if (isNaN(price) === true) {
        return "Price harus dalam angka!"
    } else if (isNaN(tax) === true) {
        return "Pajak harus dalam angka!"
    } else {
        return `
        Total Sales : Rp.${price}
        Discount (${discount}%) : Rp.${discount/100*price}
        PriceAfterDiscount : Rp.${price - (discount/100*price)}
        Pajak (${tax}%) : Rp.${tax/100 * (price - (discount/100*price))}
        ----------------------------------
        TotalPayment : Rp.${(price - (discount/100*price)) + (tax/100 * (price - (discount/100*price)))}
        `
    }
}

console.log(getSalesDiscount("a", 1, 5)); //Price harus dalam angka
console.log(getSalesDiscount(500, "pajak", 5)); //Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak", "discount")); //Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10, 5));
/**
    Total Sales 	: Rp.4500 
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */
