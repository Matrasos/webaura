import { Link } from "react-router-dom";

const HeaderBlog = () => {
  return (
    <div className="header">
      <svg width="251" height="26" viewBox="0 0 251 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.7363 26L20.8301 8.61523L14.9062 26H9.08789L0.509766 0.792969H6.01172L11.9883 18.2129L17.9824 0.792969H23.6602L29.6367 18.2129L35.6309 0.792969H41.1328L32.5547 26H26.7363ZM49.3242 10.9707H68.2383L71.3848 13.2734L68.2383 15.5762H49.3242V21.3945H72.1055V26H43.5234V15.2246L40.8516 13.2734L43.5234 11.3223V0.792969H72.1055V5.39844H49.3242V10.9707ZM95.959 26H75.1641V0.792969H95.959C102.287 0.792969 105.41 3.21289 105.328 8.05273C105.293 10.3145 104.32 12.0664 102.41 13.3086C104.391 14.5039 105.363 16.2266 105.328 18.4766C105.246 23.4922 102.123 26 95.959 26ZM95.3965 5.39844H80.9648V11.0938H95.3965C98.1387 11.0938 99.5098 10.0801 99.5098 8.05273C99.5098 6.2832 98.1387 5.39844 95.3965 5.39844ZM95.3965 15.6992H80.9648V21.3945H95.3965C98.1387 21.3945 99.5098 20.3809 99.5098 18.3535C99.5098 16.584 98.1387 15.6992 95.3965 15.6992ZM131.186 0.792969H137.725L151.295 26H145.283L143.438 22.6074H125.473L123.627 26H117.615L131.186 0.792969ZM127.846 18.248H141.064L134.455 6.10156L127.846 18.248ZM163.951 21.3945H167.537C172.576 21.3945 175.096 19.2383 175.096 14.9258V0.792969H180.914V14.9258C180.832 22.3086 176.631 26 168.311 26H163.178C154.857 26 150.656 22.3086 150.574 14.9258V0.792969H156.393V14.9258C156.393 19.2383 158.912 21.3945 163.951 21.3945ZM208.705 26L203.291 17.0352H190.758V26H184.922V0.792969H205.717C212.045 0.792969 215.168 3.45312 215.086 8.77344C215.027 13.0039 213.17 15.6113 209.514 16.5957L215.209 26H208.705ZM190.758 12.4297H205.154C207.896 12.4297 209.268 11.2109 209.268 8.77344C209.268 6.52344 207.896 5.39844 205.154 5.39844H190.758V12.4297ZM230.467 0.792969H237.006L250.576 26H244.564L242.719 22.6074H224.754L222.908 26H216.896L230.467 0.792969ZM227.127 18.248H240.346L233.736 6.10156L227.127 18.248Z" fill="#0149F2" />
      </svg>
      <div className="header__nav">
        <Link to=''>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.0744 11.3722C16.0713 9.27923 19.3596 9.65111 21.0317 12.007L23.1025 14.9198C24.4644 16.8363 24.343 19.5139 22.7267 21.2072L22.3362 21.6189C22.2921 21.7917 22.2876 21.9731 22.3231 22.1482C22.4265 22.8539 22.986 24.3484 25.3292 26.8045C27.6724 29.2607 29.0999 29.8488 29.7793 29.9595C29.9503 29.9978 30.1275 29.9925 30.2961 29.9439L30.9656 29.2417C32.403 27.7368 34.6084 27.4549 36.3871 28.4737L39.5212 30.2726C42.2073 31.8085 42.885 35.6554 40.6862 37.9611L38.3545 40.4034C37.6194 41.1731 36.6316 41.8148 35.4272 41.9342C32.4572 42.2265 25.5376 41.8529 18.2635 34.2301C11.4752 27.1141 10.1723 20.908 10.0066 17.8499C9.92456 16.3035 10.617 14.9959 11.4998 14.0722L14.0744 11.3722ZM19.0626 13.562C18.2307 12.391 16.6817 12.2976 15.8088 13.2126L13.2326 15.9109C12.6911 16.4782 12.4318 17.1044 12.4647 17.7029C12.5959 20.1331 13.6461 25.7321 19.9996 32.3914C26.6649 39.376 32.8198 39.5853 35.1991 39.35C35.6848 39.3033 36.1672 39.0369 36.6185 38.5647L38.9485 36.1207C39.8969 35.1278 39.6886 33.3186 38.3463 32.5506L35.2122 30.7534C34.3458 30.2587 33.3318 30.4213 32.7017 31.0821L31.9551 31.8656L31.0854 30.9454C31.9551 31.8656 31.9534 31.8673 31.9518 31.8673L31.9501 31.8708L31.9452 31.876L31.9337 31.8864L31.9091 31.9106C31.8394 31.9777 31.7647 32.039 31.686 32.0939C31.5547 32.1856 31.3808 32.2877 31.1625 32.3724C30.7195 32.5471 30.132 32.6405 29.4068 32.5229C27.9841 32.2929 26.0988 31.2706 23.5931 28.6449C21.0891 26.0192 20.1112 24.0439 19.8913 22.546C19.7781 21.7815 19.8683 21.1623 20.0357 20.6952C20.1285 20.4328 20.2603 20.1876 20.4262 19.9688L20.4787 19.9082L20.5017 19.8823L20.5115 19.8719L20.5165 19.8667L20.5198 19.8632L20.9923 19.3686C21.6946 18.63 21.7931 17.4071 21.1318 16.4748L19.0626 13.562Z" fill="#030303" />
          </svg>
        </Link>
        <Link to=''>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.25 12H36C37.3924 12 38.7277 12.5531 39.7123 13.5377C40.6969 14.5223 41.25 15.8576 41.25 17.25V33C41.25 34.3924 40.6969 35.7277 39.7123 36.7123C38.7277 37.6969 37.3924 38.25 36 38.25H13.25C11.8576 38.25 10.5223 37.6969 9.53769 36.7123C8.55312 35.7277 8 34.3924 8 33V17.25C8 15.8576 8.55312 14.5223 9.53769 13.5377C10.5223 12.5531 11.8576 12 13.25 12ZM13.25 13.75C12.375 13.75 11.605 14.0475 11.01 14.5725L24.625 23.375L38.24 14.5725C37.645 14.0475 36.875 13.75 36 13.75H13.25ZM24.625 25.4925L9.9775 15.99C9.8375 16.375 9.75 16.8125 9.75 17.25V33C9.75 33.9283 10.1187 34.8185 10.7751 35.4749C11.4315 36.1313 12.3217 36.5 13.25 36.5H36C36.9283 36.5 37.8185 36.1313 38.4749 35.4749C39.1313 34.8185 39.5 33.9283 39.5 33V17.25C39.5 16.8125 39.4125 16.375 39.2725 15.99L24.625 25.4925Z" fill="black" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default HeaderBlog;