function Logo({
  height,
  width,
  color,
}: {
  height: number;
  width: number;
  color: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 213 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 46.8569C2.5 41.9522 3.59524 37.5712 5.78571 33.7141C8.02381 29.8093 11.0476 26.7855 14.8571 24.6427C18.7143 22.4522 23.0238 21.3569 27.7857 21.3569C33.3571 21.3569 38.2381 22.7855 42.4286 25.6427C46.619 28.4998 49.5476 32.4522 51.2143 37.4998H39.7143C38.5714 35.1188 36.9524 33.3331 34.8571 32.1426C32.8095 30.9522 30.4286 30.3569 27.7143 30.3569C24.8095 30.3569 22.2143 31.0474 19.9286 32.4284C17.6905 33.7617 15.9286 35.6665 14.6429 38.1426C13.4048 40.6188 12.7857 43.5236 12.7857 46.8569C12.7857 50.1426 13.4048 53.0474 14.6429 55.5712C15.9286 58.0474 17.6905 59.976 19.9286 61.3569C22.2143 62.6903 24.8095 63.3569 27.7143 63.3569C30.4286 63.3569 32.8095 62.7617 34.8571 61.5712C36.9524 60.3331 38.5714 58.5236 39.7143 56.1426H51.2143C49.5476 61.2379 46.619 65.2141 42.4286 68.0712C38.2857 70.8807 33.4048 72.2855 27.7857 72.2855C23.0238 72.2855 18.7143 71.2141 14.8571 69.0712C11.0476 66.8807 8.02381 63.8569 5.78571 59.9998C3.59524 56.1426 2.5 51.7617 2.5 46.8569ZM96.5413 51.2141C96.5413 52.6426 96.4461 53.9284 96.2556 55.0712H67.327C67.5651 57.9284 68.5651 60.1665 70.327 61.7855C72.0889 63.4046 74.2556 64.2141 76.827 64.2141C80.5413 64.2141 83.1841 62.6188 84.7556 59.4284H95.5413C94.3984 63.2379 92.208 66.3807 88.9699 68.8569C85.7318 71.2855 81.7556 72.4998 77.0413 72.4998C73.2318 72.4998 69.8032 71.6665 66.7556 69.9998C63.7556 68.2855 61.3984 65.8807 59.6841 62.7855C58.0175 59.6903 57.1841 56.1188 57.1841 52.0712C57.1841 47.976 58.0175 44.3807 59.6841 41.2855C61.3508 38.1903 63.6841 35.8093 66.6841 34.1427C69.6841 32.476 73.1365 31.6426 77.0413 31.6426C80.8032 31.6426 84.1603 32.4522 87.1127 34.0712C90.1127 35.6903 92.4222 37.9998 94.0413 40.9998C95.708 43.9522 96.5413 47.3569 96.5413 51.2141ZM86.1841 48.3569C86.1365 45.7855 85.208 43.7379 83.3984 42.2141C81.5889 40.6426 79.3746 39.8569 76.7556 39.8569C74.2794 39.8569 72.1841 40.6188 70.4699 42.1426C68.8032 43.6188 67.7794 45.6903 67.3984 48.3569H86.1841ZM113.84 38.4284C115.126 36.3331 116.793 34.6903 118.84 33.4998C120.936 32.3093 123.317 31.7141 125.983 31.7141V42.2141H123.34C120.198 42.2141 117.817 42.9522 116.198 44.4284C114.626 45.9046 113.84 48.476 113.84 52.1426V71.8569H103.84V32.2855H113.84V38.4284ZM169.504 51.2141C169.504 52.6426 169.409 53.9284 169.219 55.0712H140.29C140.528 57.9284 141.528 60.1665 143.29 61.7855C145.052 63.4046 147.219 64.2141 149.79 64.2141C153.504 64.2141 156.147 62.6188 157.719 59.4284H168.504C167.362 63.2379 165.171 66.3807 161.933 68.8569C158.695 71.2855 154.719 72.4998 150.004 72.4998C146.195 72.4998 142.766 71.6665 139.719 69.9998C136.719 68.2855 134.362 65.8807 132.647 62.7855C130.981 59.6903 130.147 56.1188 130.147 52.0712C130.147 47.976 130.981 44.3807 132.647 41.2855C134.314 38.1903 136.647 35.8093 139.647 34.1427C142.647 32.476 146.1 31.6426 150.004 31.6426C153.766 31.6426 157.124 32.4522 160.076 34.0712C163.076 35.6903 165.385 37.9998 167.004 40.9998C168.671 43.9522 169.504 47.3569 169.504 51.2141ZM159.147 48.3569C159.1 45.7855 158.171 43.7379 156.362 42.2141C154.552 40.6426 152.338 39.8569 149.719 39.8569C147.243 39.8569 145.147 40.6188 143.433 42.1426C141.766 43.6188 140.743 45.6903 140.362 48.3569H159.147ZM191.946 72.4998C188.708 72.4998 185.804 71.9284 183.232 70.7855C180.661 69.595 178.613 67.9998 177.089 65.9998C175.613 63.9998 174.804 61.7855 174.661 59.3569H184.732C184.923 60.8807 185.661 62.1426 186.946 63.1426C188.28 64.1426 189.923 64.6426 191.875 64.6426C193.78 64.6426 195.256 64.2617 196.304 63.4998C197.399 62.7379 197.946 61.7617 197.946 60.5712C197.946 59.2855 197.28 58.3331 195.946 57.7141C194.661 57.0474 192.589 56.3331 189.732 55.5712C186.78 54.8569 184.351 54.1188 182.446 53.3569C180.589 52.595 178.97 51.4284 177.589 49.8569C176.256 48.2855 175.589 46.1665 175.589 43.4998C175.589 41.3093 176.208 39.3093 177.446 37.4998C178.732 35.6903 180.542 34.2617 182.875 33.2141C185.256 32.1665 188.042 31.6426 191.232 31.6426C195.946 31.6426 199.708 32.8331 202.518 35.2141C205.327 37.5474 206.875 40.7141 207.161 44.7141H197.589C197.446 43.1426 196.78 41.9046 195.589 40.9998C194.446 40.0474 192.899 39.5712 190.946 39.5712C189.137 39.5712 187.732 39.9046 186.732 40.5712C185.78 41.2379 185.304 42.1665 185.304 43.3569C185.304 44.6903 185.97 45.7141 187.304 46.4284C188.637 47.095 190.708 47.7855 193.518 48.4998C196.375 49.2141 198.732 49.9522 200.589 50.7141C202.446 51.476 204.042 52.6665 205.375 54.2855C206.756 55.8569 207.47 57.9522 207.518 60.5712C207.518 62.8569 206.875 64.9046 205.589 66.7141C204.351 68.5236 202.542 69.9522 200.161 70.9998C197.827 71.9998 195.089 72.4998 191.946 72.4998Z"
        fill={color}
      />
      <path
        d="M55.052 13.9287C53.1375 20.4803 53.4705 26.097 53.9139 28.3305C53.9421 28.4727 54.0668 28.5714 54.2118 28.5714H60.3315C63.7476 28.5714 67.7019 27.8197 69.9588 26.8395C72.2158 25.8593 75.2087 23.848 77.7228 20.699C79.8346 18.0539 80.8801 11.567 81.1389 8.89038L82.1039 0.345407C82.1247 0.161258 81.9816 0.00406055 81.798 0.0292935C80.3754 0.22481 76.6304 1.33285 73.6855 1.33285C70.4557 1.33285 67.4743 2.17258 66.3874 2.59244C63.4371 3.53713 57.0396 7.12696 55.052 13.9287Z"
        fill={color}
      />
    </svg>
  );
}
export default Logo;
