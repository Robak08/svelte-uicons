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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 7v1a1 1 0 1 1-2 0V7c0-1.654-1.346-3-3-3H5C3.346 4 2 5.346 2 7v10c0 1.654 1.346 3 3 3h3a1 1 0 1 1 0 2H5c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5Zm-9 2h4a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2Zm8.121 2.879c.566.566.879 1.32.879 2.121s-.313 1.555-.879 2.122l-6.707 6.707a3.975 3.975 0 0 1-2.828 1.172H12a1 1 0 0 1-1-1v-1.586c0-1.068.416-2.073 1.172-2.828l6.707-6.707a3.002 3.002 0 0 1 4.242 0ZM22 14a1 1 0 0 0-1.707-.707L13.586 20A2.017 2.017 0 0 0 13 21.414V22h.586c.534 0 1.036-.208 1.414-.586l6.707-6.707A.993.993 0 0 0 22 14ZM7 17h2c1.654 0 3-1.346 3-3a1 1 0 1 0-2 0 1 1 0 0 1-1 1H7c-.552 0-1-.449-1-1v-1h2a1 1 0 1 0 0-2H6v-1c0-.551.448-1 1-1h2c.552 0 1 .449 1 1a1 1 0 0 0 2 0c0-1.654-1.346-3-3-3H7c-1.654 0-3 1.346-3 3v1a1 1 0 1 0 0 2v1c0 1.654 1.346 3 3 3Zm7-5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/></svg>
  