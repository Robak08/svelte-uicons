<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 17a1 1 0 0 0-1 1v1.001A1 1 0 0 1 20.002 19l.012-10.993a5.966 5.966 0 0 0-1.755-4.247A5.959 5.959 0 0 0 14.014 2H6C2.691 2 0 4.691 0 8v11.003A3.003 3.003 0 0 0 6.007 19h4.02a2.974 2.974 0 0 0 .873 2.121A3.001 3.001 0 0 0 16.021 19h1.98a2.977 2.977 0 0 0 .879 2.12 2.98 2.98 0 0 0 2.122.88 3.003 3.003 0 0 0 2.999-2.999V18a1 1 0 0 0-1-1ZM6 4h8.014c1.069 0 2.074.417 2.83 1.173a3.976 3.976 0 0 1 1.17 2.832L18.01 12H2V8c0-2.206 1.794-4 4-4Zm10.02 13c-1.103 0-2 .897-2 2.003a1 1 0 0 1-1.704.706.986.986 0 0 1-.289-.703c.001-.536-.206-1.039-.584-1.418S10.562 17 10.027 17H6.006a2.007 2.007 0 0 0-2 2.007 1 1 0 0 1-1.01.993.998.998 0 0 1-.997-.997V14h16.009l-.003 3H16.02ZM9 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM5 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm8 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/></svg>
  