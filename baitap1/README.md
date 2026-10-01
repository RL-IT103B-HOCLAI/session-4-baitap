1. Phân tích lỗi

Có 2 lỗi chính trong mã nguồn:

Lỗi 1: Điều kiện vòng lặp for

Code cũ:

for (let cupIndex = 1; cupIndex < orderQuantity; cupIndex++)

Với:

orderQuantity = 3

thì cupIndex lần lượt là:

1
2

Vòng lặp chỉ chạy 2 lần, nên chỉ tính tiền 2 ly thay vì 3 ly.

Cách sửa

Đổi:

cupIndex < orderQuantity

thành:

cupIndex <= orderQuantity

Khi đó:

cupIndex = 1
cupIndex = 2
cupIndex = 3

→ tính đủ 3 ly.

Lỗi 2: Chiết khấu được tính bên trong vòng lặp

Code cũ:

totalBill += singleCupPrice;

if (isGoldMember) {
    totalBill = totalBill * 0.9;
}

Vấn đề là sau mỗi ly, tổng tiền lại bị nhân 0.9.

Ví dụ 3 ly:

Sau ly 1: tổng × 0.9
Sau ly 2: tổng × 0.9
Sau ly 3: tổng × 0.9

Như vậy mức giảm giá bị áp dụng lặp lại nhiều lần.

Trong nghiệp vụ này, cần:

Tính tổng tiền của tất cả các ly.
Sau khi vòng lặp kết thúc mới áp dụng giảm giá Gold một lần.
2. Test Cases
Trường hợp kiểm thử	Dữ liệu đầu vào	Kết quả sai thực tế	Kết quả đúng mong đợi
TC01 - Thành viên Gold, mua 3 ly	orderQuantity = 3, isGoldMember = true, singleCupPrice = 51.000 VNĐ	Chỉ tính 2 ly và giảm giá sau từng vòng → 45.900 VNĐ	Tính đủ 3 ly: 153.000, giảm 10% một lần → 137.700 VNĐ
TC02 - Không phải thành viên Gold, mua 3 ly	orderQuantity = 3, isGoldMember = false, singleCupPrice = 51.000 VNĐ	Chỉ tính 2 ly → 102.000 VNĐ	Tính đủ 3 ly → 153.000 VNĐ
Kiểm tra giá 1 ly
Phin Sữa Đá       : 29.000
Size M            : 6.000
2 topping         : 2 × 8.000 = 16.000
--------------------------------
1 ly              : 51.000 VNĐ

Với 3 ly:

51.000 × 3 = 153.000 VNĐ

Thành viên Gold giảm 10%:

153.000 × 10% = 15.300
153.000 - 15.300 = 137.700 VNĐ