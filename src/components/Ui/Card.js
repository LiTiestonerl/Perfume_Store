import React from "react";

const Card = ({ title, className, link, onClick }) => (
  <div
    className={`card ${className} text-white mb-4`}
    onClick={onClick} // Thêm onClick để xử lý sự kiện nhấp vào
    style={{ cursor: "pointer" }} // Thêm con trỏ để hiển thị card có thể nhấp
  >
    <div className="card-body">{title}</div>
    <div className="card-footer d-flex align-items-center justify-content-between">
      <a
        className="small text-white stretched-link"
        href={link}
        aria-label={`View details about ${title}`}
        onClick={(e) => e.preventDefault()} // Ngăn chặn hành động mặc định khi nhấp vào link
      >
        View Details
      </a>
      <div className="small text-white">
        <i className="fas fa-angle-right"></i>
      </div>
    </div>
  </div>
);

export default Card;
