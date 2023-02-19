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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-bookmark-slash {customClass}"><path d="M23.707 22.293 21 19.586V6c0-2.757-2.243-5-5-5H8c-1.485 0-2.876.66-3.816 1.77L1.707.293A1 1 0 1 0 .292 1.707l22 22a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414ZM8 3h8c1.654 0 3 1.346 3 3v11.586L5.606 4.192A3.005 3.005 0 0 1 8 3Zm4.239 14.173-4.512 4.954a2.74 2.74 0 0 1-1.995.872c-.339 0-.681-.064-1.011-.195a2.716 2.716 0 0 1-1.722-2.537V9a1 1 0 0 1 2 0v11.267c0 .447.322.623.46.679a.706.706 0 0 0 .801-.178l4.5-4.94a1 1 0 1 1 1.479 1.346Z"/></svg>
  