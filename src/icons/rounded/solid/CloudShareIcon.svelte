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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 22H5.683a5.844 5.844 0 0 1-5.626-4.7 5.446 5.446 0 0 1 2.885-5.651 7.652 7.652 0 0 1-.8-5.18 8 8 0 0 1 15.49-.841 1.085 1.085 0 0 0 .721.732 8.024 8.024 0 0 1 2.98 1.674C21.223 8.026 21.115 8 21 8a5.009 5.009 0 0 0-4.92 4.105l-.847.424A4.953 4.953 0 0 0 13 12a5 5 0 0 0 0 10zm8-6a3 3 0 1 0-3-3 2.9 2.9 0 0 0 .037.363l-2.96 1.481a3 3 0 1 0 0 4.312l2.96 1.481A2.9 2.9 0 0 0 18 21a3.015 3.015 0 1 0 .923-2.156l-2.96-1.481A2.9 2.9 0 0 0 16 17a2.9 2.9 0 0 0-.037-.363l2.96-1.481A2.986 2.986 0 0 0 21 16z"/></svg>
  