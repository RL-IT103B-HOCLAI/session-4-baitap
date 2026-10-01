const order = "MSLXTMM";

const price = {
    S: 30000,
    M: 36000,
    L: 40000,
    T: 8000
};

const isGoldMember = true;
const maxItems = 4;

let totalAmount = 0;
let validItemCount = 0;
let detail = [];

for (let i = 0; i < order.length; i++) {
    const item = order[i];

    if (item === "X") {
        continue;
    }

    if (validItemCount >= maxItems) {
        break;
    }

    totalAmount += price[item];
    validItemCount++;

    detail.push({
        item: item,
        price: price[item]
    });
}

const discount = isGoldMember ? totalAmount * 0.1 : 0;
const finalAmount = totalAmount - discount;

console.log("===== HÓA ĐƠN HIGHLANDS COFFEE =====");

for (let i = 0; i < detail.length; i++) {
    console.log(
        `${i + 1}. Size ${detail[i].item}: ${detail[i].price.toLocaleString("vi-VN")} VNĐ`
    );
}

console.log("------------------------------------");
console.log(`Số món hợp lệ: ${validItemCount}`);
console.log(`Tạm tính: ${totalAmount.toLocaleString("vi-VN")} VNĐ`);
console.log(`Giảm giá thành viên: ${discount.toLocaleString("vi-VN")} VNĐ`);
console.log(`THANH TOÁN: ${finalAmount.toLocaleString("vi-VN")} VNĐ`);