Khắc phục Lỗi Bỏ sót Phần tử khi Sử dụng continue trong Vòng lặp
1. Phân tích lỗi

Mã nguồn ban đầu sử dụng:

if (currentDrinkSize === "X") {
    break;
}

Trong nghiệp vụ của bài toán, ký tự "X" biểu thị một ly đồ uống bị hủy tại chỗ. Khi gặp "X", chương trình chỉ cần bỏ qua ly đó và tiếp tục kiểm tra các ly phía sau.

Tuy nhiên, break làm vòng lặp for kết thúc hoàn toàn.

Với chuỗi:

MLXSM

chương trình xử lý:

M → tính tiền
L → tính tiền
X → break

Do đó hai ly "S" và "M" phía sau không được tính tiền.

Cách khắc phục

Thay break bằng continue:

if (currentDrinkSize === "X") {
    continue;
}

continue chỉ bỏ qua lần lặp hiện tại, sau đó vòng lặp tiếp tục xử lý phần tử tiếp theo.

Khi đó chuỗi được xử lý:

M → tính
L → tính
X → bỏ qua
S → tính
M → tính
2. Bảng Test Cases
Trường hợp kiểm thử	Dữ liệu đầu vào	Kết quả sai thực tế	Kết quả đúng mong đợi
TC01 - Có mã hủy ở giữa chuỗi	orderSizes = "MLXSM", toppingCount = 2, isGoldMember = true	break tại "X", chỉ tính M + L → (41.000 + 45.000 + 16.000) × 0.9 = 91.800 VNĐ	Bỏ qua "X", tính M + L + S + M → (41.000 + 45.000 + 35.000 + 41.000 + 16.000) × 0.9 = 160.200 VNĐ
TC02 - Không có mã hủy	orderSizes = "MLSM", toppingCount = 2, isGoldMember = true	Không có X, chương trình tính đủ các ly → 162.000 + 16.000, giảm 10% → 160.200 VNĐ	Tính đủ M + L + S + M → 160.200 VNĐ
3. Kết luận

Lỗi chính nằm ở việc sử dụng break khi gặp mã "X".

break: dừng toàn bộ vòng lặp.
continue: bỏ qua phần tử hiện tại và tiếp tục vòng lặp.

Vì mã "X" chỉ đại diện cho một ly bị hủy nên phải sử dụng continue.

Giá trị đúng của Test Case 01 là:

160.200 VNĐ