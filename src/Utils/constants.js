export const FilterList = [
  "All",
  "News",
  "Gaming",
  "Chess",
  "Stock Market",
  "History",
  "Sports",
  "Cricket",
  "Esports",
  "Food",
  "Restaurants",
  "Algorithms",
];

export const API_KEY = "AIzaSyD9FML2HWQToS7bcPp1q-2ba-b4ahj8fTE";

export function timeAgo(date) {
  const now = new Date();
  const publishedDate = new Date(date);
  const diff = now - publishedDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30); // Approximate value
  const years = Math.floor(days / 365); // Approximate value

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (weeks > 0) {
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
}

export function formatViews(viewCount) {
  const views = parseInt(viewCount, 10);

  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + "M";
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + "k";
  } else {
    return views.toString();
  }
}

export function truncateTitle(title, maxLength) {
  if (title.length > maxLength) {
    return title.substring(0, maxLength - 3) + "...";
  }
  return title;
}
