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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.5 15h-8C10.57 15 9 16.57 9 18.5s1.57 3.5 3.5 3.5h8c1.93 0 3.5-1.57 3.5-3.5S22.43 15 20.5 15ZM11 18.5c0-.827.673-1.5 1.5-1.5H14v3h-1.5c-.827 0-1.5-.673-1.5-1.5Zm9.5 1.5H16v-3h4.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5Zm-8-11h8C22.43 9 24 7.43 24 5.5S22.43 2 20.5 2h-8C10.57 2 9 3.57 9 5.5S10.57 9 12.5 9ZM22 5.5c0 .827-.673 1.5-1.5 1.5H19V4h1.5c.827 0 1.5.673 1.5 1.5ZM12.5 4H17v3h-4.5c-.827 0-1.5-.673-1.5-1.5S11.673 4 12.5 4ZM4 6c1.654 0 3-1.346 3-3S5.654 0 4 0 1 1.346 1 3s1.346 3 3 3Zm3.937 3.649a1 1 0 1 1-1.873.701c-.303-.808-1.132-1.351-2.063-1.351s-1.761.543-2.063 1.351a1 1 0 1 1-1.873-.701C.659 8.064 2.241 7 4.002 7s3.343 1.064 3.937 2.649ZM7 16c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3Zm.937 6.649a1 1 0 1 1-1.873.701c-.303-.808-1.132-1.351-2.063-1.351s-1.761.543-2.063 1.351a1 1 0 1 1-1.873-.701C.659 21.064 2.241 20 4.002 20s3.343 1.064 3.937 2.649Z"/></svg>
  