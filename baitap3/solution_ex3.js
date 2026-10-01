const tableOrders = "MLT,SSX,LLTT";

const priceSizeS = 35000;
const priceSizeM = 42000;
const priceSizeL = 48000;
const priceTopping = 10000;

let totalShiftRevenue = 0;

const orders = tableOrders.split(",");

for (let tableIndex = 0; tableIndex < orders.length; tableIndex++) {
    const currentTableOrder = orders[tableIndex];
    let tableTotal = 0;

    for (
        let orderIndex = 0;
        orderIndex < currentTableOrder.length;
        orderIndex++
    ) {
        const currentItem = currentTableOrder[orderIndex];

        if (currentItem === "X") {
            continue;
        }

        if (currentItem === "S") {
            tableTotal += priceSizeS;
        } else if (currentItem === "M") {
            tableTotal += priceSizeM;
        } else if (currentItem === "L") {
            tableTotal += priceSizeL;
        } else if (currentItem === "T") {
            tableTotal += priceTopping;
        }
    }

    const originalTableTotal = tableTotal;
    let discountAmount = 0;

    if (tableTotal > 100000) {
        discountAmount = tableTotal * 0.1;
        tableTotal = tableTotal - discountAmount;
    }

    totalShiftRevenue += tableTotal;

    console.log(`
==============================
          BÀN ${tableIndex + 1}
==============================
Chuỗi món        : ${currentTableOrder}
Tạm tính         : ${originalTableTotal} VNĐ
Giảm giá         : ${discountAmount} VNĐ
Thực thu         : ${tableTotal} VNĐ
==============================
`);
}

console.log("================================");
console.log("       TỔNG KẾT CA LÀM VIỆC");
console.log("================================");
console.log("Tổng doanh thu thực thu:", totalShiftRevenue, "VNĐ");