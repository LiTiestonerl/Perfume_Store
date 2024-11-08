// HandleGoogleSignIn.js

import axios from "axios";

// Hàm để gọi `google-response` và lấy dữ liệu từ Google
const fetchGoogleResponse = async () => {
  try {
    const response = await axios.get(
      "https://www.perfumestorev2.somee.com/api/Auth/signin-google"
    );
    if (response.status === 200) {
      const googleData = response.data;
      console.log("Google Response Data:", googleData);
      return googleData;
    } else {
      console.log(
        "Lỗi khi lấy Google response, mã trạng thái:",
        response.status
      );
    }
  } catch (error) {
    console.error("Lỗi khi lấy Google response:", error.message);
    if (error.response) {
      console.log("Chi tiết lỗi từ server:", error.response.data);
    }
  }
  return null;
};

// Hàm xử lý đăng nhập với dữ liệu từ `google-response`
const signinGoogle = async (googleData) => {
  try {
    const response = await axios.post(
      "https://www.perfumestorev2.somee.com/api/Auth/google-response",
      googleData
    );

    // Xử lý phản hồi từ server
    if (response.status === 200) {
      console.log("Đăng nhập thành công!", response.data);

      // Lưu token vào localStorage hoặc sessionStorage nếu có
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
    } else {
      console.log("Đăng nhập thất bại.");
    }
  } catch (error) {
    console.error("Lỗi trong quá trình đăng nhập:", error);
  }
};

// Hàm chính để thực hiện quy trình đăng nhập
export const handleGoogleSignIn = async () => {
  const googleData = await fetchGoogleResponse();
  if (googleData) {
    await signinGoogle(googleData);
  }
};
